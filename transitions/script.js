// document.addEventListener("DOMContentLoaded", () => {
//   console.log("DOM Loaded");
//   const element = document.querySelector(".square");
//   const circle = document.querySelector(".circle");

//   document.addEventListener("click", (e) => {
//     element.style.transform = `translateY(${
//       e.clientY - element.clientHeight / 2
//     }px) translateX(${e.clientX - element.clientWidth / 2}px)`;
//   });

//   //   document.addEventListener("mousemove", (e) => {
//   //     circle.style.transform = `translateY(${
//   //       e.clientY - circle.clientHeight / 2
//   //     }px) translateX(${e.clientX - circle.clientWidth / 2}px)`;
//   //   });

//   element.addEventListener("transitionrun", (e) => {
//     console.log(e);
//   });
//   element.addEventListener("transitionstart", (e) => {
//     console.log(e);
//   });
//   element.addEventListener("transitionend", (e) => {
//     if (e.propertyName == "transform") {
//       var randomColor = Math.floor(Math.random() * 16777215).toString(16);
//       element.style.backgroundColor = `#${randomColor}`;
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector(".square");
  const toggleBtn = document.querySelector(".toggleBtn");

  toggleBtn.addEventListener("click", (e) => {
    element.classList.toggle("hide");
  });
});
