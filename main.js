const nums = document.querySelectorAll(".num");
const btn = document.querySelector(".btn");
// Cards
const ratingCard = document.querySelector(".rating-card");
const thankCard = document.querySelector(".thank-card");

const ratingText = document.querySelector(".text");
const backBtn = document.querySelector(".back-btn");

let selectedRating = 4;

// selectedRating
nums.forEach((num) => {
  num.addEventListener("click", () => {
    nums.forEach((n) => n.classList.remove("active"));

    num.classList.add("active");

    selectedRating = num.textContent;
  });
});

// submit
btn.addEventListener("click", () => {

  ratingCard.classList.add("hidden");

  ratingText.textContent = `You selected ${selectedRating} out of 5`;

  thankCard.classList.remove("hidden");
});

// back button
backBtn.addEventListener("click", () => {
  thankCard.classList.add("hidden");

  ratingCard.classList.remove("hidden");
});
