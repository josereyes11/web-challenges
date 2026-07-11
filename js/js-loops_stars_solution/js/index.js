console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  starContainer.innerHTML = "";

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("img");
    star.src =
      i <= filledStars ? "assets/star-filled.svg" : "assets/star-empty.svg";

    star.addEventListener("click", () => {
      renderStars(i);
    });

    starContainer.append(star);
  }
}

renderStars(3);
