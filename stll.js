// Get the button
const backToTopBtn = document.getElementById("backToTopBtn");

// When the user scrolls down 300px from the top, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// When the user clicks the button, scroll to the top of the document
backToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Enables smooth scrolling
    });
});
