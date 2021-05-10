let faqq1 = document.querySelector(".faq__quesone");
let faqq2 = document.querySelector(".faq__questwo");
let faqq3 = document.querySelector(".faq__questhree");
let faqq4 = document.querySelector(".faq__quesfour");
let faqq5 = document.querySelector(".faq__quesfive");

let answerone = document.querySelector(".faq__ansone");
let answertwo = document.querySelector(".faq__anstwo");
let answerthree = document.querySelector(".faq__ansthree");
let answerfour = document.querySelector(".faq__ansfour");
let answerfive = document.querySelector(".faq__ansfive");
let quest1 = document.querySelector(".ques1");
let quest2 = document.querySelector(".ques2");
let quest3 = document.querySelector(".questhree");
let quest4 = document.querySelector(".quesfour");
let quest5 = document.querySelector(".quesfive");
let icon1 = document.querySelector(".icon1");
let icon2 = document.querySelector(".icon2");
let icon3 = document.querySelector(".icon3");
let icon4 = document.querySelector(".icon4");
let icon5 = document.querySelector(".icon5");
// let box = document.querySelector(".box");
faqq1.addEventListener("click", function (e) {
  answerone.classList.toggle("hide");
  quest1.classList.toggle("focus");
  icon1.classList.toggle("rotate");
  box.classList.toggle("box1");
  // box toggle not working
});
faqq2.addEventListener("click", function (e) {
  answertwo.classList.toggle("hide");
  quest2.classList.toggle("focus");
  icon2.classList.toggle("rotate");
  // box.classList.toggle("box1");
});
faqq3.addEventListener("click", function (e) {
  answerthree.classList.toggle("hide");
  quest3.classList.toggle("focus");
  icon3.classList.toggle("rotate");
  // box.classList.toggle("box1");
});
faqq4.addEventListener("click", function (e) {
  answerfour.classList.toggle("hide");
  quest4.classList.toggle("focus");
  icon4.classList.toggle("rotate");
  // box.classList.toggle("box1");
});
faqq5.addEventListener("click", function (e) {
  answerfive.classList.toggle("hide");
  quest5.classList.toggle("focus");
  icon5.classList.toggle("rotate");
  // box.classList.toggle("box1");
});
