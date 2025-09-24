// config.js - WafflesForArt Portfolio Site Configuration

const SITE_CONFIG = {
    // --- BASIC SETTINGS ---
    siteName: 'WafflesForArt',
    tagline: 'Hello! I am an undergraduate art student trying to support myself for my tuition.',
    copyrightYear: 2024,
    
    // --- PATH CONFIGURATION ---
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
    
    // --- NAVIGATION ---
    navigation: {
        main: [
            { label: 'Home', href: 'index.html', active: false },
            { 
                label: 'Categories', 
                href: '#',
                hasDropdown: true,
                dropdown: [
                    { label: 'Illustration', href: 'illustration.html' },
                    { label: 'Storyboarding', href: 'storyboarding.html' },
                    { label: 'Concept Art', href: 'concept.html' },
                    { label: 'Animation', href: 'animation.html' },
                    { label: 'Photography', href: 'photography.html' }
                ]
            },
            { label: 'About', href: 'about.html', active: false },
            { label: 'Shop', href: 'https://wafflesforushop.threadless.com', external: true }
        ]
    },
    
    // --- SOCIAL MEDIA ---
    socialMedia: {
        primary: [
            {
                name: 'TikTok',
                handle: '@waffles_forart',
                url: 'https://www.tiktok.com/@waffles_forart',
                icon: '🎵',
                ariaLabel: 'TikTok'
            },
            {
                name: 'Instagram',
                handle: '@waffles_forart',
                url: 'https://www.instagram.com/waffles_forart',
                icon: '📷',
                ariaLabel: 'Instagram'
            },
            {
                name: 'YouTube',
                handle: '@waffles_forart',
                url: 'https://www.youtube.com/@waffles_forart',
                icon: '▶️',
                ariaLabel: 'YouTube'
            }
        ],
        secondary: [
            {
                name: 'ArtFight',
                handle: 'waffles_forart',
                url: 'https://artfight.net/~waffles_forart',
                icon: '🎨',
                ariaLabel: 'ArtFight'
            },
            {
                name: 'Cara',
                handle: '@waffles0forart',
                url: 'https://cara.app/waffles0forart',
                icon: '✨',
                ariaLabel: 'Cara'
            },
            {
                name: 'Shop',
                handle: 'Threadless',
                url: 'https://wafflesforushop.threadless.com',
                icon: '🛒',
                ariaLabel: 'Shop'
            }
        ]
    },
    
    // --- CATEGORIES ---
    categories: [
        { id: 'all', label: 'All Work', default: true },
        { id: 'illustration', label: 'Illustration' },
        { id: 'storyboarding', label: 'Storyboarding' },
        { id: 'concept', label: 'Concept Art' },
        { id: 'animation', label: 'Animation' },
        { id: 'photography', label: 'Photography' }
    ],
    
    // --- COMMISSION STATUS ---
    commissions: {
        status: 'Open', // 'Open', 'Closed', or 'Limited'
        message: 'Currently accepting limited commissions for character art and illustrations!',
        responseTime: '24-48 hours'
    },
    
    // --- SHOP CONFIGURATION ---
    shop: {
        baseUrl: 'https://wafflesforushop.threadless.com/',
        enabled: true
    },
    
    // --- ARTIST INFORMATION ---
    artist: {
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
    },
    
    // --- PAGE CONFIGURATIONS ---
    pages: {
        home: {
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
        },
        about: {
            artistPhoto: 'artist-photo.png',
            processImages: []
        },
        illustration: {
            itemCount: 24,
            sortOptions: ['date', 'popular', 'name'],
            defaultSort: 'date'
        },
        storyboarding: {
            itemCount: 12,
            projectBased: true
        },
        concept: {
            itemCount: 18,
            showProcess: true
        },
        animation: {
            itemCount: 8,
            videoEnabled: true
        },
        photography: {
            comingSoon: true,
            launchDate: '2025-01-01'
        }
    },
    
    // --- DEFAULT METADATA ---
    defaultMetadata: {
        artwork: {
            title: 'Artwork',
            category: 'illustration',
            description: 'Original artwork by WafflesForArt',
            hasShop: false,
            commission: false
        }
    },
    
    // --- FEATURE FLAGS ---
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
    
    // --- PERFORMANCE ---
    performance: {
        imageLoadDelay: 100, // ms between image loads
        animationDuration: 300, // ms for transitions
        placeholderService: 'https://picsum.photos/', // fallback images
        maxConcurrentLoads: 3
    },
    
    // --- SEO & META ---
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

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_CONFIG;
}