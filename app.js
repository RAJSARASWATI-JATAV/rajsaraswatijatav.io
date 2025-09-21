// Ultimate Matrix Portfolio - Fixed JavaScript Implementation
// Comprehensive next-level portfolio with Matrix-style hacker aesthetics

class UltimateMatrixPortfolio {
    constructor() {
        this.isLoaded = false;
        this.mouseX = 0;
        this.mouseY = 0;
        this.cursorTrailX = 0;
        this.cursorTrailY = 0;
        this.particles = [];
        this.matrixDrops = [];
        this.animationId = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initPreloader();
        this.initMatrixRain();
        this.initCursor();
        this.initNavigation();
        this.initScrollAnimations();
        this.initParticleSystem();
    }

    setupEventListeners() {
        document.addEventListener('DOMContentLoaded', () => {
            this.onDOMLoaded();
        });

        window.addEventListener('load', () => {
            this.onWindowLoaded();
        });

        document.addEventListener('mousemove', (e) => {
            this.updateCursorPosition(e);
        });

        window.addEventListener('scroll', () => {
            this.handleScroll();
        });

        window.addEventListener('resize', () => {
            this.handleResize();
        });
    }

    onDOMLoaded() {
        console.log('%c🚀 ULTIMATE MATRIX INTERFACE INITIALIZING...', 'color: #00ff41; font-size: 16px; font-weight: bold;');
        this.typeHeroName();
        this.initContactForm();
        this.initProjectFilters();
        this.initNewsletterForm();
        this.showAllSections();
    }

    onWindowLoaded() {
        setTimeout(() => {
            this.hidePreloader();
            this.startHeroAnimations();
            this.initAboutTerminal();
            this.initContactTerminal();
            this.initAchievementCounters();
        }, 3000);
    }

