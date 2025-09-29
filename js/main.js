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
    // BUTTERFLY CURSOR MODULE
    // ============================================================================

    const ButterflyCursor = {
        butterfly: null,
        canvas: null,
        ctx: null,
        mousePos: { x: 0, y: 0 },
        butterflyPos: { x: 0, y: 0 },
        lastMousePos: { x: 0, y: 0 },
        velocity: 0,
        animationFrame: null,
        config: {},
        particles: [],
        particlePool: [],
        maxParticles: 100,
        time: 0,

        /**
         * Particle class for sparkle trail effects
         */
        Particle: class {
            constructor(x, y, velocity, config) {
                // Position and movement
                this.x = x;
                this.y = y;
                this.baseX = x;
                this.baseY = y;

                // Physics properties
                this.vx = (Math.random() - 0.5) * 3;
                this.vy = (Math.random() - 0.5) * 3 - 1;
                this.gravity = 0.02;

                // Visual properties
                this.size = Math.random() * (config.sizeRange?.[1] || 3) + (config.sizeRange?.[0] || 1);
                this.opacity = 1;
                this.rotation = 0;
                this.rotationSpeed = (Math.random() - 0.5) * 0.3;

                // Color selection
                const colors = config.colors || ['#7FB4D9', '#FFB3CC', '#FFFFFF'];
                this.color = colors[Math.floor(Math.random() * colors.length)];

                // Wave motion
                this.waveAmplitude = config.waveAmplitude || 15;
                this.waveFrequency = 0.015 + Math.random() * 0.02;
                this.wavePhase = Math.random() * Math.PI * 2;

                // Lifecycle
                this.fadeSpeed = 0.012 + Math.random() * 0.008;
                this.sparklePhase = Math.random() * Math.PI * 2;
                this.life = 1.0;
                this.maxLife = config.lifespan || 2000;
                this.age = 0;
            }

            update(time, deltaTime) {
                this.age += deltaTime;

                // Wave motion
                const waveX = Math.sin(time * this.waveFrequency + this.wavePhase) * this.waveAmplitude;
                const waveY = Math.cos(time * this.waveFrequency * 0.7 + this.wavePhase) * this.waveAmplitude * 0.5;

                // Update physics
                this.vx *= 0.98; // Air resistance
                this.vy += this.gravity;
                this.baseX += this.vx * (deltaTime / 16); // Normalize for 60fps
                this.baseY += this.vy * (deltaTime / 16);

                // Apply wave motion
                this.x = this.baseX + waveX;
                this.y = this.baseY + waveY;

                // Update visual properties
                this.life = Math.max(0, 1 - (this.age / this.maxLife));
                this.opacity = this.life * 0.8;
                this.rotation += this.rotationSpeed * (deltaTime / 16);
                this.size *= 0.995; // Slight shrink over time

                // Sparkle intensity
                this.sparkleIntensity = Math.sin(time * 0.05 + this.sparklePhase) * 0.3 + 0.7;

                return this.life > 0;
            }

            draw(ctx) {
                if (this.opacity <= 0) return;

                ctx.save();
                ctx.globalAlpha = this.opacity * this.sparkleIntensity;

                // Move to particle position
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation);

                // Create radial gradient
                const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size * 3);

                // Convert CSS variables to actual colors
                let color = this.color;
                if (color.startsWith('var(')) {
                    // Fallback colors if CSS variables don't work
                    const colorMap = {
                        'var(--sky-blue)': '#7FB4D9',
                        'var(--soft-pink)': '#FFB3CC',
                        'var(--white)': '#FFFFFF',
                        'var(--coral)': '#FF6B9D'
                    };
                    color = colorMap[color] || '#7FB4D9';
                }

                gradient.addColorStop(0, color + 'FF');
                gradient.addColorStop(0.5, color + '88');
                gradient.addColorStop(1, color + '00');

                ctx.fillStyle = gradient;

                // Draw star shape
                const spikes = 4;
                const outerRadius = this.size * 2;
                const innerRadius = this.size * 0.5;

                ctx.beginPath();
                for (let i = 0; i < spikes * 2; i++) {
                    const radius = i % 2 === 0 ? outerRadius : innerRadius;
                    const angle = (i * Math.PI) / spikes;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    if (i === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }
                ctx.closePath();
                ctx.fill();

                // Add glow effect
                ctx.shadowBlur = 15;
                ctx.shadowColor = color;
                ctx.fill();

                ctx.restore();
            }
        },

        /**
         * Initialize butterfly cursor
         */
        init(config) {
            this.config = config.features?.butterflyCursor || {};

            // Check if feature is enabled and supported
            if (!this.config.enabled || !this.checkSupport()) {
                return;
            }

            this.createCanvas();
            this.createButterfly();
            this.attachEventListeners();
            this.startAnimation();
            this.hideCursor();
        },

        /**
         * Check browser and device support
         */
        checkSupport() {
            // Disable on touch devices and small screens
            if ('ontouchstart' in window || window.innerWidth < 768) {
                return false;
            }

            // Check for reduced motion preference
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                return false;
            }

            return true;
        },

        /**
         * Create canvas for particle rendering
         */
        createCanvas() {
            this.canvas = document.createElement('canvas');
            this.canvas.id = 'butterfly-particles-canvas';
            this.canvas.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                pointer-events: none;
                z-index: 9999;
                width: 100vw;
                height: 100vh;
            `;

            // Set canvas size
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;

            this.ctx = this.canvas.getContext('2d');
            document.body.appendChild(this.canvas);

            // Handle resize
            window.addEventListener('resize', () => {
                this.canvas.width = window.innerWidth;
                this.canvas.height = window.innerHeight;
            });
        },

        /**
         * Hide default cursor globally
         */
        hideCursor() {
            const style = document.createElement('style');
            style.id = 'butterfly-cursor-style';
            style.textContent = `
                *, *:hover, *:active {
                    cursor: none !important;
                }
            `;
            document.head.appendChild(style);
        },

        /**
         * Create butterfly element
         */
        createButterfly() {
            this.butterfly = document.createElement('div');
            this.butterfly.id = 'butterfly-cursor';
            this.butterfly.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: ${this.config.size || 40}px;
                height: ${this.config.size || 40}px;
                pointer-events: none;
                z-index: 10000;
                transform: translate(-50%, -50%);
                transition: none;
            `;

            // Create butterfly SVG
            this.butterfly.innerHTML = this.createButterflySVG();

            // Initialize position to center
            this.butterflyPos.x = window.innerWidth / 2;
            this.butterflyPos.y = window.innerHeight / 2;
            this.mousePos.x = this.butterflyPos.x;
            this.mousePos.y = this.butterflyPos.y;

            document.body.appendChild(this.butterfly);
        },

        /**
         * Create butterfly SVG
         */
        createButterflySVG() {
            return `
                <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <!-- Butterfly body -->
                    <ellipse cx="50" cy="50" rx="2" ry="18" fill="var(--navy-dark)" />

                    <!-- Left wings -->
                    <g class="left-wings" transform-origin="48 45">
                        <!-- Upper left wing -->
                        <path class="wing wing-upper-left"
                            d="M 48,40 Q 25,15 15,30 Q 10,45 25,50 Q 40,48 48,40"
                            fill="var(--sky-blue)"
                            opacity="0.9"
                            transform-origin="30 35"
                        />
                        <!-- Lower left wing -->
                        <path class="wing wing-lower-left"
                            d="M 48,55 Q 30,70 20,80 Q 15,85 25,85 Q 40,75 48,55"
                            fill="var(--soft-pink)"
                            opacity="0.8"
                            transform-origin="30 70"
                        />
                    </g>

                    <!-- Right wings -->
                    <g class="right-wings" transform-origin="52 45">
                        <!-- Upper right wing -->
                        <path class="wing wing-upper-right"
                            d="M 52,40 Q 75,15 85,30 Q 90,45 75,50 Q 60,48 52,40"
                            fill="var(--sky-blue)"
                            opacity="0.9"
                            transform-origin="70 35"
                        />
                        <!-- Lower right wing -->
                        <path class="wing wing-lower-right"
                            d="M 52,55 Q 70,70 80,80 Q 85,85 75,85 Q 60,75 52,55"
                            fill="var(--soft-pink)"
                            opacity="0.8"
                            transform-origin="70 70"
                        />
                    </g>

                    <!-- Wing patterns -->
                    <circle cx="30" cy="35" r="4" fill="var(--white)" opacity="0.6" />
                    <circle cx="70" cy="35" r="4" fill="var(--white)" opacity="0.6" />
                    <circle cx="25" cy="70" r="3" fill="var(--coral)" opacity="0.5" />
                    <circle cx="75" cy="70" r="3" fill="var(--coral)" opacity="0.5" />

                    <!-- Antennae -->
                    <line x1="47" y1="35" x2="44" y2="28" stroke="var(--navy-dark)" stroke-width="1.5" stroke-linecap="round" />
                    <line x1="53" y1="35" x2="56" y2="28" stroke="var(--navy-dark)" stroke-width="1.5" stroke-linecap="round" />
                    <circle cx="44" cy="28" r="1.5" fill="var(--navy-dark)" />
                    <circle cx="56" cy="28" r="1.5" fill="var(--navy-dark)" />
                </svg>
            `;
        },

        /**
         * Attach event listeners
         */
        attachEventListeners() {
            document.addEventListener('mousemove', (e) => this.handleMouseMove(e));
            window.addEventListener('resize', () => this.handleResize());
        },

        /**
         * Handle mouse movement
         */
        handleMouseMove(e) {
            this.mousePos.x = e.clientX;
            this.mousePos.y = e.clientY;

            // Calculate velocity for wing animation and particle generation
            const dx = this.mousePos.x - this.lastMousePos.x;
            const dy = this.mousePos.y - this.lastMousePos.y;
            this.velocity = Math.sqrt(dx * dx + dy * dy);

            // Generate particles based on velocity
            this.generateParticles(dx, dy);

            this.lastMousePos.x = this.mousePos.x;
            this.lastMousePos.y = this.mousePos.y;

            // Update wing animation based on velocity
            this.updateWingAnimation();
        },

        /**
         * Handle window resize
         */
        handleResize() {
            // Keep butterfly within bounds
            this.mousePos.x = Math.min(this.mousePos.x, window.innerWidth);
            this.mousePos.y = Math.min(this.mousePos.y, window.innerHeight);
        },

        /**
         * Update wing animation based on velocity
         */
        updateWingAnimation() {
            if (!this.butterfly) return;

            const wings = this.butterfly.querySelectorAll('.wing');

            // Determine animation speed based on velocity
            let animationSpeed = '0.6s';
            if (this.velocity > 10) {
                animationSpeed = '0.3s'; // Fast flapping when moving quickly
            } else if (this.velocity > 3) {
                animationSpeed = '0.4s'; // Medium flapping when moving
            } else {
                animationSpeed = '1s';   // Slow idle flapping when stationary
            }

            // Apply animation to wings
            wings.forEach(wing => {
                wing.style.animation = `butterflyFlap ${animationSpeed} ease-in-out infinite`;
            });
        },

        /**
         * Generate particles based on movement
         */
        generateParticles(dx, dy) {
            if (!this.config.particles?.enabled || !this.ctx) return;

            const particleConfig = this.config.particles;
            const particlesToGenerate = Math.min(
                Math.ceil(this.velocity / 3),
                particleConfig.emissionRate || 5
            );

            if (particlesToGenerate === 0) return;

            for (let i = 0; i < particlesToGenerate; i++) {
                // Get particle from pool or create new one
                let particle = this.getParticleFromPool();
                if (!particle) {
                    particle = new this.Particle(0, 0, this.velocity, particleConfig);
                }

                // Position particles behind butterfly in fan pattern
                const angle = Math.atan2(dy, dx) + Math.PI; // Opposite direction of movement
                const spread = Math.PI / 4; // 45 degree spread
                const particleAngle = angle + (Math.random() - 0.5) * spread;
                const distance = 20 + i * 8;

                const offsetX = Math.cos(particleAngle) * distance + (Math.random() - 0.5) * 15;
                const offsetY = Math.sin(particleAngle) * distance + (Math.random() - 0.5) * 15;

                // Reset particle properties
                particle.x = this.butterflyPos.x + offsetX;
                particle.y = this.butterflyPos.y + offsetY;
                particle.baseX = particle.x;
                particle.baseY = particle.y;
                particle.life = 1.0;
                particle.age = 0;
                particle.wavePhase = Math.random() * Math.PI * 2;

                // Adjust initial velocity based on butterfly movement
                particle.vx = (Math.random() - 0.5) * 2 + dx * 0.1;
                particle.vy = (Math.random() - 0.5) * 2 + dy * 0.1 - 1;

                this.particles.push(particle);
            }

            // Limit total particles for performance
            if (this.particles.length > this.maxParticles) {
                const excess = this.particles.splice(0, this.particles.length - this.maxParticles);
                this.particlePool.push(...excess);
            }
        },

        /**
         * Get particle from pool for reuse
         */
        getParticleFromPool() {
            return this.particlePool.pop() || null;
        },

        /**
         * Update and render all particles
         */
        updateParticles(deltaTime) {
            if (!this.ctx || !this.config.particles?.enabled) return;

            // Handle canvas clearing with optional proper trail effect
            if (this.config.particles.trail) {
                // Proper trail effect using composite operations (doesn't darken screen)
                this.ctx.save();
                this.ctx.globalCompositeOperation = 'destination-out';
                this.ctx.globalAlpha = 0.1;
                this.ctx.fillStyle = 'rgba(255, 255, 255, 1)';
                this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
                this.ctx.restore();
            } else {
                // Clear canvas completely
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            }

            // Update and draw particles
            this.particles = this.particles.filter(particle => {
                const isAlive = particle.update(this.time, deltaTime);

                if (isAlive) {
                    particle.draw(this.ctx);
                    return true;
                } else {
                    // Return dead particle to pool
                    this.particlePool.push(particle);
                    return false;
                }
            });
        },

        /**
         * Start animation loop
         */
        startAnimation() {
            let lastTime = 0;

            const animate = (currentTime) => {
                if (!this.butterfly) return;

                const deltaTime = currentTime - lastTime;
                lastTime = currentTime;
                this.time = currentTime;

                // Smooth following with lag
                const followLag = this.config.followLag || 0.15;

                this.butterflyPos.x += (this.mousePos.x - this.butterflyPos.x) * followLag;
                this.butterflyPos.y += (this.mousePos.y - this.butterflyPos.y) * followLag;

                // Update butterfly position
                this.butterfly.style.left = this.butterflyPos.x + 'px';
                this.butterfly.style.top = this.butterflyPos.y + 'px';

                // Calculate rotation based on movement direction
                const dx = this.mousePos.x - this.butterflyPos.x;
                const dy = this.mousePos.y - this.butterflyPos.y;

                if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
                    const rotation = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
                    this.butterfly.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
                }

                // Update particles
                this.updateParticles(deltaTime);

                this.animationFrame = requestAnimationFrame(animate);
            };

            animate(0);
        },

        /**
         * Destroy butterfly cursor
         */
        destroy() {
            if (this.animationFrame) {
                cancelAnimationFrame(this.animationFrame);
            }

            if (this.butterfly) {
                this.butterfly.remove();
                this.butterfly = null;
            }

            if (this.canvas) {
                this.canvas.remove();
                this.canvas = null;
                this.ctx = null;
            }

            // Clear particles
            this.particles = [];
            this.particlePool = [];

            // Restore default cursor
            const style = document.getElementById('butterfly-cursor-style');
            if (style) {
                style.remove();
            }
        }
    };

    // ============================================================================
    // PERSONA MODULE
    // ============================================================================

    const Persona = {
        persona: null,
        animationFrame: null,
        idleTimer: null,
        config: {},
        currentPage: '',
        states: {
            idle: 'idle',
            waving: 'waving',
            pointing: 'pointing',
            thinking: 'thinking',
            holding: 'holding'
        },
        currentState: 'idle',

        /**
         * Initialize persona system
         */
        init(config) {
            this.config = config.features?.persona || {};

            // Check if feature is enabled
            if (!this.config.enabled) {
                return;
            }

            this.currentPage = this.getCurrentPage();
            this.createPersona();
            this.setupBehaviors();
            this.startIdleAnimations();
        },

        /**
         * Get current page identifier
         */
        getCurrentPage() {
            const path = window.location.pathname.split('/').pop() || 'index.html';

            if (path === 'index.html' || path === '') return 'home';
            if (path.includes('illustration')) return 'gallery';
            if (path.includes('storyboarding')) return 'gallery';
            if (path.includes('concept')) return 'gallery';
            if (path.includes('animation')) return 'gallery';
            if (path.includes('photography')) return 'gallery';
            if (path.includes('about')) return 'about';

            return 'home';
        },

        /**
         * Create persona element
         */
        createPersona() {
            this.persona = document.createElement('div');
            this.persona.id = 'waffle-persona';
            this.persona.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                width: 80px;
                height: 80px;
                z-index: 1000;
                pointer-events: auto;
                cursor: pointer;
                transition: transform 0.3s ease;
            `;

            // Create waffle character SVG
            this.persona.innerHTML = this.createWaffleSVG();

            // Add click interaction
            this.persona.addEventListener('click', () => this.handleClick());
            this.persona.addEventListener('mouseenter', () => this.handleHover());

            document.body.appendChild(this.persona);
        },

        /**
         * Create waffle character SVG
         */
        createWaffleSVG() {
            return `
                <svg width="80" height="80" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <!-- Waffle body (main square) -->
                    <rect x="25" y="35" width="50" height="40"
                          fill="var(--soft-yellow)"
                          stroke="var(--coral)"
                          stroke-width="2"
                          rx="8" />

                    <!-- Waffle grid pattern -->
                    <line x1="35" y1="35" x2="35" y2="75" stroke="var(--coral)" stroke-width="1" />
                    <line x1="45" y1="35" x2="45" y2="75" stroke="var(--coral)" stroke-width="1" />
                    <line x1="55" y1="35" x2="55" y2="75" stroke="var(--coral)" stroke-width="1" />
                    <line x1="65" y1="35" x2="65" y2="75" stroke="var(--coral)" stroke-width="1" />

                    <line x1="25" y1="45" x2="75" y2="45" stroke="var(--coral)" stroke-width="1" />
                    <line x1="25" y1="55" x2="75" y2="55" stroke="var(--coral)" stroke-width="1" />
                    <line x1="25" y1="65" x2="75" y2="65" stroke="var(--coral)" stroke-width="1" />

                    <!-- Eyes -->
                    <circle class="eye left-eye" cx="38" cy="48" r="3" fill="var(--navy-dark)" />
                    <circle class="eye right-eye" cx="62" cy="48" r="3" fill="var(--navy-dark)" />

                    <!-- Eye highlights -->
                    <circle cx="39" cy="47" r="1" fill="var(--white)" />
                    <circle cx="63" cy="47" r="1" fill="var(--white)" />

                    <!-- Mouth -->
                    <path class="mouth"
                          d="M 42,58 Q 50,65 58,58"
                          stroke="var(--navy-dark)"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round" />

                    <!-- Arms (positioned for different animations) -->
                    <g class="arms">
                        <!-- Left arm -->
                        <ellipse class="arm left-arm"
                                cx="20" cy="50"
                                rx="8" ry="4"
                                fill="var(--soft-yellow)"
                                transform-origin="25 50" />

                        <!-- Right arm -->
                        <ellipse class="arm right-arm"
                                cx="80" cy="50"
                                rx="8" ry="4"
                                fill="var(--soft-yellow)"
                                transform-origin="75 50" />
                    </g>

                    <!-- Speech bubble (hidden by default) -->
                    <g class="speech-bubble" style="opacity: 0; transform: scale(0);">
                        <ellipse cx="50" cy="15" rx="25" ry="12"
                                fill="var(--white)"
                                stroke="var(--navy-dark)"
                                stroke-width="1" />
                        <polygon points="45,27 50,35 55,27"
                                fill="var(--white)"
                                stroke="var(--navy-dark)"
                                stroke-width="1" />
                        <text class="speech-text"
                              x="50" y="18"
                              text-anchor="middle"
                              font-family="var(--font-display)"
                              font-size="8"
                              fill="var(--navy-dark)">
                            Hi there! 🧇
                        </text>
                    </g>

                    <!-- Props for different states -->
                    <g class="props" style="opacity: 0;">
                        <!-- Envelope for contact page -->
                        <rect class="envelope" x="70" y="40" width="15" height="10"
                              fill="var(--white)"
                              stroke="var(--navy-dark)"
                              stroke-width="1" />
                        <path d="M 70,40 L 77.5,47 L 85,40"
                              stroke="var(--navy-dark)"
                              stroke-width="1"
                              fill="none" />
                    </g>
                </svg>
            `;
        },

        /**
         * Setup page-specific behaviors
         */
        setupBehaviors() {
            const behaviors = this.config.behaviors || {};
            const pageBehavior = behaviors[this.currentPage];

            if (pageBehavior) {
                // Set initial state based on page
                this.setState(pageBehavior.initialState || 'idle');

                // Schedule page-specific actions
                if (pageBehavior.actions) {
                    pageBehavior.actions.forEach(action => {
                        setTimeout(() => {
                            this.performAction(action);
                        }, action.delay || 3000);
                    });
                }
            }
        },

        /**
         * Set persona state
         */
        setState(state) {
            if (!this.persona || this.currentState === state) return;

            this.currentState = state;
            this.animateToState(state);
        },

        /**
         * Animate to new state
         */
        animateToState(state) {
            const arms = this.persona.querySelectorAll('.arm');
            const speechBubble = this.persona.querySelector('.speech-bubble');
            const props = this.persona.querySelector('.props');

            // Reset animations
            arms.forEach(arm => arm.style.animation = '');
            speechBubble.style.opacity = '0';
            speechBubble.style.transform = 'scale(0)';
            props.style.opacity = '0';

            switch (state) {
                case 'waving':
                    this.animateWaving();
                    this.showSpeechBubble('Hello! 👋');
                    break;
                case 'pointing':
                    this.animatePointing();
                    this.showSpeechBubble('Check this out!');
                    break;
                case 'thinking':
                    this.animateThinking();
                    this.showSpeechBubble('Hmm... 🤔');
                    break;
                case 'holding':
                    this.animateHolding();
                    this.showProps();
                    break;
                default:
                    this.animateIdle();
            }
        },

        /**
         * Animation states
         */
        animateIdle() {
            const persona = this.persona.querySelector('svg');
            persona.style.animation = 'personaBreathe 3s ease-in-out infinite';
        },

        animateWaving() {
            const rightArm = this.persona.querySelector('.right-arm');
            rightArm.style.animation = 'personaWave 0.8s ease-in-out 3';
        },

        animatePointing() {
            const rightArm = this.persona.querySelector('.right-arm');
            rightArm.style.transformOrigin = '75 50';
            rightArm.style.animation = 'personaPoint 0.5s ease-out forwards';
        },

        animateThinking() {
            const leftArm = this.persona.querySelector('.left-arm');
            leftArm.style.transformOrigin = '25 50';
            leftArm.style.animation = 'personaThink 0.5s ease-out forwards';
        },

        animateHolding() {
            const rightArm = this.persona.querySelector('.right-arm');
            rightArm.style.transformOrigin = '75 50';
            rightArm.style.animation = 'personaHold 0.5s ease-out forwards';
        },

        /**
         * Show speech bubble with text
         */
        showSpeechBubble(text) {
            const speechBubble = this.persona.querySelector('.speech-bubble');
            const speechText = this.persona.querySelector('.speech-text');

            speechText.textContent = text;
            speechBubble.style.opacity = '1';
            speechBubble.style.transform = 'scale(1)';
            speechBubble.style.transition = 'all 0.3s ease';

            // Hide after 3 seconds
            setTimeout(() => {
                speechBubble.style.opacity = '0';
                speechBubble.style.transform = 'scale(0)';
            }, 3000);
        },

        /**
         * Show props for specific actions
         */
        showProps() {
            const props = this.persona.querySelector('.props');
            props.style.opacity = '1';
            props.style.transition = 'opacity 0.3s ease';
        },

        /**
         * Perform specific action
         */
        performAction(action) {
            switch (action.type) {
                case 'wave':
                    this.setState('waving');
                    break;
                case 'point':
                    this.setState('pointing');
                    break;
                case 'think':
                    this.setState('thinking');
                    break;
                case 'hold':
                    this.setState('holding');
                    break;
            }

            // Return to idle after action
            setTimeout(() => {
                this.setState('idle');
            }, action.duration || 4000);
        },

        /**
         * Start idle animations and random behaviors
         */
        startIdleAnimations() {
            // Random idle behaviors
            this.idleTimer = setInterval(() => {
                if (this.currentState === 'idle') {
                    const randomActions = ['waving', 'thinking'];
                    const randomAction = randomActions[Math.floor(Math.random() * randomActions.length)];

                    this.setState(randomAction);

                    setTimeout(() => {
                        this.setState('idle');
                    }, 3000);
                }
            }, 15000 + Math.random() * 10000); // Random interval between 15-25 seconds
        },

        /**
         * Handle click interaction
         */
        handleClick() {
            const clickActions = ['waving', 'thinking'];
            const randomAction = clickActions[Math.floor(Math.random() * clickActions.length)];

            this.setState(randomAction);

            setTimeout(() => {
                this.setState('idle');
            }, 3000);
        },

        /**
         * Handle hover interaction
         */
        handleHover() {
            if (this.currentState === 'idle') {
                this.persona.style.transform = 'scale(1.1)';

                setTimeout(() => {
                    this.persona.style.transform = 'scale(1)';
                }, 200);
            }
        },

        /**
         * Destroy persona
         */
        destroy() {
            if (this.idleTimer) {
                clearInterval(this.idleTimer);
            }

            if (this.animationFrame) {
                cancelAnimationFrame(this.animationFrame);
            }

            if (this.persona) {
                this.persona.remove();
                this.persona = null;
            }
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
        ButterflyCursor,
        Persona,
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

                if (config.features && config.features.butterflyCursor) {
                    ButterflyCursor.init(config);
                }

                if (config.features && config.features.persona) {
                    Persona.init(config);
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