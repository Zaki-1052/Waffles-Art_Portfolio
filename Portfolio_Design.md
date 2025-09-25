# WafflesForArt Portfolio Website - Master Requirements Document

## Project Overview

**Client**: WafflesForArt (@waffles_forart)  
**Project Type**: Art Portfolio Website  
**Primary Purpose**: Showcase artwork across multiple disciplines with shop integration  
**Design Philosophy**: Whimsical, interactive, and professional while maintaining artistic personality

---

## 1. Design System & Brand Guidelines

### 1.1 Color Palette

```css
Primary Colors:
- Sky Blue: #7FB4D9 (navigation, primary actions)
- Soft Pink: #FFB5C5 (accents, highlights)
- Light Pink: #FFD0DC (subtle backgrounds)

Neutral Colors:
- Navy Dark: #1E3A5F (text, dropdowns)
- Navy Medium: #2C4E70 (secondary elements)
- White: #FFFFFF (backgrounds)
- Off-White: #FAFBFC (subtle backgrounds)
- Light Gray: #F5F7FA (section backgrounds)

Accent Colors:
- Coral: #FF9AAB (interactive highlights)
- Soft Yellow: #FFE5B4 (special elements)
- Lavender: #E6E6FA (subtle accents)
```

### 1.2 Typography

```css
Display Font: 'Fredoka' (playful headers, logo)
Body Font: System fonts (-apple-system, BlinkMacSystemFont, etc.)

Size Scale:
- 3xl: 2rem (main headings)
- 2xl: 1.5rem (section headers)
- xl: 1.25rem (subsections)
- lg: 1.125rem (emphasis)
- base: 1rem (body text)
- sm: 0.875rem (captions)
- xs: 0.75rem (metadata)
```

### 1.3 Interactive Elements

- Hover effects with transform: translateY()
- Shadow transitions on hover
- Floating cloud animations
- Rotating gallery on refresh
- Dropdown navigation with smooth transitions
- Card hover effects with elevation changes

---

## 2. Site Architecture

### 2.1 Navigation Structure

```
Home (Gallery Grid)
├── Illustration
├── Storyboarding & Concept Art
├── Animation
├── Photography
├── About (Meet the Artist)
└── Shop (External link)
```

### 2.2 Page Inventory

1. **Home Page** - Dynamic gallery with category filtering
2. **Category Pages** - Deep dive into each art discipline
3. **About Page** - Artist bio and contact information
4. **Individual Artwork Pages** - Detailed view with descriptions

---

## 3. Homepage Requirements

### 3.1 Hero Section

- **Rotating Cover Image**: Different artwork displays on each refresh
	- Recommend separate image sets for mobile (portrait) and desktop (landscape)
	- System should detect device and load appropriate aspect ratio
- **Artist Logo**: "WafflesForArt" in Fredoka font
- **Tagline**: Brief artist introduction
- **Cloud Decorations**: Animated soft pink clouds (subtle, not overwhelming)

### 3.2 Gallery Grid

- **Layout**: Responsive masonry or grid layout
	- Prefer masonry to preserve natural image dimensions without cropping
	- Images should display at their natural aspect ratios
- **Categories**:
    - Illustration (with shop link indicator)
    - Storyboarding
    - Concept Art
    - Animation (video previews)
    - Photography (coming soon indicator)
- **Interactive Features**:
    - Hover effects showing artwork title
    - Quick category filters
    - Lazy loading for performance

### 3.3 Technical Features

- Image optimization with multiple sizes
- Smooth scroll behavior
- Category filter animations
- Progressive image loading

---

## 4. Category Pages Requirements

### 4.1 Illustration Page

- Gallery of illustrations
- Direct shop integration links
- Hover overlays with piece details
- Sorting by: Date, Popular, Style

### 4.2 Storyboarding & Concept Art

- Project-based organization
- Process shots and final pieces
- Expandable project cards
- Client work indicators (if applicable)

### 4.3 Animation Page

- Video embeds with custom players
- GIF previews for quick loading
- Project descriptions
- Behind-the-scenes content

### 4.4 Photography Page

