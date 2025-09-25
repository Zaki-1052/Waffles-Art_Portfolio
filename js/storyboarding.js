// storyboarding.js - Storyboarding page specific functionality
document.addEventListener('DOMContentLoaded', () => {
    // State management
    let currentSort = 'date';
    let currentFilter = 'all';
    let projectsData = SITE_CONFIG.pages.storyboarding.projects;

    // Initialize page
    initializePage();
    populateGallery();
    setupEventListeners();

    /**
     * Initialize page elements
     */
    function initializePage() {
        // Update stats
        updateStats();

        // Update commission status
        updateCommissionStatus();

        // Initialize lightbox
        if (PortfolioUtils.Lightbox) {
            PortfolioUtils.Lightbox.init();
        }
    }

    /**
     * Update stats in the stats bar
     */
    function updateStats() {
        const totalCount = projectsData.length;
        const clientCount = projectsData.filter(project => project.client !== null).length;

        document.getElementById('totalCount').textContent = totalCount;
        document.getElementById('clientCount').textContent = clientCount;
    }

    /**
     * Update commission status
     */
    function updateCommissionStatus() {
        const commissionStatus = document.getElementById('commissionStatus');
        if (commissionStatus) {
            commissionStatus.textContent = SITE_CONFIG.commissions.status;
        }
    }

    /**
     * Populate the gallery with project items
     */
    function populateGallery() {
        const gallery = document.getElementById('storyboardingGallery');
        if (!gallery) return;

        gallery.innerHTML = '';

        // Sort and filter data
        let filteredData = filterByType(projectsData);
        let sortedData = sortData(filteredData);

        sortedData.forEach((project, index) => {
            const projectCard = createProjectCard(project, index);
            gallery.appendChild(projectCard);
        });
    }

    /**
     * Create a single project card
     */
    function createProjectCard(project, index) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.animationDelay = `${index * 0.05}s`;

        // Thumbnail image
        const thumbnail = document.createElement('img');
        thumbnail.src = SITE_CONFIG.paths.artworkByCategory.storyboarding + project.thumbnail;
        thumbnail.alt = project.title;
        thumbnail.className = 'project-thumbnail';
        thumbnail.loading = 'lazy';

        // Fallback to placeholder
        thumbnail.onerror = () => {
            const widths = [350, 400, 450];
            const heights = [200, 250, 300];
            const width = widths[Math.floor(Math.random() * widths.length)];
            const height = heights[Math.floor(Math.random() * heights.length)];
            thumbnail.src = `https://picsum.photos/${width}/${height}?random=${project.id + 200}`;
        };

        // Project content
        const content = document.createElement('div');
        content.className = 'project-content';

        // Client badge
        let clientBadge = '';
        if (project.client) {
            clientBadge = `<div class="client-badge">Client Work</div>`;
        }

        // Process shots indicator
        let processIndicator = '';
        if (project.process.hasProcessShots) {
            processIndicator = `<div class="process-badge">📸 Process Shots</div>`;
        }

        content.innerHTML = `
            ${clientBadge}
            ${processIndicator}
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-meta">
                <div class="project-details">
                    <span class="meta-item">🕒 ${project.duration}</span>
                    <span class="meta-item">📝 ${project.panelCount} panels</span>
                    ${project.client ? `<span class="meta-item">🏢 ${project.client}</span>` : ''}
                </div>
                <div class="project-types">
                    ${project.type.map(type => `<span class="type-tag">${type}</span>`).join('')}
                </div>
            </div>
            <div class="project-actions">
                <button class="action-btn primary" onclick="openProjectLightbox(${project.id})">View Project</button>
            </div>
        `;

        card.appendChild(thumbnail);
        card.appendChild(content);

        // Click handler for entire card
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('action-btn')) {
                openProjectLightbox(project.id);
            }
        });

        return card;
    }

    /**
     * Filter projects by type
     */
    function filterByType(data) {
        if (currentFilter === 'all') return data;
        return data.filter(project => project.type.includes(currentFilter));
    }

    /**
     * Sort projects by selected criteria
     */
    function sortData(data) {
        const sorted = [...data];

        switch (currentSort) {
            case 'date':
                return sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
            case 'popular':
                return sorted.sort((a, b) => b.popular - a.popular);
            case 'name':
                return sorted.sort((a, b) => a.title.localeCompare(b.title));
            default:
                return sorted;
        }
    }

    /**
     * Setup all event listeners
     */
    function setupEventListeners() {
        // Sort buttons
        document.querySelectorAll('.sort-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentSort = btn.dataset.sort;
                populateGallery();
            });
        });

        // Type filter tags
        document.querySelectorAll('.style-tag').forEach(tag => {
            tag.addEventListener('click', () => {
                document.querySelectorAll('.style-tag').forEach(t => t.classList.remove('active'));
                tag.classList.add('active');
                currentFilter = tag.dataset.style;
                populateGallery();
            });
        });

        // Lightbox close handlers
        const lightboxClose = document.getElementById('lightboxClose');
        const lightboxCloseX = document.getElementById('lightboxCloseX');

        if (lightboxClose) {
            lightboxClose.addEventListener('click', closeLightbox);
        }
        if (lightboxCloseX) {
            lightboxCloseX.addEventListener('click', closeLightbox);
        }

        // Close lightbox on background click
        const lightbox = document.getElementById('projectLightbox');
        if (lightbox) {
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    closeLightbox();
                }
            });
        }

        // Process view button handler
        const viewProcessBtn = document.getElementById('viewProcessBtn');
        if (viewProcessBtn) {
            viewProcessBtn.addEventListener('click', toggleProcessView);
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeLightbox();
            }
        });
    }

    /**
     * Open project lightbox with details
     * Made global so it can be called from onclick handlers
     */
    window.openProjectLightbox = function(id) {
        const project = projectsData.find(p => p.id === id);
        if (!project) return;

        const lightbox = document.getElementById('projectLightbox');
        const title = document.getElementById('lightboxTitle');
        const description = document.getElementById('lightboxDescription');
        const projectImages = document.getElementById('projectImages');
        const projectDetailsList = document.getElementById('projectDetailsList');
        const processSection = document.getElementById('processSection');
        const processDescription = document.getElementById('processDescription');
        const viewProcessBtn = document.getElementById('viewProcessBtn');

        if (!lightbox || !title || !description || !projectImages) return;

        // Set basic info
        title.textContent = project.title;
        description.textContent = project.description;

        // Populate project images
        projectImages.innerHTML = '';
        project.images.forEach((imageName, index) => {
            const img = document.createElement('img');
            img.src = SITE_CONFIG.paths.artworkByCategory.storyboarding + imageName;
            img.alt = `${project.title} - Panel ${index + 1}`;
            img.className = 'project-image';

            // Fallback to placeholder
            img.onerror = () => {
                img.src = `https://picsum.photos/400/300?random=${project.id * 10 + index}`;
            };

            projectImages.appendChild(img);
        });

        // Populate project details
        if (projectDetailsList) {
            projectDetailsList.innerHTML = `
                <li><strong>Duration:</strong> ${project.duration}</li>
                <li><strong>Panels:</strong> ${project.panelCount}</li>
                ${project.client ? `<li><strong>Client:</strong> ${project.client}</li>` : ''}
                <li><strong>Software:</strong> ${project.software.join(', ')}</li>
                <li><strong>Type:</strong> ${project.type.join(', ')}</li>
                <li><strong>Tags:</strong> ${project.tags.join(', ')}</li>
            `;
        }

        // Handle process section
        if (processSection && processDescription) {
            if (project.process.hasProcessShots) {
                processSection.style.display = 'block';
                processDescription.textContent = project.process.description;
                if (viewProcessBtn) {
                    viewProcessBtn.style.display = 'inline-block';
                    viewProcessBtn.dataset.projectId = project.id;
                }
            } else {
                processSection.style.display = 'none';
                if (viewProcessBtn) {
                    viewProcessBtn.style.display = 'none';
                }
            }
        }

        // Show lightbox
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Focus management for accessibility
        lightbox.focus();
    };

    /**
     * Close project lightbox
     * Made global for accessibility
     */
    window.closeLightbox = function() {
        const lightbox = document.getElementById('projectLightbox');
        if (!lightbox) return;

        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    };

    /**
     * Toggle process view in lightbox
     */
    function toggleProcessView() {
        const projectId = parseInt(document.getElementById('viewProcessBtn').dataset.projectId);
        const project = projectsData.find(p => p.id === projectId);

        if (!project || !project.process.hasProcessShots) return;

        const projectImages = document.getElementById('projectImages');
        const viewProcessBtn = document.getElementById('viewProcessBtn');

        if (!projectImages || !viewProcessBtn) return;

        const isShowingProcess = viewProcessBtn.textContent === 'View Final Boards';

        if (isShowingProcess) {
            // Show final boards
            projectImages.innerHTML = '';
            project.images.forEach((imageName, index) => {
                const img = document.createElement('img');
                img.src = SITE_CONFIG.paths.artworkByCategory.storyboarding + imageName;
                img.alt = `${project.title} - Panel ${index + 1}`;
                img.className = 'project-image';

                img.onerror = () => {
                    img.src = `https://picsum.photos/400/300?random=${project.id * 10 + index}`;
                };

                projectImages.appendChild(img);
            });
            viewProcessBtn.textContent = 'View Process';
        } else {
            // Show process shots
            projectImages.innerHTML = '';
            project.process.processImages.forEach((imageName, index) => {
                const img = document.createElement('img');
                img.src = SITE_CONFIG.paths.artworkByCategory.storyboarding + imageName;
                img.alt = `${project.title} - Process ${index + 1}`;
                img.className = 'project-image process-image';

                img.onerror = () => {
                    img.src = `https://picsum.photos/400/300?random=${project.id * 100 + index}`;
                };

                projectImages.appendChild(img);
            });
            viewProcessBtn.textContent = 'View Final Boards';
        }
    }

    // Initialize common functionality
    if (PortfolioUtils && PortfolioUtils.Navigation) {
        PortfolioUtils.Navigation.init();
        PortfolioUtils.Navigation.setActivePage('storyboarding.html');
    }
    if (PortfolioUtils && PortfolioUtils.Utils) {
        PortfolioUtils.Utils.setupSocialLinks();
        PortfolioUtils.Utils.updateFooter();
    }
    if (PortfolioUtils && PortfolioUtils.Animations) {
        PortfolioUtils.Animations.initFloatingClouds();
    }
});