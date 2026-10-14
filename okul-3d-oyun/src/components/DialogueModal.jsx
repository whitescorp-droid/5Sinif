import React, { useState, useEffect } from 'react';
import { Volume2, Mic, X, CheckCircle, AlertCircle, Sparkles, Languages } from 'lucide-react';
import confetti from 'canvas-confetti';
import { speakEnglish, startSpeechRecognition } from '../utils/speechUtils';

export default function DialogueModal({
  npc,
  onClose,
  onCompleteQuest
}) {
  const [showTurkish, setShowTurkish] = useState(false);
  const [currentStep, setCurrentStep] = useState('main'); // 'main' | 'followup' | 'completed'
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [speechFeedback, setSpeechFeedback] = useState('');

  const dialogue = npc.dialogue;

  // Auto-speak English greeting when modal opens
  useEffect(() => {
    if (dialogue?.greeting) {
      speakEnglish(dialogue.greeting);
    }
  }, [npc]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    if (option.correct) {
      setFeedback({ type: 'success', text: option.feedback });
      speakEnglish(option.text);

      setTimeout(() => {
        if (dialogue.followUp && currentStep === 'main') {
          setCurrentStep('followup');
          setSelectedOption(null);
          setFeedback(null);
          speakEnglish(dialogue.followUp.speakerText);
        } else {
          // Finish Quest!
          triggerSuccess();
        }
      }, 1500);
    } else {
      setFeedback({ type: 'error', text: option.feedback });
      speakEnglish(option.text);
    }
  };

  const triggerSuccess = () => {
    setCurrentStep('completed');
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    if (onCompleteQuest) {
      onCompleteQuest(npc.questId, dialogue.starsReward || 25);
    }
  };

  const handleMicSpeak = () => {
    setIsListening(true);
    setSpeechFeedback('Seni dinliyorum, İngilizce konuş...');

    startSpeechRecognition(
      (transcript) => {
        setIsListening(false);
        setSpeechFeedback(`Söylediğin: "${transcript}"`);

        // Check if spoken words match any correct option
        const targetOptions = currentStep === 'main' ? dialogue.options : dialogue.followUp.options;
        const correctOpt = targetOptions.find(o => o.correct);

        if (correctOpt) {
          // Normalize and check similarity
          const cleanTranscript = transcript.toLowerCase().trim();
          const cleanTarget = correctOpt.text.toLowerCase().trim();

          if (cleanTranscript.includes(cleanTarget.split(' ')[0]) || cleanTranscript.length > 3) {
            handleOptionSelect(correctOpt);
          } else {
            setFeedback({ type: 'error', text: `Tekrar dene: "${correctOpt.text}" demelisin.` });
          }
        }
      },
      (error) => {
        setIsListening(false);
        setSpeechFeedback('Ses algılanamadı, lütfen seçeneklerden tıkla.');
      }
    );
  };

  const currentOptions = currentStep === 'main' ? dialogue.options : (dialogue.followUp?.options || []);
  const currentSpeakerText = currentStep === 'main' ? `${dialogue.greeting} ${dialogue.question}` : dialogue.followUp?.speakerText;
  const currentTurkishText = currentStep === 'main' ? `${dialogue.turkishGreeting} ${dialogue.turkishQuestion}` : dialogue.followUp?.turkishText;

  return (
    <div className="modal-backdrop">
      <div className="dialogue-card">
        {/* Header */}
        <div className="dialogue-header" style={{ borderColor: npc.color || '#3b82f6' }}>
          <div className="flex items-center gap-3">
            <span className="text-3xl">{npc.avatarEmoji}</span>
            <div>
              <h3 className="text-lg font-bold text-white">{npc.name}</h3>
              <span className="text-xs text-blue-300 font-medium">{npc.zoneName}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              className={`lang-toggle-btn ${showTurkish ? 'active' : ''}`}
              onClick={() => setShowTurkish(!showTurkish)}
              title="Türkçe Çeviri"
            >
              <Languages className="w-4 h-4" />
              <span className="text-xs font-semibold">TR</span>
            </button>
            <button className="close-btn" onClick={onClose}>
              <X className="w-5 h-5 text-gray-300" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="dialogue-body">
          {currentStep !== 'completed' ? (
            <>
              {/* NPC Speech Bubble */}
              <div className="npc-bubble">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-white text-base md:text-lg font-medium leading-relaxed">
                    "{currentSpeakerText}"
                  </p>
                  <button
                    className="audio-play-btn"
                    onClick={() => speakEnglish(currentSpeakerText)}
                    title="Sesli Dinle"
                  >
                    <Volume2 className="w-5 h-5 text-blue-300" />
                  </button>
                </div>

                {showTurkish && (
                  <p className="text-sm text-yellow-200 mt-2 italic border-t border-white/10 pt-2">
                    {currentTurkishText}
                  </p>
                )}
              </div>

              {/* Speech Recognition Feedback */}
              {speechFeedback && (
                <div className="speech-badge">
                  <span>🎙️ {speechFeedback}</span>
                </div>
              )}

              {/* Feedback Alert */}
              {feedback && (
                <div className={`feedback-alert ${feedback.type}`}>
                  {feedback.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0" />
                  )}
                  <span>{feedback.text}</span>
                </div>
              )}

              {/* Multiple Choice Options */}
              <div className="options-container">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase font-bold text-blue-200 tracking-wider">
                    Senin Cevabın (Your Response):
                  </span>
                  <button
                    className={`mic-btn ${isListening ? 'listening' : ''}`}
                    onClick={handleMicSpeak}
                    title="Mikrofonla İngilizce Cevap Ver"
                  >
                    <Mic className="w-4 h-4" />
                    <span className="text-xs font-bold">{isListening ? 'Dinliyor...' : 'Sesle Cevap Ver'}</span>
                  </button>
                </div>

                <div className="grid gap-2">
                  {currentOptions.map((opt, idx) => (
                    <button
                      key={idx}
                      className={`option-btn ${selectedOption === opt ? (opt.correct ? 'correct' : 'wrong') : ''}`}
                      onClick={() => handleOptionSelect(opt)}
                    >
                      <span className="opt-letter">{String.fromCharCode(65 + idx)}</span>
                      <span className="text-left font-medium text-white flex-1">{opt.text}</span>
                      <Volume2
                        className="w-4 h-4 text-gray-400 hover:text-white shrink-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          speakEnglish(opt.text);
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            /* Quest Completed Congratulations Screen */
            <div className="quest-success-screen">
              <div className="w-16 h-16 rounded-full bg-yellow-400/20 border-2 border-yellow-400 flex items-center justify-center mx-auto mb-4 animate-bounce">
                <Sparkles className="w-8 h-8 text-yellow-300" />
              </div>
              <h4 className="text-2xl font-black text-white mb-2">GÖREV TAMAMLANDI!</h4>
              <p className="text-blue-200 mb-4">{dialogue.completedMessage}</p>
              <div className="reward-badge mb-6">
                <span>⭐ +{dialogue.starsReward} Yıldız Kazandın!</span>
              </div>
              <button className="confirm-btn" onClick={onClose}>
                Maceraya Devam Et ➔
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
