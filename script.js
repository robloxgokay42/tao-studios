/*
 * GENEL STİLLER (Global Styles)
 */
:root {
    --primary-color: #f7a53c; /* Turuncu-sarı ton */
    --secondary-color: #38bdf8; /* Açık mavi ton */
    --text-dark: #1f2937; /* Koyu Gri (Başlıklar) */
    --text-light: #4b5563; /* Açık Koyu Gri (Paragraflar) */
    --background-light: #f9fafb; /* Açık gri arka plan */
    --card-bg: white;
    --spacing-xxl: 6rem;
    --spacing-lg: 3rem;
    --spacing-md: 1.5rem;
}

/* Scroll-behavior'ı html'e uygulayarak yumuşak kaydırmayı garanti ediyoruz. */
html {
    scroll-behavior: smooth;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    /* Inter Font Kullanımı */
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    background-color: var(--background-light);
    color: var(--text-dark);
}

a {
    text-decoration: none;
    color: inherit;
}

.section-padding {
    padding: var(--spacing-xxl) var(--spacing-lg); 
}

/*
 * NAVBAR (Header)
 */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem var(--spacing-lg);
    background-color: white;
    border-bottom: 1px solid #e5e7eb;
    position: sticky; 
    top: 0;
    z-index: 100; 
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color); 
    height: 32px; /* Logo görseli için yükseklik ayarı */
}

.logo img {
    height: 100%;
    width: auto;
    display: block;
}

.nav-links a {
    margin-left: var(--spacing-md);
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--text-dark);
    transition: color 0.2s ease;
}

.nav-links a:hover {
    color: var(--primary-color);
}

.btn-discord {
    background-color: #5865f2; 
    color: white !important;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-weight: 600;
    margin-left: 2rem !important;
}

.btn-discord:hover {
    background-color: #4b55e1;
    color: white;
}


/*
 * HERO SECTION (Ana Alan)
 */
.hero-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1400px;
    margin: 0 auto;
    padding: 4rem var(--spacing-lg);
    gap: 3rem;
}

.hero-content {
    flex: 1;
    max-width: 55%; 
}

.subtitle {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-light);
    margin-bottom: 0.5rem;
}

.title {
    font-size: 3.5rem;
    line-height: 1.1;
    font-weight: 800;
    margin-bottom: 1rem;
}

.description {
    font-size: 1.1rem;
    color: var(--text-light);
    margin-bottom: 2rem;
    line-height: 1.5;
}

.actions {
    display: flex;
    gap: 1rem;
}

.btn {
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    font-weight: 600;
    transition: background-color 0.2s ease, transform 0.1s ease;
    border: 2px solid transparent; 
}

.btn-primary {
    background-color: var(--primary-color);
    color: white;
}

.btn-primary:hover {
    background-color: #e69634;
    transform: translateY(-1px);
}

.btn-secondary {
    background-color: transparent;
    color: var(--text-dark);
    border: 2px solid #d1d5db; 
}

.btn-secondary:hover {
    background-color: #f3f4f6;
    border-color: #e5e7eb;
}

/* GRADYENT ANİMASYONU */
.gradient-text {
    background: linear-gradient(90deg, #f7a53c, #ffcc33, #38bdf8, #52e5b8);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    background-size: 400% 400%;
    animation: gradientShift 8s ease infinite;
    display: inline-block; 
}

@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.hero-image-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 45%; 
}

.hero-image {
    max-width: 100%;
    height: auto;
    display: block;
}

/*
 * BÖLÜM STİLLERİ (About, Games & Team)
 */

/* Bölüm Başlıkları (Biz Kimiz, Ekiple Tanış, Oyunlar) */
.section-header {
    max-width: 1400px;
    margin: 0 auto 3rem;
    padding: 0 var(--spacing-lg);
}

.section-title {
    font-size: 2.2rem;
    font-weight: 900; 
    color: var(--text-dark);
    margin-bottom: 0.25rem;
}

.section-info {
    color: var(--text-light);
    font-weight: 500;
}

