# WafflesForArt Portfolio Implementation Prompt V2

You are an expert frontend web developer and UI/UX designer specializing in creative portfolio websites with extensive experience in HTML, CSS, JavaScript, and modern interactive web design. I need you to create a beautiful, whimsical, and highly interactive portfolio website implementation for an artist named WafflesForArt.

## Context
You have been provided with:
1. **Master Requirements Document** - The complete specifications for the WafflesForArt portfolio website
2. **Homepage Reference Code** - A completed homepage implementation that should serve as your baseline for consistency and code patterns

## Your Task
Create a fully functional HTML/CSS/JavaScript implementation for the specified page of the WafflesForArt portfolio website. If working on pages other than the homepage, use the homepage code as your reference for:
- Design system implementation (colors, typography, spacing)
- Code structure and patterns
- Interactive elements and animations
- Configuration approach (CONFIG object at top of script)

## Implementation Principles

### 1. **Modularity First**:
- **All configurable data MUST be in a CONFIG object** at the top of the JavaScript
- Use flexible, relative units (em, rem, %) rather than fixed pixels
- Image references should be simple filenames that can be easily replaced
- Avoid hardcoding any content that might change
- Generate elements dynamically from counts/arrays where possible

### 2. **Responsive Image Handling**:
- Provide separate arrays for desktop and mobile hero images
- Use responsive techniques that respect natural image dimensions
- Implement smart fallbacks to placeholders if local files don't exist
- Never force specific aspect ratios that might crop artwork

### 3. **Gallery Best Practices**:
- Use masonry layout to preserve natural image dimensions (no cropping)
- Auto-generate gallery items from a simple count
- Make metadata (titles, categories) optional, not required
- Provide sensible defaults when metadata isn't specified

## Design Requirements
Think step-by-step through the implementation, ensuring you:

