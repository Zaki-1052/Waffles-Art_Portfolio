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
            
            if (!toggle || !menu) return;
            
            toggle.addEventListener('click', () => {
                menu.classList.toggle('active');
                const isActive = menu.classList.contains('active');
                toggle.innerHTML = isActive ? '<span>✕</span>' : '<span>☰</span>';
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!toggle.contains(e.target) && !menu.contains(e.target)) {
                    menu.classList.remove('active');
                    toggle.innerHTML = '<span>☰</span>';
                }
            });
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
            
            items.forEach((item, index) => {
                const element = this.createGalleryItem(item, index, options);
                container.appendChild(element);
            });
            
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
            
            // Image
            const img = document.createElement('img');
            img.src = options.lazyLoad ? '' : item.image;
            img.dataset.src = item.image;
            img.alt = item.title || `Artwork ${index + 1}`;
            img.className = 'gallery-image';
            if (options.lazyLoad) {
                img.classList.add('lazy');
                img.loading = 'lazy';
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
            
            div.appendChild(img);
            
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
         * Observe images for lazy loading
         */
        observeImages() {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.classList.remove('lazy');
                            observer.unobserve(img);
                        }
                    }
                });
            }, {
                rootMargin: '50px 0px',
                threshold: 0.01
            });
            
            document.querySelectorAll('img.lazy').forEach(img => {
                imageObserver.observe(img);
            });
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
         * Create floating cloud elements
         */
        setupClouds() {
            // Don't create clouds if they already exist
            if (document.querySelector('.cloud')) return;
            
            const cloudCount = 3;
            const cloudContainer = document.body;
            
            for (let i = 1; i <= cloudCount; i++) {
                const cloud = document.createElement('div');
                cloud.className = `cloud cloud${i}`;
                
                // Set random starting position and animation
                if (i === 1) {
                    cloud.style.width = '100px';
                    cloud.style.height = '40px';
                    cloud.style.top = '20%';
                    cloud.style.left = '-100px';
                    cloud.style.animation = 'float 20s infinite';
                } else if (i === 2) {
                    cloud.style.width = '80px';
                    cloud.style.height = '35px';
                    cloud.style.top = '40%';
                    cloud.style.right = '-80px';
                    cloud.style.animation = 'floatReverse 25s infinite';
                } else {
                    cloud.style.width = '120px';
                    cloud.style.height = '45px';
                    cloud.style.bottom = '30%';
                    cloud.style.left = '-120px';
                    cloud.style.animation = 'float 30s infinite 5s';
                }
                
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
         * Set random hero image based on device
         */
        setRandomImage(config) {
            const heroImg = document.getElementById('heroImage');
            if (!heroImg) return;
            
            const isMobile = window.innerWidth <= 768;
            const images = isMobile ? config.pages.home.heroImagesMobile : config.pages.home.heroImagesDesktop;
            const basePath = isMobile ? config.paths.heroMobile : config.paths.heroDesktop;
            
            if (!images || images.length === 0) {
                console.warn('No hero images configured');
                heroImg.src = `https://picsum.photos/${isMobile ? '1080/1920' : '1920/1080'}?random=1`;
                return;
            }
            
            const randomIndex = Math.floor(Math.random() * images.length);
            heroImg.src = basePath + images[randomIndex];
            
            // Fallback to placeholder
            heroImg.onerror = () => {
                const fallbackIndex = randomIndex + 1;
                if (isMobile) {
                    // Use portrait placeholder for mobile
                    heroImg.src = `https://picsum.photos/1080/1920?random=${fallbackIndex}`;
                } else {
                    // Use landscape placeholder for desktop
                    heroImg.src = `https://picsum.photos/1920/1080?random=${fallbackIndex}`;
                }
            };
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
         * Set logo image
         */
        setLogo(config) {
            const logoImg = document.getElementById('logoImage');
            if (logoImg) {
                logoImg.src = config.paths.logo + 'logo.png';
                logoImg.onerror = () => {
                    console.warn('Logo not found at', config.paths.logo + 'logo.png');
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
            
            // Use all social media links
            const allSocial = [
                {
                    name: 'TikTok',
                    icon: '🎵',
                    url: 'https://www.tiktok.com/@waffles_forart',
                    ariaLabel: 'TikTok'
                },
                {
                    name: 'Instagram',
                    icon: '📷',
                    url: 'https://www.instagram.com/waffles_forart',
                    ariaLabel: 'Instagram'
                },
                {
                    name: 'YouTube',
                    icon: '▶️',
                    url: 'https://www.youtube.com/@waffles_forart',
                    ariaLabel: 'YouTube'
                },
                {
                    name: 'ArtFight',
                    icon: '🎨',
                    url: 'https://artfight.net/~waffles_forart',
                    ariaLabel: 'ArtFight'
                },
                {
                    name: 'Cara',
                    icon: '✨',
                    url: 'https://cara.app/waffles0forart',
                    ariaLabel: 'Cara'
                }
            ];
            
            allSocial.forEach(social => {
                const link = document.createElement('a');
                link.href = social.url;
                link.className = 'social-link';
                link.target = '_blank';
                link.rel = 'noopener';
                link.setAttribute('aria-label', social.ariaLabel);
                
                const icon = document.createElement('span');
                icon.textContent = social.icon;
                link.appendChild(icon);
                
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
    // PUBLIC API
    // ============================================================================
    
    return {
        Navigation,
        Gallery,
        Animations,
        Hero,
        Utils,
        Lightbox,
        
        /**
         * Initialize all modules
         */
        init(config) {
            // Core initialization
            Utils.initializePage(config);
            Navigation.init();
            Gallery.init();
            
            // Optional features based on config
            if (config.features.animations) {
                Animations.init();
            }
            
            // Page-specific initialization
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            
            if (currentPage === 'index.html' || currentPage === '') {
                Hero.setRandomImage(config);
                
                // Handle window resize
                let resizeTimer;
                window.addEventListener('resize', () => {
                    clearTimeout(resizeTimer);
                    resizeTimer = setTimeout(() => {
                        Hero.setRandomImage(config);
                    }, 250);
                });
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