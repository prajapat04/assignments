const galleryImages = [
  "assets/images/perfume-1.png",
  "assets/images/perfume-2.png",
  "assets/images/perfume-3.png"
];

let currentIndex = 0;

const mainImage = document.getElementById("galleryImage");
const dots = document.querySelectorAll(".gallery-dots .dot");
const thumbs = document.querySelectorAll(".gallery-thumbs img");
const prevBtn = document.querySelector(".gallery-arrow.left");
const nextBtn = document.querySelector(".gallery-arrow.right");

function updateGallery(index) {
  currentIndex = index;
  mainImage.src = galleryImages[index];

  dots.forEach(dot => dot.classList.remove("active"));
  thumbs.forEach(thumb => thumb.classList.remove("active"));

  if (dots[index]) dots[index].classList.add("active");
  thumbs[index].classList.add("active");
}

prevBtn.addEventListener("click", () => {
  const newIndex =
    currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
  updateGallery(newIndex);
});

nextBtn.addEventListener("click", () => {
  const newIndex =
    currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
  updateGallery(newIndex);
});

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    updateGallery(Number(dot.dataset.index));
  });
});

thumbs.forEach(thumb => {
  thumb.addEventListener("click", () => {
    updateGallery(Number(thumb.dataset.index));
  });
});
