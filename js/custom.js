// Show preloader when page loads
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    preloader.classList.remove('d-none');
    
    // Hide preloader after 2 seconds
    setTimeout(function() {
        preloader.classList.add('d-none');
    }, 2000);
});
