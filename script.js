// TAO Studios JavaScript Dosyası

document.addEventListener('DOMContentLoaded', () => {

    // --- AYARLAR (SETTINGS) ---
    // ÖNEMLİ: Proxy sunucunuzu (Vercel/Netlify) kurduktan sonra 
    // buradaki 'LOCAL_SIMULATION_URL' değerini, aldığınız gerçek URL ile değiştirin!
    // Örneğin: 'https://SİZİN-PROXY-ADRESİNİZ/api/roblox-stats'
    const API_URL = 'LOCAL_SIMULATION_URL'; 
    
    // API'den veri gelmezse kullanılacak sabit (fallback) değerler (Sizin ID'lerinize göre)
    const FALLBACK_STATS = {
        totalMembers: 33995703 > 1000 ? 33995703 / 1000 : 33995703, // Örnek olarak 33.995 olarak varsayıldı
        playersOnline: 350,
        totalVisits: 25602531 
    };

    const animationDuration = 2000; // 2 saniye animasyon süresi

    // --- YARDIMCI FONKSİYONLAR ---
    
    // Sayıları binlik ayraçlarla biçimlendirir (ör: 533.660)
    function formatNumber(num) {
        // Rakamlar büyük olduğu için, sadece toLocaleString'i kullanmak daha iyidir
        // Ancak tarayıcı desteği için basit bir regex de kullanabiliriz:
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    // Tek bir eleman için sayma animasyonunu çalıştırır
    function animateCounter(counterElement, target) {
        const start = 0;
        let startTime = null;

        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / animationDuration, 1);
            
            const currentValue = Math.floor(percentage * (target - start)) + start;
            
            counterElement.textContent = formatNumber(currentValue);

            if (percentage < 1) {
                window.requestAnimationFrame(step);
            } else {
                counterElement.textContent = formatNumber(target);
            }
        };

        window.requestAnimationFrame(step);
    }
    
    // --- ANA FONKSİYON: VERİ ÇEKME VE ANİMASYON ---
    
    async function loadAndAnimateStats() {
        let statsData = FALLBACK_STATS;

        // İstatistik elementlerini seç
        const memberElement = document.querySelector('.stat-card:nth-child(1) .stat-value');
        const onlineElement = document.querySelector('.stat-card:nth-child(2) .stat-value');
        const visitElement = document.querySelector('.stat-card:nth-child(3) .stat-value');

        try {
            if (API_URL !== 'LOCAL_SIMULATION_URL') {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error('API yanıtı başarısız oldu.');
                }
                statsData = await response.json(); 
            }
            
            // Veriyi uygula ve animasyonu başlat
            animateCounter(memberElement, statsData.totalMembers || FALLBACK_STATS.totalMembers);
            animateCounter(onlineElement, statsData.playersOnline || FALLBACK_STATS.playersOnline);
            animateCounter(visitElement, statsData.totalVisits || FALLBACK_STATS.totalVisits);

        } catch (error) {
            console.error("İstatistikler yüklenirken hata oluştu. Sabit veriler kullanılıyor:", error);
            
            // Hata durumunda sabit verilerle animasyonu çalıştır.
            animateCounter(memberElement, FALLBACK_STATS.totalMembers);
            animateCounter(onlineElement, FALLBACK_STATS.playersOnline);
            animateCounter(visitElement, FALLBACK_STATS.totalVisits);
        }
    }
    
    loadAndAnimateStats();

});