1. **Visual Design Excellence**:
   - Create a whimsical yet professional aesthetic that showcases artistic personality
   - Use the soft, dreamy color palette (sky blues #7FB4D9, soft pinks #FFB5C5, coral accents #FF9AAB)
   - Implement playful elements like floating clouds and subtle animations WITHOUT overwhelming the artwork
   - Balance decorative elements with generous white space to let the artwork breathe
   - Use the Fredoka font for headers and logo to maintain the playful brand identity

2. **Interactivity & Animation**:
   - Include hover effects with smooth transitions (translateY transforms, shadow enhancements)
   - Implement floating cloud animations with 6-8 second durations
   - Add card hover effects that elevate and enhance shadows
   - Create smooth dropdown menus with elegant transitions
   - Use CSS animations over JavaScript where possible for performance

3. **Technical Implementation**:
   - Write clean, semantic HTML5 with proper accessibility attributes
   - Create modular, maintainable CSS using the provided design system variables
   - Implement responsive design (mobile-first approach) with smooth breakpoints
   - Ensure lazy loading for images and optimal performance
   - Include proper meta tags and SEO considerations
   - Add keyboard navigation support and WCAG 2.1 AA compliance features

4. **Content Structure**:
   - Follow the exact specifications from the master requirements document
   - Include all required sections and components
   - Implement proper navigation with dropdown menus
   - Add social media links (TikTok: @waffles_forart, Instagram: @waffles_forart, YouTube: @waffles_forart)
   - Include shop integration links where specified

## Specific Implementation Notes

### File Structure Expectations
```
/project-folder/
├── index.html (or relevant page name)
├── images/
│   ├── logo/
│   │   └── logo.png
│   ├── hero/
│   │   ├── desktop/
│   │   │   ├── hero-desktop-1.png
│   │   │   ├── hero-desktop-2.png
│   │   │   └── ... (as many as needed)
│   │   └── mobile/
│   │       ├── hero-mobile-1.png
│   │       ├── hero-mobile-2.png
│   │       └── ... (as many as needed)
│   ├── artwork/
│   │   ├── illustration/
│   │   │   ├── artwork1.png
│   │   │   ├── artwork2.png
│   │   │   └── ...
│   │   ├── concept/
│   │   │   └── ...
│   │   ├── storyboarding/
│   │   │   └── ...
│   │   ├── animation/
│   │   │   └── ...
│   │   └── photography/
│   │       └── ...
│   └── misc/
│       └── (icons, decorative elements, etc.)
└── (other pages if multi-page site)
```

**Note**: The artwork can be organized:
- **By category** (as shown above) for better organization when you have many pieces

### Configuration Approach
Place all customizable values in a CONFIG object at the top of your JavaScript:
```javascript
const CONFIG = {
    copyrightYear: 2024,
    heroImagesDesktop: [
        'images/hero/desktop/hero-desktop-1.png',
        'images/hero/desktop/hero-desktop-2.png'
        // Can be any number of images
    ],
    heroImagesMobile: [
        'images/hero/mobile/hero-mobile-1.png',
        'images/hero/mobile/hero-mobile-2.png'
        // Can be any number of images
    ],
    logoPath: 'images/logo/logo.png',
    artworkPath: 'images/artwork/', // Base path for artwork
    artworkCount: 15,  // Simple count, generates artwork1.png through artworkN.png
    artworkMetadata: {  // Optional - only specify what needs custom titles
        1: { title: 'Special Name', category: 'type' }
    }
    // ... other configuration
};
```

### Key Adjustments from User Feedback
Based on the homepage implementation process, ensure you:
1. **Never use fixed pixel values for logos** - use em units that scale with font
2. **Always provide separate hero image arrays** for mobile and desktop
3. **Default to masonry layouts** for galleries to preserve artwork dimensions
4. **Make all metadata optional** with sensible auto-generated defaults
5. **Place year and other changeable content in CONFIG**, not hardcoded

## Output Requirements
Please provide:

1. **Complete HTML file** with:
   - All content sections properly structured
   - Semantic markup and accessibility features
   - Inline CSS and JavaScript for a single-file implementation
   - Configuration section clearly marked at the top of JavaScript

2. **Interactive Features**:
   - All hover states and animations working
   - Responsive design functioning across all breakpoints
   - Category filtering (if applicable to the page)
   - Any page-specific interactions mentioned in the requirements

3. **Polish & Details**:
   - Use local file references (e.g., `artwork1.png`) with placeholder fallbacks
   - Include sparkle effects, cloud decorations, and other whimsical touches (used sparingly)
   - Implement the exact color scheme and typography scale from the design system
   - Add subtle details that showcase attention to craft and artistic sensibility

## Quality Standards
Your implementation should:
- Look stunning and portfolio-ready on first glance
- Feel cohesive with the overall brand while letting artwork be the hero
- Include delightful micro-interactions that surprise and engage users
- Work flawlessly across modern browsers and devices
- Load quickly with optimized assets and efficient code
- Demonstrate the "wow factor" that makes people stop and explore
- Be easily maintainable with clear configuration options

## Reference Context
Use the master requirements document as your single source of truth for all specifications, design tokens, and implementation details. Pay special attention to:
- Section 1: Design System & Brand Guidelines (for exact colors, typography, and spacing)
- Section 2-5: Specific page requirements and content structure
- Section 6: Component library specifications
- Section 10: Style guidelines for balancing decoration with functionality

Before writing any code, briefly explain your implementation approach, highlighting:
1. How you'll maintain consistency with the homepage reference
2. The key interactive features you'll implement for this page
3. How you'll balance whimsy with professionalism
4. Any creative enhancements you'll add to make the page special

Then provide the complete, production-ready HTML file with all CSS and JavaScript included inline. Make this portfolio shine!

Remember: This is for an undergraduate art student supporting their tuition, so the design should feel both professional enough to attract clients and playful enough to showcase artistic personality. Strike that perfect balance between impressive and approachable.