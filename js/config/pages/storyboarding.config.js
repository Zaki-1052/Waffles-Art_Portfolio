// js/config/pages/storyboarding.config.js - Storyboarding portfolio projects

const storyboardingConfig = {
    itemCount: 12,
    projectBased: true,
    sortOptions: ['date', 'popular', 'name'],
    defaultSort: 'date',
    projects: [] // Will be populated with full project data
};

// Export for use in index.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = storyboardingConfig;
}