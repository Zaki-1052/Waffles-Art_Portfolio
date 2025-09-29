// main.js - WafflesForArt Portfolio Core JavaScript Utilities

/**
 * Portfolio Utilities Module
 * Core functionality for the WafflesForArt portfolio website
 */
const PortfolioUtils = (function() {
    'use strict';

    // ============================================================================
    // NAVIGATION MODULE
    // ============================================================================
    
    const Navigation = {
        /**
         * Initialize navigation with mobile menu toggle
         */
        init() {
            this.buildFromConfig(SITE_CONFIG);
            this.setupMobileMenu();
            this.setupDropdowns();
            this.markActivePage();
            this.setupSmoothScroll();
        },

        /**
         * Setup mobile menu toggle functionality
         */
        setupMobileMenu() {
            const toggle = document.getElementById('mobileMenuToggle');
            const menu = document.getElementById('navMenu');
            const navbar = document.querySelector('.navbar');

            if (!toggle || !menu || !navbar) return;

            // Calculate and set navbar height dynamically
            const updateNavbarHeight = () => {
                const height = navbar.getBoundingClientRect().height;
                document.documentElement.style.setProperty('--navbar-height', `${height}px`);
            };

            // Initial calculation
            updateNavbarHeight();

            // Update on resize
            window.addEventListener('resize', updateNavbarHeight);

            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                const isActive = menu.classList.contains('active');

                if (isActive) {
                    this.closeMobileMenu(toggle, menu);
                } else {
                    this.openMobileMenu(toggle, menu);
                }
            });

            // Close menu when clicking outside or on backdrop
            document.addEventListener('click', (e) => {
                if (menu.classList.contains('active') &&
                    !toggle.contains(e.target) &&
                    !menu.contains(e.target)) {
                    this.closeMobileMenu(toggle, menu);
                }
            });

            // Close menu on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && menu.classList.contains('active')) {
                    this.closeMobileMenu(toggle, menu);
                }
            });

            // Close menu when clicking on menu links
            menu.addEventListener('click', (e) => {
                if (e.target.tagName === 'A' && e.target.getAttribute('href') !== '#') {
                    this.closeMobileMenu(toggle, menu);
                }
            });
        },

        /**
         * Open mobile menu with animation
         */
        openMobileMenu(toggle, menu) {
            menu.classList.add('active');
            toggle.classList.add('active');
            // CSS handles the hamburger to X animation
            document.body.style.overflow = 'hidden';
        },

        /**
         * Close mobile menu with animation
         */
        closeMobileMenu(toggle, menu) {
            menu.classList.remove('active');
            toggle.classList.remove('active');
            // CSS handles the X to hamburger animation
            document.body.style.overflow = '';
        },

        /**
         * Setup dropdown menu interactions
         */
        setupDropdowns() {
            const dropdownItems = document.querySelectorAll('.nav-item');
            
            dropdownItems.forEach(item => {
                const dropdown = item.querySelector('.dropdown');
                if (!dropdown) return;
                
                // Mobile: click to toggle
                if (window.innerWidth <= 768) {
                    item.addEventListener('click', (e) => {
                        if (e.target.classList.contains('nav-link')) {
                            e.preventDefault();
                            item.classList.toggle('active');
                        }
                    });
                }
            });
        },

        /**
         * Mark current page as active in navigation
         */
        markActivePage() {
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const navLinks = document.querySelectorAll('.nav-link');
            
            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                    link.classList.add('active');
                }
            });
        },

        /**
         * Setup smooth scrolling for anchor links
         */
        setupSmoothScroll() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const target = document.querySelector(targetId);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        },

        /**
         * Build navigation from config
         */
        buildFromConfig(config) {
            const navMenu = document.getElementById('navMenu');
            if (!navMenu || !config.navigation) return;
            
            navMenu.innerHTML = '';
            
            config.navigation.main.forEach(item => {
                const li = document.createElement('li');
                li.className = 'nav-item';
                
                const a = document.createElement('a');
                a.href = item.href;
                a.className = 'nav-link';
                if (item.active) a.classList.add('active');
                if (item.external) {
                    a.target = '_blank';
                    a.rel = 'noopener';
                }
                
                let linkContent = item.label;
                if (item.hasDropdown) {
                    linkContent += ' <span class="dropdown-arrow">▼</span>';
                }
                a.innerHTML = linkContent;
                
                li.appendChild(a);
                
                // Add dropdown if exists
                if (item.dropdown) {
                    const dropdown = document.createElement('div');
                    dropdown.className = 'dropdown';
                    
                    item.dropdown.forEach(dropItem => {
                        const dropLink = document.createElement('a');
                        dropLink.href = dropItem.href;
                        dropLink.textContent = dropItem.label;
                        dropdown.appendChild(dropLink);
                    });
                    
                    li.appendChild(dropdown);
                }
                
                navMenu.appendChild(li);
            });
        }
    };

    // ============================================================================
    // GALLERY MODULE
    // ============================================================================
    
    const Gallery = {
        /**
         * Initialize gallery with filtering and lazy loading
         */
        init() {
            // Don't set up filters here - they'll be set up after population
        },

        /**
         * Create gallery from configuration
         */
        populate(containerId, items, options = {}) {
            const container = document.getElementById(containerId);
            if (!container) return;

            container.innerHTML = '';

            // Prepare container for masonry layout
            container.style.position = 'relative';

            items.forEach((item, index) => {
                const element = this.createGalleryItem(item, index, options);
                container.appendChild(element);
            });

            // Initialize masonry layout
            if (options.useMasonry !== false) {
                this.Masonry.init(container, options);
            }

            // Trigger lazy loading
            if (options.lazyLoad) {
                this.observeImages();
            }
        },

        /**
         * Create a single gallery item element
         */
        createGalleryItem(item, index, options = {}) {
            const div = document.createElement('div');
            div.className = 'gallery-item';
            div.dataset.category = item.category || 'uncategorized';
            div.style.animationDelay = `${index * 0.1}s`;
            
            // Image container for loading states
            const imgContainer = document.createElement('div');
            imgContainer.className = 'gallery-image-container';

            // Image
            const img = document.createElement('img');
            img.dataset.src = item.image;
            img.alt = item.title || `Artwork ${index + 1}`;
            img.className = 'gallery-image';

            if (options.lazyLoad) {
                img.classList.add('lazy');
                img.loading = 'lazy';

                // Add loading skeleton
                const skeleton = document.createElement('div');
                skeleton.className = 'image-skeleton';
                imgContainer.appendChild(skeleton);

                // Don't set src initially for lazy loading
                img.src = '';
            } else {
                img.src = item.image;
            }

            // Fallback to placeholder
            img.onerror = () => {
                // Generate varied dimensions for placeholders
                const widths = [400, 400, 400];
                const heights = [300, 500, 400, 600, 350];
                const width = widths[Math.floor(Math.random() * widths.length)];
                const height = heights[Math.floor(Math.random() * heights.length)];
                img.src = `https://picsum.photos/${width}/${height}?random=${index + 20}`;
            };

            imgContainer.appendChild(img);
            div.appendChild(imgContainer);
            
            // Shop indicator
            if (item.hasShop) {
                const shopBadge = document.createElement('span');
                shopBadge.className = 'shop-indicator';
                shopBadge.textContent = 'Available in Shop';
                div.appendChild(shopBadge);
            }
            
            // Overlay
            if (options.showOverlay !== false) {
                const overlay = document.createElement('div');
                overlay.className = 'gallery-overlay';
                overlay.innerHTML = `
                    <h3 class="gallery-title">${item.title || `Artwork ${index + 1}`}</h3>
                    <p class="gallery-category">${this.formatCategory(item.category)}</p>
                `;
                div.appendChild(overlay);
            }
            
            // Click handler
            if (options.onClick) {
                div.addEventListener('click', () => options.onClick(item, index));
            }
            
            return div;
        },

        /**
         * Format category name for display
         */
        formatCategory(category) {
            if (!category) return 'Uncategorized';
            return category.charAt(0).toUpperCase() + category.slice(1);
        },

        /**
         * Setup category filter functionality
         */
        setupFilters() {
            const filterButtons = document.querySelectorAll('.filter-btn');
            const galleryItems = document.querySelectorAll('.gallery-item');

            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Update active state
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');

                    const filterValue = button.dataset.filter;

                    // Filter items
                    galleryItems.forEach((item, index) => {
                        const shouldShow = filterValue === 'all' || item.dataset.category === filterValue;

                        if (shouldShow) {
                            item.style.display = 'block';
                            // Re-animate
                            item.style.animation = 'none';
                            setTimeout(() => {
                                item.style.animation = `fadeInScale 0.6s ease ${index * 0.05}s both`;
                            }, 10);
                        } else {
                            item.style.display = 'none';
                        }
                    });

                    // Recalculate masonry layout after filtering
                    setTimeout(() => {
                        const container = document.querySelector('.gallery-grid');
                        if (container && this.Masonry && this.Masonry.container === container) {
                            this.Masonry.reflow();
                        }
                    }, 50);
                });
            });
        },

        /**
         * Setup lazy loading for images
         */
        setupLazyLoading() {
            if ('IntersectionObserver' in window) {
                this.observeImages();
            } else {
                // Fallback: load all images
                document.querySelectorAll('img.lazy').forEach(img => {
                    img.src = img.dataset.src;
                });
            }
        },

        /**
         * Observe images for lazy loading with masonry layout integration
         */
        observeImages() {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            // Load the image
                            img.src = img.dataset.src;
                            img.classList.remove('lazy');

                            // Handle loading completion
                            img.addEventListener('load', () => {
                                this.handleImageLoaded(img);
                            });

                            img.addEventListener('error', () => {
                                this.handleImageLoaded(img);
                            });

                            observer.unobserve(img);
                        }
                    }
                });
            }, {
                rootMargin: '100px 0px', // Load images slightly before they come into view
                threshold: 0.01
            });

            document.querySelectorAll('img.lazy').forEach(img => {
                imageObserver.observe(img);
            });
        },

        /**
         * Handle image loaded event for masonry integration
         */
        handleImageLoaded(img) {
            // Remove skeleton loading state
            const container = img.closest('.gallery-image-container');
            if (container) {
                const skeleton = container.querySelector('.image-skeleton');
                if (skeleton) {
                    skeleton.remove();
                }
            }

            // Trigger masonry reflow if masonry is active
            const galleryContainer = img.closest('.gallery-grid');
            if (galleryContainer && this.Masonry && this.Masonry.container === galleryContainer) {
                // Debounce multiple image loads
                clearTimeout(this.reflowTimer);
                this.reflowTimer = setTimeout(() => {
                    this.Masonry.reflow();
                }, 100);
            }
        },

        /**
         * Masonry layout sub-module
         */
        Masonry: {
            columnHeights: [],
            containerWidth: 0,
            columnWidth: 0,
            columnCount: 0,
            gap: 24,

            /**
             * Initialize masonry layout
             */
            init(container, options = {}) {
                this.container = container;
                this.options = {
                    minColumnWidth: options.minColumnWidth || 300,
                    gap: options.gap || 24,
                    ...options
                };

                // Set responsive gap based on screen size
                this.setResponsiveGap();

                this.calculateLayout();
                this.positionItems();
                this.setupResizeHandler();
            },

            /**
             * Set responsive gap sizes
             */
            setResponsiveGap() {
                const containerWidth = this.container.offsetWidth;
                if (containerWidth <= 480) {
                    this.options.gap = 16; // Smaller gap on mobile
                } else if (containerWidth <= 768) {
                    this.options.gap = 20; // Medium gap on tablets
                } else {
                    this.options.gap = 24; // Full gap on desktop
                }
            },

            /**
             * Calculate layout parameters with responsive breakpoints
             */
            calculateLayout() {
                this.containerWidth = this.container.offsetWidth;
                this.gap = this.options.gap;

                // Responsive column count based on viewport width
                let maxColumns;
                if (this.containerWidth <= 480) {
                    maxColumns = 1; // Single column on very small screens
                } else if (this.containerWidth <= 768) {
                    maxColumns = 2; // Two columns on mobile/small tablets
                } else if (this.containerWidth <= 1024) {
                    maxColumns = 3; // Three columns on tablets
                } else {
                    maxColumns = 4; // Four columns on desktop and larger
                }

                // Calculate column count based on container width, minimum column width, and max columns
                const possibleColumns = Math.floor(this.containerWidth / (this.options.minColumnWidth + this.gap));
                this.columnCount = Math.max(1, Math.min(maxColumns, possibleColumns));

                // Calculate actual column width
                this.columnWidth = (this.containerWidth - (this.gap * (this.columnCount - 1))) / this.columnCount;

                // Initialize column heights
                this.columnHeights = new Array(this.columnCount).fill(0);
            },

            /**
             * Position all gallery items using masonry algorithm
             */
            positionItems() {
                const items = this.container.querySelectorAll('.gallery-item');
                let loadedImages = 0;
                const totalImages = items.length;

                items.forEach((item) => {
                    // Position item initially (may need repositioning after image loads)
                    this.positionItem(item);

                    // Wait for image to load before final positioning
                    const img = item.querySelector('.gallery-image');
                    if (img) {
                        if (img.complete && img.naturalHeight !== 0) {
                            // Image already loaded
                            this.repositionItem(item);
                            loadedImages++;
                            if (loadedImages === totalImages) {
                                this.finalizeLayout();
                            }
                        } else {
                            // Wait for image to load
                            img.addEventListener('load', () => {
                                this.repositionItem(item);
                                loadedImages++;
                                if (loadedImages === totalImages) {
                                    this.finalizeLayout();
                                }
                            });

                            img.addEventListener('error', () => {
                                // Even on error, count as loaded for layout completion
                                loadedImages++;
                                if (loadedImages === totalImages) {
                                    this.finalizeLayout();
                                }
                            });
                        }
                    }
                });
            },

            /**
             * Position a single item in the masonry grid
             */
            positionItem(item) {
                // Find the shortest column
                const shortestColumnIndex = this.columnHeights.indexOf(Math.min(...this.columnHeights));

                // Calculate position
                const x = shortestColumnIndex * (this.columnWidth + this.gap);
                const y = this.columnHeights[shortestColumnIndex];

                // Apply positioning
                item.style.position = 'absolute';
                item.style.left = `${x}px`;
                item.style.top = `${y}px`;
                item.style.width = `${this.columnWidth}px`;
                item.style.transition = 'all 0.3s ease';

                // Store column index for later reference
                item.dataset.columnIndex = shortestColumnIndex;
            },

            /**
             * Reposition item after image has loaded
             */
            repositionItem(item) {
                const columnIndex = parseInt(item.dataset.columnIndex);
                const itemHeight = item.offsetHeight;

                // Update column height
                this.columnHeights[columnIndex] += itemHeight + this.gap;
            },

            /**
             * Finalize layout by setting container height
             */
            finalizeLayout() {
                const maxHeight = Math.max(...this.columnHeights);
                this.container.style.height = `${maxHeight - this.gap}px`;
            },

            /**
             * Recalculate and reposition all items (for responsive behavior)
             */
            reflow() {
                // Reset container
                this.container.style.height = 'auto';

                // Update responsive gap
                this.setResponsiveGap();

                // Recalculate layout
                this.calculateLayout();

                // Reset all item positioning
                const items = this.container.querySelectorAll('.gallery-item');
                items.forEach(item => {
                    item.style.position = '';
                    item.style.left = '';
                    item.style.top = '';
                    item.style.width = '';
                });

                // Reposition items
                this.positionItems();
            },

            /**
             * Setup responsive resize handler
             */
            setupResizeHandler() {
                let resizeTimer;
                const debouncedResize = () => {
                    clearTimeout(resizeTimer);
                    resizeTimer = setTimeout(() => {
                        this.reflow();
                    }, 250);
                };

                window.addEventListener('resize', debouncedResize);
            }
        }
    };

    // ============================================================================
    // ANIMATIONS MODULE
    // ============================================================================
    
    const Animations = {
        /**
         * Initialize all animations
         */
        init() {
            this.setupClouds();
            this.setupSparkles();
            this.setupParallax();
        },

        /**
         * Create floating cloud elements with whimsical animations
         */
        setupClouds() {
            // Don't create clouds if they already exist
            if (document.querySelector('.cloud')) return;

            const cloudCount = 5; // Increased count for more whimsy
            const cloudContainer = document.body;

            for (let i = 1; i <= cloudCount; i++) {
                const cloud = document.createElement('div');
                cloud.className = `cloud cloud${i}`;

                // Generate varied cloud sizes
                const baseSize = 80 + Math.random() * 60; // 80-140px
                const aspectRatio = 0.3 + Math.random() * 0.4; // 0.3-0.7 ratio

                cloud.style.width = `${baseSize}px`;
                cloud.style.height = `${baseSize * aspectRatio}px`;

                // Varied positioning and animations
                if (i === 1) {
                    cloud.style.top = '15%';
                    cloud.style.left = '-150px';
                    cloud.style.animation = `float 25s infinite linear, cloudBreathe 6s ease-in-out infinite`;
                    cloud.style.animationDelay = '0s, 1s';
                } else if (i === 2) {
                    cloud.style.top = '35%';
                    cloud.style.right = '-120px';
                    cloud.style.animation = `floatReverse 30s infinite linear, cloudBreathe 8s ease-in-out infinite`;
                    cloud.style.animationDelay = '5s, 2s';
                } else if (i === 3) {
                    cloud.style.bottom = '25%';
                    cloud.style.left = '-100px';
                    cloud.style.animation = `float 35s infinite linear, cloudBreathe 7s ease-in-out infinite`;
                    cloud.style.animationDelay = '10s, 0s';
                } else if (i === 4) {
                    cloud.style.top = '60%';
                    cloud.style.right = '-80px';
                    cloud.style.animation = `floatReverse 28s infinite linear, cloudBreathe 9s ease-in-out infinite`;
                    cloud.style.animationDelay = '15s, 3s';
                } else {
                    cloud.style.top = '8%';
                    cloud.style.left = '-200px';
                    cloud.style.animation = `float 40s infinite linear, cloudBreathe 5s ease-in-out infinite`;
                    cloud.style.animationDelay = '20s, 4s';
                }

                // Add random opacity variation
                cloud.style.opacity = (0.5 + Math.random() * 0.3).toFixed(2);

                cloudContainer.appendChild(cloud);
            }
        },

        /**
         * Create random sparkle animations
         */
        setupSparkles() {
            const createSparkle = () => {
                const sparkleCount = 5;
                
                for (let i = 0; i < sparkleCount; i++) {
                    setTimeout(() => {
                        const sparkle = document.createElement('div');
                        sparkle.className = 'sparkle';
                        sparkle.style.left = Math.random() * 100 + '%';
                        sparkle.style.top = Math.random() * 100 + '%';
                        document.body.appendChild(sparkle);
                        
                        setTimeout(() => sparkle.remove(), 2000);
                    }, i * 300);
                }
            };
            
            // Create sparkles periodically
            setInterval(createSparkle, 5000);
            createSparkle(); // Initial sparkles
        },

        /**
         * Setup parallax scrolling effects
         */
        setupParallax() {
            window.addEventListener('scroll', () => {
                const scrolled = window.scrollY;
                const clouds = document.querySelectorAll('.cloud');
                
                clouds.forEach((cloud, index) => {
                    const speed = (index + 1) * 0.5;
                    cloud.style.transform = `translateX(${scrolled * speed}px)`;
                });
            });
        }
    };

    // ============================================================================
    // HERO MODULE
    // ============================================================================
    
    const Hero = {
        /**
         * Set random hero image based on device with session persistence
         */
        setRandomImage(config) {
            const heroImg = document.getElementById('heroImage');
            if (!heroImg) return;

            const isMobile = window.innerWidth <= 768;
            const images = isMobile ? config.pages.home.heroImagesMobile : config.pages.home.heroImagesDesktop;
            const basePath = isMobile ? config.paths.heroMobile : config.paths.heroDesktop;

            if (!images || images.length === 0) {
                console.warn('No hero images configured');
                const fallbackSeed = this.getSessionSeed();
                heroImg.src = `https://picsum.photos/${isMobile ? '1080/1920' : '1920/1080'}?random=${fallbackSeed}`;
                return;
            }

            // Get persistent random index for this session
            const deviceKey = isMobile ? 'mobile' : 'desktop';
            const randomIndex = this.getPersistedImageIndex(images.length, deviceKey);

            heroImg.src = basePath + images[randomIndex];

            // Fallback to placeholder
            heroImg.onerror = () => {
                const fallbackSeed = this.getSessionSeed();
                if (isMobile) {
                    // Use portrait placeholder for mobile
                    heroImg.src = `https://picsum.photos/1080/1920?random=${fallbackSeed}`;
                } else {
                    // Use landscape placeholder for desktop
                    heroImg.src = `https://picsum.photos/1920/1080?random=${fallbackSeed}`;
                }
            };
        },

        /**
         * Get or create a persistent random seed for this session
         */
        getSessionSeed() {
            let seed = sessionStorage.getItem('hero-seed');
            if (!seed) {
                seed = Math.floor(Math.random() * 10000);
                sessionStorage.setItem('hero-seed', seed);
            }
            return parseInt(seed);
        },

        /**
         * Get persistent image index for device type
         */
        getPersistedImageIndex(imageCount, deviceKey) {
            const storageKey = `hero-index-${deviceKey}`;
            let index = sessionStorage.getItem(storageKey);

            if (index === null || parseInt(index) >= imageCount) {
                // Generate new index based on session seed for consistency
                const seed = this.getSessionSeed();
                index = seed % imageCount;
                sessionStorage.setItem(storageKey, index);
            }

            return parseInt(index);
        },

        /**
         * Force refresh hero image (useful for device orientation changes)
         */
        refreshForDeviceChange(config) {
            // Clear device-specific storage to allow new selection
            sessionStorage.removeItem('hero-index-mobile');
            sessionStorage.removeItem('hero-index-desktop');
            this.setRandomImage(config);
        }
    };

    // ============================================================================
    // UTILITIES MODULE
    // ============================================================================
    
    const Utils = {
        /**
         * Debounce function for performance
         */
        debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },

        /**
         * Generate artwork items from configuration
         */
        generateArtworkItems(count, metadata = {}, basePath = '', defaultCategory = 'illustration') {
            const items = [];
            
            for (let i = 1; i <= count; i++) {
                const itemMeta = metadata[i] || {};
                
                items.push({
                    id: i,
                    image: `${basePath}artwork${i}.png`,
                    title: itemMeta.title || `Artwork ${i}`,
                    category: itemMeta.category || defaultCategory,
                    description: itemMeta.description || '',
                    hasShop: itemMeta.hasShop || false,
                    shopLink: itemMeta.shopLink || '',
                    commission: itemMeta.commission || false,
                    date: itemMeta.date || new Date().toISOString().split('T')[0],
                    popular: itemMeta.popular || Math.floor(Math.random() * 100)
                });
            }
            
            return items;
        },

        /**
         * Update footer with current year
         */
        updateFooter(config) {
            const footerText = document.getElementById('footerText');
            if (footerText) {
                footerText.innerHTML = `© ${config.copyrightYear} ${config.siteName}. All artwork is original and protected by copyright.`;
            }
        },

        /**
         * Set logo image with graceful fallback
         */
        setLogo(config) {
            const logoImg = document.getElementById('logoImage');
            if (logoImg) {
                logoImg.src = config.paths.logo + 'logo.png';
                logoImg.alt = config.siteName + ' Logo';

                logoImg.onerror = () => {
                    console.warn('Logo not found at', config.paths.logo + 'logo.png', '- hiding logo image');
                    // Hide the logo image gracefully and rely on text
                    logoImg.style.display = 'none';
                };

                logoImg.onload = () => {
                    // Ensure logo is visible when it loads successfully
                    logoImg.style.display = '';
                };
            }
        },

        /**
         * Build social links
         */
        buildSocialLinks(config) {
            const container = document.querySelector('.social-links');
            if (!container || !config.socialMedia) return;

            container.innerHTML = '';

            // Combine primary and secondary social media links
            const allSocial = [
                ...config.socialMedia.primary,
                ...config.socialMedia.secondary
            ];

            allSocial.forEach(social => {
                const link = document.createElement('a');
                link.href = social.url;
                link.className = 'social-link';
                link.target = '_blank';
                link.rel = 'noopener';
                link.setAttribute('aria-label', social.ariaLabel);

                // Create icon container for SVG
                const iconContainer = document.createElement('span');
                iconContainer.className = 'social-icon';
                iconContainer.innerHTML = social.icon;

                link.appendChild(iconContainer);
                container.appendChild(link);
            });
        },

        /**
         * Initialize page with configuration
         */
        initializePage(config) {
            this.setLogo(config);
            this.updateFooter(config);
            this.buildSocialLinks(config);
        }
    };

    // ============================================================================
    // LIGHTBOX MODULE
    // ============================================================================

    const Lightbox = {
        /**
         * Open lightbox with item data
         */
        open(item, imagePath) {
            const lightbox = document.getElementById('lightbox');
            const image = document.getElementById('lightboxImage');
            const title = document.getElementById('lightboxTitle');
            const description = document.getElementById('lightboxDescription');
            const shopLink = document.getElementById('lightboxShop');

            if (!lightbox || !image || !title || !description) return;

            // Set image
            image.src = imagePath + item.filename;
            image.alt = item.title;

            // Fallback to placeholder
            image.onerror = () => {
                image.src = `https://picsum.photos/800/600?random=${item.id + 200}`;
            };

            // Set content
            title.textContent = item.title;
            description.textContent = item.description;

            // Handle shop link
            if (item.hasShop && shopLink) {
                shopLink.style.display = 'inline-block';
                shopLink.href = SITE_CONFIG.shop.baseUrl + item.shopLink;
            } else if (shopLink) {
                shopLink.style.display = 'none';
            }

            // Show lightbox
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        },

        /**
         * Close lightbox
         */
        close() {
            const lightbox = document.getElementById('lightbox');
            if (lightbox) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        },

        /**
         * Initialize lightbox event listeners
         */
        init() {
            const lightbox = document.getElementById('lightbox');
            const closeBtn = document.getElementById('lightboxClose');
            const closeX = document.getElementById('lightboxCloseX');

            if (!lightbox) return;

            // Close button event listeners
            if (closeBtn) {
                closeBtn.addEventListener('click', () => this.close());
            }

            if (closeX) {
                closeX.addEventListener('click', () => this.close());
            }

            // Background click to close
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    this.close();
                }
            });

            // ESC key to close
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.close();
                }
            });
        }
    };

    // ============================================================================
    // COMPONENTS MODULE
    // ============================================================================

    const Components = {
        /**
         * Generate navigation HTML from config
         */
        generateNavigation(config) {
            const nav = document.createElement('nav');
            nav.className = 'navbar';
            nav.setAttribute('role', 'navigation');
            nav.setAttribute('aria-label', 'Main navigation');

            nav.innerHTML = `
                <div class="nav-container">
                    <a href="index.html" class="logo" aria-label="${config.siteName} Home">
                        <img src="" id="logoImage" alt="${config.siteName} Logo" class="logo-image">
                        ${config.siteName}
                    </a>

                    <ul class="nav-menu" id="navMenu">
                        <!-- Navigation will be populated by JavaScript -->
                    </ul>

                    <button class="mobile-menu-toggle" id="mobileMenuToggle" aria-label="Toggle mobile menu">
                        <span></span>
                    </button>
                </div>
            `;

            return nav;
        },

        /**
         * Generate footer HTML from config
         */
        generateFooter(config) {
            const footer = document.createElement('footer');
            footer.className = 'footer';

            footer.innerHTML = `
                <div class="footer-content">
                    <div class="social-links">
                        <!-- Social links will be populated by JavaScript -->
                    </div>
                    <p class="footer-text" id="footerText">© ${config.copyrightYear} ${config.siteName}. All artwork is original and protected by copyright.</p>
                </div>
            `;

            return footer;
        },

        /**
         * Generate floating clouds HTML
         */
        generateClouds() {
            const clouds = [];
            for (let i = 1; i <= 3; i++) {
                const cloud = document.createElement('div');
                cloud.className = `cloud cloud${i}`;
                clouds.push(cloud);
            }
            return clouds;
        },

        /**
         * Insert components into page
         */
        insertComponents(config) {
            const body = document.body;

            // Insert navigation at the beginning
            const nav = this.generateNavigation(config);
            body.insertBefore(nav, body.firstChild);

            // Insert footer before scripts
            const scripts = body.querySelector('script');
            const footer = this.generateFooter(config);
            body.insertBefore(footer, scripts);

            // Note: Clouds are handled by Animations.setupClouds() for dynamic generation
            //const clouds = this.generateClouds();
            //clouds.forEach(cloud => body.appendChild(cloud));
        }
    };

    // ============================================================================
    // PUBLIC API
    // ============================================================================

    return {
        Navigation,
        Gallery,
        Animations,
        Hero,
        Utils,
        Lightbox,
        Components,
        
        /**
         * Initialize all modules
         */
        init(config) {
            try {
                // Always insert components since we removed static HTML
                Components.insertComponents(config);

                // Core initialization
                Utils.initializePage(config);
                Navigation.init();
                Gallery.init();

                // Optional features based on config
                if (config.features && config.features.animations) {
                    Animations.init();
                }

                // Page-specific initialization
                const currentPage = window.location.pathname.split('/').pop() || 'index.html';

                if (currentPage === 'index.html' || currentPage === '') {
                    Hero.setRandomImage(config);

                    // Handle window resize with device orientation change detection
                    let resizeTimer;
                    let previousIsMobile = window.innerWidth <= 768;

                    window.addEventListener('resize', () => {
                        clearTimeout(resizeTimer);
                        resizeTimer = setTimeout(() => {
                            const currentIsMobile = window.innerWidth <= 768;

                            // If device type changed (mobile to desktop or vice versa), refresh hero
                            if (currentIsMobile !== previousIsMobile) {
                                Hero.refreshForDeviceChange(config);
                                previousIsMobile = currentIsMobile;
                            } else {
                                // Same device type, just use existing image
                                Hero.setRandomImage(config);
                            }
                        }, 250);
                    });
                }
            } catch (error) {
                console.error('Error initializing PortfolioUtils:', error);
            }
        }
    };
})();

// Make available globally
window.PortfolioUtils = PortfolioUtils;

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    if (typeof SITE_CONFIG !== 'undefined') {
        PortfolioUtils.init(SITE_CONFIG);
    }
});