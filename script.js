// This script assumes that 'wikiArticles' array is defined in 'wiki-data.js'
// and is available globally.

document.addEventListener('DOMContentLoaded', () => {
    // URL'deki 'slug' parametresini kontrol et (article.html için)
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');

    if (slug) {
        // Eğer slug varsa, makale detay sayfasındayız
        renderArticle(slug);
    } else if (document.getElementById('wiki-articles-container')) {
        // Eğer makale konteyneri varsa, wiki listesindeyiz
        initializeWikiList();
    }
    
    // Check if the language switcher exists (from index.html/new-footer)
    const languageSwitcher = document.getElementById('language-switcher');
    if (languageSwitcher) {
        setupLanguageSwitcher(languageSwitcher);
    }
});


// -------------------------------------------------------------
// DİL SEÇİCİ AYARLARI (Varsayılan Türkçe: 'tr')
// -------------------------------------------------------------
function setupLanguageSwitcher(switcher) {
    switcher.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        
        if (selectedLang === 'tr') {
            alert("Türkçe sürüme geçiliyor. (Mevcut sayfa zaten Türkçe)");
        } else if (selectedLang === 'en') {
            alert("İngilizce sürüme geçiliyor. (Ayrı çeviri mantığı gerektirir.)");
        }
    });

    // Varsayılan dilin 'tr' olduğunu kabul ediyoruz
    const currentLang = document.documentElement.lang || 'tr'; 
    if (switcher.querySelector(`option[value="${currentLang}"]`)) {
        switcher.value = currentLang;
    }
}


// -------------------------------------------------------------
// WIKI LİSTE BAŞLATMA
// -------------------------------------------------------------
function initializeWikiList() {
    // wikiArticles dizisinin yüklendiğinden emin ol
    if (typeof wikiArticles === 'undefined') {
        console.error("Hata: wikiArticles dizisi bulunamadı. wiki-data.js'in yüklendiğinden emin olun.");
        document.getElementById('wiki-articles-container').innerHTML = 
            '<p style="text-align: center; color: var(--text-light);">Wiki verileri yüklenemedi.</p>';
        return;
    }

    // 1. Makaleleri Sırala (Pinned olanlar en başta, sonra tarihe göre)
    const sortedArticles = sortArticles(wikiArticles);
    
    // 2. Kategori Filtresini Doldur
    populateCategoryFilter(wikiArticles);

    // 3. Makaleleri Başlangıçta Göster
    renderArticleList(sortedArticles);

    // 4. Arama ve Filtreleme Olaylarını Bağla
    const searchButton = document.querySelector('.btn-search');
    searchButton.addEventListener('click', applyFilters);

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            applyFilters();
        }
    });
    
    const categoryFilter = document.getElementById('categoryFilter');
    categoryFilter.addEventListener('change', applyFilters);
    
    const pinnedFilter = document.getElementById('pinnedFilter');
    pinnedFilter.addEventListener('change', applyFilters);
}

// -------------------------------------------------------------
// SIRALAMA FONKSİYONU: Pinned'ı en üste, kalanı yeni tarihe göre sıralar.
// -------------------------------------------------------------
function sortArticles(articles) {
    const articlesCopy = [...articles]; 

    articlesCopy.sort((a, b) => {
        // Pinned (Sabitlenmiş) önceliği
        if (a.isPinned && !b.isPinned) return -1; 
        if (!a.isPinned && b.isPinned) return 1;  

        // Pinned aynıysa, tarihe göre sırala (En yeni en başta)
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        
        return dateB - dateA;
    });

    return articlesCopy;
}
// -------------------------------------------------------------


