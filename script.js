// Bu scriptin çalışması için 'wikiArticles' dizisinin 'wiki-data.js' içinde tanımlı olması GEREKİR.

document.addEventListener('DOMContentLoaded', () => {
    // Verilerin yüklendiğinden emin olmak için ek kontrol
    if (typeof wikiArticles === 'undefined') {
        console.error("Hata: 'wikiArticles' dizisi bulunamadı. Lütfen 'wiki-data.js' dosyasının doğru yüklendiğini kontrol edin.");
        const container = document.getElementById('wiki-articles-container');
        if (container) {
            container.innerHTML = '<p style="text-align: center; color: var(--text-light); padding-top: 2rem;">Wiki makaleleri yüklenemedi. Veri dosyasını kontrol edin.</p>';
        }
    }

    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');

    if (slug) {
        renderArticle(slug);
    } else if (document.getElementById('wiki-articles-container')) {
        initializeWikiList();
    }
    
    const languageSwitcher = document.getElementById('language-switcher');
    if (languageSwitcher) {
        setupLanguageSwitcher(languageSwitcher);
    }
});


// -------------------------------------------------------------
// DİL SEÇİCİ AYARLARI
// -------------------------------------------------------------
function setupLanguageSwitcher(switcher) {
    switcher.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        
        if (selectedLang === 'tr') {
            alert("Türkçe sürüme geçiliyor.");
        } else if (selectedLang === 'en') {
            alert("İngilizce sürüme geçiliyor.");
        }
    });

    const currentLang = document.documentElement.lang || 'tr'; 
    if (switcher.querySelector(`option[value="${currentLang}"]`)) {
        switcher.value = currentLang;
    }
}


// -------------------------------------------------------------
// WIKI LİSTE BAŞLATMA
// -------------------------------------------------------------
function initializeWikiList() {
    // Veri kontrolü, DOMContentLoaded içinde yapıldı. Burada sadece devam ediyoruz.
    if (typeof wikiArticles === 'undefined') return; 

    // 1. Makaleleri Sırala
    const sortedArticles = sortArticles(wikiArticles);
    
    // 2. Kategori Filtresini Doldur
    populateCategoryFilter(wikiArticles);

    // 3. Makaleleri Başlangıçta Göster
    // Başlangıçta filtre uygulamadan tüm makaleleri gösteriyoruz.
    renderArticleList(sortedArticles);

    // 4. Arama ve Filtreleme Olaylarını Bağla
    const searchButton = document.querySelector('.btn-search');
    // Eğer Arama düğmesi yoksa, 'Ara' düğmesi tıklanır
    if (!searchButton) { 
        document.querySelector('.search-input-group .btn').addEventListener('click', applyFilters);
    } else {
        searchButton.addEventListener('click', applyFilters);
    }

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                applyFilters();
            }
        });
    }
    
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', applyFilters);
    }
    
    const pinnedFilter = document.getElementById('pinnedFilter');
    if (pinnedFilter) {
        pinnedFilter.addEventListener('change', applyFilters);
    }
}

// -------------------------------------------------------------
// SIRALAMA FONKSİYONU
// -------------------------------------------------------------
function sortArticles(articles) {
    const articlesCopy = [...articles]; 

    articlesCopy.sort((a, b) => {
        if (a.isPinned && !b.isPinned) return -1; 
        if (!a.isPinned && b.isPinned) return 1;  
        
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        
        return dateB - dateA;
    });

    return articlesCopy;
}
// -------------------------------------------------------------


function populateCategoryFilter(articles) {
    const filter = document.getElementById('categoryFilter');
    if (!filter) return;
    
    filter.innerHTML = ''; // Temizle

    const allOption = document.createElement('option');
    // Filtreleme için kullanılacak basit değer 'Tümü' olmalıdır.
    allOption.value = 'Tümü'; 
    allOption.textContent = 'Tümü (Kategori)'; // HTML'deki görünen metinle eşleşmeli
    filter.appendChild(allOption);

    const categories = new Set();
    articles.forEach(article => categories.add(article.category));
    
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        filter.appendChild(option);
    });
}

