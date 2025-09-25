// photography.js - WafflesForArt Photography Coming Soon Page

(function() {
    'use strict';

    // ============================================================================
    // COUNTDOWN TIMER MODULE
    // ============================================================================

    const CountdownTimer = {
        targetDate: new Date('2025-01-01T00:00:00').getTime(),
        intervalId: null,

        /**
         * Initialize countdown timer
         */
        init() {
            this.updateTimer();
            this.intervalId = setInterval(() => {
                this.updateTimer();
            }, 1000);
        },

        /**
         * Update timer display
         */
        updateTimer() {
            const now = new Date().getTime();
            const distance = this.targetDate - now;

            if (distance < 0) {
                this.showLaunched();
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Update DOM elements with animation
            this.updateCounterElement('days', days);
            this.updateCounterElement('hours', hours);
            this.updateCounterElement('minutes', minutes);
            this.updateCounterElement('seconds', seconds);
        },

        /**
         * Update individual counter element with animation
         */
        updateCounterElement(id, value) {
            const element = document.getElementById(id);
            if (!element) return;

            const newValue = value.toString().padStart(2, '0');
            if (element.textContent !== newValue) {
                element.style.transform = 'scale(1.1)';
                element.textContent = newValue;

                setTimeout(() => {
                    element.style.transform = 'scale(1)';
                }, 150);
            }
        },

        /**
         * Show launched state
         */
        showLaunched() {
            clearInterval(this.intervalId);

            const countdownContainer = document.querySelector('.countdown-container');
            if (countdownContainer) {
                countdownContainer.innerHTML = `
                    <div class="launched-message">
                        <div class="launched-icon">🎉</div>
                        <h3>Photography Portfolio is LIVE!</h3>
                        <a href="photography-gallery.html" class="launched-btn">Explore Now</a>
                    </div>
                `;
            }
        }
    };

    // ============================================================================
    // NEWSLETTER SIGNUP MODULE
    // ============================================================================

    const NewsletterSignup = {
        form: null,
        emailInput: null,
        button: null,
        messageContainer: null,

        /**
         * Initialize newsletter signup
         */
        init() {
            this.form = document.getElementById('newsletterForm');
            this.emailInput = document.getElementById('emailInput');
            this.button = this.form?.querySelector('.newsletter-btn');
            this.messageContainer = document.getElementById('newsletterMessage');

            if (!this.form) return;

            this.setupFormHandling();
            this.setupInputValidation();
        },

        /**
         * Setup form submission handling
         */
        setupFormHandling() {
            this.form.addEventListener('submit', async (e) => {
                e.preventDefault();

                if (!this.validateEmail()) return;

                await this.submitEmail();
            });
        },

        /**
         * Setup real-time input validation
         */
        setupInputValidation() {
            this.emailInput.addEventListener('input', () => {
                this.clearError();
            });
        },

        /**
         * Validate email address
         */
        validateEmail() {
            const email = this.emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!email) {
                this.showError('Please enter your email address');
                return false;
            }

            if (!emailRegex.test(email)) {
                this.showError('Please enter a valid email address');
                return false;
            }

            return true;
        },

        /**
         * Submit email to newsletter service
         */
        async submitEmail() {
            const email = this.emailInput.value.trim();

            this.setLoadingState(true);

            try {
                // Simulate API call - replace with actual endpoint
                await this.mockAPICall();

                // Store email locally for demo purposes
                this.storeEmailLocally(email);

                this.showSuccess('Thanks! You\'ll be notified when the photography portfolio launches.');
                this.emailInput.value = '';

                // Track signup event
                this.trackSignup(email);

            } catch (error) {
                console.error('Newsletter signup error:', error);
                this.showError('Something went wrong. Please try again later.');
            } finally {
                this.setLoadingState(false);
            }
        },

        /**
         * Mock API call for demo
         */
        async mockAPICall() {
            return new Promise((resolve) => {
                setTimeout(resolve, 1500); // Simulate network delay
            });
        },

        /**
         * Store email locally
         */
        storeEmailLocally(email) {
            try {
                const subscribers = JSON.parse(localStorage.getItem('photographySubscribers') || '[]');
                if (!subscribers.includes(email)) {
                    subscribers.push(email);
                    localStorage.setItem('photographySubscribers', JSON.stringify(subscribers));
                }
            } catch (error) {
                console.warn('Failed to store email locally:', error);
            }
        },

        /**
         * Track signup event
         */
        trackSignup(email) {
            // Analytics tracking can be added here
            console.log('Photography newsletter signup:', { email, timestamp: new Date().toISOString() });
        },

        /**
         * Set loading state
         */
        setLoadingState(loading) {
            const buttonText = document.getElementById('buttonText');
            const buttonLoader = document.getElementById('buttonLoader');

            if (loading) {
                buttonText.style.display = 'none';
                buttonLoader.style.display = 'inline-block';
                this.button.disabled = true;
                this.emailInput.disabled = true;
            } else {
                buttonText.style.display = 'inline';
                buttonLoader.style.display = 'none';
                this.button.disabled = false;
                this.emailInput.disabled = false;
            }
        },

        /**
         * Show error message
         */
        showError(message) {
            this.messageContainer.textContent = message;
            this.messageContainer.className = 'newsletter-message error';
            this.messageContainer.style.display = 'block';

            this.emailInput.classList.add('error');
        },

        /**
         * Show success message
         */
        showSuccess(message) {
            this.messageContainer.textContent = message;
            this.messageContainer.className = 'newsletter-message success';
            this.messageContainer.style.display = 'block';

            this.emailInput.classList.remove('error');
        },

        /**
         * Clear error state
         */
        clearError() {
            this.messageContainer.style.display = 'none';
            this.emailInput.classList.remove('error');
        }
    };

    // ============================================================================
    // PREVIEW GALLERY MODULE
    // ============================================================================

    const PreviewGallery = {
        /**
         * Initialize preview gallery
         */
        init() {
            this.generatePreviewImages();
        },

        /**
         * Generate preview gallery items
         */
        generatePreviewImages() {
            const gallery = document.getElementById('previewGallery');
            if (!gallery) return;

            const previewItems = [
                {
                    id: 'nature-1',
                    title: 'Magical Forest Lighting',
                    description: 'Capturing the interplay of light and shadow in natural settings',
                    placeholderUrl: 'https://picsum.photos/400/300?random=1',
                    style: 'nature'
                },
                {
                    id: 'portrait-1',
                    title: 'Whimsical Portraits',
                    description: 'Bringing character and personality to life through the lens',
                    placeholderUrl: 'https://picsum.photos/400/500?random=2',
                    style: 'portrait'
                },
                {
                    id: 'macro-1',
                    title: 'Tiny Worlds',
                    description: 'Discovering magic in the smallest details',
                    placeholderUrl: 'https://picsum.photos/400/400?random=3',
                    style: 'macro'
                },
                {
                    id: 'street-1',
                    title: 'Candid Moments',
                    description: 'Finding stories in everyday life and spontaneous interactions',
                    placeholderUrl: 'https://picsum.photos/500/300?random=4',
                    style: 'street'
                },
                {
                    id: 'landscape-1',
                    title: 'Dreamy Landscapes',
                    description: 'Painting with natural light across vast, beautiful vistas',
                    placeholderUrl: 'https://picsum.photos/600/400?random=5',
                    style: 'landscape'
                },
                {
                    id: 'conceptual-1',
                    title: 'Creative Concepts',
                    description: 'Bringing illustration techniques into photographic storytelling',
                    placeholderUrl: 'https://picsum.photos/400/600?random=6',
                    style: 'conceptual'
                }
            ];

            gallery.innerHTML = previewItems.map(item => `
                <div class="preview-item" data-style="${item.style}">
                    <div class="preview-image-container">
                        <img
                            src="${item.placeholderUrl}"
                            alt="${item.title}"
                            class="preview-image"
                            loading="lazy"
                        >
                        <div class="preview-overlay">
                            <div class="preview-content">
                                <h3 class="preview-title">${item.title}</h3>
                                <p class="preview-description">${item.description}</p>
                                <div class="preview-tag">${this.capitalizeFirst(item.style)} Photography</div>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');

            // Add intersection observer for animations
            this.setupIntersectionObserver();
        },

        /**
         * Setup intersection observer for scroll animations
         */
        setupIntersectionObserver() {
            const previewItems = document.querySelectorAll('.preview-item');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, index * 100);
                    }
                });
            }, {
                threshold: 0.2
            });

            previewItems.forEach(item => observer.observe(item));
        },

        /**
         * Capitalize first letter
         */
        capitalizeFirst(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    };

    // ============================================================================
    // SOCIAL MEDIA INTEGRATION MODULE
    // ============================================================================

    const SocialIntegration = {
        /**
         * Initialize social media sections
         */
        init() {
            this.populateSocialPreview();
        },

        /**
         * Populate social media preview section
         */
        populateSocialPreview() {
            const socialPreview = document.getElementById('socialPreview');
            if (!socialPreview || !SITE_CONFIG?.socialMedia) return;

            const allSocials = [
                ...SITE_CONFIG.socialMedia.primary,
                ...SITE_CONFIG.socialMedia.secondary
            ];

            socialPreview.innerHTML = allSocials.map(social => `
                <div class="social-preview-item">
                    <a href="${social.url}" target="_blank" rel="noopener" aria-label="${social.ariaLabel}">
                        <div class="social-icon">${social.icon}</div>
                        <div class="social-info">
                            <div class="social-name">${social.name}</div>
                            <div class="social-handle">${social.handle}</div>
                        </div>
                        <div class="social-desc">
                            ${this.getSocialDescription(social.name)}
                        </div>
                    </a>
                </div>
            `).join('');
        },

        /**
         * Get social media description for photography context
         */
        getSocialDescription(platform) {
            const descriptions = {
                'TikTok': 'Behind-the-scenes photography videos',
                'Instagram': 'Daily photo inspiration & stories',
                'YouTube': 'Photography tutorials & vlogs',
                'ArtFight': 'Photo-illustration mashups',
                'Cara': 'Photography community & galleries'
            };
            return descriptions[platform] || 'Follow for updates';
        }
    };

    // ============================================================================
    // MAIN INITIALIZATION
    // ============================================================================

    /**
     * Initialize all photography page modules
     */
    function initPhotographyPage() {
        // Initialize page-specific modules
        CountdownTimer.init();
        NewsletterSignup.init();
        PreviewGallery.init();
        SocialIntegration.init();

        console.log('Photography Coming Soon page initialized');
    }

    // Auto-initialize when DOM is ready (after main.js)
    document.addEventListener('DOMContentLoaded', () => {
        // Small delay to ensure main.js has finished initializing
        setTimeout(initPhotographyPage, 100);
    });

})();