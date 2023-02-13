// Get the navigation menu container
const navMenu = document.querySelector('.links');

// Get the menu toggle button
const menuToggle = document.querySelector('.icon');

// Add a click event listener to the menu toggle button
menuToggle.addEventListener('click', () => {
    // Toggle the "open" class on the navigation menu
    navMenu.classList.toggle('open');
});


// Create the button
const scrollBtn = document.createElement('button');
scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollBtn.classList.add('scroll-to-top');

// Add the button to the document body
document.body.appendChild(scrollBtn);

// Add a click event listener to the button
scrollBtn.addEventListener('click', () => {
    // Scroll to the top of the page
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});



window.addEventListener("load", function() {
    // Get the body element
    var body = document.body;

    // Add a class to the body to trigger a CSS transition
    body.classList.add("fade-in");
  });