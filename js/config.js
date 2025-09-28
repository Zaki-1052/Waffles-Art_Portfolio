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
            projectBased: true,
            sortOptions: ['date', 'popular', 'name'],
            defaultSort: 'date',
            projects: [
                {
                    id: 1,
                    title: 'Animated Short - "Forest Dreams"',
                    description: 'Complete storyboard sequence for a 3-minute animated short about a child who discovers a magical forest. Includes 45 panels with camera movements and timing notes.',
                    type: ['animation', 'personal', 'narrative'],
                    date: '2024-11-20',
                    popular: 95,
                    client: null,
                    duration: '3 minutes',
                    panelCount: 45,
                    thumbnail: 'storyboard1-thumb.png',
                    images: [
                        'storyboard1-1.png',
                        'storyboard1-2.png',
                        'storyboard1-3.png',
                        'storyboard1-4.png'
                    ],
                    process: {
                        description: 'Started with rough thumbnails, refined key frames, then detailed final boards with camera notes.',
                        hasProcessShots: true,
                        processImages: ['storyboard1-process-1.png', 'storyboard1-process-2.png']
                    },
                    software: ['Storyboard Pro', 'Photoshop'],
                    tags: ['character-focused', 'whimsical', 'nature']
                },
                {
                    id: 2,
                    title: 'Music Video - "Starlight Melody"',
                    description: 'Storyboard for an indie music video featuring dynamic camera movements and abstract visual metaphors. 60 panels synchronized to musical beats.',
                    type: ['music-video', 'commercial', 'narrative'],
                    date: '2024-10-15',
                    popular: 88,
                    client: 'Indie Records Studio',
                    duration: '4 minutes',
                    panelCount: 60,
                    thumbnail: 'storyboard2-thumb.png',
                    images: [
                        'storyboard2-1.png',
                        'storyboard2-2.png',
                        'storyboard2-3.png',
                        'storyboard2-4.png',
                        'storyboard2-5.png'
                    ],
                    process: {
                        description: 'Worked closely with director to match visual rhythm to music. Multiple revision rounds.',
                        hasProcessShots: true,
                        processImages: ['storyboard2-process-1.png']
                    },
                    software: ['Toon Boom Storyboard Pro', 'After Effects'],
                    tags: ['music-sync', 'dynamic', 'abstract']
                },
                {
                    id: 3,
                    title: 'Commercial - "Happy Breakfast"',
                    description: 'Product showcase storyboard for a breakfast cereal commercial. Focus on appetite appeal and family moments.',
                    type: ['commercial', 'advertising'],
                    date: '2024-09-28',
                    popular: 76,
                    client: 'Morning Foods Inc.',
                    duration: '30 seconds',
                    panelCount: 24,
                    thumbnail: 'storyboard3-thumb.png',
                    images: [
                        'storyboard3-1.png',
                        'storyboard3-2.png',
                        'storyboard3-3.png'
                    ],
                    process: {
                        description: 'Tight timeline required quick turnaround. Focused on clear product shots and emotion.',
                        hasProcessShots: false,
                        processImages: []
                    },
                    software: ['Storyboard Pro'],
                    tags: ['product-focus', 'family', 'warm']
                },
                {
                    id: 4,
                    title: 'Short Film - "The Library Keeper"',
                    description: 'Dramatic storyboard for a 10-minute short film about a mysterious librarian. Emphasis on atmospheric lighting and character emotion.',
                    type: ['narrative', 'personal', 'drama'],
                    date: '2024-09-10',
                    popular: 92,
                    client: null,
                    duration: '10 minutes',
                    panelCount: 78,
                    thumbnail: 'storyboard4-thumb.png',
                    images: [
                        'storyboard4-1.png',
                        'storyboard4-2.png',
                        'storyboard4-3.png',
                        'storyboard4-4.png',
                        'storyboard4-5.png',
                        'storyboard4-6.png'
                    ],
                    process: {
                        description: 'Extensive pre-production included character studies and location research.',
                        hasProcessShots: true,
                        processImages: ['storyboard4-process-1.png', 'storyboard4-process-2.png', 'storyboard4-process-3.png']
                    },
                    software: ['Procreate', 'Photoshop'],
                    tags: ['atmospheric', 'character-driven', 'mystery']
                },
                {
                    id: 5,
                    title: 'Animation Test - "Bouncing Ball Plus"',
                    description: 'Advanced bouncing ball exercise with character and environment. Focus on principles of animation timing.',
                    type: ['animation', 'personal', 'exercise'],
                    date: '2024-08-25',
                    popular: 71,
                    client: null,
                    duration: '15 seconds',
                    panelCount: 18,
                    thumbnail: 'storyboard5-thumb.png',
                    images: [
                        'storyboard5-1.png',
                        'storyboard5-2.png',
                        'storyboard5-3.png'
                    ],
                    process: {
                        description: 'Classic animation exercise enhanced with storytelling elements.',
                        hasProcessShots: true,
                        processImages: ['storyboard5-process-1.png']
                    },
                    software: ['TVPaint', 'Toon Boom Harmony'],
                    tags: ['animation-principles', 'exercise', 'timing']
                },
                {
                    id: 6,
                    title: 'Web Series - "Coffee Shop Chronicles"',
                    description: 'Episode 1 storyboard for a comedy web series set in a quirky coffee shop. Character-driven humor and dialogue.',
                    type: ['narrative', 'commercial', 'comedy'],
                    date: '2024-08-05',
                    popular: 83,
                    client: 'Indie Web Productions',
                    duration: '8 minutes',
                    panelCount: 52,
                    thumbnail: 'storyboard6-thumb.png',
                    images: [
                        'storyboard6-1.png',
                        'storyboard6-2.png',
                        'storyboard6-3.png',
                        'storyboard6-4.png'
                    ],
                    process: {
                        description: 'Collaborated with writers to ensure visual gags translated well to screen.',
                        hasProcessShots: false,
                        processImages: []
                    },
                    software: ['Storyboard Pro'],
                    tags: ['comedy', 'dialogue-heavy', 'ensemble']
                },
                {
                    id: 7,
                    title: 'Game Cutscene - "Quest for the Crystal"',
                    description: 'Cinematic storyboard for a fantasy RPG game cutscene. Epic scale with magic effects and creature design.',
                    type: ['animation', 'commercial', 'fantasy'],
                    date: '2024-07-20',
                    popular: 89,
                    client: 'PixelQuest Games',
                    duration: '2.5 minutes',
                    panelCount: 38,
                    thumbnail: 'storyboard7-thumb.png',
                    images: [
                        'storyboard7-1.png',
                        'storyboard7-2.png',
                        'storyboard7-3.png',
                        'storyboard7-4.png',
                        'storyboard7-5.png'
                    ],
                    process: {
                        description: 'Required understanding of game engine limitations while maintaining cinematic quality.',
                        hasProcessShots: true,
                        processImages: ['storyboard7-process-1.png', 'storyboard7-process-2.png']
                    },
                    software: ['Storyboard Pro', 'Blender'],
                    tags: ['epic', 'fantasy', 'VFX-heavy']
                },
                {
                    id: 8,
                    title: 'Documentary - "Local Heroes"',
                    description: 'Interview and b-roll storyboard for a community documentary. Focus on authentic moments and environmental storytelling.',
                    type: ['narrative', 'commercial', 'documentary'],
                    date: '2024-07-01',
                    popular: 74,
                    client: 'Community Media Center',
                    duration: '20 minutes',
                    panelCount: 65,
                    thumbnail: 'storyboard8-thumb.png',
                    images: [
                        'storyboard8-1.png',
                        'storyboard8-2.png',
                        'storyboard8-3.png'
                    ],
                    process: {
                        description: 'Extensive location scouting and interview preparation to plan authentic shots.',
                        hasProcessShots: false,
                        processImages: []
                    },
                    software: ['Photoshop', 'Frame.io'],
                    tags: ['documentary', 'authentic', 'interview-based']
                },
                {
                    id: 9,
                    title: 'PSA - "Ocean Cleanup Initiative"',
                    description: 'Public service announcement storyboard focusing on environmental awareness. Emotional storytelling with clear call to action.',
                    type: ['commercial', 'narrative', 'psa'],
                    date: '2024-06-15',
                    popular: 87,
                    client: 'Green Ocean Foundation',
                    duration: '60 seconds',
                    panelCount: 32,
                    thumbnail: 'storyboard9-thumb.png',
                    images: [
                        'storyboard9-1.png',
                        'storyboard9-2.png',
                        'storyboard9-3.png',
                        'storyboard9-4.png'
                    ],
                    process: {
                        description: 'Balanced emotional impact with educational content. Multiple stakeholder reviews.',
                        hasProcessShots: true,
                        processImages: ['storyboard9-process-1.png']
                    },
                    software: ['Storyboard Pro'],
                    tags: ['environmental', 'emotional', 'educational']
                },
                {
                    id: 10,
                    title: 'Animation Exercise - "Character Walk Cycle"',
                    description: 'Comprehensive walk cycle storyboard showcasing different character personalities through movement.',
                    type: ['animation', 'personal', 'exercise'],
                    date: '2024-05-28',
                    popular: 69,
                    client: null,
                    duration: '30 seconds',
                    panelCount: 24,
                    thumbnail: 'storyboard10-thumb.png',
                    images: [
                        'storyboard10-1.png',
                        'storyboard10-2.png',
                        'storyboard10-3.png'
                    ],
                    process: {
                        description: 'Study of animation fundamentals with focus on character personality through movement.',
                        hasProcessShots: true,
                        processImages: ['storyboard10-process-1.png', 'storyboard10-process-2.png']
                    },
                    software: ['TVPaint', 'RoughAnimator'],
                    tags: ['walk-cycle', 'character', 'fundamentals']
                },
                {
                    id: 11,
                    title: 'Explainer Video - "How Solar Panels Work"',
                    description: 'Educational storyboard breaking down complex solar technology into digestible visual explanations.',
                    type: ['commercial', 'educational'],
                    date: '2024-05-10',
                    popular: 80,
                    client: 'SolarTech Solutions',
                    duration: '3.5 minutes',
                    panelCount: 42,
                    thumbnail: 'storyboard11-thumb.png',
                    images: [
                        'storyboard11-1.png',
                        'storyboard11-2.png',
                        'storyboard11-3.png',
                        'storyboard11-4.png'
                    ],
                    process: {
                        description: 'Required research into solar technology to ensure accuracy while maintaining visual clarity.',
                        hasProcessShots: false,
                        processImages: []
                    },
                    software: ['Storyboard Pro', 'Illustrator'],
                    tags: ['educational', 'technical', 'explainer']
                },
                {
                    id: 12,
                    title: 'Personal Project - "Dream Journal"',
                    description: 'Experimental storyboard translating personal dreams into visual narratives. Surreal imagery and fluid transitions.',
                    type: ['personal', 'narrative', 'experimental'],
                    date: '2024-04-22',
                    popular: 93,
                    client: null,
                    duration: '5 minutes',
                    panelCount: 56,
                    thumbnail: 'storyboard12-thumb.png',
                    images: [
                        'storyboard12-1.png',
                        'storyboard12-2.png',
                        'storyboard12-3.png',
                        'storyboard12-4.png',
                        'storyboard12-5.png'
                    ],
                    process: {
                        description: 'Highly personal project exploring subconscious imagery and dream logic.',
                        hasProcessShots: true,
                        processImages: ['storyboard12-process-1.png', 'storyboard12-process-2.png', 'storyboard12-process-3.png']
                    },
                    software: ['Procreate', 'After Effects'],
                    tags: ['surreal', 'personal', 'experimental']
                }
            ]
        },
        concept: {
            itemCount: 18,
            showProcess: true,
            sortOptions: ['date', 'complexity', 'category'],
            defaultSort: 'date',
            categories: ['environment', 'character', 'props', 'vehicles', 'creatures', 'all'],
            processStages: ['sketch', 'refined', 'final'],
            items: [
                {
                    id: 1,
                    filename: 'concept1.png',
                    title: 'Mystical Forest Environment',
                    description: 'Deep forest environment design with magical elements, ancient trees, and glowing moss. Created for a fantasy game project.',
                    category: 'environment',
                    finalImage: 'concept1-final.png',
                    processImages: ['concept1-sketch.png', 'concept1-refined.png', 'concept1-final.png'],
                    date: '2024-12-01',
                    complexity: 95,
                    software: ['Photoshop', 'Procreate'],
                    techniques: ['Digital Painting', 'Matte Painting', 'Atmospheric Perspective'],
                    timeSpent: '18 hours',
                    revisionStages: 3,
                    inspiration: 'Ancient forests, Studio Ghibli environments',
                    hasShop: true,
                    shopLink: 'product/mystical-forest',
                    processNotes: 'Started with thumbnail compositions, refined lighting and atmosphere, added magical details in final pass.'
                },
                {
                    id: 2,
                    filename: 'concept2.png',
                    title: 'Cyber Knight Character',
                    description: 'Futuristic knight character design combining medieval armor aesthetics with cyberpunk technology elements.',
                    category: 'character',
                    finalImage: 'concept2-final.png',
                    processImages: ['concept2-sketch.png', 'concept2-refined.png', 'concept2-final.png'],
                    date: '2024-11-28',
                    complexity: 88,
                    software: ['Clip Studio Paint', 'Blender'],
                    techniques: ['Character Design', '3D Blocking', 'Concept Art'],
                    timeSpent: '22 hours',
                    revisionStages: 4,
                    inspiration: 'Cyberpunk aesthetics, medieval armor',
                    hasShop: false,
                    processNotes: 'Explored multiple design directions, used 3D blocking for accurate proportions, refined details and materials.'
                },
                {
                    id: 3,
                    filename: 'concept3.png',
                    title: 'Enchanted Weapons Set',
                    description: 'Collection of magical weapon designs including staff, sword, and bow with glowing runes and organic elements.',
                    category: 'props',
                    finalImage: 'concept3-final.png',
                    processImages: ['concept3-sketch.png', 'concept3-refined.png', 'concept3-final.png'],
                    date: '2024-11-25',
                    complexity: 82,
                    software: ['Photoshop', 'Keyshot'],
                    techniques: ['Prop Design', 'Material Definition', 'Lighting Studies'],
                    timeSpent: '15 hours',
                    revisionStages: 2,
                    inspiration: 'Celtic designs, natural forms, fantasy MMORPGs',
                    hasShop: true,
                    shopLink: 'product/enchanted-weapons',
                    processNotes: 'Focused on functionality while maintaining fantasy aesthetic, explored different material combinations.'
                },
                {
                    id: 4,
                    filename: 'concept4.png',
                    title: 'Hovering Transport Vehicle',
                    description: 'Sleek hovering vehicle design for urban transportation in a futuristic city setting.',
                    category: 'vehicles',
                    finalImage: 'concept4-final.png',
                    processImages: ['concept4-sketch.png', 'concept4-refined.png', 'concept4-final.png'],
                    date: '2024-11-20',
                    complexity: 90,
                    software: ['Fusion 360', 'Keyshot', 'Photoshop'],
                    techniques: ['Vehicle Design', '3D Modeling', 'Industrial Design'],
                    timeSpent: '25 hours',
                    revisionStages: 5,
                    inspiration: 'Modern automotive design, sci-fi films, urban mobility concepts',
                    hasShop: false,
                    processNotes: 'Started with function analysis, created 3D model for accurate perspectives, refined aerodynamics and aesthetics.'
                },
                {
                    id: 5,
                    filename: 'concept5.png',
                    title: 'Dragon Companion',
                    description: 'Friendly dragon creature design intended as a companion character, balancing cute and majestic qualities.',
                    category: 'creatures',
                    finalImage: 'concept5-final.png',
                    processImages: ['concept5-sketch.png', 'concept5-refined.png', 'concept5-final.png'],
                    date: '2024-11-15',
                    complexity: 85,
                    software: ['Procreate', 'Photoshop'],
                    techniques: ['Creature Design', 'Animal Anatomy', 'Color Theory'],
                    timeSpent: '20 hours',
                    revisionStages: 3,
                    inspiration: 'Various dragon mythologies, bird anatomy, friendly pet characteristics',
                    hasShop: true,
                    shopLink: 'product/dragon-companion',
                    processNotes: 'Explored different scale patterns and wing structures, balanced intimidating and approachable features.'
                },
                {
                    id: 6,
                    filename: 'concept6.png',
                    title: 'Steampunk Airship Bridge',
                    description: 'Interior environment design for the command bridge of a steampunk airship with brass controls and wooden details.',
                    category: 'environment',
                    finalImage: 'concept6-final.png',
                    processImages: ['concept6-sketch.png', 'concept6-refined.png', 'concept6-final.png'],
                    date: '2024-11-10',
                    complexity: 92,
                    software: ['Photoshop', 'SketchUp'],
                    techniques: ['Interior Design', 'Perspective Drawing', 'Historical Research'],
                    timeSpent: '28 hours',
                    revisionStages: 4,
                    inspiration: 'Victorian era machinery, naval ship bridges, steampunk aesthetics',
                    hasShop: false,
                    processNotes: 'Researched historical ship designs, created detailed floor plan, focused on atmospheric lighting.'
                },
                {
                    id: 7,
                    filename: 'concept7.png',
                    title: 'Space Explorer Character',
                    description: 'Astronaut character design with modular suit components and personality-driven details.',
                    category: 'character',
                    finalImage: 'concept7-final.png',
                    processImages: ['concept7-sketch.png', 'concept7-refined.png', 'concept7-final.png'],
                    date: '2024-11-05',
                    complexity: 87,
                    software: ['Clip Studio Paint', 'Marvelous Designer'],
                    techniques: ['Character Design', 'Costume Design', 'Technical Illustration'],
                    timeSpent: '24 hours',
                    revisionStages: 3,
                    inspiration: 'NASA spacesuits, retro sci-fi, practical space exploration gear',
                    hasShop: true,
                    shopLink: 'product/space-explorer',
                    processNotes: 'Studied real spacesuit functionality, designed modular components, added personality through accessories.'
                },
                {
                    id: 8,
                    filename: 'concept8.png',
                    title: 'Magical Crystal Props',
                    description: 'Various magical crystal designs for spell components, each with unique properties and visual effects.',
                    category: 'props',
                    finalImage: 'concept8-final.png',
                    processImages: ['concept8-sketch.png', 'concept8-refined.png', 'concept8-final.png'],
                    date: '2024-10-30',
                    complexity: 79,
                    software: ['Photoshop', 'Substance Designer'],
                    techniques: ['Prop Design', 'Material Studies', 'Particle Effects'],
                    timeSpent: '16 hours',
                    revisionStages: 2,
                    inspiration: 'Real crystal formations, fantasy games, magical item designs',
                    hasShop: false,
                    processNotes: 'Studied real crystal structures, designed unique magical properties for each type, added glowing effects.'
                },
                {
                    id: 9,
                    filename: 'concept9.png',
                    title: 'Mechanical War Beast',
                    description: 'Large mechanical creature design combining animal anatomy with industrial machinery for a post-apocalyptic setting.',
                    category: 'creatures',
                    finalImage: 'concept9-final.png',
                    processImages: ['concept9-sketch.png', 'concept9-refined.png', 'concept9-final.png'],
                    date: '2024-10-25',
                    complexity: 96,
                    software: ['ZBrush', 'Keyshot', 'Photoshop'],
                    techniques: ['Creature Design', 'Hard Surface Modeling', 'Concept Sculpting'],
                    timeSpent: '32 hours',
                    revisionStages: 5,
                    inspiration: 'Industrial machinery, large predatory animals, mech design',
                    hasShop: true,
                    shopLink: 'product/war-beast',
                    processNotes: 'Combined organic and mechanical forms, focused on intimidating silhouette, detailed joint mechanisms.'
                },
                {
                    id: 10,
                    filename: 'concept10.png',
                    title: 'Flying Vehicle Squadron',
                    description: 'Fleet of small aircraft designs with different roles - scout, fighter, and transport variants.',
                    category: 'vehicles',
                    finalImage: 'concept10-final.png',
                    processImages: ['concept10-sketch.png', 'concept10-refined.png', 'concept10-final.png'],
                    date: '2024-10-20',
                    complexity: 91,
                    software: ['Fusion 360', 'Photoshop', 'KeyShot'],
                    techniques: ['Vehicle Design', 'Technical Drawing', 'Fleet Coordination'],
                    timeSpent: '26 hours',
                    revisionStages: 4,
                    inspiration: 'Military aircraft, drone design, modular construction systems',
                    hasShop: false,
                    processNotes: 'Designed shared component system, created functional variants, studied real aircraft aerodynamics.'
                },
                {
                    id: 11,
                    filename: 'concept11.png',
                    title: 'Underground City Environment',
                    description: 'Vast underground civilization environment with multi-level architecture and bioluminescent lighting.',
                    category: 'environment',
                    finalImage: 'concept11-final.png',
                    processImages: ['concept11-sketch.png', 'concept11-refined.png', 'concept11-final.png'],
                    date: '2024-10-15',
                    complexity: 94,
                    software: ['Blender', 'Photoshop', 'World Machine'],
                    techniques: ['Environment Design', '3D Layout', 'Atmospheric Rendering'],
                    timeSpent: '30 hours',
                    revisionStages: 4,
                    inspiration: 'Underground cave systems, ancient architecture, bioluminescent organisms',
                    hasShop: true,
                    shopLink: 'product/underground-city',
                    processNotes: 'Created 3D blockout for scale reference, studied cave lighting, designed organic architecture integration.'
                },
                {
                    id: 12,
                    filename: 'concept12.png',
                    title: 'Elemental Mage Character',
                    description: 'Magic user character design with interchangeable elemental focus - fire, water, earth, and air variants.',
                    category: 'character',
                    finalImage: 'concept12-final.png',
                    processImages: ['concept12-sketch.png', 'concept12-refined.png', 'concept12-final.png'],
                    date: '2024-10-10',
                    complexity: 89,
                    software: ['Photoshop', 'Procreate'],
                    techniques: ['Character Design', 'Costume Variants', 'Elemental Effects'],
                    timeSpent: '21 hours',
                    revisionStages: 3,
                    inspiration: 'Classical elemental symbolism, wizard archetypes, practical magic gear',
                    hasShop: false,
                    processNotes: 'Designed base character first, created element-specific accessories and effects, maintained design cohesion.'
                },
                {
                    id: 13,
                    filename: 'concept13.png',
                    title: 'Enchanted Armor Set',
                    description: 'Complete armor design with magical enhancements, focusing on both protection and mobility.',
                    category: 'props',
                    finalImage: 'concept13-final.png',
                    processImages: ['concept13-sketch.png', 'concept13-refined.png', 'concept13-final.png'],
                    date: '2024-10-05',
                    complexity: 86,
                    software: ['ZBrush', 'Substance Painter', 'Photoshop'],
                    techniques: ['Armor Design', 'Material Definition', 'Historical Accuracy'],
                    timeSpent: '23 hours',
                    revisionStages: 3,
                    inspiration: 'Medieval plate armor, fantasy aesthetics, functional design principles',
                    hasShop: true,
                    shopLink: 'product/enchanted-armor',
                    processNotes: 'Studied historical armor construction, designed magical enhancement integration, focused on practical mobility.'
                },
                {
                    id: 14,
                    filename: 'concept14.png',
                    title: 'Aquatic Transport Vessel',
                    description: 'Submarine-like vehicle design for underwater exploration with transparent viewing sections.',
                    category: 'vehicles',
                    finalImage: 'concept14-final.png',
                    processImages: ['concept14-sketch.png', 'concept14-refined.png', 'concept14-final.png'],
                    date: '2024-09-30',
                    complexity: 88,
                    software: ['Rhino 3D', 'KeyShot', 'Photoshop'],
                    techniques: ['Vehicle Design', 'Underwater Engineering', 'Material Studies'],
                    timeSpent: '27 hours',
                    revisionStages: 4,
                    inspiration: 'Submarine design, marine biology, underwater research vessels',
                    hasShop: false,
                    processNotes: 'Researched underwater pressure considerations, designed viewing areas, integrated propulsion systems.'
                },
                {
                    id: 15,
                    filename: 'concept15.png',
                    title: 'Forest Guardian Creature',
                    description: 'Large peaceful creature design that protects the forest, combining plant and animal characteristics.',
                    category: 'creatures',
                    finalImage: 'concept15-final.png',
                    processImages: ['concept15-sketch.png', 'concept15-refined.png', 'concept15-final.png'],
                    date: '2024-09-25',
                    complexity: 83,
                    software: ['Procreate', 'Photoshop'],
                    techniques: ['Creature Design', 'Natural Integration', 'Symbiotic Design'],
                    timeSpent: '19 hours',
                    revisionStages: 3,
                    inspiration: 'Forest ecosystems, mythological guardians, tree growth patterns',
                    hasShop: true,
                    shopLink: 'product/forest-guardian',
                    processNotes: 'Designed symbiotic relationship with forest environment, balanced imposing and gentle features.'
                },
                {
                    id: 16,
                    filename: 'concept16.png',
                    title: 'Floating Market Environment',
                    description: 'Aerial marketplace environment with floating platforms connected by bridges and suspended shops.',
                    category: 'environment',
                    finalImage: 'concept16-final.png',
                    processImages: ['concept16-sketch.png', 'concept16-refined.png', 'concept16-final.png'],
                    date: '2024-09-20',
                    complexity: 91,
                    software: ['Blender', 'Photoshop', 'World Creator'],
                    techniques: ['Environment Design', 'Architectural Planning', 'Atmospheric Perspective'],
                    timeSpent: '29 hours',
                    revisionStages: 4,
                    inspiration: 'Floating markets, sky cities, aerial architecture concepts',
                    hasShop: false,
                    processNotes: 'Designed structural support systems, planned traffic flow, created bustling market atmosphere.'
                },
                {
                    id: 17,
                    filename: 'concept17.png',
                    title: 'Shapeshifter Character',
                    description: 'Character design showing transformation stages between human and animal forms.',
                    category: 'character',
                    finalImage: 'concept17-final.png',
                    processImages: ['concept17-sketch.png', 'concept17-refined.png', 'concept17-final.png'],
                    date: '2024-09-15',
                    complexity: 93,
                    software: ['Photoshop', 'ZBrush'],
                    techniques: ['Character Design', 'Transformation Sequences', 'Anatomy Studies'],
                    timeSpent: '31 hours',
                    revisionStages: 5,
                    inspiration: 'Transformation mythology, animal anatomy, character evolution',
                    hasShop: true,
                    shopLink: 'product/shapeshifter',
                    processNotes: 'Studied animal and human anatomy, designed transition stages, maintained character identity throughout forms.'
                },
                {
                    id: 18,
                    filename: 'concept18.png',
                    title: 'Magical Workshop Environment',
                    description: 'Alchemist workshop interior with magical apparatus, bubbling potions, and floating ingredients.',
                    category: 'environment',
                    finalImage: 'concept18-final.png',
                    processImages: ['concept18-sketch.png', 'concept18-refined.png', 'concept18-final.png'],
                    date: '2024-09-10',
                    complexity: 87,
                    software: ['Photoshop', 'Blender'],
                    techniques: ['Interior Design', 'Prop Integration', 'Magical Effects'],
                    timeSpent: '25 hours',
                    revisionStages: 3,
                    inspiration: 'Alchemical laboratories, medieval workshops, magical item creation',
                    hasShop: false,
                    processNotes: 'Designed functional workspace layout, integrated magical elements naturally, created atmospheric lighting.'
                }
            ]
        },
        animation: {
            itemCount: 8,
            videoEnabled: true,
            sortOptions: ['date', 'duration', 'type'],
            defaultSort: 'date',
            categories: ['exercise', 'commission', 'personal', 'all'],
            items: [
                {
                    id: 1,
                    filename: 'animation1.mp4',
                    thumbnailImage: 'animation1-thumb.png',
                    gifPreview: 'animation1-preview.gif',
                    title: 'Character Walk Cycle Study',
                    description: 'Classic animation exercise exploring different personality types through walk cycles. Features a cheerful forest creature discovering the joy of movement.',
                    duration: '00:15',
                    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                    videoType: 'youtube',
                    date: '2024-12-01',
                    projectType: 'exercise',
                    software: ['TVPaint Animation', 'After Effects'],
                    techniques: ['Traditional Animation', '12 Principles of Animation', 'Character Design'],
                    frameRate: 24,
                    frameCount: 360,
                    popularity: 92,
                    hasShop: false,
                    commission: false,
                    behindTheScenes: {
                        hasContent: true,
                        description: 'Started with rough gesture drawings to establish different personality types, then refined timing and spacing for each character variant.',
                        processImages: ['animation1-process-1.png', 'animation1-process-2.png'],
                        timelapseVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                    },
                    tags: ['walk-cycle', 'character-animation', 'fundamentals']
                },
                {
                    id: 2,
                    filename: 'animation2.mp4',
                    thumbnailImage: 'animation2-thumb.png',
                    gifPreview: 'animation2-preview.gif',
                    title: 'Magical Transformation Sequence',
                    description: 'A whimsical transformation animation showing a small seed growing into a magnificent tree with magical sparkles and flowing energy.',
                    duration: '00:30',
                    videoUrl: 'https://vimeo.com/123456789',
                    videoType: 'vimeo',
                    date: '2024-11-25',
                    projectType: 'personal',
                    software: ['Toon Boom Harmony', 'Photoshop'],
                    techniques: ['Motion Graphics', 'Particle Animation', 'Morphing'],
                    frameRate: 30,
                    frameCount: 900,
                    popularity: 88,
                    hasShop: true,
                    shopLink: 'product/magical-transformation',
                    commission: false,
                    behindTheScenes: {
                        hasContent: true,
                        description: 'Explored various growth patterns in nature, studied real tree growth timelapses, and designed custom particle effects for the magical elements.',
                        processImages: ['animation2-process-1.png', 'animation2-process-2.png', 'animation2-process-3.png'],
                        timelapseVideo: null
                    },
                    tags: ['transformation', 'nature', 'magic-effects']
                },
                {
                    id: 3,
                    filename: 'animation3.mp4',
                    thumbnailImage: 'animation3-thumb.png',
                    gifPreview: 'animation3-preview.gif',
                    title: 'Bouncing Ball with Personality',
                    description: 'Advanced bouncing ball exercise that tells a story. The ball shows emotions and reacts to its environment, demonstrating squash and stretch principles.',
                    duration: '00:20',
                    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                    videoType: 'youtube',
                    date: '2024-11-20',
                    projectType: 'exercise',
                    software: ['OpenToonz', 'DaVinci Resolve'],
                    techniques: ['Squash and Stretch', 'Timing', 'Anticipation'],
                    frameRate: 24,
                    frameCount: 480,
                    popularity: 75,
                    hasShop: false,
                    commission: false,
                    behindTheScenes: {
                        hasContent: true,
                        description: 'Classic animation fundamental elevated with storytelling. Focused on making a simple ball feel alive and full of character.',
                        processImages: ['animation3-process-1.png'],
                        timelapseVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                    },
                    tags: ['bouncing-ball', 'fundamentals', 'character']
                },
                {
                    id: 4,
                    filename: 'animation4.mp4',
                    thumbnailImage: 'animation4-thumb.png',
                    gifPreview: 'animation4-preview.gif',
                    title: 'Dragon Flight Commission',
                    description: 'Commissioned animation of a majestic dragon soaring through cloudy skies. Features detailed wing animation and atmospheric effects.',
                    duration: '01:15',
                    videoUrl: 'https://vimeo.com/123456789',
                    videoType: 'vimeo',
                    date: '2024-11-15',
                    projectType: 'commission',
                    software: ['Blender', 'After Effects', 'Substance Painter'],
                    techniques: ['3D Animation', 'Rigging', 'Atmospheric Rendering'],
                    frameRate: 30,
                    frameCount: 2250,
                    popularity: 94,
                    hasShop: false,
                    commission: true,
                    client: 'Fantasy Game Studio',
                    behindTheScenes: {
                        hasContent: true,
                        description: 'Extensive research into dragon anatomy and flight patterns. Created custom wing rig for realistic membrane deformation during flight.',
                        processImages: ['animation4-process-1.png', 'animation4-process-2.png', 'animation4-process-3.png'],
                        timelapseVideo: null
                    },
                    tags: ['dragon', 'flight', '3d-animation', 'commission']
                },
                {
                    id: 5,
                    filename: 'animation5.mp4',
                    thumbnailImage: 'animation5-thumb.png',
                    gifPreview: 'animation5-preview.gif',
                    title: 'Coffee Shop Morning Rush',
                    description: 'Charming 2D animation loop showing the busy morning atmosphere of a cozy coffee shop with various woodland creature customers.',
                    duration: '00:45',
                    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                    videoType: 'youtube',
                    date: '2024-11-10',
                    projectType: 'personal',
                    software: ['Clip Studio Paint', 'After Effects'],
                    techniques: ['2D Animation', 'Loop Animation', 'Character Animation'],
                    frameRate: 24,
                    frameCount: 1080,
                    popularity: 86,
                    hasShop: true,
                    shopLink: 'product/coffee-shop-loop',
                    commission: false,
                    behindTheScenes: {
                        hasContent: true,
                        description: 'Studied real coffee shop environments and customer behaviors. Designed multiple character personalities to create a living, breathing scene.',
                        processImages: ['animation5-process-1.png', 'animation5-process-2.png'],
                        timelapseVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                    },
                    tags: ['coffee-shop', 'characters', 'loop', 'cozy']
                },
                {
                    id: 6,
                    filename: 'animation6.mp4',
                    thumbnailImage: 'animation6-thumb.png',
                    gifPreview: 'animation6-preview.gif',
                    title: 'Pendulum Physics Study',
                    description: 'Technical animation exercise exploring pendulum physics and secondary animation. Features realistic weight and momentum in motion.',
                    duration: '00:12',
                    videoUrl: 'https://vimeo.com/123456789',
                    videoType: 'vimeo',
                    date: '2024-11-05',
                    projectType: 'exercise',
                    software: ['Maya', 'RealFlow'],
                    techniques: ['Physics Simulation', 'Secondary Animation', 'Technical Animation'],
                    frameRate: 60,
                    frameCount: 720,
                    popularity: 71,
                    hasShop: false,
                    commission: false,
                    behindTheScenes: {
                        hasContent: true,
                        description: 'Deep dive into physics principles and how they apply to animation. Experimented with different materials and weights.',
                        processImages: ['animation6-process-1.png'],
                        timelapseVideo: null
                    },
                    tags: ['physics', 'pendulum', 'technical', 'study']
                },
                {
                    id: 7,
                    filename: 'animation7.mp4',
                    thumbnailImage: 'animation7-thumb.png',
                    gifPreview: 'animation7-preview.gif',
                    title: 'Seasonal Transition Montage',
                    description: 'Beautiful transition animation showing the same magical forest scene changing through all four seasons with smooth morphing effects.',
                    duration: '01:30',
                    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                    videoType: 'youtube',
                    date: '2024-10-30',
                    projectType: 'personal',
                    software: ['Toon Boom Harmony', 'After Effects', 'Photoshop'],
                    techniques: ['Morphing', 'Color Theory', 'Environmental Animation'],
                    frameRate: 24,
                    frameCount: 2160,
                    popularity: 91,
                    hasShop: true,
                    shopLink: 'product/seasonal-transition',
                    commission: false,
                    behindTheScenes: {
                        hasContent: true,
                        description: 'Extensive color palette development for each season. Created detailed transition maps to ensure smooth morphing between seasonal states.',
                        processImages: ['animation7-process-1.png', 'animation7-process-2.png', 'animation7-process-3.png'],
                        timelapseVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                    },
                    tags: ['seasons', 'transition', 'environment', 'color']
                },
                {
                    id: 8,
                    filename: 'animation8.mp4',
                    thumbnailImage: 'animation8-thumb.png',
                    gifPreview: 'animation8-preview.gif',
                    title: 'Logo Animation Package',
                    description: 'Professional logo animation package for a client featuring multiple variations: reveal, loop, and outro animations with elegant motion graphics.',
                    duration: '00:25',
                    videoUrl: 'https://vimeo.com/123456789',
                    videoType: 'vimeo',
                    date: '2024-10-25',
                    projectType: 'commission',
                    software: ['After Effects', 'Cinema 4D', 'Illustrator'],
                    techniques: ['Motion Graphics', 'Logo Animation', 'Typography Animation'],
                    frameRate: 30,
                    frameCount: 750,
                    popularity: 83,
                    hasShop: false,
                    commission: true,
                    client: 'Creative Agency Co.',
                    behindTheScenes: {
                        hasContent: true,
                        description: 'Collaborated closely with brand team to ensure animations matched brand personality. Created multiple style variations for different use cases.',
                        processImages: ['animation8-process-1.png', 'animation8-process-2.png'],
                        timelapseVideo: null
                    },
                    tags: ['logo', 'motion-graphics', 'branding', 'professional']
                }
            ]
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