/* Felsefe Kartları (Biz Kimiz) */
.philosophy-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-md);
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
}

.card {
    background-color: var(--card-bg);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    cursor: default; 
}

/* BİZ KİMİZ KART HOVER EFECTİ */
.card:hover {
    transform: translateY(-5px) scale(1.01);
    box-shadow: 0 0 0 2px var(--primary-color), 
                0 15px 20px -5px rgba(0, 0, 0, 0.1); 
}

.card h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.card p {
    color: var(--text-light);
    font-size: 0.95rem;
}

/* Ekip Kartları (Team Section) */
.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--spacing-md);
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
}

.team-member-card {
    background-color: var(--card-bg);
    padding: 2rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    cursor: pointer;
    padding-bottom: 1.5rem; 
}

/* EKİP KART HOVER ANİMASYONU: Büyüme ve Çerçeve Efekti */
.team-member-card:hover {
    transform: translateY(-5px) scale(1.01);
    box-shadow: 0 0 0 2px var(--primary-color), 
                0 15px 20px -5px rgba(0, 0, 0, 0.1); 
}

.member-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
}

.member-avatar {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--background-light); 
}

.role-badge {
    background-color: #eef2ff; 
    color: #4f46e5;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px; 
    font-size: 0.75rem;
    font-weight: 600;
    white-space: nowrap;
}
/* WIKI SAYFASI İÇİN YENİ ROL ROZETİ STİLİ */
.wiki-meta .author-role {
    background-color: #ffeccf; /* Açık turuncu arka plan */
    color: var(--primary-color); /* Koyu turuncu metin */
    padding: 0.15rem 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    margin-right: 0.5rem;
}
.wiki-meta .author-role.medya {
    background-color: #d8f1e6; /* Açık yeşil arka plan */
    color: #38a169; /* Koyu yeşil metin */
}
/* MAKALE DETAY SAYFASI ROL ROZETİ */
#article-content .role-badge {
    padding: 0.2rem 0.6rem;
    border-radius: 4px;
    margin-left: 0.5rem;
    font-size: 0.8rem;
}
#article-content .role-badge.medya {
    background-color: #d8f1e6;
    color: #38a169;
}


.member-info {
    margin-bottom: 0.5rem; 
}

.member-info h4 {
    font-size: 1.25rem; 
    font-weight: 700;
    margin-bottom: 0.25rem;
}

.member-info .username {
    color: var(--text-light);
    font-size: 0.9rem;
    margin-bottom: 0; 
}

/*
 * OYUNLAR BÖLÜMÜ (Games Section)
 */
.games-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
    gap: 2rem;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
}

.game-card {
    background-color: var(--card-bg);
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    overflow: hidden; 
    transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    cursor: pointer;
    position: relative;
    border: 1px solid #e5e7eb;
}

.game-card:hover {
    transform: translateY(-8px) scale(1.01);
    box-shadow: 0 15px 25px -5px rgba(0, 0, 0, 0.1); 
}

.game-image-container {
    height: 200px; 
    overflow: hidden;
    position: relative;
}

.game-image {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    display: block;
    transition: transform 0.3s ease;
}

/* Hover'da resim zoom efekti */
.game-card:hover .game-image {
    transform: scale(1.05);
}

.game-card-content {
    padding: 1.5rem;
}

.game-title {
    font-size: 1.35rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
}

.game-description {
    color: var(--text-light);
    font-size: 0.95rem;
    margin-bottom: 1rem;
}

.game-tag {
    display: inline-block;
    background-color: #eef2ff;
    color: #4f46e5;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 600;
}

/* Kartın sol üstündeki 'TA' etiketi */
.game-card .ta-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: var(--primary-color);
    color: white;
    padding: 0.3rem 0.6rem;
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 700;
    z-index: 5;
    text-shadow: 0 1px 1px rgba(0,0,0,0.2);
}

/* ---------------------------------------------------------------- */
/* WIKI ÖZEL STİLLERİ (LİSTE VE DETAY)                               */
/* ---------------------------------------------------------------- */

