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
            { label: 'Shop', href: 'https://wafflesforartshop.threadless.com/', external: true }
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
                url: 'https://wafflesforartshop.threadless.com/',
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
        baseUrl: 'https://wafflesforartshop.threadless.com/',
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
            defaultSort: 'date',
            items: [
                {
                    id: 1,
                    filename: 'illustration1.png',
                    title: 'Dreamscape Journey',
                    description: 'A whimsical exploration of dreams and imagination, featuring soft clouds and floating islands.',
                    style: ['digital', 'fantasy'],
                    date: '2024-12-01',
                    popular: 95,
                    hasShop: true,
                    shopLink: 'product/dreamscape-journey',
                    commission: false
                },
                {
                    id: 2,
                    filename: 'illustration2.png',
                    title: 'Magical Forest Creatures',
                    description: 'Enchanted woodland beings dancing in the moonlight.',
                    style: ['digital', 'character', 'fantasy'],
                    date: '2024-11-28',
                    popular: 88,
                    hasShop: true,
                    shopLink: 'product/forest-creatures',
                    commission: false
                },
                {
                    id: 3,
                    filename: 'illustration3.png',
                    title: 'Morning Mist',
                    description: 'Soft watercolor study of dawn breaking through fog.',
                    style: ['watercolor', 'landscape'],
                    date: '2024-11-25',
                    popular: 76,
                    hasShop: false,
                    commission: true
                },
                {
                    id: 4,
                    filename: 'illustration4.png',
                    title: 'Character Study: Luna',
                    description: 'Character design for an upcoming animation project.',
                    style: ['digital', 'character'],
                    date: '2024-11-20',
                    popular: 92,
                    hasShop: true,
                    shopLink: 'product/luna-character',
                    commission: false
                },
                {
                    id: 5,
                    filename: 'illustration5.png',
                    title: 'Celestial Dreams',
                    description: 'Stars and constellations dancing across the night sky.',
                    style: ['digital', 'fantasy'],
                    date: '2024-11-15',
                    popular: 85,
                    hasShop: true,
                    shopLink: 'product/celestial-dreams',
                    commission: false
                },
                {
                    id: 6,
                    filename: 'illustration6.png',
                    title: 'Tea Time with Friends',
                    description: 'Cozy afternoon tea party with woodland creatures.',
                    style: ['watercolor', 'character'],
                    date: '2024-11-10',
                    popular: 79,
                    hasShop: false,
                    commission: true
                },
                {
                    id: 7,
                    filename: 'illustration7.png',
                    title: 'Ocean Depths',
                    description: 'Exploring the mysterious underwater world.',
                    style: ['digital', 'fantasy', 'landscape'],
                    date: '2024-11-05',
                    popular: 91,
                    hasShop: true,
                    shopLink: 'product/ocean-depths',
                    commission: false
                },
                {
                    id: 8,
                    filename: 'illustration8.png',
                    title: 'Autumn Memories',
                    description: 'Warm colors of fall captured in watercolor.',
                    style: ['watercolor', 'landscape'],
                    date: '2024-10-30',
                    popular: 73,
                    hasShop: false,
                    commission: false
                },
                {
                    id: 9,
                    filename: 'illustration9.png',
                    title: 'Dragon\'s Keep',
                    description: 'Fantasy castle guarded by a friendly dragon.',
                    style: ['digital', 'fantasy', 'landscape'],
                    date: '2024-10-25',
                    popular: 96,
                    hasShop: true,
                    shopLink: 'product/dragons-keep',
                    commission: false
                },
                {
                    id: 10,
                    filename: 'illustration10.png',
                    title: 'Bunny Adventures',
                    description: 'Cute rabbit character exploring a garden.',
                    style: ['digital', 'character'],
                    date: '2024-10-20',
                    popular: 82,
                    hasShop: true,
                    shopLink: 'product/bunny-adventures',
                    commission: false
                },
                {
                    id: 11,
                    filename: 'illustration11.png',
                    title: 'Starlight Serenade',
                    description: 'Musical notes floating through a starlit sky.',
                    style: ['digital', 'fantasy'],
                    date: '2024-10-15',
                    popular: 87,
                    hasShop: true,
                    shopLink: 'product/starlight-serenade',
                    commission: false
                },
                {
                    id: 12,
                    filename: 'illustration12.png',
                    title: 'Garden Party',
                    description: 'Whimsical tea party in a flower garden.',
                    style: ['watercolor', 'character'],
                    date: '2024-10-10',
                    popular: 75,
                    hasShop: false,
                    commission: true
                },
                {
                    id: 13,
                    filename: 'illustration13.png',
                    title: 'Crystal Caverns',
                    description: 'Glowing crystals illuminate an underground wonderland.',
                    style: ['digital', 'fantasy', 'landscape'],
                    date: '2024-10-05',
                    popular: 90,
                    hasShop: true,
                    shopLink: 'product/crystal-caverns',
                    commission: false
                },
                {
                    id: 14,
                    filename: 'illustration14.png',
                    title: 'Sleepy Cat Cafe',
                    description: 'Cozy cafe filled with napping cats.',
                    style: ['digital', 'character'],
                    date: '2024-09-30',
                    popular: 84,
                    hasShop: true,
                    shopLink: 'product/cat-cafe',
                    commission: false
                },
                {
                    id: 15,
                    filename: 'illustration15.png',
                    title: 'Rainbow Bridge',
                    description: 'A magical bridge connecting two floating islands.',
                    style: ['digital', 'fantasy', 'landscape'],
                    date: '2024-09-25',
                    popular: 78,
                    hasShop: false,
                    commission: false
                },
                {
                    id: 16,
                    filename: 'illustration16.png',
                    title: 'Midnight Magic',
                    description: 'Wizard casting spells under the full moon.',
                    style: ['digital', 'character', 'fantasy'],
                    date: '2024-09-20',
                    popular: 93,
                    hasShop: true,
                    shopLink: 'product/midnight-magic',
                    commission: false
                },
                {
                    id: 17,
                    filename: 'illustration17.png',
                    title: 'Spring Awakening',
                    description: 'Cherry blossoms blooming in a peaceful garden.',
                    style: ['watercolor', 'landscape'],
                    date: '2024-09-15',
                    popular: 71,
                    hasShop: false,
                    commission: true
                },
                {
                    id: 18,
                    filename: 'illustration18.png',
                    title: 'Sky Pirates',
                    description: 'Adventurous crew sailing through the clouds.',
                    style: ['digital', 'character', 'fantasy'],
                    date: '2024-09-10',
                    popular: 89,
                    hasShop: false,
                    commission: false
                },
                {
                    id: 19,
                    filename: 'illustration19.png',
                    title: 'Cozy Reading Nook',
                    description: 'Perfect spot for reading with a warm cup of tea.',
                    style: ['watercolor', 'landscape'],
                    date: '2024-09-05',
                    popular: 77,
                    hasShop: false,
                    commission: true
                },
                {
                    id: 20,
                    filename: 'illustration20.png',
                    title: 'Phoenix Rising',
                    description: 'Mythical phoenix emerging from flames.',
                    style: ['digital', 'fantasy', 'character'],
                    date: '2024-08-30',
                    popular: 97,
                    hasShop: true,
                    shopLink: 'product/phoenix-rising',
                    commission: false
                },
                {
                    id: 21,
                    filename: 'illustration21.png',
                    title: 'Mushroom Village',
                    description: 'Tiny houses built into giant mushrooms.',
                    style: ['digital', 'fantasy', 'landscape'],
                    date: '2024-08-25',
                    popular: 86,
                    hasShop: false,
                    commission: false
                },
                {
                    id: 22,
                    filename: 'illustration22.png',
                    title: 'Dancing Fireflies',
                    description: 'Magical fireflies lighting up a summer evening.',
                    style: ['digital', 'fantasy'],
                    date: '2024-08-20',
                    popular: 80,
                    hasShop: false,
                    commission: false
                },
                {
                    id: 23,
                    filename: 'illustration23.png',
                    title: 'Cloud Castle',
                    description: 'A castle floating among fluffy pink clouds.',
                    style: ['digital', 'fantasy', 'landscape'],
                    date: '2024-08-15',
                    popular: 94,
                    hasShop: true,
                    shopLink: 'product/cloud-castle',
                    commission: false
                },
                {
                    id: 24,
                    filename: 'illustration24.png',
                    title: 'Waffle\'s Self Portrait',
                    description: 'A whimsical self-portrait of the artist.',
                    style: ['digital', 'character'],
                    date: '2024-08-10',
                    popular: 99,
                    hasShop: false,
                    commission: false
                }
            ]
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