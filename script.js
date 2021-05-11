let questions = document.querySelectorAll(".faq__quest");
questions.forEach((q) =>
  q.addEventListener("click", function () {
    q.children[1].classList.toggle("rotate");
    let answer = this.nextElementSibling;
    q.classList.toggle("focus");
    answer.classList.toggle("hide");
  })
);