/* Wiki listesi konteyneri */
.wiki-container {
    max-width: 1000px; /* Liste genişliğini biraz daha dar tutabiliriz */
    margin: 0 auto;
    padding: var(--spacing-xxl) var(--spacing-lg);
}

/* Arama ve filtreleme alanı için kapsayıcı */
.wiki-filter-bar {
    background-color: var(--card-bg);
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    display: flex;
    gap: 1rem;
    margin-bottom: 3rem; /* Makale listesi ile arasına boşluk */
    flex-wrap: wrap; /* Mobil uyumluluk için */
}

.wiki-filter-bar input[type="text"],
.wiki-filter-bar select,
.wiki-filter-bar .search-input-group,
.wiki-filter-bar .filter-group {
    flex: 1 1 200px; /* Esnekliği ayarla */
    min-width: 150px;
}

.wiki-filter-bar input[type="text"],
.wiki-filter-bar select {
    padding: 0.75rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 1rem;
    color: var(--text-dark);
}

.wiki-filter-bar .btn-search {
    flex-grow: 0;
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    font-weight: 600;
}

/* Wiki Kartı Stili (Her makalenin listelendiği kart) */
.wiki-card {
    display: block; /* A etiketi olduğu için */
    background-color: var(--card-bg);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);
    border: 1px solid #e5e7eb;
    margin-bottom: 1rem; /* Kartlar arası boşluk */
    transition: all 0.2s ease-in-out;
}

.wiki-card:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.05);
    transform: translateY(-2px);
    border-color: var(--primary-color);
}

.wiki-card h2 {
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
    line-height: 1.2;
}

.wiki-badges {
    margin-bottom: 0.75rem;
    display: flex;
    gap: 0.5rem;
}

.wiki-badge {
    display: inline-block;
    padding: 0.2rem 0.6rem;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
}

.badge-edited {
    background-color: #fef3c7; /* Sarımsı */
    color: #b45309;
}

.badge-pinned {
    background-color: #fee2e2; /* Kırmızımsı */
    color: #b91c1c;
}

.wiki-summary {
    color: var(--text-light);
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 1rem;
}

.wiki-meta {
    font-size: 0.9rem;
    color: var(--text-light);
    display: flex;
    align-items: center;
    flex-wrap: wrap; /* Taşan metinleri alt satıra al */
    line-height: 1.5;
}

.wiki-meta > span {
    white-space: nowrap; /* Meta bilgileri tek satırda tut */
}

/* ---------------------------------------------------------------- */
/* MAKALE DETAY SAYFASI (article.html) STİLLERİ                      */
/* ---------------------------------------------------------------- */

.article-content-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 4rem var(--spacing-lg);
}

.article-header {
    text-align: center;
    margin-bottom: 2rem;
}

#article-main-title {
    font-size: 3rem;
    font-weight: 900;
    line-height: 1.1;
    color: var(--text-dark);
    margin-bottom: 1rem;
}

.meta-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.95rem;
    color: var(--text-light);
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #e5e7eb;
    margin-bottom: 2rem;
    flex-wrap: wrap;
}

.meta-bar .author-info {
    display: flex;
    align-items: center;
}

.meta-bar .author-info span:first-child {
    font-weight: 600;
    color: var(--text-dark);
}

#article-content {
    line-height: 1.8;
    color: var(--text-dark);
    font-size: 1.05rem;
}

#article-content h3 {
    font-size: 1.75rem;
    font-weight: 800;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    padding-bottom: 0.25rem;
    border-bottom: 2px solid #f3f4f6;
}

#article-content p {
    margin-bottom: 1rem;
}

#article-content ul,
#article-content ol {
    margin-left: 2rem;
    margin-bottom: 1rem;
}

#article-content li {
    margin-bottom: 0.5rem;
}

#article-content strong {
    font-weight: 700;
    color: var(--text-dark);
}

/* ---------------------------------------------------------------- */
/* FOOTER (Alt Bilgi) - YENİ VE MİNİMALİST YAPI GÜNCELLEMESİ         */
/* ---------------------------------------------------------------- */
.new-footer {
    background-color: white; 
    padding: 1.5rem var(--spacing-lg);
    border-top: 1px solid #e5e7eb;
}

