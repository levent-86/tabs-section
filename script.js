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
