const header=document.querySelector("header");
document.addEventListener("scroll", () => {
    let scrolPos = window.pageYOffset;
    if (scrolPos > 50 ) {
     header.classList.add("scrolled") 
    } else {
      header.classList.remove("scrolled")
    }
    
})

const hamburger=document.querySelector(".hamburger");
const nav=document.querySelector(".navlinks");
const links=document.querySelector(".navlinks li");

hamburger.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
})


const testimonialSlider = document.querySelector('.testimonial-slider');
const sliderContainer = testimonialSlider.querySelector('.slider-container');
const slides = sliderContainer.querySelectorAll('.testimonial-item');
const prevBtn = testimonialSlider.querySelector('.prev-btn');
const nextBtn = testimonialSlider.querySelector('.next-btn');
const dots = testimonialSlider.querySelectorAll('.dot');

let slideIndex = 0;
const slideWidth = slides[0].clientWidth;
const intervalTime = 5000;

// Set the initial position of the slider
sliderContainer.style.transform = `translateX(${-slideIndex * slideWidth}px)`;

// Update the active dot
function updateDots() {
  dots.forEach((dot, index) => {
    if (index === slideIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Move to the next slide
function nextSlide() {
  if (slideIndex === slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  sliderContainer.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
  updateDots();
}

// Move to the previous slide
function prevSlide() {
    if (slideIndex === 0) {
      slideIndex = slides.length - 1;
    } else {
      slideIndex--;
    }
    sliderContainer.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
    updateDots();
  }
  
  // Set the interval to move to the next slide automatically
  let slideInterval = setInterval(nextSlide, intervalTime);
  
  // Stop the interval when the user interacts with the slider
  testimonialSlider.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
  });
  
  // Resume the interval when the user stops interacting with the slider
  testimonialSlider.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, intervalTime);
  });

   // Move to the next slide when the "Next" button is clicked
   nextBtn.addEventListener('click', nextSlide);

   // Move to the previous slide when the "Previous" button is clicked
 prevBtn.addEventListener('click', prevSlide);
  
  
  // Move to the slide corresponding to the clicked dot
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      slideIndex = index;
      sliderContainer.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
      updateDots();
    });
  });
  
   