// =========================================================================
// DİL KULÜBÜ GÜNCELLEME SERVİSİ
// 1. APK Sürüm Kontrolü (GitHub Releases API)
// 2. Canlı Müfredat & Kelime Senkronizasyonu (OTA / Live Content Sync)
// =========================================================================

export const CURRENT_APP_VERSION = '1.4.0';
const GITHUB_REPO = 'whitescorp-droid/5Sinif';
const GITHUB_RELEASES_API = `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`;
const GITHUB_RAW_BASE = `https://raw.githubusercontent.com/${GITHUB_REPO}/main/dil-app/src/data`;

/**
 * 1. SİSTEM: GitHub'dan APK Güncellemesini Kontrol Eder
 */
export async function checkForAppUpdate() {
  try {
    const response = await fetch(GITHUB_RELEASES_API, {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    if (!response.ok) {
      // Depo Private ise GitHub API unauthenticated çağrılara 404 döner.
      // Bu durumda doğrudan GitHub Releases web sayfasına yönlendirme sunuyoruz.
      return {
        hasUpdate: true,
        currentVersion: CURRENT_APP_VERSION,
        latestVersion: '1.2.0',
        downloadUrl: `https://github.com/${GITHUB_REPO}/releases`,
        releaseNotes: 'Oxford Word Skills Elementary (80 ünite), renkli kitap çizimleri ve testler eklendi!',
        isFallback: true
      };
    }

    const data = await response.json();
    const latestTag = (data.tag_name || '').replace(/^v/, '').trim();
    
    // Find apk asset in release
    const apkAsset = data.assets?.find(a => a.name.endsWith('.apk'));
    const downloadUrl = apkAsset ? apkAsset.browser_download_url : data.html_url;

    const isNewer = compareVersions(latestTag, CURRENT_APP_VERSION) > 0;

    return {
      hasUpdate: isNewer,
      currentVersion: CURRENT_APP_VERSION,
      latestVersion: latestTag || CURRENT_APP_VERSION,
      downloadUrl: downloadUrl,
      releaseNotes: data.body || 'Hata düzeltmeleri ve yeni içerikler eklendi.',
      publishedAt: data.published_at ? new Date(data.published_at).toLocaleDateString('tr-TR') : ''
    };
  } catch (err) {
    console.warn('Update check failed:', err);
    return {
      hasUpdate: true,
      currentVersion: CURRENT_APP_VERSION,
      latestVersion: '1.2.0',
      downloadUrl: `https://github.com/${GITHUB_REPO}/releases`,
      releaseNotes: 'Oxford Word Skills Elementary ve yeni etkinlikleri indirmek için Releases sayfasını açın.',
      isFallback: true
    };
  }
}

/**
 * Sürüm numaralarını karşılaştırır (örn: "1.2.0" vs "1.1.0")
 */
function compareVersions(v1, v2) {
  if (!v1 || !v2) return 0;
  const p1 = v1.split('.').map(n => parseInt(n, 10) || 0);
  const p2 = v2.split('.').map(n => parseInt(n, 10) || 0);
  for (let i = 0; i < Math.max(p1.length, p2.length); i++) {
    const num1 = p1[i] || 0;
    const num2 = p2[i] || 0;
    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
  }
  return 0;
}

/**
 * 2. SİSTEM: Canlı İçerik Senkronizasyonu (OTA / Live Content Sync)
 * APK indirmeden yeni soruları ve kelimeleri GitHub'dan anında çeker.
 */
export async function syncLiveContent() {
  try {
    // Check if new content was updated
    const timestamp = Date.now();
    const [resCurriculum, resVocab] = await Promise.allSettled([
      fetch(`${GITHUB_RAW_BASE}/languagesCurriculum.js?t=${timestamp}`),
      fetch(`${GITHUB_RAW_BASE}/vocabularyData.js?t=${timestamp}`)
    ]);

    let updatedCount = 0;

    if (resCurriculum.status === 'fulfilled' && resCurriculum.value.ok) {
      const text = await resCurriculum.value.text();
      // Extract JSON if exported as LANGUAGES_DATA = { ... }
      const match = text.match(/export\s+const\s+LANGUAGES_DATA\s*=\s*({[\s\S]*?});/);
      if (match && match[1]) {
        localStorage.setItem('dil_live_curriculum', match[1]);
        updatedCount++;
      }
    }

    if (resVocab.status === 'fulfilled' && resVocab.value.ok) {
      const text = await resVocab.value.text();
      const match = text.match(/export\s+const\s+VOCABULARY_BY_LANG\s*=\s*({[\s\S]*?});/);
      if (match && match[1]) {
        localStorage.setItem('dil_live_vocabulary', match[1]);
        updatedCount++;
      }
    }

    localStorage.setItem('dil_last_sync_time', new Date().toISOString());
    return {
      success: true,
      updatedCount,
      lastSync: new Date().toLocaleTimeString('tr-TR')
    };
  } catch (err) {
    console.warn('Live content sync failed:', err);
    return { success: false, error: err.message };
  }
}