    // Ensure all sections are visible
    showAllSections() {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        });

        const projectCards = document.querySelectorAll('.project-card-3d');
        projectCards.forEach(card => {
            card.style.display = 'block';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        });

        const timelineItems = document.querySelectorAll('.timeline-item-matrix');
        timelineItems.forEach(item => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        });
    }

    // Advanced Preloader System
    initPreloader() {
        const preloader = document.getElementById('preloader');
        const loadingProgress = document.getElementById('loadingProgress');
        const loadingText = document.getElementById('loadingText');
        const typingLoader = document.getElementById('typingLoader');

        if (!preloader || !loadingProgress || !loadingText || !typingLoader) return;

        const loadingSteps = [
            { text: 'INITIALIZING MATRIX INTERFACE...', progress: 5 },
            { text: 'LOADING NEURAL NETWORKS...', progress: 15 },
            { text: 'CONNECTING TO RAJSARASWATI MAINFRAME...', progress: 25 },
            { text: 'DECRYPTING DATA STREAMS...', progress: 35 },
            { text: 'LOADING AUTOMATION PROTOCOLS...', progress: 45 },
            { text: 'INITIALIZING BOT FRAMEWORKS...', progress: 55 },
            { text: 'ACTIVATING SECURITY PROTOCOLS...', progress: 65 },
            { text: 'LOADING EDUCATIONAL CONTENT...', progress: 75 },
            { text: 'PREPARING PORTFOLIO INTERFACE...', progress: 85 },
            { text: 'FINALIZING MATRIX CONNECTIONS...', progress: 95 },
            { text: 'SYSTEM READY - ACCESSING PORTFOLIO...', progress: 100 }
        ];

        const terminalCommands = [
            'sudo ./initialize_matrix.sh --advanced',
            'python3 load_portfolio.py --mode=ultimate',
            'ssh rajsaraswati@matrix-server --secure',
            'cd /home/rajsaraswati/ultimate-portfolio/',
            './deploy_matrix_interface.exe --ultra-mode',
            'echo "WELCOME TO RAJSARASWATI MATRIX"',
            'echo "नमस्कार! Ultimate Portfolio Loading..."',
            './start_all_services.sh'
        ];

        let currentStep = 0;
        let commandIndex = 0;

        const progressInterval = setInterval(() => {
            if (currentStep < loadingSteps.length) {
                const step = loadingSteps[currentStep];
                loadingText.textContent = step.text;
                loadingProgress.style.width = step.progress + '%';

                if (commandIndex < terminalCommands.length) {
                    this.typeText(typingLoader, terminalCommands[commandIndex], () => {
                        setTimeout(() => {
                            typingLoader.textContent = '';
                            commandIndex++;
                        }, 300);
                    }, 30);
                }

                currentStep++;
            } else {
                clearInterval(progressInterval);
            }
        }, 300);
    }

    hidePreloader() {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.classList.add('hidden');
            setTimeout(() => {
                preloader.style.display = 'none';
                this.isLoaded = true;
            }, 1000);
        }
    }

    // Enhanced Matrix Rain Effect
    initMatrixRain() {
        const canvas = document.getElementById('matrixCanvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        this.resizeCanvas(canvas);

        // Enhanced character set with Hindi and tech symbols
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?/~`राजसरस्वतीजातवहैकरपायथनबॉटऑटोमेशनहैकिंगसिक्योरिटीलिनक्स{}[]<>/|\\";
        const fontSize = 14;
        const columns = Math.floor(canvas.width / fontSize);

        // Initialize drops
        for (let i = 0; i < columns; i++) {
            this.matrixDrops[i] = Math.random() * canvas.height / fontSize;
        }

        const drawMatrix = () => {
            // Create trailing effect
            ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Set text properties
            ctx.font = fontSize + 'px Fira Code, monospace';
            
            for (let i = 0; i < this.matrixDrops.length; i++) {
                // Randomize colors for variety
                const intensity = Math.random();
                if (intensity > 0.98) {
                    ctx.fillStyle = '#ffffff'; // Bright white flash
                } else if (intensity > 0.95) {
                    ctx.fillStyle = '#00ffff'; // Cyan highlight
                } else if (intensity > 0.8) {
                    ctx.fillStyle = '#39ff14'; // Bright green
                } else {
                    ctx.fillStyle = '#00ff41'; // Standard matrix green
                }

                const text = characters[Math.floor(Math.random() * characters.length)];
                const x = i * fontSize;
                const y = this.matrixDrops[i] * fontSize;
                
                ctx.fillText(text, x, y);

                // Add glow effect for some characters
                if (intensity > 0.9) {
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = ctx.fillStyle;
                    ctx.fillText(text, x, y);
                    ctx.shadowBlur = 0;
                }

                // Reset drop when it reaches bottom or randomly
                if (y > canvas.height && Math.random() > 0.975) {
                    this.matrixDrops[i] = 0;
                }
                this.matrixDrops[i]++;
            }
        };

        // Start matrix animation
        this.matrixInterval = setInterval(drawMatrix, 50);

        // Responsive canvas
        window.addEventListener('resize', () => {
            this.resizeCanvas(canvas);
        });
    }

    resizeCanvas(canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    // Advanced Magnetic Cursor System
    initCursor() {
        const cursor = document.querySelector('.magnetic-cursor');
        const follower = document.querySelector('.cursor-follower');
        
        if (!cursor || !follower) return;

        // Enhanced magnetic effect for interactive elements
        const magneticElements = document.querySelectorAll('a, button, .nav-link, .matrix-button, .project-card-3d, .skill-node, .achievement-card, .service-card, .resource-card, .blog-card, .testimonial-card, .cert-card, .social-link');

        magneticElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.8)';
                cursor.style.background = '#00d4ff';
                cursor.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.8)';
                follower.style.borderColor = '#00d4ff';
                follower.style.transform = 'translate(-50%, -50%) scale(1.2)';
            });

            element.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.background = '#00ff41';
                cursor.style.boxShadow = '0 0 20px rgba(0, 255, 65, 0.5)';
                follower.style.borderColor = '#00ff41';
                follower.style.transform = 'translate(-50%, -50%) scale(1)';
                element.style.transform = 'translate(0, 0)';
            });

            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                element.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
            });
        });

        // Special effects for different elements
        const projectCards = document.querySelectorAll('.project-card-3d');
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                cursor.style.background = '#ff0040';
                cursor.style.boxShadow = '0 0 30px rgba(255, 0, 64, 0.8)';
                follower.style.borderColor = '#ff0040';
            });
        });

        const skillNodes = document.querySelectorAll('.skill-node');
        skillNodes.forEach(node => {
            node.addEventListener('mouseenter', () => {
                cursor.style.background = '#9c27b0';
                cursor.style.boxShadow = '0 0 30px rgba(156, 39, 176, 0.8)';
                follower.style.borderColor = '#9c27b0';
            });
        });
    }

    updateCursorPosition(e) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;

        const cursor = document.querySelector('.magnetic-cursor');
        const follower = document.querySelector('.cursor-follower');

        if (cursor) {
            cursor.style.left = this.mouseX + 'px';
            cursor.style.top = this.mouseY + 'px';
        }

        this.animateCursorFollower(follower);
    }

    animateCursorFollower(follower) {
        if (!follower) return;

        this.cursorTrailX += (this.mouseX - this.cursorTrailX) * 0.08;
        this.cursorTrailY += (this.mouseY - this.cursorTrailY) * 0.08;

        follower.style.left = this.cursorTrailX + 'px';
        follower.style.top = this.cursorTrailY + 'px';

        requestAnimationFrame(() => this.animateCursorFollower(follower));
    }

    // FIXED Enhanced Navigation System
    initNavigation() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        const navLinks = document.querySelectorAll('.nav-link');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
        }

        // FIXED: Enhanced navigation link handling
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Get target section from both data-section and href attributes
                let targetId = link.getAttribute('data-section');
                if (!targetId) {
                    const href = link.getAttribute('href');
                    if (href && href.startsWith('#')) {
                        targetId = href.substring(1);
                    }
                }

                console.log(`Navigation clicked: ${targetId}`); // Debug log
                
                if (targetId) {
                    this.scrollToSection(targetId);
                    
                    // Close mobile menu
                    if (hamburger && navMenu) {
                        hamburger.classList.remove('active');
                        navMenu.classList.remove('active');
                    }

                    // Add click effect
                    this.createClickEffect(e.clientX, e.clientY);
                    
                    // Show navigation notification
                    this.showNotification(`Navigating to: ${targetId.toUpperCase()}`, 'info');
                }
            });
        });

        // FIXED: Matrix buttons with enhanced functionality
        const matrixButtons = document.querySelectorAll('.matrix-button');
        matrixButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const target = button.getAttribute('data-target');
                console.log(`Matrix button clicked: ${target}`); // Debug log
                
                if (target) {
                    this.scrollToSection(target);
                    this.createClickEffect(e.clientX, e.clientY);
                    this.showNotification(`Accessing: ${target.toUpperCase()} section`, 'success');
                } else {
                    // Default action if no target specified
                    this.showNotification('Matrix button activated!', 'info');
                }
            });
        });

        // Add click handlers for social links to open in new tabs
        const socialLinks = document.querySelectorAll('.social-cmd, .social-link');
        socialLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                this.createClickEffect(e.clientX, e.clientY);
                this.showNotification('Opening external link...', 'info');
            });
        });
    }

    // FIXED: Enhanced scroll to section with better targeting
    scrollToSection(sectionId) {
        console.log(`Attempting to scroll to: ${sectionId}`); // Debug log
        
        const section = document.getElementById(sectionId);
        if (section) {
            const navHeight = document.querySelector('.nav-terminal')?.offsetHeight || 80;
            const targetPosition = section.offsetTop - navHeight - 20;

            console.log(`Scrolling to position: ${targetPosition}`); // Debug log

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Update active nav link immediately
            this.updateActiveNavLink(window.pageYOffset + targetPosition);
            
            // Force update after scroll completes
            setTimeout(() => {
                this.updateActiveNavLink(window.pageYOffset);
            }, 1000);

        } else {
            console.warn(`Section not found: ${sectionId}`); // Debug warning
            this.showNotification(`Section "${sectionId}" not found`, 'error');
        }
    }

    // Create click effect
    createClickEffect(x, y) {
        const effect = document.createElement('div');
        effect.style.cssText = `
            position: fixed;
            top: ${y}px;
            left: ${x}px;
            width: 20px;
            height: 20px;
            border: 2px solid #00ff41;
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            transform: translate(-50%, -50%) scale(0);
            animation: clickRipple 0.6s ease-out;
        `;

        document.body.appendChild(effect);

        setTimeout(() => {
            effect.remove();
        }, 600);
    }

    // Hero Animations
    typeHeroName() {
        const asciiNameElement = document.getElementById('asciiName');
        if (!asciiNameElement) return;

        const asciiArt = `██████╗  █████╗      ██╗███████╗ █████╗ ██████╗  █████╗ ███████╗██╗    ██╗ █████╗ ████████╗██╗
██╔══██╗██╔══██╗     ██║██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔════╝██║    ██║██╔══██╗╚══██╔══╝██║
██████╔╝███████║     ██║███████╗███████║██████╔╝███████║███████╗██║ █╗ ██║███████║   ██║   ██║
██╔══██╗██╔══██║██   ██║╚════██║██╔══██║██╔══██╗██╔══██║╚════██║██║███╗██║██╔══██║   ██║   ██║
██║  ██║██║  ██║╚█████╔╝███████║██║  ██║██║  ██║██║  ██║███████║╚███╔███╔╝██║  ██║   ██║   ██║
╚═╝  ╚═╝╚═╝  ╚═╝ ╚════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ ╚══╝╚══╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝`;

        this.typeText(asciiNameElement, asciiArt.trim(), null, 1);
    }

    startHeroAnimations() {
        // Enhanced glitch effects
        const titleElements = document.querySelectorAll('.title-glitch, .section-title-glitch');
        titleElements.forEach(element => {
            setInterval(() => {
                if (Math.random() > 0.92) {
                    element.style.animation = 'none';
                    element.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
                    setTimeout(() => {
                        element.style.animation = '';
                        element.style.transform = '';
                    }, 150);
                }
            }, 1500);
        });

        setTimeout(() => {
            this.showAllSections();
        }, 1000);
    }

    // About Terminal Animation
    initAboutTerminal() {
        const aboutHistory = document.getElementById('aboutHistory');
        if (!aboutHistory || aboutHistory.hasAttribute('data-animated')) return;

        aboutHistory.setAttribute('data-animated', 'true');
        // The content is already pre-loaded in HTML for better performance
    }

    // Contact Terminal Animation
    initContactTerminal() {
        const contactTerminal = document.getElementById('contactTerminal');
        if (!contactTerminal || contactTerminal.hasAttribute('data-animated')) return;

        contactTerminal.setAttribute('data-animated', 'true');
        // The content is already pre-loaded in HTML for better performance
    }

    // Achievement Counter Animation
    initAchievementCounters() {
        const achievementCards = document.querySelectorAll('.achievement-card');
        
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const card = entry.target;
                    const numberElement = card.querySelector('.achievement-number');
                    const target = parseInt(numberElement.getAttribute('data-target'));
                    
                    this.animateCounter(numberElement, 0, target, 2000);
                    observer.unobserve(card);
                }
            });
        }, observerOptions);

        achievementCards.forEach(card => {
            observer.observe(card);
        });
    }

    animateCounter(element, start, end, duration) {
        const startTime = performance.now();
        
        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + (end - start) * easeOut);
            
            element.textContent = current + (end >= 50 ? '+' : '');
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = end + (end >= 50 ? '+' : '');
                // Add final glow effect
                element.style.textShadow = '0 0 30px rgba(0, 255, 65, 0.8)';
                setTimeout(() => {
                    element.style.textShadow = '0 0 20px rgba(0, 255, 65, 0.5)';
                }, 500);
            }
        };
        
        requestAnimationFrame(updateCounter);
    }

    // Enhanced Particle System
    initParticleSystem() {
        const heroParticles = document.getElementById('heroParticles');
        if (!heroParticles) return;

        const createParticle = () => {
            const particle = document.createElement('div');
            particle.className = 'matrix-particle';
            
            const colors = ['#00ff41', '#00d4ff', '#ff0040', '#9c27b0'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 3 + 1}px;
                height: ${Math.random() * 3 + 1}px;
                background: ${color};
                border-radius: 50%;
                pointer-events: none;
                box-shadow: 0 0 10px ${color};
                opacity: 0;
            `;

            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = '100%';

            heroParticles.appendChild(particle);

            this.animateParticle(particle);
        };

        // Create particles continuously
        this.particleInterval = setInterval(createParticle, 200);
    }

    animateParticle(particle) {
        let opacity = 0;
        let yPos = 100;
        let xPos = parseFloat(particle.style.left);
        let rotation = 0;

        const animate = () => {
            yPos -= 0.3 + Math.random() * 0.4;
            xPos += (Math.random() - 0.5) * 0.15;
            rotation += 2;
            
            opacity = yPos > 50 ? (100 - yPos) / 50 : yPos / 50;

            particle.style.top = yPos + '%';
            particle.style.left = xPos + '%';
            particle.style.opacity = Math.max(0, opacity);
            particle.style.transform = `rotate(${rotation}deg)`;

            if (yPos > -10 && opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };

        setTimeout(() => requestAnimationFrame(animate), Math.random() * 1000);
    }

    // Enhanced Project Filter System
    initProjectFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card-3d');

        // Ensure all project cards are visible initially
        projectCards.forEach(card => {
            card.style.display = 'block';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        });

        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const filter = button.getAttribute('data-filter');

                // Update active button with animation
                filterButtons.forEach(btn => {
                    btn.classList.remove('active');
                    btn.style.transform = 'scale(1)';
                });
                button.classList.add('active');
                button.style.transform = 'scale(1.1)';

                // Create click effect
                this.createClickEffect(e.clientX, e.clientY);

                // Filter projects with staggered animation
                projectCards.forEach((card, index) => {
                    const category = card.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0) scale(1)';
                        }, index * 100);
                    } else {
                        card.style.opacity = '0.2';
                        card.style.transform = 'translateY(20px) scale(0.9)';
                        setTimeout(() => {
                            if (card.style.opacity === '0.2') {
                                card.style.display = 'none';
                            }
                        }, 500);
                    }
                });

                // Add filter effect
                this.showNotification(`Filter applied: ${filter.toUpperCase()}`, 'info');
            });
        });
    }

    // Contact Form Handler
    initContactForm() {
        const contactForm = document.getElementById('contactForm');
        if (!contactForm) return;

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmission(contactForm);
        });

        // Add real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });

            input.addEventListener('focus', () => {
                input.style.borderColor = '#00d4ff';
                input.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.5)';
            });

            input.addEventListener('blur', () => {
                if (input.value.trim() === '') {
                    input.style.borderColor = '#00ff41';
                    input.style.boxShadow = '';
                }
            });
        });
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;

        if (field.hasAttribute('required') && value === '') {
            isValid = false;
        } else if (field.type === 'email' && !this.isValidEmail(value)) {
            isValid = false;
        }

        if (isValid) {
            field.style.borderColor = '#00ff41';
            field.style.boxShadow = '0 0 10px rgba(0, 255, 65, 0.3)';
        } else {
            field.style.borderColor = '#ff0040';
            field.style.boxShadow = '0 0 10px rgba(255, 0, 64, 0.3)';
        }

        return isValid;
    }

    handleFormSubmission(form) {
        const formData = new FormData(form);
        const name = formData.get('name').trim();
        const email = formData.get('email').trim();
        const subject = formData.get('subject').trim();
        const message = formData.get('message').trim();

        // Enhanced validation
        if (!name || !email || !subject || !message) {
            this.showNotification('ERROR: सभी fields भरना जरूरी है', 'error');
            return;
        }

        if (!this.isValidEmail(email)) {
            this.showNotification('ERROR: Invalid email format detected', 'error');
            return;
        }

        // Simulate advanced form submission
        const submitButton = form.querySelector('.submit-matrix-button');
        const originalText = submitButton.innerHTML;

        // Animation sequence
        const loadingSteps = [
            '[VALIDATING_DATA...]',
            '[ENCRYPTING_MESSAGE...]',
            '[CONNECTING_TO_SERVER...]',
            '[TRANSMITTING_DATA...]',
            '[MESSAGE_SENT_SUCCESSFULLY]'
        ];

        let stepIndex = 0;
        submitButton.disabled = true;

        const animateSubmission = () => {
            if (stepIndex < loadingSteps.length) {
                submitButton.innerHTML = `<span class="submit-text">${loadingSteps[stepIndex]}</span>`;
                
                if (stepIndex === loadingSteps.length - 1) {
                    submitButton.style.background = '#00ff41';
                    submitButton.style.color = '#000000';
                    submitButton.style.borderColor = '#00ff41';
                    submitButton.style.boxShadow = '0 0 30px rgba(0, 255, 65, 0.8)';
                }
                
                stepIndex++;
                setTimeout(animateSubmission, 800);
            } else {
                // Success notification
                this.showNotification('SUCCESS: Message transmitted to Rajsaraswati Matrix! Response expected within 24 hours.', 'success');

                // Generate unique transmission ID
                const transmissionId = 'RJ_' + Math.random().toString(36).substr(2, 9).toUpperCase();
                this.showNotification(`TRANSMISSION_ID: ${transmissionId}`, 'info');

                setTimeout(() => {
                    submitButton.innerHTML = originalText;
                    submitButton.style.background = 'transparent';
                    submitButton.style.color = '#00ff41';
                    submitButton.style.borderColor = '#00ff41';
                    submitButton.style.boxShadow = '';
                    submitButton.disabled = false;
                    form.reset();
                }, 3000);
            }
        };

        setTimeout(animateSubmission, 500);
    }

    // Newsletter Form Handler
    initNewsletterForm() {
        const newsletterForm = document.querySelector('.newsletter-form');
        if (!newsletterForm) return;

        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const emailInput = newsletterForm.querySelector('.newsletter-input');
            const email = emailInput.value.trim();

            if (!this.isValidEmail(email)) {
                this.showNotification('ERROR: Please enter a valid email address', 'error');
                return;
            }

            const submitButton = newsletterForm.querySelector('.newsletter-btn');
            const originalText = submitButton.textContent;

            submitButton.textContent = '[SUBSCRIBING...]';
            submitButton.disabled = true;

            setTimeout(() => {
                submitButton.textContent = '[SUBSCRIBED]';
                submitButton.style.background = '#00ff41';
                submitButton.style.color = '#000000';
                
                this.showNotification('SUCCESS: Subscribed to Rajsaraswati Tech Updates!', 'success');
                emailInput.value = '';

                setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.style.background = 'transparent';
                    submitButton.style.color = '#00ff41';
                    submitButton.disabled = false;
                }, 2000);
            }, 1500);
        });
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Enhanced Notification System
    showNotification(message, type = 'info') {
        const notificationSystem = document.getElementById('notificationSystem');
        if (!notificationSystem) return;

        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        // Add icon based on type
        const icons = {
            info: 'ℹ️',
            success: '✅',
            error: '❌',
            warning: '⚠️'
        };

        notification.innerHTML = `<span style="margin-right: 8px;">${icons[type] || icons.info}</span>${message}`;

        notificationSystem.appendChild(notification);

        // Show animation
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        // Auto-hide
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, type === 'error' ? 6000 : 4000);

        // Add click to dismiss
        notification.addEventListener('click', () => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        });
    }

    // Enhanced Scroll Animations
    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Specific animations for different sections
                    if (entry.target.id === 'skills') {
                        setTimeout(() => this.animateSkillNodes(), 500);
                    } else if (entry.target.id === 'achievements') {
                        setTimeout(() => this.initAchievementCounters(), 300);
                    } else if (entry.target.classList.contains('service-card')) {
                        this.animateServiceCard(entry.target);
                    }
                }
            });
        }, observerOptions);

        // Observe sections and cards
        document.querySelectorAll('section, .service-card, .resource-card, .blog-card, .cert-card').forEach(element => {
            observer.observe(element);
        });
    }

    animateSkillNodes() {
        const skillNodes = document.querySelectorAll('.skill-node');
        skillNodes.forEach((node, index) => {
            setTimeout(() => {
                node.style.opacity = '1';
                node.style.transform = 'translateY(0) scale(1)';
                
                // Create skill particles
                this.createSkillParticles(node);
            }, index * 150);
        });
    }

    createSkillParticles(node) {
        const rect = node.getBoundingClientRect();
        const particles = 8;

        for (let i = 0; i < particles; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: #00ff41;
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
                box-shadow: 0 0 10px #00ff41;
            `;

            particle.style.left = rect.left + rect.width / 2 + 'px';
            particle.style.top = rect.top + rect.height / 2 + 'px';

            document.body.appendChild(particle);

            const angle = (i / particles) * Math.PI * 2;
            const velocity = 3 + Math.random() * 2;
            let x = 0;
            let y = 0;
            let opacity = 1;

            const animateParticle = () => {
                x += Math.cos(angle) * velocity;
                y += Math.sin(angle) * velocity;
                opacity -= 0.02;

                particle.style.transform = `translate(${x}px, ${y}px)`;
                particle.style.opacity = opacity;

                if (opacity > 0) {
                    requestAnimationFrame(animateParticle);
                } else {
                    particle.remove();
                }
            };

            setTimeout(animateParticle, i * 100);
        }
    }

    animateServiceCard(card) {
        const features = card.querySelectorAll('.feature');
        features.forEach((feature, index) => {
            setTimeout(() => {
                feature.style.opacity = '1';
                feature.style.transform = 'translateX(0)';
            }, index * 200);
        });
    }

    // FIXED: Enhanced Scroll Handling
    handleScroll() {
        const scrollTop = window.pageYOffset;
        const navTerminal = document.querySelector('.nav-terminal');

        // Enhanced navigation scroll effects
        if (scrollTop > 100) {
            navTerminal?.classList.add('nav-scrolled');
        } else {
            navTerminal?.classList.remove('nav-scrolled');
        }

        // Update active navigation link
        this.updateActiveNavLink(scrollTop);

        // Enhanced parallax effects
        this.handleParallax(scrollTop);

        // Progress indicator
        this.updateScrollProgress(scrollTop);
    }

    // FIXED: Enhanced active nav link detection
    updateActiveNavLink(scrollTop) {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        let current = '';
        
        // Find the current section
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            // Check if we're in this section
            if (scrollTop >= sectionTop - 200 && scrollTop < sectionTop + sectionHeight - 200) {
                current = sectionId;
            }
        });

        // Update nav link active states
        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkTarget = link.getAttribute('data-section') || 
                             (link.getAttribute('href') ? link.getAttribute('href').substring(1) : '');
            
            if (linkTarget === current) {
                link.classList.add('active');
            }
        });
    }

    handleParallax(scrollTop) {
        // Hero section parallax
        const hero = document.querySelector('.hero-matrix');
        if (hero) {
            hero.style.transform = `translateY(${scrollTop * 0.5}px)`;
        }

        // Matrix particles parallax
        const particles = document.querySelectorAll('.matrix-particle');
        particles.forEach((particle, index) => {
            const speed = 0.1 + (index % 5) * 0.02;
            const currentTransform = particle.style.transform;
            const yOffset = scrollTop * speed;
            particle.style.transform = currentTransform + ` translateY(${yOffset}px)`;
        });
    }

    updateScrollProgress(scrollTop) {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        // Create or update progress bar
        let progressBar = document.querySelector('.scroll-progress');
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.className = 'scroll-progress';
            progressBar.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                height: 3px;
                background: linear-gradient(90deg, #00ff41, #00d4ff);
                z-index: 10001;
                box-shadow: 0 0 10px rgba(0, 255, 65, 0.5);
                transition: width 0.1s ease;
            `;
            document.body.appendChild(progressBar);
        }
        
        progressBar.style.width = scrollPercent + '%';
    }

    handleResize() {
        // Resize matrix canvas
        const canvas = document.getElementById('matrixCanvas');
        if (canvas) {
            this.resizeCanvas(canvas);
        }

        // Reinitialize certain responsive elements
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(() => {
            this.initResponsiveElements();
        }, 250);
    }

    initResponsiveElements() {
        // Adjust skill grid on resize
        const skillsGrid = document.querySelector('.skills-grid-matrix');
        if (skillsGrid) {
            const columns = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
            skillsGrid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        }
    }

    // Utility Functions
    typeText(element, text, callback = null, speed = 50) {
        if (!element) return;

        element.textContent = '';
        let index = 0;
        
        const type = () => {
            if (index < text.length) {
                element.textContent = text.slice(0, index + 1);
                index++;
                setTimeout(type, speed);
            } else if (callback) {
                callback();
            }
        };
        
        type();
    }

    // Clean up function
    destroy() {
        if (this.matrixInterval) {
            clearInterval(this.matrixInterval);
        }
        if (this.particleInterval) {
            clearInterval(this.particleInterval);
        }
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
}

