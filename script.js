/**
 * 플라톤마케팅 홈페이지 제작 랜딩페이지
 * Premium Landing Page Scripts
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavbar();
    initHamburgerMenu();
    initCountAnimation();
    initTabNavigation();
    initPortfolioFilter();
    initFAQ();
    initScrollAnimation();
    initFormSubmission();
    initSmoothScroll();
    initDynamicMonth();
});

/**
 * Dynamic Month Display
 */
function initDynamicMonth() {
    const month = new Date().getMonth() + 1;

    const badge = document.querySelector('.dynamic-month-badge');
    if (badge) badge.textContent = month + '월 무료 진단 잔여 3건';

    const cta = document.querySelector('.dynamic-month-cta');
    if (cta) cta.textContent = month + '월 한정 혜택';

    const scarcity = document.querySelector('.dynamic-month-scarcity');
    if (scarcity) scarcity.textContent = '이번 달(' + month + '월) 무료 진단 잔여: ';
}

/**
 * Navbar Scroll Effect
 */
function initNavbar() {
    const navbar = document.querySelector('.navbar');

    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
}

/**
 * Hamburger Menu Toggle
 */
function initHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

/**
 * Counter Animation
 */
function initCountAnimation() {
    const counters = document.querySelectorAll('.stat-number[data-target]');

    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

/**
 * Tab Navigation (Solution Section)
 */
function initTabNavigation() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

/**
 * Portfolio Filter
 */
function initPortfolioFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Filter items with animation
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Add transition styles to portfolio items
    portfolioItems.forEach(item => {
        item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
}

/**
 * FAQ Accordion
 */
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');

            // Close all items
            faqItems.forEach(i => i.classList.remove('active'));

            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

/**
 * Scroll Animation (Simple AOS-like)
 */
function initScrollAnimation() {
    const animatedElements = document.querySelectorAll('[data-aos]');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get delay if specified
                const delay = entry.target.getAttribute('data-aos-delay') || 0;

                setTimeout(() => {
                    entry.target.classList.add('aos-animate');
                }, delay);

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));
}

/**
 * Form Submission
 */
function initFormSubmission() {
    const form = document.getElementById('consultForm');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Collect form data
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            // Show loading state
            const submitBtn = form.querySelector('.form-submit');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 전송 중...';
            submitBtn.disabled = true;

            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Show success message
                submitBtn.innerHTML = '<i class="fas fa-check"></i> 신청 완료!';
                submitBtn.style.background = '#10b981';

                // Reset form
                form.reset();

                // Restore button after 3 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);

                // Show alert
                alert('상담 신청이 완료되었습니다.\n담당자가 곧 연락드리겠습니다.');
            }, 1500);
        });
    }
}

/**
 * Smooth Scroll
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href === '#') return;

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Testimonial Slider (Auto-scroll)
 */
function initTestimonialSlider() {
    const track = document.querySelector('.testimonial-track');
    const cards = document.querySelectorAll('.testimonial-card');

    if (!track || cards.length === 0) return;

    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth + 24; // Including gap

    setInterval(() => {
        currentIndex++;

        if (currentIndex >= cards.length) {
            currentIndex = 0;
            track.style.transition = 'none';
            track.style.transform = `translateX(0)`;

            setTimeout(() => {
                track.style.transition = 'transform 0.5s ease';
            }, 50);
        } else {
            track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    }, 4000);
}

// Initialize testimonial slider after DOM load
document.addEventListener('DOMContentLoaded', initTestimonialSlider);

/**
 * Floating CTA visibility on scroll
 */
function initFloatingCTA() {
    const floatingCta = document.querySelector('.floating-cta');
    const hero = document.querySelector('.hero');

    if (!floatingCta || !hero) return;

    window.addEventListener('scroll', () => {
        const heroBottom = hero.offsetTop + hero.offsetHeight;

        if (window.scrollY > heroBottom - 200) {
            floatingCta.style.opacity = '1';
            floatingCta.style.visibility = 'visible';
        } else {
            floatingCta.style.opacity = '0';
            floatingCta.style.visibility = 'hidden';
        }
    });
}

// Initialize floating CTA
document.addEventListener('DOMContentLoaded', initFloatingCTA);

/**
 * Parallax Effect for Hero Section
 */
function initParallax() {
    const heroPattern = document.querySelector('.hero-pattern');

    if (!heroPattern) return;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        heroPattern.style.transform = `translateY(${scrollY * 0.3}px)`;
    });
}

// Initialize parallax
document.addEventListener('DOMContentLoaded', initParallax);

/**
 * Phone number formatting
 */
function formatPhoneInput() {
    const phoneInput = document.querySelector('input[name="phone"]');

    if (!phoneInput) return;

    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');

        if (value.length >= 3 && value.length <= 7) {
            value = value.slice(0, 3) + '-' + value.slice(3);
        } else if (value.length > 7) {
            value = value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7, 11);
        }

        e.target.value = value;
    });
}

// Initialize phone formatting
document.addEventListener('DOMContentLoaded', formatPhoneInput);

/**
 * Lazy Loading for images (if any)
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', initLazyLoading);

/**
 * Print friendly message in console
 */
console.log('%c플라톤마케팅 홈페이지 제작 랜딩페이지', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%c병원의 마지막 마케팅 파트너', 'color: #64748b; font-size: 14px;');
console.log('%c문의: 0507-1434-3226', 'color: #10b981; font-size: 12px;');
