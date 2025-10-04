// This script assumes that 'wikiArticles' array is defined in 'wiki-data.js'
// and is available globally.

document.addEventListener('DOMContentLoaded', () => {
    // Check for the 'slug' parameter in the URL (for article.html)
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');

    if (slug) {
        // If slug exists, we are on the article detail page
        renderArticle(slug);
    } else if (document.getElementById('wiki-articles-container')) {
        // If the article container exists, we are on the wiki list page
        initializeWikiList();
    }
    
    // Check if the language switcher exists (from index.html/new-footer)
    const languageSwitcher = document.getElementById('language-switcher');
    if (languageSwitcher) {
        setupLanguageSwitcher(languageSwitcher);
    }
});


// -------------------------------------------------------------
// LANGUAGE SWITCHER SETUP (Used for mock-up functionality)
// -------------------------------------------------------------
function setupLanguageSwitcher(switcher) {
    switcher.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        
        if (selectedLang === 'tr') {
            alert("Switching to Turkish version. (Requires separate translation files/logic.)");
            // window.location.href = 'index-tr.html'; // Example of real implementation
        } else if (selectedLang === 'en') {
            // Already English
        }
    });

    // Set initial state based on the current page's lang attribute
    const currentLang = document.documentElement.lang || 'en';
    if (switcher.querySelector(`option[value="${currentLang}"]`)) {
        switcher.value = currentLang;
    }
}


// -------------------------------------------------------------
// WIKI LIST INITIALIZATION
// -------------------------------------------------------------
function initializeWikiList() {
    // Ensure wikiArticles is available before proceeding
    if (typeof wikiArticles === 'undefined') {
        console.error("Error: wikiArticles array not found. Ensure wiki-data.js is loaded.");
        document.getElementById('wiki-articles-container').innerHTML = 
            '<p style="text-align: center; color: var(--text-light);">Wiki data failed to load.</p>';
        return;
    }

    // 1. Sort Articles (Pinned first, then by date)
    const sortedArticles = sortArticles(wikiArticles);
    
    // 2. Populate Category Filter
    populateCategoryFilter(wikiArticles);

    // 3. Render Articles Initially
    renderArticleList(sortedArticles);

    // 4. Attach Search and Filter Events
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
// SORTING FUNCTION: Pinned to top, rest by newest date.
// -------------------------------------------------------------
function sortArticles(articles) {
    const articlesCopy = [...articles]; 

    articlesCopy.sort((a, b) => {
        // Pinned priority
        if (a.isPinned && !b.isPinned) return -1; 
        if (!a.isPinned && b.isPinned) return 1;  

        // If Pinned status is the same, sort by date (Newest first)
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        
        // Return difference for descending order (Newest - Oldest)
        return dateB - dateA;
    });

    return articlesCopy;
}
// -------------------------------------------------------------


function populateCategoryFilter(articles) {
    const filter = document.getElementById('categoryFilter');
    // Add "All" option as the default
    const allOption = document.createElement('option');
    allOption.value = 'All';
    allOption.textContent = 'All Categories';
    filter.appendChild(allOption);

    // Use a Set to prevent duplicate categories
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
        // Search by title
        const matchesSearch = article.title.toLowerCase().includes(searchTerm);
        
        // Filter by category
        const matchesCategory = categoryFilter === 'All' || article.category === categoryFilter;
        
        // Filter by Pinned status (only show pinned if checkbox is checked)
        const matchesPinned = !pinnedFilterChecked || article.isPinned;

        return matchesSearch && matchesCategory && matchesPinned;
    });
    
    // Re-sort the filtered list (to keep Pinned articles at the top)
    const sortedFilteredArticles = sortArticles(filteredArticles);

    renderArticleList(sortedFilteredArticles);
}


function renderArticleList(articles) {
    const container = document.getElementById('wiki-articles-container');
    container.innerHTML = ''; // Clear previous content

    if (articles.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-light);">No articles found matching your criteria.</p>';
        return;
    }

    articles.forEach(article => {
        const articleCard = document.createElement('a');
        articleCard.href = `article.html?slug=${article.slug}`; 
        articleCard.classList.add('wiki-card');

        // Prepare badges
        let badgesHtml = '';
        if (article.isEdited) {
            badgesHtml += '<span class="wiki-badge badge-edited">Edited</span>';
        }
        if (article.isPinned) {
            badgesHtml += '<span class="wiki-badge badge-pinned">Pinned</span>';
        }

        // Prepare author role badge
        const roleClass = article.authorRole && article.authorRole.toLowerCase().includes('media') ? 'medya' : '';
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
// ARTICLE DETAIL PAGE RENDERING
// -------------------------------------------------------------
function renderArticle(slug) {
    const article = wikiArticles.find(a => a.slug === slug);
    
    // If article is not found
    if (!article) {
        document.title = "Article Not Found";
        document.getElementById('article-main-title').textContent = "Article Not Found";
        document.getElementById('article-content').innerHTML = `
            <div style="text-align: center; padding: 4rem 0;">
                <p>The article you are looking for could not be found or has been deleted.</p>
            </div>
        `;
        return;
    }

    // Set Title and Meta info
    document.title = `${article.title} - TAO Wiki`;
    document.getElementById('article-main-title').textContent = article.title;

    // Author role
    const roleClass = article.authorRole.toLowerCase().includes('medya') ? 'medya' : '';
    const authorRoleHtml = article.authorRole ? `<span class="role-badge ${roleClass}">${article.authorRole}</span>` : '';

    // Edited info
    const editorRoleClass = article.editorRole && article.editorRole.toLowerCase().includes('medya') ? 'medya' : '';
    const editedByHtml = article.editedBy ? `
        <span style="margin-left: 1.5rem;">
            • Edited by: ${article.editedBy}
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