// Initialize the Ultimate Matrix Portfolio
const ultimateMatrixPortfolio = new UltimateMatrixPortfolio();

// Add advanced custom styles for enhanced animations
const advancedStyles = `
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes clickRipple {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
    100% { transform: translate(-50%, -50%) scale(4); opacity: 0; }
}

.animate-in {
    animation: fadeIn 0.8s ease-out forwards;
}

.nav-scrolled {
    background: rgba(0, 0, 0, 0.98) !important;
    backdrop-filter: blur(30px);
    box-shadow: 0 2px 20px rgba(0, 255, 65, 0.2);
}

.matrix-particle {
    animation: particleFloat 8s ease-in-out infinite;
}

@keyframes particleFloat {
    0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    50% { transform: translateY(-30px) rotate(180deg); }
}

/* Enhanced hover effects */
.achievement-card:hover {
    animation: cardPulse 0.6s ease-in-out;
}

@keyframes cardPulse {
    0%, 100% { transform: translateY(-10px) scale(1); }
    50% { transform: translateY(-15px) scale(1.02); }
}

.skill-node:hover {
    animation: skillNodeGlow 0.4s ease-in-out;
}

@keyframes skillNodeGlow {
    0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 65, 0.5); }
    50% { box-shadow: 0 0 40px rgba(0, 255, 65, 0.8); }
}

/* Enhanced mobile styles */
@media (max-width: 768px) {
    .nav-menu.active {
        display: flex !important;
        transform: translateY(0) !important;
        animation: slideDown 0.3s ease-out;
    }
    
    @keyframes slideDown {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
    }
}

/* Loading animation for buttons */
.matrix-button:active {
    transform: scale(0.95);
}

/* Enhanced focus states */
.form-input-matrix:focus,
.form-textarea-matrix:focus {
    animation: inputFocus 0.3s ease-out;
}

@keyframes inputFocus {
    0% { box-shadow: none; }
    100% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.5); }
}

/* Success state animations */
.notification.show {
    animation: notificationSlide 0.3s ease-out;
}

@keyframes notificationSlide {
    from { transform: translateX(100%) scale(0.8); opacity: 0; }
    to { transform: translateX(0) scale(1); opacity: 1; }
}

/* FIXED: Ensure all sections are visible and properly spaced */
section {
    opacity: 1 !important;
    transform: translateY(0) !important;
    margin-bottom: 0;
}

.project-card-3d {
    opacity: 1 !important;
    transform: translateY(0) !important;
    display: block !important;
}

.timeline-item-matrix {
    opacity: 1 !important;
    transform: translateY(0) !important;
}

/* Enhanced button interactions */
.matrix-button:hover {
    animation: buttonGlow 0.3s ease-out;
}

@keyframes buttonGlow {
    0% { box-shadow: 0 0 20px rgba(0, 255, 65, 0.5); }
    100% { box-shadow: 0 0 40px rgba(0, 255, 65, 0.8); }
}
`;

