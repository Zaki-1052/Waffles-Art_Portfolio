// about.js - About page specific functionality
document.addEventListener('DOMContentLoaded', () => {
    // Update content elements from SITE_CONFIG (single source of truth)
    document.getElementById('heroSubtitle').textContent = SITE_CONFIG.artist.subtitle;
    document.getElementById('artistIntro').textContent = SITE_CONFIG.artist.bio;
    document.getElementById('philosophyText').textContent = SITE_CONFIG.artist.philosophy;
    document.getElementById('processText').textContent = SITE_CONFIG.artist.process;
    
    // Set artist image
    const artistImg = document.getElementById('artistImage');
    if (artistImg) {
        artistImg.src = SITE_CONFIG.paths.about + SITE_CONFIG.pages.about.artistPhoto;
        artistImg.onerror = () => {
            artistImg.src = 'https://picsum.photos/400/400?random=artist';
        };
    }
    
    // Commission status
    const commissionStatus = document.getElementById('commissionStatus');
    const commissionText = document.getElementById('commissionText');
    if (SITE_CONFIG.commissions.status === 'Open') {
        commissionStatus.classList.add('open');
        commissionText.textContent = 'Commissions: OPEN';
    } else {
        commissionStatus.classList.add('closed');
        commissionText.textContent = 'Commissions: CLOSED';
    }
    
    // Education list
    const educationList = document.getElementById('educationList');
    educationList.innerHTML = '';
    SITE_CONFIG.artist.education.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        educationList.appendChild(li);
    });
    
    // Skills
    const skillsContainer = document.getElementById('skillsContainer');
    SITE_CONFIG.artist.skills.forEach((skill, index) => {
        const tag = document.createElement('span');
        tag.className = 'skill-tag';
        tag.textContent = skill;
        tag.style.animationDelay = `${index * 0.05}s`;
        skillsContainer.appendChild(tag);
    });
    
    // Social cards
    const socialGrid = document.getElementById('socialGrid');
    const allSocials = [...SITE_CONFIG.socialMedia.primary, ...SITE_CONFIG.socialMedia.secondary];
    allSocials.forEach(social => {
        const card = document.createElement('a');
        card.href = social.url;
        card.className = 'social-card';
        card.target = '_blank';
        card.rel = 'noopener';
        card.innerHTML = `
            <div class="social-icon">${social.icon}</div>
            <div class="social-name">${social.name}</div>
            <div class="social-handle">${social.handle}</div>
        `;
        socialGrid.appendChild(card);
    });
    
    // Response time
    document.getElementById('responseTime').textContent = 
        `Typical response time: ${SITE_CONFIG.commissions.responseTime}`;
    
    // Form validation
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Clear errors
        document.querySelectorAll('.form-error').forEach(error => {
            error.classList.remove('active');
        });
        
        let isValid = true;
        const requiredFields = ['name', 'email', 'subject', 'message'];
        
        requiredFields.forEach(fieldName => {
            const field = document.getElementById(fieldName);
            const errorElement = field.nextElementSibling;
            
            if (!field.value.trim()) {
                errorElement.classList.add('active');
                isValid = false;
            }
            
            if (fieldName === 'email' && field.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(field.value)) {
                    errorElement.textContent = 'Please enter a valid email address';
                    errorElement.classList.add('active');
                    isValid = false;
                }
            }
        });
        
        if (isValid) {
            successMessage.classList.add('active');
            contactForm.reset();
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            setTimeout(() => {
                successMessage.classList.remove('active');
            }, 5000);
        }
    });
    
    // Clear field errors on input
    document.querySelectorAll('.form-input, .form-textarea').forEach(field => {
        field.addEventListener('input', () => {
            const errorElement = field.nextElementSibling;
            if (errorElement && errorElement.classList.contains('form-error')) {
                errorElement.classList.remove('active');
            }
        });
    });
});