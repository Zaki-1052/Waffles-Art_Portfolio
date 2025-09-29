// illustrations.js - Illustrations page specific functionality
document.addEventListener('DOMContentLoaded', () => {
    // State management
    let currentSort = 'date';
    let currentStyle = 'all';
    let illustrationsData = SITE_CONFIG.pages.illustration.items;

    // Initialize page
    initializePage();
    populateGallery();
    setupEventListeners();

    /**
     * Initialize page elements
     */
    function initializePage() {
        // Update stats
        updateStats();

        // Update commission status
        updateCommissionStatus();

        // Initialize lightbox
        if (PortfolioUtils.Lightbox) {
            PortfolioUtils.Lightbox.init();
        }
    }

    /**
     * Update stats in the stats bar
     */
    function updateStats() {
        const totalCount = illustrationsData.length;
        const shopCount = illustrationsData.filter(item => item.hasShop).length;

        document.getElementById('totalCount').textContent = totalCount;
        document.getElementById('shopCount').textContent = shopCount;
    }

    /**
     * Update commission status
     */
    function updateCommissionStatus() {
        const commissionStatus = document.getElementById('commissionStatus');
        if (commissionStatus) {
            commissionStatus.textContent = SITE_CONFIG.commissions.status;
        }
    }

    /**
     * Populate the gallery with illustration items
     */
    function populateGallery() {
        const gallery = document.getElementById('illustrationGallery');
        if (!gallery) return;

        gallery.innerHTML = '';

        // Sort and filter data
        let filteredData = filterByStyle(illustrationsData);
        let sortedData = sortData(filteredData);

        sortedData.forEach((item, index) => {
            const galleryItem = createIllustrationItem(item, index);
            gallery.appendChild(galleryItem);
        });
    }

    /**
     * Create a single illustration gallery item
     */
    function createIllustrationItem(item, index) {
        const div = document.createElement('div');
        div.className = 'illustration-item';
        div.style.animationDelay = `${index * 0.05}s`;

        // Image
        const img = document.createElement('img');
        img.src = SITE_CONFIG.paths.artworkByCategory.illustration + item.filename;
        img.alt = item.title;
        img.className = 'illustration-image';
        img.loading = 'lazy';

        // Fallback to placeholder
        img.onerror = () => {
            const widths = [400, 400, 400];
            const heights = [500, 600, 700, 400, 550];
            const width = widths[Math.floor(Math.random() * widths.length)];
            const height = heights[Math.floor(Math.random() * heights.length)];
            img.src = `https://picsum.photos/${width}/${height}?random=${item.id + 100}`;
        };

        div.appendChild(img);

        // Shop badge
        if (item.hasShop) {
            const shopBadge = document.createElement('div');
            shopBadge.className = 'shop-badge';
            shopBadge.innerHTML = '🛒 Available';
            div.appendChild(shopBadge);
        }

        // Commission badge
        if (item.commission) {
            const commissionBadge = document.createElement('div');
            commissionBadge.className = 'commission-badge';
            commissionBadge.textContent = 'Commission';
            div.appendChild(commissionBadge);
        }

        // Info overlay
        const info = document.createElement('div');
        info.className = 'illustration-info';

        info.innerHTML = `
            <h3 class="illustration-title">${item.title}</h3>
            <div class="illustration-meta">
                ${item.style.map(s => `<span class="meta-tag">${s}</span>`).join('')}
            </div>
            <p class="illustration-description">${item.description}</p>
            <div class="illustration-actions">
                ${item.hasShop ? `<a href="${SITE_CONFIG.shop.baseUrl}${item.shopLink}" class="action-btn primary" target="_blank">Shop</a>` : ''}
                <button class="action-btn view-btn" data-item-id="${item.id}">View</button>
            </div>
        `;

        div.appendChild(info);

        // Click handler for entire item
        div.addEventListener('click', (e) => {
            if (!e.target.classList.contains('action-btn')) {
                openIllustrationLightbox(item.id);
            }
        });

        return div;
    }

    /**
     * Filter illustrations by style
     */
    function filterByStyle(data) {
        if (currentStyle === 'all') return data;
        return data.filter(item => item.style.includes(currentStyle));
    }

    /**
     * Sort illustrations by selected criteria
     */
    function sortData(data) {
        const sorted = [...data];

        switch (currentSort) {
            case 'date':
                return sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
            case 'popular':
                return sorted.sort((a, b) => b.popular - a.popular);
            case 'name':
                return sorted.sort((a, b) => a.title.localeCompare(b.title));
            default:
                return sorted;
        }
    }

    /**
     * Setup all event listeners
     */
    function setupEventListeners() {
        // Sort buttons
        document.querySelectorAll('.sort-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentSort = btn.dataset.sort;
                populateGallery();
            });
        });

        // Style filter tags
        document.querySelectorAll('.style-tag').forEach(tag => {
            tag.addEventListener('click', () => {
                document.querySelectorAll('.style-tag').forEach(t => t.classList.remove('active'));
                tag.classList.add('active');
                currentStyle = tag.dataset.style;
                populateGallery();
            });
        });

        // Event delegation for view buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('view-btn')) {
                const itemId = parseInt(e.target.dataset.itemId);
                openIllustrationLightbox(itemId);
            }
        });
    }

    /**
     * Open lightbox with illustration details
     * Local function that uses PortfolioUtils.Lightbox
     */
    function openIllustrationLightbox(id) {
        const item = illustrationsData.find(i => i.id === id);
        if (!item || !PortfolioUtils.Lightbox) return;

        PortfolioUtils.Lightbox.open(item, SITE_CONFIG.paths.artworkByCategory.illustration);
    }
});