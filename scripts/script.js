// Green Mode Toggle
const greenToggle = document.getElementById('greenToggle');
let isGreenMode = false;

greenToggle.addEventListener('click', () => {
    isGreenMode = !isGreenMode;
    greenToggle.classList.toggle('active', isGreenMode);

    if (isGreenMode) {
        document.body.classList.add('dark-mode'); // <-- voeg dark mode toe
        greenToggle.innerHTML = '🌗';
    } else {
        document.body.classList.remove('dark-mode'); // <-- verwijder dark mode
        greenToggle.innerHTML = '🌗';
    }
});

document.getElementById('greenToggle').addEventListener('click', function () {
    document.body.classList.toggle('green-mode');
    // Optioneel: sla voorkeur op in localStorage
    if (document.body.classList.contains('green-mode')) {
        localStorage.setItem('arivanaGreenMode', '1');
    } else {
        localStorage.removeItem('arivanaGreenMode');
    }
});

// Bij laden voorkeur toepassen
if (localStorage.getItem('arivanaGreenMode')) {
    document.body.classList.add('green-mode');
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Header Scroll Effect
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop;
});

// Feature Cards Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card').forEach(card => {
    observer.observe(card);
});

// Add slideInUp animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Initialize cards as invisible
document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
});

// Floating elements animation
document.querySelectorAll('.floating-element').forEach((element, index) => {
    element.addEventListener('mouseenter', () => {
        element.style.transform = 'scale(1.5) translateY(-10px)';
        element.style.transition = 'all 0.3s ease';
    });

    element.addEventListener('mouseleave', () => {
        element.style.transform = 'scale(1) translateY(0px)';
    });
});

// Hamburger menu functionaliteit
const hamburger = document.createElement('div');
hamburger.className = 'hamburger';
hamburger.innerHTML = '<span></span><span></span><span></span>';
document.querySelector('.nav-container').appendChild(hamburger);

const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Scroll-to-top knop functionaliteit
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark/Light mode toggle
const modeBtn = document.createElement('button');
modeBtn.innerText = '🌙';
modeBtn.title = 'Donkere modus';
modeBtn.className = 'mode-toggle';
document.body.appendChild(modeBtn);

let darkMode = false;
modeBtn.addEventListener('click', () => {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode', darkMode);
    modeBtn.innerText = darkMode ? '☀️' : '🌙';
});

// Keyboard navigation for hero buttons
document.querySelectorAll('.hero-buttons a').forEach(btn => {
    btn.addEventListener('keyup', e => {
        if (e.key === 'Enter' || e.key === ' ') btn.click();
    });
});

// Welkomst-popup bij eerste bezoek
if (!localStorage.getItem('arivanaWelcomed')) {
    setTimeout(() => {
        alert('Welkom bij Arivana! Veel plezier met het plannen van je reis.');
        localStorage.setItem('arivanaWelcomed', '1');
    }, 800);
}

// Smooth scroll voor alle interne links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Scroll-melding
let scrollMsgShown = false;
window.addEventListener('scroll', () => {
    if (window.scrollY > 200 && !scrollMsgShown) {
        scrollMsgShown = true;
        const msg = document.createElement('div');
        msg.innerText = 'Tip: Gebruik de groene knop rechtsonder voor Green Mode!';
        msg.className = 'scroll-tip';
        document.body.appendChild(msg);
        setTimeout(() => msg.remove(), 4000);
    }
});

// Floating nav verbergen bij scrollen
let lastNavScroll = 0;
const floatingNav = document.querySelector('.floating-nav');
window.addEventListener('scroll', () => {
    if (!floatingNav) return;
    if (window.scrollY > lastNavScroll && window.scrollY > 80) {
        floatingNav.classList.add('hide');
    } else {
        floatingNav.classList.remove('hide');
    }
    lastNavScroll = window.scrollY;
});