.footer-content-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1400px;
    margin: 0 auto;
    padding-bottom: 0; 
    border-bottom: none; 
    margin-bottom: 0;
}

.footer-logo-container {
    height: 32px;
}

.footer-logo-container img {
    height: 100%;
    width: auto;
    display: block;
}

/* Politikalar ve Dil Seçicinin birlikte durduğu grup */
.policy-and-language {
    display: flex;
    align-items: center;
    gap: 1.5rem; /* Politikalar ve Dil Seçici arasındaki boşluk */
}

.policy-links {
    display: flex; /* Linkleri yan yana getir */
    gap: 1.5rem;
}

.policy-links a {
    color: var(--text-dark);
    font-size: 0.95rem;
    font-weight: 500;
    transition: color 0.2s;
}

.policy-links a:hover {
    color: var(--primary-color);
}

.language-select {
    position: relative;
    display: inline-block;
    margin-left: 0; 
}

.language-select select {
    appearance: none;
    background-color: var(--card-bg);
    border: 1px solid #d1d5db;
    border-radius: 6px;
    padding: 0.5rem 2.5rem 0.5rem 1rem;
    font-size: 0.95rem;
    cursor: pointer;
    outline: none;
    color: var(--text-dark);
    min-width: 120px;
}

.language-select::after {
    content: "▼"; /* Dropdown oku */
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.7rem;
    color: var(--text-dark);
    pointer-events: none;
}

/* Alt kısım: Sosyal Medya ve Telif Hakkı (Alt alta, sola hizalı, üstte ayrım çizgisi) */
.footer-content-bottom {
    display: flex;
    flex-direction: column; /* Alt kısmı dikey hizala */
    max-width: 1400px;
    margin: 1.5rem auto 0; 
    padding-top: 1.5rem;
    border-top: 1px solid #e5e7eb; 
    font-size: 0.85rem;
    color: var(--text-light);
    align-items: flex-start; /* Sola hizala */
}

.social-links {
    display: flex; 
    margin-bottom: 0.75rem; 
}

.social-links a {
    margin-right: 1rem; 
    color: var(--text-dark);
    font-weight: 600;
    transition: color 0.2s;
    font-size: 0.95rem;
}

.social-links a:hover {
    color: var(--primary-color);
}

.copyright {
    color: var(--text-light);
    font-size: 0.85rem;
}

/* Responsive Düzenlemeler */
@media (max-width: 1024px) {
    .section-padding {
        padding: 4rem var(--spacing-md);
    }
}

@media (max-width: 768px) {
    .hero-section {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    
    .hero-content {
        max-width: 100%;
        order: 2;
    }
    
    .hero-image-container {
        max-width: 80%;
        order: 1;
        margin-bottom: 2rem;
    }
    
    .actions {
        justify-content: center;
    }
    
    /* Footer responsive düzeltmeleri */
    .footer-content-top {
        flex-direction: column;
        align-items: flex-start;
        gap: 1.5rem; 
    }

    .policy-and-language {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }
    
    .policy-links {
        flex-direction: column; 
        gap: 0.5rem;
    }

    .policy-links a {
        margin-left: 0;
    }

    .language-select {
        margin-left: 0;
        margin-top: 0; 
    }

    .footer-content-bottom {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
        padding-top: 1rem;
        margin-top: 1rem;
    }
    
    /* Wiki Listesi Responsive Düzeltmeleri */
    .wiki-filter-bar {
        flex-direction: column;
        gap: 0.75rem;
    }
    
    .wiki-filter-bar .btn-search {
        width: 100%;
    }
    
    .wiki-meta {
        /* Mobil cihazlarda yazar adının daha düzenli görünmesini sağlar */
        display: block; 
    }
    .wiki-meta > span {
        display: block;
        margin: 0 !important;
    }
    .wiki-meta .author-role {
        margin-right: 0.5rem; 
        margin-top: 0.25rem;
        display: inline-block;
    }
}
