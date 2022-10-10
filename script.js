const btns = document.querySelectorAll(".btn");
const writings = document.querySelectorAll(".writings");

btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        btnUpdate();
        btn.classList.add("active");
        writings[index].classList.add("activate");
    })
});

function btnUpdate() {
    btns.forEach(btn => {
        btn.classList.remove("active");
    });
    writings.forEach(writing => {
        writing.classList.remove("activate");
    });
}

/* 
senior'ın çözümü: DOM içerisindekileri function içine alırsan, DOM daha okunaklı hale gelir dedi.

const btns = document.querySelectorAll(".btn");
const writings = document.querySelectorAll(".writings");

btns.forEach((btn, index) => btn.addEventListener(
  "click", () => {
    activateButton(btn);
    activateWriting(index);
  }));

function activateButton(btn) {
  btns.forEach(btn => {
        btn.classList.remove("active");
  });
  btn.classList.add("active");
}

function activateWriting(index) {
  writings.forEach(writing => {
      writing.classList.remove("activate");
   });
  writings[index].classList.add("activate");
}
*/