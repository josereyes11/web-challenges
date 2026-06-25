console.clear();

const progressBar = document.querySelector('[data-js="progress-bar"]');

function calculateScrollPercentage() {
  const totalHeight = document.body.clientHeight;
  const viewportHeight = window.innerHeight;
  const scrollPercentage =
    (window.scrollY / (totalHeight - viewportHeight)) * 100;
  return scrollPercentage;
}

document.addEventListener("scroll", () => {
  const percentage = calculateScrollPercentage();
  progressBar.style.width = percentage + "%";
});
