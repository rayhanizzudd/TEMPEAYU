document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show'); // Opsional: hilangkan jika scroll ke atas
            }
        });
    }, { threshold: 0.3 }); // 30% elemen terlihat akan memicu

    const animatedElements = document.querySelectorAll('.fade-in, .slide-left');
    animatedElements.forEach(element => observer.observe(element));
});