- "Coming Soon" elegant placeholder
- Newsletter signup for updates
- Sample preview images
- Expected launch timeline

---

## 5. About Page Requirements

### 5.1 Content Sections

- **Meet the Artist**: Personal introduction
- **Artist Statement**: Creative philosophy
- **Skills & Tools**: Software/medium expertise
- **Education/Experience**: Background information
- **Commission Status**: Open/Closed indicator

### 5.2 Social Media Integration

```
Primary Platforms:
- TikTok: @waffles_forart
- Instagram: @waffles_forart
- YouTube: @waffles_forart

Secondary Platforms:
- ArtFight: waffles_forart
- Cara: @waffles0forart

Shop:
- Threadless: https://wafflesforartshop.threadless.com/
```

### 5.3 Contact Section

- Contact form with validation
- Social media icon links
- Commission inquiry button
- Response time expectations

---

## 6. Component Library

### 6.1 Navigation Bar

```css
- Fixed or sticky positioning
- Sky blue background (#7FB4D9)
- Dropdown menus with navy dark (#1E3A5F)
- Mobile hamburger menu
- Logo prominent placement
```

### 6.2 Art Cards

```css
- White background with subtle shadows
- Border radius: 8px (medium)
- Hover: translateY(-4px) with shadow enhancement
- Image aspect ratio preservation
- Title overlay on hover
```

### 6.3 Buttons

```css
Primary: Sky blue background, white text
Secondary: Soft pink background, navy text
Outline: Transparent with colored border
States: Hover, active, disabled variations
```

### 6.4 Decorative Elements

- Cloud shapes with gradient effects
- Sparkle animations (used sparingly)
- Wave dividers between sections
- Floating animation effects (6-8s duration)

---

## 7. Technical Specifications

### 7.1 Performance Requirements

- Page load time: < 3 seconds
- Image lazy loading implementation
- WebP format with fallbacks
- CSS animations over JavaScript where possible
- Minified assets

### 7.2 Responsive Breakpoints

```css
Mobile: 320px - 768px
Tablet: 768px - 1024px
Desktop: 1024px - 1440px
Large Desktop: 1440px+
```

### 7.3 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation for older browsers
- Mobile-first responsive design

---

## 8. Content Management

### 8.1 Artwork Metadata

Each piece should include (all optional, with sensible defaults):

- Title
- Category
- Date created
- Medium/tools used
- Dimensions (if applicable)
- Description
- Shop link (if available)
- Process images (optional)

### 8.2 SEO Considerations

- Descriptive page titles
- Alt text for all images
- Meta descriptions
- Open Graph tags for social sharing
- Structured data for artworks

---

## 9. Interactive Features Priority

### 9.1 Must Have

- Rotating hero gallery
- Category filtering
- Hover effects on cards
- Smooth scroll navigation
- Mobile-responsive menu

### 9.2 Nice to Have

- Lightbox gallery view
- Keyboard navigation
- Search functionality
- Animation on scroll
- Dark mode toggle

### 9.3 Future Enhancements

- Client login area
- Commission request system
- Newsletter integration
- Blog/news section
- Process video integration

---

## 10. Style Guidelines

### 10.1 Design Balance

- **Primary Focus**: Artwork presentation
- **Decorative Elements**: Present but not overwhelming
- **White Space**: Generous to let art breathe
- **Animations**: Smooth and purposeful, not distracting

### 10.2 Accessibility

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader optimization
- Sufficient color contrast
- Focus indicators

---

## Implementation Notes

### Phase 1: Core Structure

- Homepage with basic gallery
- Navigation system
- About page
- Mobile responsiveness

### Phase 2: Enhancement

- Category pages
- Interactive features
- Animation implementation
- Shop integration

### Phase 3: Polish

- Performance optimization
- SEO implementation
- Analytics integration
- Content management system

---

## References & Inspiration

Research similar portfolio sites for:

- Gallery organization patterns
- Artist presentation methods
- Shop integration examples
- Interactive portfolio features
- Mobile-first approaches

---

This document serves as the single source of truth for the WafflesForArt portfolio website development. Each section can be addressed independently while maintaining overall cohesion through the established design system and guidelines.