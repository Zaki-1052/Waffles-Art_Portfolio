// animation.js - Animation page specific functionality
document.addEventListener('DOMContentLoaded', () => {
    // State management
    let currentSort = 'date';
    let currentCategory = 'all';
    let animationsData = SITE_CONFIG.pages.animation.items;
    let currentVideoEmbed = null;
    let showingGifPreview = false;

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

        // Initialize video lightbox
        initializeVideoLightbox();
    }

    /**
     * Update stats in the stats bar
     */
    function updateStats() {
        const totalCount = animationsData.length;
        const shopCount = animationsData.filter(item => item.hasShop).length;
        const totalDuration = calculateTotalDuration();

        document.getElementById('totalCount').textContent = totalCount;
        document.getElementById('shopCount').textContent = shopCount;
        document.getElementById('totalDuration').textContent = totalDuration;
    }

    /**
     * Calculate total duration of all animations
     */
    function calculateTotalDuration() {
        let totalSeconds = 0;
        animationsData.forEach(item => {
            const duration = item.duration.split(':');
            const minutes = parseInt(duration[0]);
            const seconds = parseInt(duration[1]);
            totalSeconds += (minutes * 60) + seconds;
        });

        const totalMinutes = Math.floor(totalSeconds / 60);
        const remainingSeconds = totalSeconds % 60;
        return `${totalMinutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
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
     * Initialize video lightbox functionality
     */
    function initializeVideoLightbox() {
        const lightbox = document.getElementById('videoLightbox');
        const closeBtn = document.getElementById('videoLightboxClose');
        const closeX = document.getElementById('videoLightboxCloseX');

        // Close lightbox handlers
        closeBtn.addEventListener('click', closeVideoLightbox);
        closeX.addEventListener('click', closeVideoLightbox);

        // Close on background click
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeVideoLightbox();
            }
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                closeVideoLightbox();
            }
        });

        // GIF preview toggle
        document.getElementById('toggleGifPreview').addEventListener('click', toggleGifPreview);
    }

    /**
     * Populate the gallery with animation items
     */
    function populateGallery() {
        const gallery = document.getElementById('animationGallery');
        if (!gallery) return;

        gallery.innerHTML = '';

        // Sort and filter data
        let filteredData = filterByCategory(animationsData);
        let sortedData = sortData(filteredData);

        sortedData.forEach((item, index) => {
            const galleryItem = createAnimationItem(item, index);
            gallery.appendChild(galleryItem);
        });
    }

    /**
     * Create a single animation gallery item
     */
    function createAnimationItem(item, index) {
        const div = document.createElement('div');
        div.className = 'animation-item';
        div.style.animationDelay = `${index * 0.05}s`;

        // Video thumbnail container
        const thumbnailContainer = document.createElement('div');
        thumbnailContainer.className = 'video-thumbnail-container';

        // Thumbnail image
        const img = document.createElement('img');
        img.src = SITE_CONFIG.paths.artworkByCategory.animation + item.thumbnailImage;
        img.alt = item.title;
        img.className = 'video-thumbnail';
        img.loading = 'lazy';

        // Fallback to placeholder
        img.onerror = () => {
            const width = 400;
            const height = 225; // 16:9 aspect ratio
            img.src = `https://picsum.photos/${width}/${height}?random=${item.id + 200}`;
        };

        thumbnailContainer.appendChild(img);

        // Play button overlay
        const playButton = document.createElement('div');
        playButton.className = 'play-button-overlay';
        playButton.innerHTML = '▶';
        playButton.setAttribute('aria-label', 'Play video');
        thumbnailContainer.appendChild(playButton);

        // Duration badge
        const durationBadge = document.createElement('div');
        durationBadge.className = 'duration-badge-overlay';
        durationBadge.textContent = item.duration;
        thumbnailContainer.appendChild(durationBadge);

        // Project type badge
        const typeBadge = document.createElement('div');
        typeBadge.className = 'project-type-badge';
        typeBadge.textContent = item.projectType;
        thumbnailContainer.appendChild(typeBadge);

        div.appendChild(thumbnailContainer);

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
            commissionBadge.textContent = item.client ? `${item.client}` : 'Commission';
            div.appendChild(commissionBadge);
        }

        // Behind the scenes indicator
        if (item.behindTheScenes.hasContent) {
            const btsIndicator = document.createElement('div');
            btsIndicator.className = 'bts-indicator';
            btsIndicator.innerHTML = '📹 BTS';
            btsIndicator.title = 'Behind the Scenes Content Available';
            div.appendChild(btsIndicator);
        }

        // Info overlay
        const info = document.createElement('div');
        info.className = 'animation-info';

        const softwareList = item.software.map(s => `<span class="software-tag">${s}</span>`).join('');

        info.innerHTML = `
            <h3 class="animation-title">${item.title}</h3>
            <div class="animation-meta">
                <div class="meta-row">
                    <span class="meta-tag duration">${item.duration}</span>
                    <span class="meta-tag framerate">${item.frameRate}fps</span>
                    <span class="meta-tag type">${item.projectType}</span>
                </div>
                <div class="software-used">
                    ${softwareList}
                </div>
            </div>
            <p class="animation-description">${item.description}</p>
            <div class="animation-actions">
                ${item.hasShop ? `<a href="${SITE_CONFIG.shop.baseUrl}${item.shopLink}" class="action-btn primary" target="_blank">Shop</a>` : ''}
                <button class="action-btn secondary" onclick="showGifPreview(${item.id})">GIF Preview</button>
                <button class="action-btn" onclick="openVideoLightbox(${item.id})">Watch</button>
            </div>
        `;

        div.appendChild(info);

        // Click handler for entire item
        div.addEventListener('click', (e) => {
            if (!e.target.classList.contains('action-btn') && !e.target.closest('.action-btn')) {
                openVideoLightbox(item.id);
            }
        });

        return div;
    }

    /**
     * Filter animations by category
     */
    function filterByCategory(data) {
        if (currentCategory === 'all') return data;
        return data.filter(item => item.projectType === currentCategory);
    }

    /**
     * Sort animations by selected criteria
     */
    function sortData(data) {
        const sorted = [...data];

        switch (currentSort) {
            case 'date':
                return sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
            case 'duration':
                return sorted.sort((a, b) => {
                    const aDuration = parseDuration(a.duration);
                    const bDuration = parseDuration(b.duration);
                    return bDuration - aDuration;
                });
            case 'type':
                return sorted.sort((a, b) => a.projectType.localeCompare(b.projectType));
            default:
                return sorted;
        }
    }

    /**
     * Parse duration string to seconds for sorting
     */
    function parseDuration(duration) {
        const parts = duration.split(':');
        const minutes = parseInt(parts[0]);
        const seconds = parseInt(parts[1]);
        return (minutes * 60) + seconds;
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
    }

    /**
     * Open video lightbox with animation details
     */
    window.openVideoLightbox = function(id) {
        const item = animationsData.find(i => i.id === id);
        if (!item) return;

        const lightbox = document.getElementById('videoLightbox');
        const videoContainer = document.getElementById('videoContainer');

        // Reset state
        showingGifPreview = false;
        document.getElementById('toggleGifPreview').textContent = 'Show GIF Preview';

        // Create video embed
        createVideoEmbed(item, videoContainer);

        // Populate lightbox info
        document.getElementById('videoLightboxTitle').textContent = item.title;
        document.getElementById('videoLightboxDescription').textContent = item.description;
        document.getElementById('videoDuration').textContent = item.duration;
        document.getElementById('videoType').textContent = item.projectType;
        document.getElementById('videoFrameRate').textContent = `${item.frameRate}fps`;

        // Software tags
        const softwareTags = document.getElementById('softwareTags');
        softwareTags.innerHTML = item.software.map(s =>
            `<span class="tech-tag software">${s}</span>`
        ).join('');

        // Technique tags
        const techniqueTags = document.getElementById('techniqueTags');
        techniqueTags.innerHTML = item.techniques.map(t =>
            `<span class="tech-tag technique">${t}</span>`
        ).join('');

        // Behind the scenes content
        const behindScenesSection = document.getElementById('behindScenesSection');
        if (item.behindTheScenes.hasContent) {
            behindScenesSection.style.display = 'block';
            document.getElementById('behindScenesDescription').textContent = item.behindTheScenes.description;

            // Process images
            const processImages = document.getElementById('processImages');
            if (item.behindTheScenes.processImages.length > 0) {
                processImages.innerHTML = item.behindTheScenes.processImages.map(img => {
                    const imgSrc = SITE_CONFIG.paths.artworkByCategory.animation + img;
                    return `<img src="${imgSrc}" alt="Process image" class="process-image" onerror="this.src='https://picsum.photos/300/200?random=${item.id + 300}'">`;
                }).join('');
            }

            // Timelapse video
            const timelapseContainer = document.getElementById('timelapseContainer');
            if (item.behindTheScenes.timelapseVideo) {
                timelapseContainer.innerHTML = `
                    <h5>Process Timelapse</h5>
                    <div class="timelapse-embed">
                        <iframe src="${item.behindTheScenes.timelapseVideo}" frameborder="0" allowfullscreen></iframe>
                    </div>
                `;
            } else {
                timelapseContainer.innerHTML = '';
            }
        } else {
            behindScenesSection.style.display = 'none';
        }

        // Shop link
        const shopLink = document.getElementById('videoLightboxShop');
        if (item.hasShop) {
            shopLink.href = SITE_CONFIG.shop.baseUrl + item.shopLink;
            shopLink.style.display = 'inline-block';
        } else {
            shopLink.style.display = 'none';
        }

        // Store current item for GIF toggle
        currentVideoEmbed = item;

        // Show lightbox
        lightbox.classList.add('active');
        document.body.classList.add('lightbox-open');
    };

    /**
     * Create video embed based on video type
     */
    function createVideoEmbed(item, container) {
        container.innerHTML = '';

        const embedWrapper = document.createElement('div');
        embedWrapper.className = 'video-embed-wrapper';

        if (item.videoType === 'youtube') {
            embedWrapper.innerHTML = `
                <iframe
                    src="${item.videoUrl}"
                    frameborder="0"
                    allowfullscreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
            `;
        } else if (item.videoType === 'vimeo') {
            embedWrapper.innerHTML = `
                <iframe
                    src="${item.videoUrl}"
                    frameborder="0"
                    allowfullscreen
                    allow="autoplay; fullscreen; picture-in-picture"
                ></iframe>
            `;
        } else {
            // HTML5 video fallback
            const videoSrc = SITE_CONFIG.paths.artworkByCategory.animation + item.filename;
            embedWrapper.innerHTML = `
                <video controls>
                    <source src="${videoSrc}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
        }

        container.appendChild(embedWrapper);
    }

    /**
     * Toggle between video and GIF preview
     */
    function toggleGifPreview() {
        if (!currentVideoEmbed) return;

        const videoContainer = document.getElementById('videoContainer');
        const toggleBtn = document.getElementById('toggleGifPreview');

        if (!showingGifPreview) {
            // Show GIF preview
            const gifSrc = SITE_CONFIG.paths.artworkByCategory.animation + currentVideoEmbed.gifPreview;
            videoContainer.innerHTML = `
                <div class="gif-preview-wrapper">
                    <img src="${gifSrc}" alt="GIF Preview" class="gif-preview"
                         onerror="this.src='https://picsum.photos/640/360?random=${currentVideoEmbed.id + 400}'">
                    <div class="gif-indicator">GIF Preview</div>
                </div>
            `;
            toggleBtn.textContent = 'Show Video';
            showingGifPreview = true;
        } else {
            // Show video embed
            createVideoEmbed(currentVideoEmbed, videoContainer);
            toggleBtn.textContent = 'Show GIF Preview';
            showingGifPreview = false;
        }
    }

    /**
     * Show GIF preview directly (for gallery button)
     */
    window.showGifPreview = function(id) {
        const item = animationsData.find(i => i.id === id);
        if (!item) return;

        // Create simple GIF preview lightbox
        const existingGifLightbox = document.getElementById('gifPreviewLightbox');
        if (existingGifLightbox) {
            existingGifLightbox.remove();
        }

        const gifLightbox = document.createElement('div');
        gifLightbox.id = 'gifPreviewLightbox';
        gifLightbox.className = 'gif-preview-lightbox';

        const gifSrc = SITE_CONFIG.paths.artworkByCategory.animation + item.gifPreview;

        gifLightbox.innerHTML = `
            <div class="gif-preview-content">
                <div class="gif-preview-header">
                    <h3>${item.title} - GIF Preview</h3>
                    <button class="gif-close-btn">×</button>
                </div>
                <img src="${gifSrc}" alt="GIF Preview" class="gif-preview-image"
                     onerror="this.src='https://picsum.photos/640/360?random=${item.id + 500}'">
                <div class="gif-actions">
                    <button class="action-btn primary" onclick="closeGifPreview(); openVideoLightbox(${id});">Watch Full Video</button>
                    <button class="action-btn" onclick="closeGifPreview();">Close</button>
                </div>
            </div>
        `;

        document.body.appendChild(gifLightbox);

        // Add event listeners
        gifLightbox.querySelector('.gif-close-btn').addEventListener('click', closeGifPreview);
        gifLightbox.addEventListener('click', (e) => {
            if (e.target === gifLightbox) closeGifPreview();
        });

        // Show lightbox
        setTimeout(() => gifLightbox.classList.add('active'), 10);
    };

    /**
     * Close GIF preview lightbox
     */
    window.closeGifPreview = function() {
        const gifLightbox = document.getElementById('gifPreviewLightbox');
        if (gifLightbox) {
            gifLightbox.classList.remove('active');
            setTimeout(() => gifLightbox.remove(), 300);
        }
    };

    /**
     * Close video lightbox
     */
    function closeVideoLightbox() {
        const lightbox = document.getElementById('videoLightbox');
        const videoContainer = document.getElementById('videoContainer');

        lightbox.classList.remove('active');
        document.body.classList.remove('lightbox-open');

        // Clear video content to stop playback
        setTimeout(() => {
            videoContainer.innerHTML = '';
            currentVideoEmbed = null;
            showingGifPreview = false;
        }, 300);
    }

    /**
     * Close video lightbox (global function for onclick handlers)
     */
    window.closeVideoLightbox = closeVideoLightbox;
});