console.clear();

const form = document.querySelector('[data-js="form"]');
const firstNameInput = document.querySelector("#first-name");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  console.log(data);

  const ageBadnessSum = Number(data.age) + Number(data.badness);

  form.reset();
  firstNameInput.focus();
  console.log(`The age-badnes-sum of ${data.firstName} is ${ageBadnessSum}`);
});