function applyFilters() {
    // Input/Select elementlerinin varlığını kontrol et
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const pinnedFilter = document.getElementById('pinnedFilter');
    
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const categoryFilterValue = categoryFilter ? categoryFilter.value : 'Tümü';
    const pinnedFilterChecked = pinnedFilter ? pinnedFilter.checked : false;

    // Veri yoksa filtreleme yapma
    if (typeof wikiArticles === 'undefined') return;

    let filteredArticles = wikiArticles.filter(article => {
        
        // Başlıkta arama
        const matchesSearch = article.title.toLowerCase().includes(searchTerm);
        
        // Kategoriye göre filtreleme: 'Tümü' değeri ile kontrol et
        const matchesCategory = categoryFilterValue === 'Tümü' || article.category === categoryFilterValue;
        
        // Sabitlenmiş filtreleme
        const matchesPinned = !pinnedFilterChecked || article.isPinned;

        return matchesSearch && matchesCategory && matchesPinned;
    });
    
    const sortedFilteredArticles = sortArticles(filteredArticles);

    renderArticleList(sortedFilteredArticles);
}


function renderArticleList(articles) {
    const container = document.getElementById('wiki-articles-container');
    if (!container) return; 
    
    container.innerHTML = ''; // Önceki içeriği temizle

    if (articles.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-light); padding-top: 2rem;">Aradığınız kriterlere uygun makale bulunamadı.</p>';
        return;
    }

    articles.forEach(article => {
        const articleCard = document.createElement('a');
        articleCard.href = `article.html?slug=${article.slug}`; 
        articleCard.classList.add('wiki-card');

        // Rozetleri hazırla (Türkçe)
        let badgesHtml = '';
        if (article.isEdited) {
            // image_397bac.png'deki "Düzenlendi" rozeti
            badgesHtml += '<span class="wiki-badge badge-edited">Düzenlendi</span>';
        }
        if (article.isPinned) {
            // image_397bac.png'deki "Sabit" rozeti
            badgesHtml += '<span class="wiki-badge badge-pinned">Sabit</span>';
        }

        // Yazar rol rozetini hazırla (image_397bac.png'deki gibi)
        const roleClass = article.authorRole && article.authorRole.toLowerCase().includes('medya') ? 'medya' : '';
        const authorRoleHtml = article.authorRole ? `<span class="author-role ${roleClass}">${article.authorRole}</span>` : '';


        articleCard.innerHTML = `
            <h2>${article.title}</h2>
            <div class="wiki-badges">${badgesHtml}</div>
            <p class="wiki-summary">${article.summary}</p>
            <div class="wiki-meta">
                <span>${article.author}</span>
                ${authorRoleHtml}
                <span style="margin: 0 0.5rem;">—</span>
                <span>${article.date}</span>
                <span style="margin: 0 0.5rem;">•</span>
                <span>${article.category}</span>
            </div>
        `;
        container.appendChild(articleCard);
    });
}

// -------------------------------------------------------------
// MAKALE DETAY SAYFASI GÖSTERİMİ
// -------------------------------------------------------------
function renderArticle(slug) {
    if (typeof wikiArticles === 'undefined') return;

    const article = wikiArticles.find(a => a.slug === slug);
    
    if (!article) {
        document.title = "Makale Bulunamadı";
        document.getElementById('article-main-title').textContent = "Makale Bulunamadı";
        document.getElementById('article-content').innerHTML = `
            <div style="text-align: center; padding: 4rem 0;">
                <p>Aradığınız makale bulunamadı veya silinmiş.</p>
                <a href="wiki.html" style="color: var(--primary-color); font-weight: 600; margin-top: 1rem; display: inline-block;">Geri dön</a>
            </div>
        `;
        return;
    }

    document.title = `${article.title} - TAO Wiki`;
    document.getElementById('article-main-title').textContent = article.title;

    // Yazar rolü (image_397f70.png'deki gibi)
    const roleClass = article.authorRole.toLowerCase().includes('medya') ? 'medya' : 'yonetici'; // Yeni 'yonetici' default class
    const authorRoleHtml = article.authorRole ? `<span class="role-badge ${roleClass}">${article.authorRole}</span>` : '';

    // Düzenlenme bilgisi (image_397f70.png'deki gibi)
    const editorRoleClass = article.editorRole && article.editorRole.toLowerCase().includes('medya') ? 'medya' : 'yonetici'; // Yeni 'yonetici' default class
    const editedByHtml = article.editedBy ? `
        <span style="margin-left: 1.5rem;">
            • Düzenleyen: ${article.editedBy}
            <span class="role-badge ${editorRoleClass}">${article.editorRole}</span>
            <span style="margin-left: 0.5rem;">${article.editedDate}</span>
        </span>
    ` : '';
    
    // Meta bar content
    document.querySelector('.meta-bar').innerHTML = `
        <div class="author-info">
            <span>${article.author}</span>
            ${authorRoleHtml}
            <span style="margin-left: 1.5rem;">— ${article.date}</span>
        </div>
        ${editedByHtml}
    `;

    document.getElementById('article-content').innerHTML = article.content;
}
