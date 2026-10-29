/* ========================================
   UniTech Organization — script.js
   v2 — Vanilla JavaScript, no dependencies
   ======================================== */

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------- Footer year ---------- */
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    /* ---------- Mobile navigation ---------- */
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    function closeMenu() {
        if (!navMenu || !navToggle) return;
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
    }

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            const open = navMenu.classList.toggle('active');
            navToggle.classList.toggle('active', open);
            navToggle.setAttribute('aria-expanded', String(open));
            document.body.classList.toggle('menu-open', open);
        });

        // Close when a menu link is clicked
        navMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', closeMenu);
        });

        // Close when clicking outside
        document.addEventListener('click', function (event) {
            if (
                navMenu.classList.contains('active') &&
                !navMenu.contains(event.target) &&
                !navToggle.contains(event.target)
            ) {
                closeMenu();
            }
        });

        // Close with Escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeMenu();
        });
    }

    /* ---------- Smooth scrolling with navbar offset ---------- */
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            const id = link.getAttribute('href');
            if (!id || id.length < 2) return;

            const target = document.querySelector(id);
            if (!target) return;

            e.preventDefault();

            const nav = document.getElementById('navbar');
            const offset = (nav ? nav.offsetHeight : 0) + 8;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({ top: top, behavior: prefersReduced ? 'auto' : 'smooth' });

            try {
                history.replaceState(null, '', id);
            } catch (_) { /* file:// protocol — ignore */ }
        });
    });

    /* ---------- Scroll effects: navbar, progress bar, back-to-top ---------- */
    const navbar = document.getElementById('navbar');
    const progressFill = document.getElementById('progressFill');
    const toTop = document.getElementById('toTop');

    function onScroll() {
        const y = window.pageYOffset;

        if (navbar) navbar.classList.toggle('scrolled', y > 40);
        if (toTop) toTop.classList.toggle('visible', y > 600);

        if (progressFill) {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            progressFill.style.width = max > 0 ? (y / max) * 100 + '%' : '0%';
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (toTop) {
        toTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
        });
    }

    /* ---------- Scroll reveal animations ---------- */
    const revealEls = document.querySelectorAll('[data-reveal]');

    if ('IntersectionObserver' in window && !prefersReduced) {
        const revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const delay = Number(el.dataset.delay || 0) * 90;
                    el.style.transitionDelay = delay + 'ms';
                    el.classList.add('revealed');
                    revealObserver.unobserve(el);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        revealEls.forEach(function (el) { revealObserver.observe(el); });
    } else {
        revealEls.forEach(function (el) { el.classList.add('revealed'); });
    }

    /* ---------- Active nav link highlighting ---------- */
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if ('IntersectionObserver' in window) {
        const spy = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(function (link) {
                        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
                    });
                }
            });
        }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

        sections.forEach(function (section) { spy.observe(section); });
    }

    /* ---------- Hero typewriter ---------- */
    const typed = document.getElementById('typed');

    if (typed) {
        let words = [];
        try {
            words = JSON.parse(typed.dataset.words || '[]');
        } catch (_) { /* malformed JSON — leave static */ }

        if (words.length && !prefersReduced) {
            let wordIndex = 0;
            let charIndex = words[0].length;
            let deleting = true; // start by deleting the initial word

            const tick = function () {
                const word = words[wordIndex];

                if (deleting) {
                    charIndex--;
                    typed.textContent = word.slice(0, charIndex);
                    if (charIndex === 0) {
                        deleting = false;
                        wordIndex = (wordIndex + 1) % words.length;
                        return setTimeout(tick, 400);
                    }
                    return setTimeout(tick, 45);
                }

                charIndex++;
                typed.textContent = words[wordIndex].slice(0, charIndex);
                if (charIndex === words[wordIndex].length) {
                    deleting = true;
                    return setTimeout(tick, 2000);
                }
                return setTimeout(tick, 95);
            };

            setTimeout(tick, 1200);
        }
    }

    /* ---------- Animated stat counters ---------- */
    const counters = document.querySelectorAll('.stat-num');

    function runCounter(el) {
        const target = Number(el.dataset.count || 0);
        const suffix = el.dataset.suffix || '';

        if (prefersReduced) {
            el.textContent = target + suffix;
            return;
        }

        const duration = 1400;
        const start = performance.now();

        const step = function (now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            el.textContent = Math.round(target * eased) + suffix;
            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    }

    if ('IntersectionObserver' in window) {
        const counterObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    runCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.4 });

        counters.forEach(function (counter) { counterObserver.observe(counter); });
    } else {
        counters.forEach(runCounter);
    }
});