// Inject advanced styles
const advancedStyleSheet = document.createElement('style');
advancedStyleSheet.textContent = advancedStyles;
document.head.appendChild(advancedStyleSheet);

// Enhanced console welcome message
console.log('%c╔════════════════════════════════════════════════════════════════════╗', 'color: #00ff41; font-family: monospace;');
console.log('%c║                   ULTIMATE MATRIX INTERFACE LOADED                 ║', 'color: #00ff41; font-family: monospace; font-weight: bold;');
console.log('%c║                                                                    ║', 'color: #00ff41; font-family: monospace;');
console.log('%c║              🚀 RAJSARASWATI JATAV - ULTIMATE PORTFOLIO 🚀         ║', 'color: #00d4ff; font-family: monospace; font-weight: bold;');
console.log('%c║                                                                    ║', 'color: #00ff41; font-family: monospace;');
console.log('%c║    Python Developer | Ethical Hacking Enthusiast | Automation     ║', 'color: #e0e0e0; font-family: monospace;');
console.log('%c║                                                                    ║', 'color: #00ff41; font-family: monospace;');
console.log('%c║         Educational और ethical use के लिए designed                ║', 'color: #999999; font-family: monospace; font-style: italic;');
console.log('%c║                                                                    ║', 'color: #00ff41; font-family: monospace;');
console.log('%c║                        NAVIGATION FIXED ✅                         ║', 'color: #39ff14; font-family: monospace; font-weight: bold;');
console.log('%c║                                                                    ║', 'color: #00ff41; font-family: monospace;');
console.log('%c╚════════════════════════════════════════════════════════════════════╝', 'color: #00ff41; font-family: monospace;');

