// js/config/pages/home.config.js - Home page configuration

const homeConfig = {
    heroImagesDesktop: [
        'hero-desktop-1.png',
        'hero-desktop-2.png',
        'hero-desktop-3.png',
        'hero-desktop-4.png',
        'hero-desktop-5.png'
    ],
    heroImagesMobile: [
        'hero-mobile-1.png',
        'hero-mobile-2.png',
        'hero-mobile-3.png',
        'hero-mobile-4.png',
        'hero-mobile-5.png'
    ],
    galleryItemCount: 15,
    artworkOrganization: 'flat' // 'flat' or 'category'
};

const aboutConfig = {
    artistPhoto: 'artist-photo.png',
    processImages: []
};

// Export for use in index.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { home: homeConfig, about: aboutConfig };
}