const allCarousels = document.querySelectorAll(".carousel-container");

const allCarouselData = [
  [
    {
      src: "imgs/car2.jpg",
      description:
        "Wooden Car (All ages): This heirloom-quality wooden car is a timeless treasure. Handcrafted from domestic and exotic hardwoods with a clear lacquer finish, this unique car will inspire generations of imaginative play. Please note potential choking hazards for small children.",
    },
    { src: "imgs/car3.jpg", description: "" },
    { src: "imgs/car4.jpg", description: "" },
    { src: "imgs/car1.jpg", description: "" },
  ],
  [
    {
      src: "imgs/plane3.jpg",
      description:
        "Wooden Car (All ages): This heirloom-quality wooden car is a timeless treasure. Handcrafted from domestic and exotic hardwoods with a clear lacquer finish, this unique car will inspire generations of imaginative play. Please note potential choking hazards for small children.",
    },
    { src: "imgs/plane1.jpg", description: "" },
    { src: "imgs/plane2.jpg", description: "" },
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
  function updateCarousel() {
    imgElement.src = images[currentIndex].src;
    imgElement.alt = images[currentIndex].description;

    // Only update description if not the first carousel
    if (index !== 0) {
      descElement.textContent = images[currentIndex].description;
    }
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
