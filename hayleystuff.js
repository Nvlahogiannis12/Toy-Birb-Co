const allCarousels = document.querySelectorAll(".carousel-container");

const allCarouselData = [
  [
    { src: "imgs/colored-train-img.png", description: "Carousel 1 slide 1" },
    { src: "imgs/colored-train-img2.png", description: "Carousel 1 slide 2" },
    { src: "imgs/image3.jpg", description: "Carousel 1 slide 3" },
  ],
  [
    { src: "imgs/image4.jpg", description: "Carousel 2 slide 1" },
    { src: "imgs/image5.jpg", description: "Carousel 2 slide 2" },
    { src: "imgs/image6.jpg", description: "Carousel 2 slide 3" },
  ],
  [
    { src: "imgs/image7.jpg", description: "Carousel 3 slide 1" },
    { src: "imgs/image8.jpg", description: "Carousel 3 slide 2" },
    { src: "imgs/image9.jpg", description: "Carousel 3 slide 3" },
  ],
];

allCarousels.forEach((carousel, index) => {
  const images = allCarouselData[index];
  let currentIndex = 0;

  const imgElement = carousel.querySelector(".carouselImage");
  const descElement = carousel.querySelector(".description p");
  const prevBtn = carousel.querySelector(".prevBtn");
  const nextBtn = carousel.querySelector(".nextBtn");

  function updateCarousel() {
    imgElement.src = images[currentIndex].src;
    imgElement.alt = images[currentIndex].description;
    descElement.textContent = images[currentIndex].description;
  }

  // Initialize with first image
  updateCarousel();

  // Image click advances to next slide
  imgElement.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  });

  // If you still want buttons to work:
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
    });
  }
});
