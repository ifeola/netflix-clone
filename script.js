const faqsList = document.querySelector(".faq__list");
const faqBtns = document.querySelectorAll(".faq__question-btn");
const faqContent = document.querySelectorAll(".faq__content");

// faqBtns.forEach((button) => {
//   button.addEventListener("click", () => {
//     if (button.classList.contains("active")) {
//       button.classList.remove("active");
//     } else {
//       button.classList.add("active");
//       faqBtns.forEach((btn) => {
//         if (btn !== button) {
//           btn.classList.remove("active");
//         }
//       });
//     }
//   });
// });

faqsList.addEventListener("click", (e) => {
  if (e.target.classList.contains("active")) {
    e.target.classList.remove("active");
  } else {
    e.target.classList.add("active");
    faqBtns.forEach((btn) => {
      if (btn !== e.target) {
        btn.classList.remove("active");
      }
    });
  }
});
