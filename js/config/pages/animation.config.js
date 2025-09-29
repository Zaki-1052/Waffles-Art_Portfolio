// js/config/pages/animation.config.js - Animation portfolio items

const animationConfig = {
    itemCount: 8,
    videoEnabled: true,
    sortOptions: ['date', 'duration', 'type'],
    defaultSort: 'date',
    categories: ['exercise', 'commission', 'personal', 'all'],
    items: [] // Will be populated with full animation data
};

// Export for use in index.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = animationConfig;
}