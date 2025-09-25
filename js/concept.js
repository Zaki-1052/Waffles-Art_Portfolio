// concept.js - Concept Art page specific functionality with process workflow features
document.addEventListener('DOMContentLoaded', () => {
    // State management
    let currentSort = 'date';
    let currentCategory = 'all';
    let currentViewMode = 'final'; // 'final' or 'process'
    let conceptsData = SITE_CONFIG.pages.concept.items;
    let currentLightboxIndex = 0;
    let currentProcessStage = 'final';

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

        // Initialize enhanced lightbox
        if (PortfolioUtils.Lightbox) {
            PortfolioUtils.Lightbox.init();
        }

        // Set active page in navigation
        PortfolioUtils.Navigation.setActivePage('concept.html');
    }

    /**
     * Update stats in the stats bar
     */
    function updateStats() {
        const totalCount = conceptsData.length;
        const shopCount = conceptsData.filter(item => item.hasShop).length;
        const processCount = conceptsData.reduce((total, item) => total + item.processImages.length, 0);

        document.getElementById('totalCount').textContent = totalCount;
        document.getElementById('shopCount').textContent = shopCount;
        document.getElementById('processCount').textContent = processCount;
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
     * Populate the gallery with concept art items
     */
    function populateGallery() {
        const gallery = document.getElementById('conceptGallery');
        if (!gallery) return;

        gallery.innerHTML = '';

        // Sort and filter data
        let filteredData = filterByCategory(conceptsData);
        let sortedData = sortData(filteredData);

        sortedData.forEach((item, index) => {
            const galleryItem = createConceptItem(item, index);
            gallery.appendChild(galleryItem);
        });

        // Update gallery layout for concept art
        updateGalleryLayout();
    }

    /**
     * Create a single concept art gallery item
     */
    function createConceptItem(item, index) {
        const div = document.createElement('div');
        div.className = 'concept-item';
        div.style.animationDelay = `${index * 0.05}s`;
        div.dataset.id = item.id;

        // Determine image source based on view mode
        const imageSource = currentViewMode === 'process' ?
            (item.processImages[0] || item.finalImage) :
            item.finalImage;

        // Main image
        const img = document.createElement('img');
        img.src = SITE_CONFIG.paths.artworkByCategory.concept + imageSource;
        img.alt = item.title;
        img.className = 'concept-image';
        img.loading = 'lazy';

        // Fallback to placeholder
        img.onerror = () => {
            const widths = [400, 450, 500];
            const heights = [300, 400, 500, 600];
            const width = widths[Math.floor(Math.random() * widths.length)];
            const height = heights[Math.floor(Math.random() * heights.length)];
            img.src = `https://picsum.photos/${width}/${height}?random=${item.id + 200}`;
        };

        div.appendChild(img);

        // Process indicator
        if (currentViewMode === 'process') {
            const processIndicator = document.createElement('div');
            processIndicator.className = 'process-indicator';
            processIndicator.innerHTML = `<span>Process View</span>`;
            div.appendChild(processIndicator);
        }

        // Category badge
        const categoryBadge = document.createElement('div');
        categoryBadge.className = `category-badge category-${item.category}`;
        categoryBadge.textContent = item.category.charAt(0).toUpperCase() + item.category.slice(1);
        div.appendChild(categoryBadge);

        // Complexity indicator
        const complexityIndicator = document.createElement('div');
        complexityIndicator.className = 'complexity-indicator';
        const complexity = item.complexity;
        const complexityLevel = complexity >= 90 ? 'high' : complexity >= 70 ? 'medium' : 'low';
        complexityIndicator.innerHTML = `
            <div class="complexity-bar complexity-${complexityLevel}">
                <div class="complexity-fill" style="width: ${complexity}%"></div>
            </div>
            <span class="complexity-text">${complexity}%</span>
        `;
        div.appendChild(complexityIndicator);

        // Shop badge
        if (item.hasShop) {
            const shopBadge = document.createElement('div');
            shopBadge.className = 'shop-badge';
            shopBadge.innerHTML = '🛒 Available';
            div.appendChild(shopBadge);
        }

        // Process stages mini-preview (only in final view mode)
        if (currentViewMode === 'final' && item.processImages.length > 0) {
            const processPreview = document.createElement('div');
            processPreview.className = 'process-preview';

            const stages = ['sketch', 'refined', 'final'];
            stages.forEach((stage, stageIndex) => {
                if (item.processImages[stageIndex]) {
                    const stagePreview = document.createElement('img');
                    stagePreview.className = 'stage-preview';
                    stagePreview.src = SITE_CONFIG.paths.artworkByCategory.concept + item.processImages[stageIndex];
                    stagePreview.alt = `${item.title} - ${stage}`;
                    stagePreview.title = stage.charAt(0).toUpperCase() + stage.slice(1);
                    processPreview.appendChild(stagePreview);
                }
            });

            div.appendChild(processPreview);
        }

        // Info overlay
        const info = document.createElement('div');
        info.className = 'concept-info';

        info.innerHTML = `
            <h3 class="concept-title">${item.title}</h3>
            <div class="concept-meta">
                <span class="meta-tag category">${item.category}</span>
                <span class="meta-tag time">${item.timeSpent}</span>
                <span class="meta-tag revisions">${item.revisionStages} revisions</span>
            </div>
            <p class="concept-description">${item.description}</p>
            <div class="software-list">
                ${item.software.map(s => `<span class="software-tag">${s}</span>`).join('')}
            </div>
            <div class="concept-actions">
                ${item.hasShop ? `<a href="${SITE_CONFIG.shop.baseUrl}${item.shopLink}" class="action-btn primary" target="_blank">Shop</a>` : ''}
                <button class="action-btn" onclick="openConceptLightbox(${item.id})">View Process</button>
            </div>
        `;

        div.appendChild(info);

        // Click handler for entire item
        div.addEventListener('click', (e) => {
            if (!e.target.classList.contains('action-btn') && !e.target.closest('.action-btn')) {
                openConceptLightbox(item.id);
            }
        });

        return div;
    }

    /**
     * Filter concepts by category
     */
    function filterByCategory(data) {
        if (currentCategory === 'all') return data;
        return data.filter(item => item.category === currentCategory);
    }

    /**
     * Sort concepts by selected criteria
     */
    function sortData(data) {
        const sorted = [...data];

        switch (currentSort) {
            case 'date':
                return sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
            case 'complexity':
                return sorted.sort((a, b) => b.complexity - a.complexity);
            case 'category':
                return sorted.sort((a, b) => a.category.localeCompare(b.category));
            default:
                return sorted;
        }
    }

    /**
     * Update gallery layout for responsive design
     */
    function updateGalleryLayout() {
        const gallery = document.getElementById('conceptGallery');
        if (!gallery) return;

        // Add masonry-style layout class
        gallery.classList.add('masonry-layout');

        // Apply stagger animation to items
        const items = gallery.querySelectorAll('.concept-item');
        items.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
        });
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

        // Category filter tags
        document.querySelectorAll('.category-tag').forEach(tag => {
            tag.addEventListener('click', () => {
                document.querySelectorAll('.category-tag').forEach(t => t.classList.remove('active'));
                tag.classList.add('active');
                currentCategory = tag.dataset.category;
                populateGallery();
            });
        });

        // Process toggle buttons
        document.querySelectorAll('.process-toggle').forEach(toggle => {
            toggle.addEventListener('click', () => {
                document.querySelectorAll('.process-toggle').forEach(t => t.classList.remove('active'));
                toggle.classList.add('active');
                currentViewMode = toggle.dataset.mode;
                populateGallery();
            });
        });

        // Lightbox navigation
        document.getElementById('prevBtn')?.addEventListener('click', () => navigateLightbox(-1));
        document.getElementById('nextBtn')?.addEventListener('click', () => navigateLightbox(1));

        // Process stage buttons in lightbox
        document.querySelectorAll('.process-stage-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.process-stage-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentProcessStage = btn.dataset.stage;
                updateLightboxProcessStage();
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            const lightbox = document.getElementById('lightbox');
            if (lightbox.classList.contains('active')) {
                switch(e.key) {
                    case 'ArrowLeft':
                        navigateLightbox(-1);
                        break;
                    case 'ArrowRight':
                        navigateLightbox(1);
                        break;
                    case '1':
                        setProcessStage('sketch');
                        break;
                    case '2':
                        setProcessStage('refined');
                        break;
                    case '3':
                        setProcessStage('final');
                        break;
                    case 'Escape':
                        closeLightbox();
                        break;
                }
            }
        });
    }

    /**
     * Navigate lightbox to next/previous item
     */
    function navigateLightbox(direction) {
        const filteredData = filterByCategory(conceptsData);
        const sortedData = sortData(filteredData);

        currentLightboxIndex += direction;
        if (currentLightboxIndex < 0) currentLightboxIndex = sortedData.length - 1;
        if (currentLightboxIndex >= sortedData.length) currentLightboxIndex = 0;

        const item = sortedData[currentLightboxIndex];
        if (item) {
            openConceptLightbox(item.id, false);
        }
    }

    /**
     * Set process stage in lightbox
     */
    function setProcessStage(stage) {
        document.querySelectorAll('.process-stage-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.stage === stage);
        });
        currentProcessStage = stage;
        updateLightboxProcessStage();
    }

    /**
     * Update lightbox image based on current process stage
     */
    function updateLightboxProcessStage() {
        const lightboxImage = document.getElementById('lightboxImage');
        if (!lightboxImage) return;

        const filteredData = filterByCategory(conceptsData);
        const sortedData = sortData(filteredData);
        const item = sortedData[currentLightboxIndex];

        if (!item) return;

        let imageSource;
        const stageIndex = SITE_CONFIG.pages.concept.processStages.indexOf(currentProcessStage);

        if (currentProcessStage === 'final') {
            imageSource = item.finalImage;
        } else if (item.processImages[stageIndex]) {
            imageSource = item.processImages[stageIndex];
        } else {
            imageSource = item.finalImage; // fallback
        }

        lightboxImage.src = SITE_CONFIG.paths.artworkByCategory.concept + imageSource;

        // Add transition effect
        lightboxImage.style.opacity = '0.7';
        setTimeout(() => {
            lightboxImage.style.opacity = '1';
        }, 150);
    }

    /**
     * Open enhanced lightbox with concept details and process view
     * Made global so it can be called from onclick handlers
     */
    window.openConceptLightbox = function(id, resetStage = true) {
        const item = conceptsData.find(i => i.id === id);
        if (!item) return;

        // Update current index for navigation
        const filteredData = filterByCategory(conceptsData);
        const sortedData = sortData(filteredData);
        currentLightboxIndex = sortedData.findIndex(i => i.id === id);

        if (resetStage) {
            currentProcessStage = 'final';
        }

        // Populate lightbox content
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightboxImage');
        const lightboxTitle = document.getElementById('lightboxTitle');
        const lightboxCategory = document.getElementById('lightboxCategory');
        const lightboxDescription = document.getElementById('lightboxDescription');
        const softwareTags = document.getElementById('softwareTags');
        const techniqueTags = document.getElementById('techniqueTags');
        const timeSpent = document.getElementById('timeSpent');
        const revisionStages = document.getElementById('revisionStages');
        const complexityRating = document.getElementById('complexityRating');
        const inspirationText = document.getElementById('inspirationText');
        const processNotesText = document.getElementById('processNotesText');
        const lightboxShop = document.getElementById('lightboxShop');

        // Set content
        lightboxTitle.textContent = item.title;
        lightboxCategory.textContent = item.category.charAt(0).toUpperCase() + item.category.slice(1);
        lightboxDescription.textContent = item.description;

        // Software tags
        softwareTags.innerHTML = item.software.map(s =>
            `<span class="tech-tag software">${s}</span>`
        ).join('');

        // Technique tags
        techniqueTags.innerHTML = item.techniques.map(t =>
            `<span class="tech-tag technique">${t}</span>`
        ).join('');

        // Project details
        timeSpent.textContent = item.timeSpent;
        revisionStages.textContent = item.revisionStages;
        complexityRating.innerHTML = `${item.complexity}% <div class="complexity-bar-small"><div class="complexity-fill" style="width: ${item.complexity}%"></div></div>`;

        // Inspiration and process notes
        inspirationText.textContent = item.inspiration;
        processNotesText.textContent = item.processNotes;

        // Shop link
        if (item.hasShop) {
            lightboxShop.href = SITE_CONFIG.shop.baseUrl + item.shopLink;
            lightboxShop.style.display = 'inline-block';
        } else {
            lightboxShop.style.display = 'none';
        }

        // Set initial image and update process stage buttons
        updateLightboxProcessStage();

        // Show process stage buttons
        const processStageButtons = document.querySelectorAll('.process-stage-btn');
        processStageButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.stage === currentProcessStage);
        });

        // Show lightbox
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    /**
     * Close lightbox
     * Made global for accessibility
     */
    window.closeLightbox = function() {
        const lightbox = document.getElementById('lightbox');
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    };

    // Close lightbox event listeners
    document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);
    document.getElementById('lightboxCloseX')?.addEventListener('click', closeLightbox);

    // Close lightbox when clicking outside content
    document.getElementById('lightbox')?.addEventListener('click', (e) => {
        if (e.target.id === 'lightbox') {
            closeLightbox();
        }
    });
});