// Live klok in de navigatie
function updateClock() {
    const clock = document.getElementById('liveClock');
    if (clock) {
        const now = new Date();
        clock.textContent = now.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }
}
setInterval(updateClock, 1000);
updateClock();

// Focus-animatie op hero-buttons
document.querySelectorAll('.hero-buttons a').forEach(btn => {
    btn.addEventListener('focus', () => {
        btn.style.boxShadow = '0 0 0 4px #f4d03f88';
        btn.style.transform = 'scale(1.07)';
    });
    btn.addEventListener('blur', () => {
        btn.style.boxShadow = '';
        btn.style.transform = '';
    });
});

// Toast-notificatie bij Green Mode
function showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'arivana-toast';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 50);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 2500);
}
const greenToggleBtn = document.getElementById('greenToggle');
if (greenToggleBtn) {
    greenToggleBtn.addEventListener('click', () => {
        showToast(greenToggleBtn.classList.contains('active') ? 'Green Mode aan!' : 'Green Mode uit!');
    });
}

// Vliegtuig animatie op hero sectie
function randomBetween(a, b) {
    return a + Math.random() * (b - a);
}

function setRandomAirplanePath() {
    const airplane = document.querySelector('.hero-airplane-logo');
    if (!airplane) return;

    // Random eindpositie, boog en rotatie
    const endLeft = randomBetween(80, 110); // eind links in %
    const endTop = randomBetween(10, 40);   // eind top in %
    const midLeft = randomBetween(30, 70);  // middenpunt links in %
    const midTop = randomBetween(20, 50);   // middenpunt top in %
    const startRotate = randomBetween(-25, 25); // start rotatie in graden
    const midRotate = randomBetween(-10, 10);   // midden rotatie
    const endRotate = randomBetween(-30, 30);   // eind rotatie

    // Maak unieke keyframes
    const animName = 'airplaneFly' + Math.floor(Math.random() * 100000);
    const style = document.createElement('style');
    style.innerHTML = `
    @keyframes ${animName} {
        0% {
            left: -10%;
            top: 60%;
            transform: translate(0, -100%) rotate(${startRotate}deg) scale(1);
            opacity: 0;
        }
        10% { opacity: 1; }
        50% {
            left: ${midLeft}%;
            top: ${midTop}%;
            transform: translate(-50%, -100%) rotate(${midRotate}deg) scale(1.08);
            opacity: 1;
        }
        90% { opacity: 1; }
        100% {
            left: ${endLeft}%;
            top: ${endTop}%;
            transform: translate(0, -100%) rotate(${endRotate}deg) scale(0.95);
            opacity: 0;
        }
    }`;
    document.head.appendChild(style);

    // Zet de animatie
    airplane.style.animation = `${animName} 7s linear forwards`;
    // Verwijder oude keyframes na afloop
    setTimeout(() => {
        document.head.removeChild(style);
        setRandomAirplanePath();
    }, 7000);
}

// Start de random path animatie
setRandomAirplanePath();

// Hover animatie blijft hetzelfde
const airplane = document.querySelector('.hero-airplane-logo');
if (airplane) {
    airplane.addEventListener('mouseenter', () => {
        // Stop current animation and trigger takeoff
        airplane.style.animation = 'airplaneTakeoff 0.9s cubic-bezier(.39,.575,.565,1)';
        airplane.style.filter = 'drop-shadow(0 12px 40px #4a12ba88)';
    });
    airplane.addEventListener('animationend', (e) => {
        if (e.animationName === 'airplaneTakeoff') {
            // Reset position to start (off screen left)
            airplane.style.left = '-10%';
            airplane.style.top = '60%';
            airplane.style.filter = 'drop-shadow(0 4px 16px #4a12ba33)';
            // Remove the takeoff animation so the next can start
            airplane.style.animation = '';
            // Start a new random fly animation
            setTimeout(setRandomAirplanePath, 50);
        }
    });
}

// Globe visualisatie script