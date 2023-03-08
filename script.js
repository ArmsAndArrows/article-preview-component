const button = document.querySelector(".btn-1");

button.addEventListener("click", () => {
  let counter = 0;
  const userBox2 = document.querySelector(".card__userbox--2");

  if (userBox2.style.display == "grid") {
    userBox2.style.display = "none";
  } else {
    userBox2.style.display = "grid";
  }
});

const button2 = document.querySelector(".btn-2");

button2.addEventListener("click", () => {
  const userBox1 = document.querySelector(".card__userbox--1");
  const userBox2 = document.querySelector(".card__userbox--2");

  userBox1.style.display = "grid";
  userBox2.style.display = "none  ";
});
