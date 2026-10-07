import React, { useState } from 'react';
import { X, RefreshCw, Download, CheckCircle2, AlertCircle, Sparkles, Smartphone, CloudDownload } from 'lucide-react';
import { checkForAppUpdate, syncLiveContent, CURRENT_APP_VERSION } from '../utils/updateService';
import { playSound } from '../utils/soundEffects';
import confetti from 'canvas-confetti';

export const UpdateModal = ({ onClose, soundEnabled }) => {
  const [activeTab, setActiveTab] = useState('apk'); // 'apk' | 'live'
  
  // APK check state
  const [isCheckingApk, setIsCheckingApk] = useState(false);
  const [apkResult, setApkResult] = useState(null);

  // Live sync state
  const [isSyncingLive, setIsSyncingLive] = useState(false);
  const [liveResult, setLiveResult] = useState(null);

  const handleCheckApk = async () => {
    setIsCheckingApk(true);
    playSound('click', soundEnabled);
    const res = await checkForAppUpdate();
    setApkResult(res);
    setIsCheckingApk(false);
    if (res.hasUpdate) {
      playSound('celebrate', soundEnabled);
      confetti({ particleCount: 50, spread: 60 });
    }
  };

  const handleSyncLive = async () => {
    setIsSyncingLive(true);
    playSound('click', soundEnabled);
    const res = await syncLiveContent();
    setLiveResult(res);
    setIsSyncingLive(false);
    if (res.success) {
      playSound('correct', soundEnabled);
    }
  };

  const handleDownloadApk = (url) => {
    playSound('click', soundEnabled);
    window.open(url, '_system');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="profile-modal-box update-modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-row">
            <RefreshCw size={22} className="modal-title-icon" />
            <h3>Güncelleme Merkezi</h3>
          </div>
          <button type="button" className="btn-close-modal" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="update-tab-pills">
          <button
            type="button"
            className={`update-tab-btn ${activeTab === 'apk' ? 'active' : ''}`}
            onClick={() => {
              playSound('click', soundEnabled);
              setActiveTab('apk');
            }}
          >
            <Smartphone size={16} />
            <span>APK Güncellemesi</span>
          </button>

          <button
            type="button"
            className={`update-tab-btn ${activeTab === 'live' ? 'active' : ''}`}
            onClick={() => {
              playSound('click', soundEnabled);
              setActiveTab('live');
            }}
          >
            <CloudDownload size={16} />
            <span>Canlı İçerik (OTA)</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body" style={{ minHeight: '220px' }}>
          {activeTab === 'apk' ? (
            <div className="update-content-col">
              <div className="version-info-box">
                <span className="info-label">Mevcut Sürüm:</span>
                <span className="version-tag">v{CURRENT_APP_VERSION}</span>
              </div>

              {!apkResult && (
                <div className="update-intro-text">
                  GitHub üzerinde derlenen en son APK sürümünü kontrol etmek için butona dokunun.
                </div>
              )}

              {apkResult && (
                <div className={`update-result-card ${apkResult.hasUpdate ? 'has-new' : 'up-to-date'}`}>
                  {apkResult.hasUpdate ? (
                    <>
                      <div className="result-header">
                        <Sparkles size={20} className="sparkle-gold" />
                        <strong>Yeni Sürüm Bulundu: v{apkResult.latestVersion}</strong>
                      </div>
                      <p className="result-notes">{apkResult.releaseNotes}</p>
                      {apkResult.publishedAt && (
                        <span className="result-date">Tarih: {apkResult.publishedAt}</span>
                      )}
                      <button
                        type="button"
                        className="btn-download-apk"
                        onClick={() => handleDownloadApk(apkResult.downloadUrl)}
                      >
                        <Download size={20} />
                        <span>Yeni APK'yı İndir & Kur</span>
                      </button>
                    </>
                  ) : (
                    <div className="up-to-date-view">
                      <CheckCircle2 size={36} color="#10B981" />
                      <h4>Uygulamanız Güncel!</h4>
                      <p>Şu anda en son sürümü (v{CURRENT_APP_VERSION}) kullanıyorsunuz.</p>
                    </div>
                  )}
                </div>
              )}

              <button
                type="button"
                className="btn-check-action"
                onClick={handleCheckApk}
                disabled={isCheckingApk}
              >
                <RefreshCw size={18} className={isCheckingApk ? 'spinning' : ''} />
                <span>{isCheckingApk ? 'Kontrol Ediliyor...' : 'Güncellemeleri Denetle'}</span>
              </button>
            </div>
          ) : (
            <div className="update-content-col">
              <div className="update-intro-text">
                APK indirmeden, sisteme yeni eklenen Almanca & İngilizce sorularını ve kelimelerini doğrudan GitHub'dan anında güncelleyin.
              </div>

              {liveResult && (
                <div className="update-result-card up-to-date">
                  {liveResult.success ? (
                    <div className="up-to-date-view">
                      <CheckCircle2 size={36} color="#10B981" />
                      <h4>İçerikler Eşitlendi!</h4>
                      <p>Tüm üniteler ve kelime dünyası en son sürüme güncellendi.</p>
                      <span className="result-date">Son Eşitleme: {liveResult.lastSync}</span>
                    </div>
                  ) : (
                    <div className="up-to-date-view">
                      <AlertCircle size={36} color="#EF4444" />
                      <h4>Eşitleme Yapılamadı</h4>
                      <p>{liveResult.error || 'İnternet bağlantınızı kontrol edin.'}</p>
                    </div>
                  )}
                </div>
              )}

              <button
                type="button"
                className="btn-check-action"
                onClick={handleSyncLive}
                disabled={isSyncingLive}
              >
                <CloudDownload size={18} className={isSyncingLive ? 'spinning' : ''} />
                <span>{isSyncingLive ? 'İçerikler Çekiliyor...' : 'Yeni İçerikleri Şimdi Senkronize Et'}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
