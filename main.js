// Initialize the Typed.js library for an element with class auto-type with "Paris" as the text to type
var typed = new Typed(".auto-type",{
  strings: ["Paris"],
  typeSpeed: 300,
  loop: false
})

// Image slider //
// Select all the images and descriptions from the DOM and convert NodeList to array
const images = Array.from(document.querySelectorAll(".img-container img"));
const descriptions = Array.from(document.querySelectorAll(".description"));
let index = 0;  // Initialize index to track current slide

// Function to change to the next slide
function nextSlide() {
// Remove the active class from the current slide
images[index].classList.remove("active");
descriptions[index].classList.remove("active");

// If the image is the last slide, loop back to the first slide, if not move to the next slide
if (index === images.length - 1) {
  index = 0;
} else {
  index++;
}

// Add the active class to the new slide
images[index].classList.add("active");
descriptions[index].classList.add("active");
}

// Set a timer to automatically move to the next slide every 5 seconds
setInterval(nextSlide, 5000);

// Function to initialize Google Maps 
function initMap() {
// Create a map, centered in Paris
const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 12,
  center: { lat: 48.8566, lng: 2.3522 }, 
});

// Array of landmarks in Paris
const checkpoints = [
  { lat: 48.8584, lng: 2.2945, title: 'Eiffel Tower' },
  { lat: 48.8526, lng: 2.3500, title: 'Notre-Dame' },
  { lat: 48.8606, lng: 2.3376, title: 'Louvre Museum' },
  {lat: 48.87417623705405, lng: 2.2950254379661104, title: 'Arc of Triumph'},
  {lat: 48.88695615713336,lng: 2.3427486411342446, title: 'Montmartre'},
  {lat:48.80498166053983, lng: 2.1203231065418344, title: 'Palace of Versailles'},
  {lat: 48.84760553035554, lng: 2.336903007096865, title: 'Luxembourg Gardens'},
  {lat: 48.884218413169116, lng: 2.3322196303750977, title: 'Moulin Rouge'},
  {lat: 48.87981000667108, lng: 2.780215870809561, title:'Disney Land'}
];

// Add a marker for each location in the checkpoints array
checkpoints.forEach(checkpoint => {
  const marker = new google.maps.Marker({
    position: checkpoint,
    map: map,
    title: checkpoint.title,
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png" 
    }
  });
});
}
