import React, { useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import { School3DWorld } from './game/School3DWorld';
import { NPCS_DATA, COLLECTIBLES_DATA, QUESTS_LIST } from './data/schoolQuests';
import HUD from './components/HUD';
import DialogueModal from './components/DialogueModal';
import InventoryModal from './components/InventoryModal';
import QuestsModal from './components/QuestsModal';
import GeminiChatModal from './components/GeminiChatModal';
import { speakEnglish } from './utils/speechUtils';

export default function App() {
  const canvasRef = useRef(null);
  const worldRef = useRef(null);

  // Game States
  const [stars, setStars] = useState(() => {
    return parseInt(localStorage.getItem('GAME_STARS') || '50', 10);
  });
  const [currentZone, setCurrentZone] = useState('Schoolyard (Okul Bahçesi)');
  const [quests, setQuests] = useState(() => {
    const saved = localStorage.getItem('GAME_QUESTS');
    return saved ? JSON.parse(saved) : QUESTS_LIST;
  });
  const [inventory, setInventory] = useState(() => {
    const saved = localStorage.getItem('GAME_INVENTORY');
    return saved ? JSON.parse(saved) : [];
  });

  // Interaction & Modals
  const [interactionPrompt, setInteractionPrompt] = useState(null);
  const [activeNPC, setActiveNPC] = useState(null);
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);
  const [isQuestsOpen, setIsQuestsOpen] = useState(false);
  const [isAICoachOpen, setIsAICoachOpen] = useState(false);
  const [collectNotification, setCollectNotification] = useState(null);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('GAME_STARS', stars.toString());
  }, [stars]);

  useEffect(() => {
    localStorage.setItem('GAME_QUESTS', JSON.stringify(quests));
  }, [quests]);

  useEffect(() => {
    localStorage.setItem('GAME_INVENTORY', JSON.stringify(inventory));
  }, [inventory]);

  // Initialize Three.js Game World
  useEffect(() => {
    if (!canvasRef.current) return;

    const world = new School3DWorld(canvasRef.current, {
      onNearNPC: (npc) => {
        setInteractionPrompt({
          type: 'npc',
          text: `[E] ${npc.name} ile Konuş`,
          data: npc
        });
      },
      onNearCollectible: (item) => {
        setInteractionPrompt({
          type: 'collectible',
          text: `[E] ${item.name} (${item.turkish}) Topla`,
          data: item
        });
      },
      onLeaveInteractive: () => {
        setInteractionPrompt(null);
      },
      onTriggerNPC: (npc) => {
        setActiveNPC(npc);
        setInteractionPrompt(null);
      },
      onCollectItem: (item) => {
        handleCollectItem(item);
      },
      onPlayerMoved: (pos) => {
        // Detect current room based on coordinates
        if (pos.z > 0.8) {
          setCurrentZone('Schoolyard (Okul Bahçesi)');
        } else if (pos.x < -3.5) {
          setCurrentZone('Classroom 5-A (5-A Sınıfı)');
        } else if (pos.x > 3.5 && pos.z > -8.5) {
          setCurrentZone('Canteen (Kantin)');
        } else if (pos.x > 3.5 && pos.z <= -8.5) {
          setCurrentZone('Library (Kütüphane)');
        } else {
          setCurrentZone('Corridor (Ana Koridor)');
        }
      }
    });

    worldRef.current = world;

    // Spawn entities
    world.spawnNPCs(NPCS_DATA);

    // Filter out already collected items
    const collectedIds = new Set(inventory.map(i => i.id));
    const activeCollectibles = COLLECTIBLES_DATA.filter(c => !collectedIds.has(c.id));
    world.spawnCollectibles(activeCollectibles);

    return () => {
      world.destroy();
    };
  }, []);

  const handleCollectItem = (item) => {
    // Add to inventory
    if (inventory.some(i => i.id === item.id)) return;

    setInventory(prev => [...prev, item]);
    setStars(prev => prev + 15);

    // Remove from 3D scene
    if (worldRef.current) {
      worldRef.current.removeCollectible(item.id);
    }
    setInteractionPrompt(null);

    // Sound and celebration
    speakEnglish(item.name);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });

    setCollectNotification({
      title: `${item.icon} ${item.name} Toplandı!`,
      subtitle: `${item.turkish} çantana eklendi (+15 ⭐)`
    });

    setTimeout(() => {
      setCollectNotification(null);
    }, 3000);

    // Check if Quest 3 is fulfilled
    const updatedInv = [...inventory, item];
    const reqIds = ['item_backpack', 'item_pencil', 'item_eraser'];
    const hasAll = reqIds.every(id => updatedInv.some(i => i.id === id));
    if (hasAll) {
      handleCompleteQuest('quest_3', 35);
    }
  };

  const handleCompleteQuest = (questId, rewardStars) => {
    setQuests(prev => prev.map(q => {
      if (q.id === questId && !q.completed) {
        return { ...q, completed: true };
      }
      return q;
    }));
    setStars(prev => prev + rewardStars);
  };

  const activeQuest = quests.find(q => !q.completed) || quests[quests.length - 1];

  const handleTriggerInteraction = () => {
    if (worldRef.current) {
      worldRef.current.triggerActiveInteraction();
    }
  };

  const handleMobileMove = (x, y) => {
    if (worldRef.current) {
      worldRef.current.setMobileInput(x, y);
    }
  };

  return (
    <div className="game-wrapper relative w-full h-screen overflow-hidden select-none">
      {/* 3D WebGL Canvas Container */}
      <div ref={canvasRef} className="canvas-container w-full h-full" />

      {/* Collect Item Flash Banner */}
      {collectNotification && (
        <div className="collect-banner animate-slide-down">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⭐</span>
            <div>
              <h4 className="font-extrabold text-white text-base">{collectNotification.title}</h4>
              <p className="text-xs text-yellow-300 font-medium">{collectNotification.subtitle}</p>
            </div>
          </div>
        </div>
      )}

      {/* Modern HUD Game UI */}
      <HUD
        stars={stars}
        currentZone={currentZone}
        activeQuest={activeQuest}
        interactionPrompt={interactionPrompt}
        inventoryCount={inventory.length}
        onOpenInventory={() => setIsInventoryOpen(true)}
        onOpenQuests={() => setIsQuestsOpen(true)}
        onOpenAICoach={() => setIsAICoachOpen(true)}
        onTriggerInteraction={handleTriggerInteraction}
        onMobileMove={handleMobileMove}
      />

      {/* Interactive Dialogue Modal */}
      {activeNPC && (
        <DialogueModal
          npc={activeNPC}
          onClose={() => setActiveNPC(null)}
          onCompleteQuest={handleCompleteQuest}
        />
      )}

      {/* School Bag / Inventory Modal */}
      {isInventoryOpen && (
        <InventoryModal
          inventory={inventory}
          onClose={() => setIsInventoryOpen(false)}
        />
      )}

      {/* Quest Tracker Modal */}
      {isQuestsOpen && (
        <QuestsModal
          quests={quests}
          onClose={() => setIsQuestsOpen(false)}
        />
      )}

      {/* Gemini AI English Coach Modal */}
      {isAICoachOpen && (
        <GeminiChatModal
          onClose={() => setIsAICoachOpen(false)}
        />
      )}
    </div>
  );
}
