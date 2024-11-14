
function loadNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;

            highlightCurrentPage();
        })
        .catch(error => console.error('Error loading navbar:', error));
}


function highlightCurrentPage() {
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
}


document.addEventListener('DOMContentLoaded', loadNavbar);