function populateCategoryFilter(articles) {
    const filter = document.getElementById('categoryFilter');
    // "All Categories" yerine "Tüm Kategoriler"
    // NOT: HTML'de "Tümü (Kategori)" yazdığı için, değerin de bu filtre ile eşleşmesi gerekir.
    const allOption = document.createElement('option');
    // Filtreleme için kullanılacak basit değer 'Tümü' olmalıdır.
    allOption.value = 'Tümü'; 
    allOption.textContent = 'Tüm Kategoriler';
    filter.appendChild(allOption);

    // Tekrarlanan kategorileri engellemek için Set kullan
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
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    // HTML'den gelen değer 'Tümü (Kategori)' olsa bile, option.value 'Tümü' olmalı
    const categoryFilterValue = document.getElementById('categoryFilter').value;
    const pinnedFilterChecked = document.getElementById('pinnedFilter').checked;

    let filteredArticles = wikiArticles.filter(article => {
        // Başlıkta arama
        const matchesSearch = article.title.toLowerCase().includes(searchTerm);
        
        // Kategoriye göre filtreleme: 'Tümü' değeri ile kontrol et
        const matchesCategory = categoryFilterValue === 'Tümü' || article.category === categoryFilterValue;
        
        // Sabitlenmiş filtreleme
        const matchesPinned = !pinnedFilterChecked || article.isPinned;

        return matchesSearch && matchesCategory && matchesPinned;
    });
    
    // Filtrelenmiş listeyi tekrar sırala (Pinned yine en üste çıksın)
    const sortedFilteredArticles = sortArticles(filteredArticles);

    renderArticleList(sortedFilteredArticles);
}


function renderArticleList(articles) {
    const container = document.getElementById('wiki-articles-container');
    container.innerHTML = ''; // Önceki içeriği temizle

    if (articles.length === 0) {
        // Makale bulunamadı metni
        container.innerHTML = '<p style="text-align: center; color: var(--text-light);">Aradığınız kriterlere uygun makale bulunamadı.</p>';
        return;
    }

    articles.forEach(article => {
        const articleCard = document.createElement('a');
        articleCard.href = `article.html?slug=${article.slug}`; 
        articleCard.classList.add('wiki-card');

        // Rozetleri hazırla (Türkçe)
        let badgesHtml = '';
        if (article.isEdited) {
            badgesHtml += '<span class="wiki-badge badge-edited">Düzenlendi</span>';
        }
        if (article.isPinned) {
            badgesHtml += '<span class="wiki-badge badge-pinned">Sabit</span>';
        }

        // Yazar rol rozetini hazırla
        // NOT: Rol 'medya' içeriyorsa class'ı 'medya' olsun mantığı korunmuştur.
        const roleClass = article.authorRole && article.authorRole.toLowerCase().includes('medya') ? 'medya' : '';
        const authorRoleHtml = article.authorRole ? `<span class="author-role ${roleClass}">${article.authorRole}</span>` : '';


        articleCard.innerHTML = `
            <h2>${article.title}</h2>
            <div class="wiki-badges">${badgesHtml}</div>
            <p class="wiki-summary">${article.summary}</p>
            <div class="wiki-meta">
                ${authorRoleHtml}
                <span>${article.author}</span>
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
    const article = wikiArticles.find(a => a.slug === slug);
    
    // Eğer makale bulunamazsa (Türkçe metinler)
    if (!article) {
        document.title = "Makale Bulunamadı";
        document.getElementById('article-main-title').textContent = "Makale Bulunamadı";
        document.getElementById('article-content').innerHTML = `
            <div style="text-align: center; padding: 4rem 0;">
                <p>Aradığınız makale bulunamadı veya silinmiş.</p>
            </div>
        `;
        return;
    }

    // Başlık ve Meta bilgileri
    document.title = `${article.title} - TAO Wiki`;
    document.getElementById('article-main-title').textContent = article.title;

    // Yazar rolü
    const roleClass = article.authorRole.toLowerCase().includes('medya') ? 'medya' : '';
    const authorRoleHtml = article.authorRole ? `<span class="role-badge ${roleClass}">${article.authorRole}</span>` : '';

    // Düzenlenme bilgisi (Türkçe metinler)
    const editorRoleClass = article.editorRole && article.editorRole.toLowerCase().includes('medya') ? 'medya' : '';
    const editedByHtml = article.editedBy ? `
        <span style="margin-left: 1.5rem;">
            • Düzenleyen: ${article.editedBy}
            <span class="role-badge ${editorRoleClass}">${article.editorRole}</span>
            <span style="margin-left: 0.5rem;">(${article.editedDate})</span>
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

    // LOAD ARTICLE CONTENT DYNAMICALLY
    document.getElementById('article-content').innerHTML = article.content;
}
