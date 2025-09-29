// js/config/index.js - Configuration module combiner

// Import all configuration modules
const baseConfig = require('./base.config.js');
const { navigation, socialMedia } = require('./navigation.config.js');
const artistConfig = require('./artist.config.js');
const { home, about } = require('./pages/home.config.js');
const illustrationConfig = require('./pages/illustrations.config.js');
const storyboardingConfig = require('./pages/storyboarding.config.js');
const conceptConfig = require('./pages/concept.config.js');
const animationConfig = require('./pages/animation.config.js');

// Combine all configurations into SITE_CONFIG object
const SITE_CONFIG = {
    // Base configuration
    ...baseConfig,

    // Navigation and social media
    navigation,
    socialMedia,

    // Artist information
    artist: artistConfig,

    // Page configurations
    pages: {
        home,
        about,
        illustration: illustrationConfig,
        storyboarding: storyboardingConfig,
        concept: conceptConfig,
        animation: animationConfig,
        photography: {
            comingSoon: true,
            launchDate: '2025-01-01'
        }
    }
};

// Export for both module and browser environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_CONFIG;
}

// Make available globally for browser use
if (typeof window !== 'undefined') {
    window.SITE_CONFIG = SITE_CONFIG;
}