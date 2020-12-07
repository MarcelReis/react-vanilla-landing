import Cleave from "cleave.js";

import {
  validateEmail,
  validateMessage,
  validateName,
  validatePhone,
} from "../../common/utils/validator";

const contactForm = document.querySelector(".contact");

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (!validateName(name.nodeValue)) {
    addInputError(name);
  }
  if (!validateEmail(email.nodeValue)) {
    addInputError(email);
  }
  if (!validatePhone(phone.nodeValue)) {
    addInputError(phone);
  }
  if (!validateMessage(message.nodeValue)) {
    addInputError(message);
  }

  if (contactForm.querySelectorAll(".contact__textField--error").length) {
    alert("Favor preencher os campos corretamente");
  }
});

function addInputError(inputElement) {
  inputElement.parentElement.classList.add("contact__textField--error");
}

new Cleave("#phone", {
  blocks: [0, 2, 4, 5],
  delimiters: ["(", ") ", "-"],
});

new Cleave("#email", {
  lowercase: true,
});
