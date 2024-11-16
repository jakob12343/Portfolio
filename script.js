document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const nextButton = document.querySelector(".carousel-button.right");
    const prevButton = document.querySelector(".carousel-button.left");

    let currentSlideIndex = 0;

    const cloneFirst = slides[0].cloneNode(true);
    const cloneLast = slides[slides.length - 1].cloneNode(true);
    track.appendChild(cloneFirst);
    track.insertBefore(cloneLast, slides[0]);

    const totalSlides = slides.length + 2; 
    const updateCarousel = () => {
        const width = slides[0].getBoundingClientRect().width;
        track.style.transition = 'transform 0.5s ease';
        track.style.transform = `translateX(-${(currentSlideIndex + 1) * width}px)`;
    };

    const handleLoop = () => {
        const width = slides[0].getBoundingClientRect().width;
        if (currentSlideIndex === -1) {
            track.style.transition = 'none';
            currentSlideIndex = slides.length - 1;
            track.style.transform = `translateX(-${(currentSlideIndex + 1) * width}px)`;
        } else if (currentSlideIndex === slides.length) {
            track.style.transition = 'none';
            currentSlideIndex = 0;
            track.style.transform = `translateX(-${(currentSlideIndex + 1) * width}px)`;
        }
    };

    currentSlideIndex = 0;
    updateCarousel();

    nextButton.addEventListener("click", () => {
        currentSlideIndex++;
        updateCarousel();
        setTimeout(handleLoop, 500);
    });

    prevButton.addEventListener("click", () => {
        currentSlideIndex--;
        updateCarousel();
        setTimeout(handleLoop, 500);
    });

    window.addEventListener("resize", updateCarousel);
});
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const skillItems = document.querySelectorAll(".skill-item");
  
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");
  
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
  
        skillItems.forEach((item) => {
          if (filter === "all" || item.classList.contains(filter)) {
            item.classList.add("visible");
          } else {
            item.classList.remove("visible");
          }
        });
      });
    });
  });