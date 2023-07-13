// Get the counter element
var counter = document.querySelector('.counter');

// Parse the final count number from the counter's data-count attribute
var finalCount = parseInt(counter.getAttribute('data-count'), 10);

// Set the current count to zero
var currentCount = 0;

// Determine the amount to increment at each step
var increment = Math.ceil(finalCount / 100);

// Function to start the counter
function startCounter() {
    // Create an interval that runs every 20 milliseconds
    var interval = setInterval(function() {
        // Increment the current count
        currentCount += increment;

        // If the current count is larger than the final count
        if (currentCount > finalCount) {
            // Set the current count to be the final count
            currentCount = finalCount;

            // Clear the interval so it no longer runs
            clearInterval(interval);
        }

        // Update the counter element's text to be the current count
        counter.textContent = currentCount;
    }, 20);
}

// Create an intersection observer
var observer = new IntersectionObserver(function(entries) {
    // For each change in intersection
    for (var entry of entries) {
        // If the counter is now visible
        if (entry.isIntersecting) {
            // Start the counter
            startCounter();

            // Stop observing the counter 
            observer.disconnect();
        }
    }
}, {
    threshold: 0.1  // Start the counter when it's 10% visible
});

// Start observing the counter
observer.observe(counter);
