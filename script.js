// Wedding Invitation JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initCountdown();
    initScrollAnimations();
    initFAQToggle();
    initSlideshows();
});

// =====================
// Image Slideshows
// =====================
function initSlideshows() {
    const slideshows = document.querySelectorAll('.slideshow');
    
    slideshows.forEach(slideshow => {
        const slides = slideshow.querySelectorAll('.slide');
        let currentIndex = 0;
        
        function showNextSlide() {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add('active');
        }
        
        // Change slide every 3 seconds
        setInterval(showNextSlide, 3000);
    });
}

// =====================
// Countdown Timer
// =====================
function initCountdown() {
    // Set your wedding date in Manila timezone (UTC+8)
    // May 2, 2026 at 2:00 PM Manila Time (Ceremony starts at 2:00 PM)
    const weddingDateManila = new Date('2026-05-02T14:00:00+08:00');

    function updateCountdown() {
        // Get current time in Manila timezone
        const now = new Date();
        const difference = weddingDateManila - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = String(days);
            document.getElementById('hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
            document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        } else {
            // Wedding day has arrived!
            document.getElementById('days').textContent = '0';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            
            const countdownSection = document.querySelector('.countdown-section h3');
            if (countdownSection) {
                countdownSection.textContent = "The Big Day is Here!";
            }
        }
    }

    // Update immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// =====================
// Scroll Animations
// =====================
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Trigger initial visible elements
    setTimeout(() => {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                element.classList.add('visible');
            }
        });
    }, 100);
}

// =====================
// FAQ Toggle Functionality
// =====================
function initFAQToggle() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                // Close other open FAQs
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                // Toggle current FAQ
                item.classList.toggle('active');
            });
        }
    });
}

// Global function for inline onclick - attached to window for global access
window.toggleFaq = function(element) {
    const faqItem = element.parentElement;
    const allFaqItems = document.querySelectorAll('.faq-item');
    
    // Close other open FAQs
    allFaqItems.forEach(item => {
        if (item !== faqItem && item.classList.contains('active')) {
            item.classList.remove('active');
        }
    });
    
    // Toggle current FAQ
    faqItem.classList.toggle('active');
}

// =====================
// Floating Hearts Animation
// =====================
function initFloatingHearts() {
    // Create random floating hearts periodically
    setInterval(() => {
        if (Math.random() > 0.6) { // 40% chance each interval
            createFloatingHeart();
        }
    }, 3000);
}

function createFloatingHeart() {
    const container = document.getElementById('floating-hearts');
    if (!container) return;

    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.innerHTML = getRandomHeart();
    
    // Random position and properties
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
    
    container.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 10000);
}

function createCelebrationHearts() {
    // Create multiple hearts for celebration
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createFloatingHeart();
        }, i * 200);
    }
}

function getRandomHeart() {
    const hearts = ['❤️', '💕', '💖', '💗', '💝', '💘', '🤍', '🩷'];
    return hearts[Math.floor(Math.random() * hearts.length)];
}

// =====================
// Floating Petals Animation
// =====================
function initFloatingPetals() {
    // Create random floating petals periodically
    setInterval(() => {
        if (Math.random() > 0.5) { // 50% chance each interval
            createFloatingPetal();
        }
    }, 2500);
    
    // Create initial petals
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            createFloatingPetal();
        }, i * 1000);
    }
}

function createFloatingPetal() {
    const container = document.getElementById('floating-petals');
    if (!container) return;

    const petal = document.createElement('span');
    petal.className = 'floating-petal';
    petal.innerHTML = getRandomPetal();
    
    // Random position and properties
    petal.style.left = Math.random() * 100 + '%';
    petal.style.fontSize = (Math.random() * 15 + 12) + 'px';
    petal.style.animationDuration = (Math.random() * 5 + 8) + 's';
    petal.style.opacity = (Math.random() * 0.4 + 0.2);
    
    container.appendChild(petal);

    // Remove petal after animation
    setTimeout(() => {
        petal.remove();
    }, 13000);
}

function getRandomPetal() {
    const petals = ['🌸', '🌺', '🏵️', '✿', '❀', '❁', '🌷'];
    return petals[Math.floor(Math.random() * petals.length)];
}

// =====================
// Notification Helper
// =====================
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'error' ? '#e74c3c' : '#c9a86c'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-family: 'Montserrat', sans-serif;
    `;
    notification.textContent = message;

    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// =====================
// Optional: Music Player
// =====================
function initMusicPlayer() {
    // Add a music toggle button (optional feature)
    const musicButton = document.createElement('button');
    musicButton.innerHTML = '🎵';
    musicButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: #c9a86c;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        transition: transform 0.3s ease;
    `;

    musicButton.addEventListener('mouseenter', () => {
        musicButton.style.transform = 'scale(1.1)';
    });

    musicButton.addEventListener('mouseleave', () => {
        musicButton.style.transform = 'scale(1)';
    });

    // Uncomment below to add music functionality
    // document.body.appendChild(musicButton);
    // const audio = new Audio('your-wedding-song.mp3');
    // audio.loop = true;
    // let isPlaying = false;
    // musicButton.addEventListener('click', () => {
    //     if (isPlaying) {
    //         audio.pause();
    //         musicButton.innerHTML = '🎵';
    //     } else {
    //         audio.play();
    //         musicButton.innerHTML = '🔇';
    //     }
    //     isPlaying = !isPlaying;
    // });
}

// =====================
// Smooth Scroll for any anchor links
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
