# DOCS.md

Note: This documentation is outdated and will be updated at a later timepoint, when the code is significantly changed.

## Portfolio Architecture

This is a **WafflesForArt portfolio website** - a multi-page static HTML site for showcasing artwork across different disciplines (illustration, storyboarding, concept art, animation, photography).

### Core Structure
- **Configuration-driven**: All content, paths, and settings centralized in `js/config.js` (SITE_CONFIG object)
- **Modular JavaScript**: Core functionality in `js/main.js` (PortfolioUtils module)
- **Page-specific scripts**: Individual JS files for complex pages (e.g., `js/about.js`, `js/illustrations.js`)
- **Responsive CSS architecture**: Split across `css/styles.css` (base), `css/components.css`, and `css/pages.css`

### Key Design Principles
- **Artist portfolio focused**: Artwork presentation is primary, decorative elements support but don't overwhelm
- **Whimsical yet professional**: Soft color palette (sky blues #7FB4D9, soft pinks #FFB5C5), Fredoka font for headers
- **Mobile-first responsive**: Breakpoints at 768px (tablet) and 1024px (desktop)
- **Performance optimized**: Lazy loading, placeholder fallbacks, CSS animations over JS
- **Accessibility compliant**: WCAG 2.1 AA standards, keyboard navigation, screen reader support

## Development Commands

This is a static HTML site - no build process or package manager. Development is straightforward:

### Running Locally
- Use any static file server (Live Server extension in VS Code, Python's `python -m http.server`, etc.)
- No compilation or build steps required

### File Organization
```
/
├── index.html              # Homepage with gallery
├── about.html              # Artist bio and contact
├── illustrations.html      # Illustration portfolio page
├── js/
│   ├── config.js          # Central configuration (SITE_CONFIG)
│   ├── main.js            # Core utilities (PortfolioUtils)
│   └── [page].js          # Page-specific functionality
├── css/
│   ├── styles.css         # Base styles and design system
│   ├── components.css     # Reusable UI components
│   └── pages.css          # Page-specific styling
└── images/                # Artwork and assets (not in repo)
```

## Configuration System

### Central Config (js/config.js)
All dynamic content controlled through `SITE_CONFIG` object:
- **Paths**: Image directories, artwork organization
- **Navigation**: Menu structure, dropdowns, external links
- **Social Media**: Platform links with icons and handles
- **Artist Info**: Bio, skills, commission status
- **Page Settings**: Gallery counts, sorting options, metadata
- **Feature Flags**: Enable/disable lightbox, animations, etc.

### Key Configuration Patterns
- **Image Management**: Separate arrays for desktop/mobile hero images
- **Artwork Metadata**: Optional, falls back to auto-generated defaults
- **Path Flexibility**: Support for flat or category-organized file structure
- **Shop Integration**: Threadless shop links with availability flags

## Component Architecture

### PortfolioUtils Module (js/main.js)
Core functionality split into specialized modules:
- **Navigation**: Mobile menu, dropdowns, active page marking
- **Gallery**: Dynamic item generation, filtering, lazy loading
- **Hero**: Random image rotation with device-appropriate fallbacks
- **Animations**: Floating clouds, sparkles, parallax effects
- **Lightbox**: Image viewing with shop integration
- **Utils**: Helper functions, social links, footer updates

### CSS Design System
Comprehensive CSS custom properties in `:root`:
- **Colors**: Primary (sky-blue, soft-pink), neutrals (navy variants), accents (coral, lavender)
- **Typography**: Fredoka for displays, system fonts for body
- **Spacing**: Consistent scale from xs (0.5rem) to 3xl (4rem)
- **Shadows, transitions, z-index**: Systematic scales for consistency

## Image Handling Strategy

### Expected File Structure
```
images/
├── logo/logo.png
├── hero/
│   ├── desktop/hero-desktop-1.png, hero-desktop-2.png, etc.
│   └── mobile/hero-mobile-1.png, hero-mobile-2.png, etc.
└── artwork/
    ├── artwork1.png, artwork2.png, etc. (flat organization)
    └── OR category folders (illustration/, concept/, etc.)
```

### Fallback System
- **Graceful degradation**: All images have placeholder fallbacks
- **Picsum service**: Auto-generates appropriate dimensions for missing images
- **Error handling**: Console warnings for missing files, site continues functioning

## Page-Specific Features

### Homepage (index.html)
- **Rotating hero images**: Device-appropriate selection from config arrays
- **Dynamic gallery**: Generated from `galleryItemCount` with optional metadata
- **Category filtering**: Based on `SITE_CONFIG.categories`
- **Shop indicators**: Shows which pieces are available for purchase

### About Page (about.html)
- **Artist information**: Pulls from `SITE_CONFIG.artist` object
- **Social media integration**: Auto-generated from `socialMedia` config
- **Commission status**: Dynamic display based on `commissions.status`
- **Skills showcase**: Organized display of technical abilities

### Category Pages (illustrations.html, etc.)
- **Detailed metadata**: Rich item information with descriptions, styles, dates
- **Lightbox integration**: Click-to-view with shop links
- **Sorting options**: Date, popularity, name-based organization
- **Shop integration**: Direct links to Threadless store for available items

## Development Guidelines

### Adding New Artwork
1. **Add images** to appropriate directory structure
2. **Update config**: Increment counts or add metadata in `SITE_CONFIG`
3. **No code changes** required for standard additions

### Creating New Pages
1. **Follow HTML template**: Copy structure from existing pages
2. **Include required scripts**: config.js, main.js, page-specific JS
3. **Update navigation**: Add to `SITE_CONFIG.navigation.main`
4. **Maintain responsive patterns**: Use existing CSS classes and breakpoints

### Modifying Appearance
1. **Use CSS custom properties**: Modify `:root` variables for systematic changes
2. **Maintain accessibility**: Preserve focus indicators, ARIA labels, contrast ratios
3. **Test responsive behavior**: Verify mobile, tablet, desktop layouts
4. **Consider animation performance**: Prefer CSS over JavaScript for transitions

### Shop Integration Notes
- **Threadless store**: Base URL configured in `SITE_CONFIG.shop.baseUrl`
- **Product linking**: Items with `hasShop: true` get shop indicators and links
- **External links**: Shop links open in new tabs with `rel="noopener"`

This configuration system allows for easy content updates and feature modifications without touching core functionality, making the portfolio maintainable and scalable for an undergraduate artist's growing collection.