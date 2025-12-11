// Intersection Observer for Scroll Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

// Target all elements with the 'fade-in' class
document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// Console signature (Optional touch)
console.log(
    "%c Jonathan Earp %c Research Portfolio ", 
    "background: #fff; color: #000; padding: 5px; font-weight: bold;", 
    "background: #000; color: #fff; padding: 5px;"
);