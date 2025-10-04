// wiki-data.js dosyasından gelen wikiArticles dizisine erişir.

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
});

function initializeWikiList() {
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
    const articlesCopy = [...articles]; // Orijinal diziyi değiştirmemek için kopya oluştur

    articlesCopy.sort((a, b) => {
        // Pinned (Sabitlenmiş) önceliği
        if (a.isPinned && !b.isPinned) return -1; // a önde (daha yüksek öncelik)
        if (!a.isPinned && b.isPinned) return 1;  // b önde

        // Pinned aynıysa, tarihe göre sırala (En yeni en başta)
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        
        // Yeni tarihin eskisinden önce gelmesini sağlamak için tersten sıralama yapılır
        return dateB - dateA;
    });

    return articlesCopy;
}
// -------------------------------------------------------------


function populateCategoryFilter(articles) {
    const filter = document.getElementById('categoryFilter');
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
    const categoryFilter = document.getElementById('categoryFilter').value;
    const pinnedFilterChecked = document.getElementById('pinnedFilter').checked;

    let filteredArticles = wikiArticles.filter(article => {
        // Başlıkta arama
        const matchesSearch = article.title.toLowerCase().includes(searchTerm);
        
        // Kategoriye göre filtreleme
        const matchesCategory = categoryFilter === 'Tümü' || article.category === categoryFilter;
        
        // Sabitlenmiş filtreleme (eğer işaretliyse sadece pinned olanları göster)
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
        container.innerHTML = '<p style="text-align: center; color: var(--text-light);">Aradığınız kriterlere uygun makale bulunamadı.</p>';
        return;
    }

    articles.forEach(article => {
        const articleCard = document.createElement('a');
        articleCard.href = `article.html?slug=${article.slug}`; // Makaleye yönlendirme
        articleCard.classList.add('wiki-card');

        // Rozetleri hazırla
        let badgesHtml = '';
        if (article.isEdited) {
            badgesHtml += '<span class="wiki-badge badge-edited">Düzenlendi</span>';
        }
        if (article.isPinned) {
            badgesHtml += '<span class="wiki-badge badge-pinned">Sabit</span>';
        }

        // Yazar rol rozetini hazırla
        const roleClass = article.authorRole.toLowerCase().includes('medya') ? 'medya' : '';
        const authorRoleHtml = `<span class="author-role ${roleClass}">${article.authorRole}</span>`;


        articleCard.innerHTML = `
            <h2>${article.title}</h2>
            <div class="wiki-badges">${badgesHtml}</div>
            <p class="wiki-summary">${article.summary}</p>
            <div class="wiki-meta">
                ${article.authorRole ? authorRoleHtml : ''}
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

function renderArticle(slug) {
    const article = wikiArticles.find(a => a.slug === slug);
    const container = document.getElementById('article-container');
    
    // Eğer makale bulunamazsa
    if (!article) {
        document.getElementById('article-title').textContent = "Makale Bulunamadı";
        document.getElementById('article-main-title').textContent = "Makale Bulunamadı";
        document.getElementById('article-content').innerHTML = `
            <div style="text-align: center; padding: 4rem 0;">
                <p>Aradığınız makale bulunamadı veya silinmiş.</p>
            </div>
        `;
        return;
    }

    // Başlık ve Meta bilgileri
    document.getElementById('article-title').textContent = article.title;
    document.getElementById('article-main-title').textContent = article.title;

    // Yazar rolü
    const roleClass = article.authorRole.toLowerCase().includes('medya') ? 'medya' : '';
    const authorRoleHtml = article.authorRole ? `<span class="role-badge ${roleClass}">${article.authorRole}</span>` : '';

    // Düzenlenme tarihi
    const editedByHtml = article.editedBy ? `
        <span style="margin-left: 1.5rem;">
            • Düzenleyen: ${article.editedBy}
            <span class="role-badge ${article.editorRole.toLowerCase().includes('medya') ? 'medya' : ''}">${article.editorRole}</span>
            <span style="margin-left: 0.5rem;">${article.editedDate}</span>
        </span>
    ` : '';
    
    // Meta bar içeriği
    document.querySelector('.meta-bar').innerHTML = `
        <div class="author-info">
            <span>${article.author}</span>
            ${authorRoleHtml}
            <span style="margin-left: 1.5rem;">— ${article.date}</span>
        </div>
        ${editedByHtml}
    `;

    // MAKALENİN İÇERİĞİNİ DİNAMİK OLARAK YÜKLE
    document.getElementById('article-content').innerHTML = article.content;
}
