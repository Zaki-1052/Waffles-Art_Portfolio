// config.js - WafflesForArt Portfolio Site Configuration (Browser-compatible modular version)

// Since this runs in browser (not Node.js), we'll need to load modules synchronously
// For now, we'll inline the modular structure until we can implement proper ES6 modules

// Base configuration
const baseConfig = {
    siteName: 'WafflesForArt',
    tagline: 'Hello! I am an undergraduate art student trying to support myself for my tuition.',
    copyrightYear: 2024,

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

    categories: [
        { id: 'all', label: 'All Work', default: true },
        { id: 'illustration', label: 'Illustration' },
        { id: 'storyboarding', label: 'Storyboarding' },
        { id: 'concept', label: 'Concept Art' },
        { id: 'animation', label: 'Animation' },
        { id: 'photography', label: 'Photography' }
    ],

    commissions: {
        status: 'Open',
        message: 'Currently accepting limited commissions for character art and illustrations!',
        responseTime: '24-48 hours'
    },

    shop: {
        baseUrl: 'https://wafflesforartshop.threadless.com/',
        enabled: true
    },

    defaultMetadata: {
        artwork: {
            title: 'Artwork',
            category: 'illustration',
            description: 'Original artwork by WafflesForArt',
            hasShop: false,
            commission: false
        }
    },

    features: {
        lightbox: true,
        lazyLoading: true,
        animations: true,
        sparkles: true,
        clouds: true,
        darkMode: false,
        search: false,
        newsletter: false,
        butterflyCursor: {
            enabled: true,
            size: 40,
            followLag: 0.15,
            flapSpeed: 'auto',
            particles: {
                enabled: true,
                emissionRate: 5,
                maxCount: 100,
                colors: ['#7FB4D9', '#FFB3CC', '#FFFFFF', '#FF6B9D'],
                sizeRange: [1, 4],
                lifespan: 2000,
                waveAmplitude: 15,
                sparkle: true,
                trail: true
            }
        },
        persona: {
            enabled: true,
            character: 'waffle',
            position: 'bottom-right',
            behaviors: {
                home: {
                    initialState: 'waving',
                    actions: [
                        { type: 'wave', delay: 5000, duration: 3000 },
                        { type: 'think', delay: 15000, duration: 3000 }
                    ]
                },
                gallery: {
                    initialState: 'pointing',
                    actions: [
                        { type: 'point', delay: 8000, duration: 4000 },
                        { type: 'wave', delay: 20000, duration: 3000 }
                    ]
                },
                about: {
                    initialState: 'waving',
                    actions: [
                        { type: 'wave', delay: 3000, duration: 3000 },
                        { type: 'think', delay: 12000, duration: 4000 }
                    ]
                }
            }
        }
    },

    performance: {
        imageLoadDelay: 100,
        animationDuration: 300,
        placeholderService: 'https://picsum.photos/',
        maxConcurrentLoads: 3
    },

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

// Import navigation config
const navigationConfig = {
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
};

const socialMediaConfig = {
    primary: [
        {
            name: 'TikTok',
            handle: '@waffles_forart',
            url: 'https://www.tiktok.com/@waffles_forart',
            icon: '<svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M15.9453 8.68918V15.6727C15.9453 19.1598 13.1048 22.0004 9.6177 22.0004C8.27369 22.0004 7.01685 21.5717 5.99251 20.8525C4.35796 19.7047 3.29004 17.8085 3.29004 15.6727C3.29004 12.1783 6.12333 9.34505 9.6104 9.34505C9.90101 9.34505 10.1843 9.36685 10.4676 9.40318V12.9121H10.4386C10.3151 12.8758 10.1843 12.8394 10.0536 12.8177H9.9954C9.86466 12.8032 9.74114 12.7813 9.60309 12.7813C8.00491 12.7813 6.70448 14.0817 6.70448 15.6799C6.70448 17.2782 8.00491 18.5786 9.60309 18.5786C11.2014 18.5786 12.5018 17.2782 12.5018 15.6799V2.00037H15.938C15.938 2.29822 15.9671 2.58881 16.0179 2.87213C16.2649 4.1798 17.035 5.30584 18.1175 6.01053C18.873 6.50452 19.7593 6.78785 20.7182 6.78785V10.2241C18.9416 10.2241 17.288 9.65222 15.9453 8.68918Z"></path></svg>',
            ariaLabel: 'TikTok'
        },
        {
            name: 'Instagram',
            handle: '@waffles_forart',
            url: 'https://www.instagram.com/waffles_forart',
            icon: '<svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C9.2912 2 8.94131 2 7.86907 2.05643C7.03985 2.07241 6.21934 2.22888 5.44244 2.51919C4.78781 2.77878 4.23476 3.11738 3.67043 3.68172C3.11738 4.23476 2.76749 4.78781 2.51919 5.45372C2.27088 6.08578 2.10158 6.80813 2.05643 7.88036C2.01129 8.94131 2 9.27991 2 12C2 14.7088 2 15.0474 2.05643 16.1196C2.10158 17.1919 2.28217 17.9255 2.51919 18.5576C2.77878 19.2122 3.11738 19.7652 3.67043 20.3296C4.23476 20.8826 4.78781 21.2325 5.44244 21.4808C6.08578 21.7291 6.80813 21.8984 7.86907 21.9436C8.94131 21.9887 9.27991 22 12 22C14.7088 22 15.0474 22 16.1196 21.9436C17.1806 21.8984 17.9142 21.7178 18.5463 21.4808C19.2137 21.2306 19.8184 20.8377 20.3183 20.3296C20.8826 19.7652 21.2212 19.2009 21.4695 18.5576C21.7178 17.9142 21.8871 17.1919 21.9436 16.1196C21.9887 15.0587 22 14.7201 22 12C22 9.2912 21.9887 8.9526 21.9436 7.88036C21.9225 7.05065 21.7622 6.23037 21.4695 5.45372C21.2189 4.78649 20.8261 4.18182 20.3183 3.68172C19.754 3.11738 19.2122 2.77878 18.5463 2.51919C17.7686 2.23315 16.9482 2.08051 16.1196 2.06772C15.0474 2.01129 14.7088 2 12 2ZM11.0971 3.80587H12C14.6637 3.80587 14.9797 3.80587 16.0406 3.8623C16.6724 3.8686 17.2985 3.98313 17.8916 4.2009C18.3657 4.38149 18.693 4.59594 19.0429 4.94582C19.3928 5.29571 19.6072 5.63431 19.7991 6.09706C19.9345 6.45824 20.0925 6.97743 20.1377 7.95937C20.1828 9.00903 20.1941 9.32506 20.1941 12C20.1941 14.6637 20.1941 14.9797 20.1377 16.0406C20.1314 16.6724 20.0169 17.2985 19.7991 17.8916C19.6185 18.3657 19.3928 18.693 19.0429 19.0429C18.7043 19.3928 18.3657 19.6072 17.8916 19.7878C17.2992 20.0094 16.6731 20.1278 16.0406 20.1377C14.9797 20.1828 14.6637 20.1941 12 20.1941C9.32506 20.1941 9.00903 20.1941 7.95937 20.1377C7.3238 20.1322 6.69388 20.0177 6.09706 19.7991C5.63431 19.6072 5.307 19.3928 4.94582 19.0429C4.60722 18.7043 4.38149 18.3657 4.2009 17.8916C3.98313 17.2985 3.8686 16.6724 3.8623 16.0406C3.80587 14.9797 3.79458 14.6637 3.79458 12C3.79458 9.32506 3.80587 9.00903 3.85102 7.95937C3.85602 7.32375 3.97057 6.69376 4.18962 6.09706C4.38149 5.63431 4.59594 5.307 4.94582 4.94582C5.29571 4.60722 5.62302 4.38149 6.09706 4.2009C6.69376 3.98185 7.32375 3.86731 7.95937 3.8623C8.87359 3.81716 9.23476 3.80587 11.0971 3.79458V3.80587ZM17.3386 5.46501C17.1815 5.46501 17.0259 5.49596 16.8808 5.55608C16.7356 5.6162 16.6037 5.70433 16.4926 5.81542C16.3815 5.92652 16.2934 6.05841 16.2333 6.20356C16.1732 6.34871 16.1422 6.50429 16.1422 6.6614C16.1422 6.81851 16.1732 6.97408 16.2333 7.11924C16.2934 7.26439 16.3815 7.39628 16.4926 7.50737C16.6037 7.61847 16.7356 7.70659 16.8808 7.76672C17.0259 7.82684 17.1815 7.85779 17.3386 7.85779C17.6559 7.85779 17.9602 7.73174 18.1846 7.50737C18.4089 7.28301 18.535 6.9787 18.535 6.6614C18.535 6.3441 18.4089 6.03979 18.1846 5.81542C17.9602 5.59106 17.6559 5.46501 17.3386 5.46501ZM12 6.86456C11.3256 6.86456 10.6578 6.99739 10.0348 7.25547C9.41169 7.51355 8.84556 7.89182 8.36869 8.36869C7.89182 8.84556 7.51355 9.41169 7.25547 10.0348C6.99739 10.6578 6.86456 11.3256 6.86456 12C6.86456 12.6744 6.99739 13.3422 7.25547 13.9652C7.51355 14.5883 7.89182 15.1544 8.36869 15.6313C8.84556 16.1082 9.41169 16.4864 10.0348 16.7445C10.6578 17.0026 11.3256 17.1354 12 17.1354C13.362 17.1354 14.6682 16.5944 15.6313 15.6313C16.5944 14.6682 17.1354 13.362 17.1354 12C17.1354 10.638 16.5944 9.33178 15.6313 8.36869C14.6682 7.40561 13.362 6.86456 12 6.86456ZM12 8.67043C12.4372 8.67043 12.8702 8.75655 13.2742 8.92388C13.6781 9.0912 14.0452 9.33646 14.3544 9.64564C14.6635 9.95482 14.9088 10.3219 15.0761 10.7258C15.2434 11.1298 15.3296 11.5628 15.3296 12C15.3296 12.4372 15.2434 12.8702 15.0761 13.2742C14.9088 13.6781 14.6635 14.0452 14.3544 14.3544C14.0452 14.6635 13.6781 14.9088 13.2742 15.0761C12.8702 15.2434 12.4372 15.3296 12 15.3296C11.1169 15.3296 10.2701 14.9788 9.64564 14.3544C9.02122 13.7299 8.67043 12.8831 8.67043 12C8.67043 11.1169 9.02122 10.2701 9.64564 9.64564C10.2701 9.02122 11.1169 8.67043 12 8.67043Z"></path></svg>',
            ariaLabel: 'Instagram'
        },
        {
            name: 'YouTube',
            handle: '@waffles_forart',
            url: 'https://www.youtube.com/@waffles_forart',
            icon: '<svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.8142 5.41679C20.6763 5.64906 21.3541 6.32675 21.5832 7.18581C22 8.74483 22 11.9997 22 11.9997C22 11.9997 22 15.2545 21.5832 16.8136C21.3509 17.6757 20.6733 18.3535 19.8142 18.5825C18.2551 18.9993 12 18.9993 12 18.9993C12 18.9993 5.74801 18.9993 4.18581 18.5825C3.32358 18.3502 2.64588 17.6726 2.4168 16.8136C2 15.2545 2 11.9997 2 11.9997C2 11.9997 2 8.74483 2.4168 7.18581C2.64907 6.32358 3.32676 5.64588 4.18581 5.41679C5.74801 5 12 5 12 5C12 5 18.2551 5 19.8142 5.41679ZM15.1961 11.9992L10.0004 14.9994V8.99883L15.1961 11.9992Z"></path></svg>',
            ariaLabel: 'YouTube'
        }
    ],
    secondary: [
        {
            name: 'ArtFight',
            handle: 'waffles_forart',
            url: 'https://artfight.net/~waffles_forart',
            icon: '<svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 7.5l-3 3 1.5 1.5L12 17l-3-3 1.5-1.5-3-3L9 8l3 3 3-3 1.5 1.5z"></path></svg>',
            ariaLabel: 'ArtFight'
        },
        {
            name: 'Cara',
            handle: '@waffles0forart',
            url: 'https://cara.app/waffles0forart',
            icon: '<svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>',
            ariaLabel: 'Cara'
        },
        {
            name: 'Shop',
            handle: 'Threadless',
            url: 'https://wafflesforartshop.threadless.com/',
            icon: '<svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>',
            ariaLabel: 'Shop'
        }
    ]
};

// NOTE: This is a transitional approach. The modular files have been created in js/config/
// but until we can implement proper ES6 module loading or a build system, we'll continue
// to use this monolithic file for browser compatibility.

// For now, we'll load the illustration data inline to maintain functionality
const SITE_CONFIG = {
    ...baseConfig,
    navigation: navigationConfig,
    socialMedia: socialMediaConfig,

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
            artworkOrganization: 'flat'
        },
        about: {
            artistPhoto: 'artist-photo.png',
            processImages: []
        },
        // For now, we'll load the illustration data from our separate module
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
            projectBased: true,
            sortOptions: ['date', 'popular', 'name'],
            defaultSort: 'date',
            projects: []
        },
        concept: {
            itemCount: 18,
            showProcess: true,
            sortOptions: ['date', 'complexity', 'category'],
            defaultSort: 'date',
            categories: ['environment', 'character', 'props', 'vehicles', 'creatures', 'all'],
            processStages: ['sketch', 'refined', 'final'],
            items: []
        },
        animation: {
            itemCount: 8,
            videoEnabled: true,
            sortOptions: ['date', 'duration', 'type'],
            defaultSort: 'date',
            categories: ['exercise', 'commission', 'personal', 'all'],
            items: []
        },
        photography: {
            comingSoon: true,
            launchDate: '2025-01-01'
        }
    }
};

// TODO: Load actual data from module files
// This is a temporary solution that maintains the existing structure
// Next phase: Implement proper module loading or build system

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_CONFIG;
}