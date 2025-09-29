// js/config/base.config.js - Core site configuration settings

const baseConfig = {
    // Basic site information
    siteName: 'WafflesForArt',
    tagline: 'Hello! I am an undergraduate art student trying to support myself for my tuition.',
    copyrightYear: 2024,

    // Path configuration for all assets
    paths: {
        logo: 'images/logo/',
        heroDesktop: 'images/hero/desktop/',
        heroMobile: 'images/hero/mobile/',
        artwork: 'images/artwork/',
        artworkByCategory: {
            illustration: 'images/artwork/illustration/',
            storyboarding: 'images/artwork/storyboarding/',
            concept: 'images/artwork/concept/',
            animation: 'images/artwork/animation/',
            photography: 'images/artwork/photography/'
        },
        about: 'images/about/',
        misc: 'images/misc/'
    },

    // Category definitions used in galleries
    categories: [
        { id: 'all', label: 'All Work', default: true },
        { id: 'illustration', label: 'Illustration' },
        { id: 'storyboarding', label: 'Storyboarding' },
        { id: 'concept', label: 'Concept Art' },
        { id: 'animation', label: 'Animation' },
        { id: 'photography', label: 'Photography' }
    ],

    // Commission availability
    commissions: {
        status: 'Open', // 'Open', 'Closed', or 'Limited'
        message: 'Currently accepting limited commissions for character art and illustrations!',
        responseTime: '24-48 hours'
    },

    // Shop integration settings
    shop: {
        baseUrl: 'https://wafflesforartshop.threadless.com/',
        enabled: true
    },

    // Default metadata for artwork items
    defaultMetadata: {
        artwork: {
            title: 'Artwork',
            category: 'illustration',
            description: 'Original artwork by WafflesForArt',
            hasShop: false,
            commission: false
        }
    },

    // Feature toggles
    features: {
        lightbox: true,
        lazyLoading: true,
        animations: true,
        sparkles: true,
        clouds: true,
        darkMode: false,
        search: false,
        newsletter: false
    },

    // Performance configuration
    performance: {
        imageLoadDelay: 100, // ms between image loads
        animationDuration: 300, // ms for transitions
        placeholderService: 'https://picsum.photos/', // fallback images
        maxConcurrentLoads: 3
    },

    // SEO and meta information
    meta: {
        defaultTitle: 'WafflesForArt - Creative Portfolio',
        titleSeparator: ' | ',
        defaultDescription: 'Whimsical artwork across illustration, animation, storyboarding, concept art, and photography',
        keywords: 'art, illustration, digital art, character design, storyboarding, animation, portfolio',
        author: 'WafflesForArt',
        ogImage: 'images/meta/og-image.png',
        twitterCard: 'summary_large_image'
    }
};

// Export for use in index.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = baseConfig;
}