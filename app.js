// const color = ["red", "blue", "green", "yellow", "pink"];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const hash = "#";

const btn = document.querySelector(".btn");
const clr = document.querySelector("#clr");

btn.addEventListener("click", () => {
  //   let ran = getrandom();
  //   console.log(ran);
  //   clr.innerHTML = color[ran];
  //   clr.style.color = color[ran];
  //   document.body.style.backgroundColor = color[ran];
  let hexcolor = "#";
  for (let i = 0; i < 6; i++) {
    hexcolor += hex[getrandom()];
  }

  clr.innerHTML = hexcolor;
  clr.style.color = hexcolor;
  document.body.style.backgroundColor = hexcolor;
});

const getrandom = (_) => {
  return Math.floor(Math.random() * hex.length);
};