// Performance monitoring and analytics
if (typeof performance !== 'undefined') {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.timing;
            const loadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`%c⚡ Ultimate Matrix Interface loaded in ${loadTime}ms`, 'color: #00ff41; font-weight: bold;');
            
            // Log system specs
            console.log(`%c🖥️ Screen: ${window.screen.width}x${window.screen.height}`, 'color: #00d4ff;');
            console.log(`%c🌐 Viewport: ${window.innerWidth}x${window.innerHeight}`, 'color: #00d4ff;');
            console.log(`%c📱 User Agent: ${navigator.userAgent.substring(0, 50)}...`, 'color: #999999;');
            
            // Navigation system status
            console.log('%c🧭 Navigation System: OPERATIONAL', 'color: #39ff14; font-weight: bold;');
        }, 0);
    });
}

// Add keyboard shortcuts for power users
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to open contact
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        ultimateMatrixPortfolio.scrollToSection('contact');
        ultimateMatrixPortfolio.showNotification('Keyboard shortcut activated: Contact section', 'info');
    }
    
    // Ctrl/Cmd + P to open projects
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        ultimateMatrixPortfolio.scrollToSection('projects');
        ultimateMatrixPortfolio.showNotification('Keyboard shortcut activated: Projects section', 'info');
    }
    
    // Escape to close mobile menu
    if (e.key === 'Escape') {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        if (hamburger && navMenu && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Add easter egg - Konami code
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.length === konamiSequence.length &&
        konamiCode.every((key, index) => key === konamiSequence[index])) {
        
        // Easter egg activated!
        document.body.style.filter = 'hue-rotate(180deg)';
        ultimateMatrixPortfolio.showNotification('🎉 KONAMI CODE ACTIVATED! Matrix Colors Inverted!', 'success');
        
        setTimeout(() => {
            document.body.style.filter = '';
            ultimateMatrixPortfolio.showNotification('Matrix restored to normal state', 'info');
        }, 5000);
        
        konamiCode = [];
    }
});

// Add cleanup on page unload
window.addEventListener('beforeunload', () => {
    ultimateMatrixPortfolio.destroy();
});