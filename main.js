import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js"; 
import { db } from "./config.js";

const form = document.querySelector("#form");
const userName = document.querySelector("#userName")
const email = document.querySelector("#email")
const message = document.querySelector("#message")



form.addEventListener("submit" , async(event)=>{
event.preventDefault();
userName.value="";
email.value="";
message.value="";

  try {
    const docRef = await addDoc(collection(db, "users"), {
      userName:userName.value,
      email:email.value,
      message:message.value
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
})

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".skill__content .section__subheader", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".skill__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".skill__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".skill__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".skill__card", {
  duration: 1000,
  interval: 500,
  delay: 2000,
});





