function animateOnScroll(className) {
    const elements = document.querySelectorAll(`.${className}`);

    const options = {
      rootMargin: '0px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Aggiungi la classe per far partire l'animazione
          entry.target.classList.add('scale-in-tl');

          // Ferma l'observer dopo che l'animazione è stata eseguita una volta
          observer.unobserve(entry.target);
        }
      });
    }, options);

    elements.forEach(element => {
      observer.observe(element);
    });
}

function animateOnScroll2(className) {
    const elements = document.querySelectorAll(`.${className}`);

    const options = {
      rootMargin: '0px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Aggiungi la classe per far partire l'animazione
          entry.target.classList.add('scale-in-tr');

          // Ferma l'observer dopo che l'animazione è stata eseguita una volta
          observer.unobserve(entry.target);
        }
      });
    }, options);

    elements.forEach(element => {
        observer.observe(element);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    animateOnScroll('animate-on-scroll');
    animateOnScroll2('animate-on-scroll-2');
});
