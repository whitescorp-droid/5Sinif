import React, { useRef, useState, useEffect } from 'react';
import { Sparkles, Backpack, Compass, MessageCircle, Volume2, Bot, Award, CheckCircle } from 'lucide-react';

export default function HUD({
  stars,
  currentZone,
  activeQuest,
  interactionPrompt,
  onOpenInventory,
  onOpenQuests,
  onOpenAICoach,
  onTriggerInteraction,
  onMobileMove,
  inventoryCount = 0
}) {
  const joystickRef = useRef(null);
  const [touchActive, setTouchActive] = useState(false);
  const [touchPos, setTouchPos] = useState({ x: 0, y: 0 });

  // Touch joystick handling for mobile
  const handleTouchStart = (e) => {
    setTouchActive(true);
    handleTouchMove(e);
  };

  const handleTouchMove = (e) => {
    if (!joystickRef.current) return;
    const touch = e.touches[0];
    const rect = joystickRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = touch.clientX - centerX;
    const dy = touch.clientY - centerY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxRadius = rect.width / 2;

    const clampedDist = Math.min(dist, maxRadius);
    const angle = Math.atan2(dy, dx);

    const normalX = (clampedDist / maxRadius) * Math.cos(angle);
    const normalY = (clampedDist / maxRadius) * Math.sin(angle);

    setTouchPos({
      x: normalX * (maxRadius - 15),
      y: normalY * (maxRadius - 15)
    });

    onMobileMove(normalX, normalY);
  };

  const handleTouchEnd = () => {
    setTouchActive(false);
    setTouchPos({ x: 0, y: 0 });
    onMobileMove(0, 0);
  };

  return (
    <div className="hud-overlay pointer-events-none">
      {/* Top Header Bar */}
      <div className="hud-top-bar pointer-events-auto">
        <div className="hud-zone-pill">
          <Compass className="w-5 h-5 text-blue-400 animate-spin-slow" />
          <span className="font-bold text-white tracking-wide">{currentZone}</span>
        </div>

        {/* Quest Tracker Pill */}
        {activeQuest && (
          <div className="hud-quest-pill" onClick={onOpenQuests}>
            <div className="quest-dot shrink-0" />
            <div className="flex items-center gap-1.5 truncate max-w-xs md:max-w-md">
              <span className="text-[10px] uppercase tracking-wider bg-blue-400/25 text-blue-200 px-1.5 py-0.5 rounded font-black">
                GÖREV
              </span>
              <span className="text-sm font-bold text-white truncate">{activeQuest.title}</span>
            </div>
          </div>
        )}

        {/* Right Action Icons */}
        <div className="flex items-center gap-3">
          {/* Stars Counter */}
          <div className="hud-stars-pill">
            <Sparkles className="w-5 h-5 text-yellow-300 fill-yellow-400" />
            <span className="font-extrabold text-white text-lg">{stars}</span>
          </div>

          {/* Backpack Button */}
          <button
            className="hud-action-btn relative"
            title="School Bag (Çanta)"
            onClick={onOpenInventory}
          >
            <Backpack className="w-5 h-5 text-white" />
            {inventoryCount > 0 && (
              <span className="hud-badge">{inventoryCount}</span>
            )}
          </button>

          {/* AI Coach Button (Gemini Playground) */}
          <button
            className="hud-action-btn ai-btn"
            title="AI English Coach (Gemini)"
            onClick={onOpenAICoach}
          >
            <Bot className="w-5 h-5 text-emerald-300" />
            <span className="hidden sm:inline text-xs font-bold text-white ml-1">AI Coach</span>
          </button>
        </div>
      </div>

      {/* Proximity Interaction Prompt (Floating at bottom center) */}
      {interactionPrompt && (
        <div className="interaction-prompt pointer-events-auto animate-bounce-subtle">
          <button
            className="interaction-btn"
            onClick={onTriggerInteraction}
          >
            <span className="key-badge">E</span>
            <span>{interactionPrompt.text}</span>
          </button>
        </div>
      )}

      {/* Mobile Touch Controls */}
      <div className="mobile-controls pointer-events-auto md:hidden">
        {/* Virtual Joystick */}
        <div
          ref={joystickRef}
          className="joystick-base"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="joystick-thumb"
            style={{
              transform: `translate(${touchPos.x}px, ${touchPos.y}px)`
            }}
          />
        </div>

        {/* Action Button for mobile */}
        {interactionPrompt && (
          <button
            className="mobile-action-btn"
            onClick={onTriggerInteraction}
          >
            <span>{interactionPrompt.type === 'npc' ? '💬' : '⭐'}</span>
            <span className="text-xs font-bold">ETKİLEŞİM</span>
          </button>
        )}
      </div>

      {/* Desktop Keybind Hint at bottom left */}
      <div className="desktop-hints hidden md:block">
        <span>🎮 <b>WASD</b> / Yön tuşları: Hareket | <b>Shift</b>: Hızlı Koş | <b>Space</b>: Zıpla | <b>E</b>: Etkileşim</span>
      </div>
    </div>
  );
}
