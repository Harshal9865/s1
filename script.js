document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.hamburger-menu');
    const dropdown = document.querySelector('.dropdown-menu');

    // Toggle dropdown on click
    menu.addEventListener('click', function() {
        dropdown.classList.toggle('active');
        menu.classList.toggle('active');
    });

    // Redirect to Home on single click
    dropdown.addEventListener('click', function(e) {
        if (e.target.classList.contains('home-link')) {
            window.location.href = "http://127.0.0.1:5500/webdev2.htmll";
        }
    });

    // Redirect to About on double click
    dropdown.addEventListener('dblclick', function(e) {
        if (e.target.classList.contains('about-link')) {
            window.location.href = "html1.html"; 
        }
    });
});
