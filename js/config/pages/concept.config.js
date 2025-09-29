// js/config/pages/concept.config.js - Concept art portfolio items

const conceptConfig = {
    itemCount: 18,
    showProcess: true,
    sortOptions: ['date', 'complexity', 'category'],
    defaultSort: 'date',
    categories: ['environment', 'character', 'props', 'vehicles', 'creatures', 'all'],
    processStages: ['sketch', 'refined', 'final'],
    items: [] // Will be populated with full data
};

// Export for use in index.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = conceptConfig;
}