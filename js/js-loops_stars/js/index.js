console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  starContainer.innerHTML = "";

  for (let i = 1; i <= 5; i++) {
    const img = document.createElement("img");

    if (i <= filledStars) {
      img.src = "assets/star-filled.svg";
    } else {
      img.src = "assets/star-empty.svg";
    }
    img.addEventListener("click", () => {
      renderStars(i);
    });
    starContainer.append(img);
  }
}

renderStars();

/*

img.src= i <= filledStars ? "assets/star-filled.svg" : "assets/star-empty.svg";

*/
