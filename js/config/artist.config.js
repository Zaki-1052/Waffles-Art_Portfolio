// js/config/artist.config.js - Artist information and biography

const artistConfig = {
    name: 'WafflesForArt',
    role: 'Digital Artist & Illustrator',
    subtitle: 'Creating whimsical worlds, one waffle at a time 🧇',
    bio: 'Hello! I\'m WafflesForArt, an undergraduate art student passionate about bringing imagination to life through various artistic mediums. Currently pursuing my degree while supporting my education through my artwork.',
    philosophy: 'I believe art should spark joy and wonder. My work blends whimsy with technical skill to create pieces that transport viewers to imaginative worlds. Whether it\'s a detailed illustration or a dynamic animation, I strive to infuse each piece with personality and emotion that resonates with audiences of all ages.',
    process: 'Every project begins with understanding the vision. I collaborate closely with clients, providing regular updates and incorporating feedback throughout the creative process. From initial sketches to final polish, transparency and communication are key to bringing your ideas to life.',
    education: [
        'Currently pursuing Bachelor of Arts',
        '3+ years of digital art experience',
        'Specializing in character design & storytelling',
        'Self-taught in animation & concept art',
        'Participated in multiple art challenges & exhibitions'
    ],
    skills: [
        'Digital Illustration',
        'Character Design',
        'Storyboarding',
        'Concept Art',
        'Animation',
        'Adobe Creative Suite',
        'Procreate',
        'Clip Studio Paint',
        'Blender',
        'Traditional Media',
        'Watercolor',
        'Pencil & Ink'
    ]
};

// Export for use in index.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = artistConfig;
}