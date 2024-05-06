let carouselSlide = document.querySelector('.carousel-slide');
let slides = document.querySelectorAll('.carousel-slide img');
let counter = 1;

// Set initial position of slider
carouselSlide.style.transform = 'translateX(' + (-100 * counter) + '%)';

// Function to move slider to next image
function nextSlide() {
  if (counter >= slides.length - 1) return;
  carouselSlide.style.transition = 'transform 0.5s ease-in-out';
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-100 * counter) + '%)';
}

// Function to move slider to previous image
function prevSlide() {
  if (counter <= 0) return;
  carouselSlide.style.transition = 'transform 0.5s ease-in-out';
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-100 * counter) + '%)';
}

// Event listeners for next and previous buttons
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

