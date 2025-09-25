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