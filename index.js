document.addEventListener("DOMContentLoaded", function() {
    // Show loading element when DOM content is loaded
    document.getElementById("loading").style.display = "block";
    
    // Hide loading element after 3 seconds
    setTimeout(function() {
        document.getElementById("loading").style.display = "none";
    }, 3000); // 3000 milliseconds = 3 seconds
});
