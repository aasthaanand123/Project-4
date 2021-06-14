let questions = document.querySelectorAll(".faq__quest");
questions.forEach((q) =>
  q.addEventListener("click", function () {
    questions.forEach((ques) => {
      let a = ques.nextElementSibling;
      if (!a.classList.contains("hide") && ques !== q) {
        a.classList.add("hide");
        ques.classList.remove("focus");
        ques.children[1].classList.remove("rotate");
      }
    });
    q.children[1].classList.toggle("rotate");
    q.classList.toggle("focus");
    let answer = this.nextElementSibling;
    answer.classList.toggle("hide");
  })
);
