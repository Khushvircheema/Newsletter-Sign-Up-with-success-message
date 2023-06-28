const form = document.querySelector("form");
const signUpCard = document.querySelector(".card");
const successCard = document.querySelector(".cardSuccess");
const dismiss = document.querySelector(".dismiss");
const email = document.querySelector(".email");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  signUpCard.classList.add("hide");
  successCard.classList.remove("hide");
  console.log(email.value);
  document.querySelector("strong").innerText = email.value;
});


function homepage() {
  window.location.href = "https://khushvircheema.github.io/Newsletter-Sign-Up-with-success-message/";
};

