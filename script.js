// TAO Studios Wiki Sistemi JavaScript Dosyası

document.addEventListener('DOMContentLoaded', () => {

    // --- GENEL YARDIMCI FONKSİYONLAR ---
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');

    // --- BÖLÜM 1: WIKI LİSTELEME VE FİLTRELEME (wiki.html) ---
    if (document.getElementById('wiki-articles-container')) {
        const container = document.getElementById('wiki-articles-container');
        const searchInput = document.getElementById('searchInput');
        const categoryFilter = document.getElementById('categoryFilter');
        const pinnedFilter = document.getElementById('pinnedFilter');
        const searchButton = document.querySelector('.btn-search');
        
        // Kategori filtrelerini doldur
        function populateCategories() {
            // WIKI_ARTICLES, wiki-data.js'den gelir
            const categories = [...new Set(WIKI_ARTICLES.map(article => article.category))];
            categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                categoryFilter.appendChild(option);
            });
        }

        // Makale kartını oluşturma fonksiyonu
        function createArticleCard(article) {
            const card = document.createElement('a');
            card.href = `article.html?id=${article.id}`; 
            card.className = 'wiki-card';

            let badgesHTML = '';
            if (article.isEdited) {
                badgesHTML += `<span class="wiki-badge badge-edited">Düzenlendi</span>`;
            }
            if (article.isPinned) {
                badgesHTML += `<span class="wiki-badge badge-pinned">Sabit</span>`;
            }

            const summaryText = article.content.replace(/<[^>]*>/g, '').substring(0, 150).trim() + '...';
            const roleClass = article.role === 'Medya Ekibi' ? 'medya' : '';

            card.innerHTML = `
                <div>
                    <h2>${article.title}</h2>
                    <span class="wiki-badges">${badgesHTML}</span>
                </div>
                <p class="wiki-summary">${summaryText}</p>
                <div class="wiki-meta">
                    <span class="author-role ${roleClass}">${article.author} (${article.role})</span>
                    <span>— ${article.date.split(' ')[0]} • ${article.category}</span>
                </div>
            `;
            return card;
        }

        // Filtreleme ve Arama İşlevini Çalıştıran Ana Fonksiyon
        function renderArticles() {
            container.innerHTML = '';
            const searchTerm = searchInput.value.toLowerCase();
            const selectedCategory = categoryFilter.value;
            const showPinned = pinnedFilter.checked;

            const filteredArticles = WIKI_ARTICLES.filter(article => {
                const matchesSearch = article.title.toLowerCase().includes(searchTerm);
                const matchesCategory = selectedCategory === 'Tümü' || article.category === selectedCategory;
                const matchesPinned = !showPinned || article.isPinned;
                
                return matchesSearch && matchesCategory && matchesPinned;
            });

            if (filteredArticles.length === 0) {
                container.innerHTML = '<p style="padding: 2rem; text-align: center;">Aradığınız kriterlere uygun makale bulunamadı.</p>';
            } else {
                filteredArticles.sort((a, b) => (b.isPinned - a.isPinned));
                
                filteredArticles.forEach(article => {
                    container.appendChild(createArticleCard(article));
                });
            }
        }

        // Olay Dinleyicileri
        searchButton.addEventListener('click', renderArticles);
        searchInput.addEventListener('input', renderArticles);
        categoryFilter.addEventListener('change', renderArticles);
        pinnedFilter.addEventListener('change', renderArticles);

        // Başlangıçta çalıştır
        populateCategories();
        renderArticles();
    }


    // --- BÖLÜM 2: WIKI DETAY SAYFASI (article.html) ---
    else if (document.getElementById('article-container')) {
        const container = document.getElementById('article-container');
        
        function loadArticle() {
            if (!articleId) {
                container.innerHTML = '<h1 style="text-align: center;">Geçersiz Makale Kimliği</h1>';
                return;
            }

            const article = WIKI_ARTICLES.find(a => a.id === articleId);

            if (article) {
                document.getElementById('article-title').textContent = article.title;
                document.getElementById('article-main-title').textContent = article.title;
                
                const roleClass = article.role === 'Medya Ekibi' ? 'medya' : '';

                // Yazar ve Düzenleme Meta Bilgisi
                let metaHTML = `
                    <span class="author-info">
                        ${article.author} <span class="wiki-badge role-badge ${roleClass}">${article.role}</span>
                    </span>
                    <span class="date-info">
                        — ${article.date} • ${article.category}
                    </span>
                `;

                if (article.isEdited) {
                    metaHTML += `
                    <span class="editor-info" style="margin-left: 1.5rem;">
                        • Düzenlendi: ${article.author} <span class="wiki-badge role-badge ${roleClass}">${article.role}</span> — 26 Eylül 2025 02:51
                    </span>
                    `; 
                }

                document.querySelector('.meta-bar').innerHTML = metaHTML; 
                document.getElementById('article-content').innerHTML = article.content;

            } else {
                container.innerHTML = '<h1 style="text-align: center;">Makale Bulunamadı (404)</h1><p style="text-align: center; margin-top: 1rem;"><a href="wiki.html" class="back-to-wiki">Geri dön</a></p>';
            }
        }
        
        loadArticle();
    }

});
