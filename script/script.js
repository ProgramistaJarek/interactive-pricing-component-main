document.addEventListener("DOMContentLoaded", function () {
  setValue();

  range.oninput = () => {
    setValue();
  };
});

let range = document.querySelector("#myRange");
let value = document.querySelector("#value");
let cost = document.querySelector("#cost");
let btn = document.querySelector("#btn");
let dot = document.querySelector(".dot");
let discount = 0;
let test = 1;

btn.addEventListener("click", () => {
  dot.classList.toggle("dot-active");
  if (dot.classList.contains("dot-active")) discount = 75;
});

function setValue() {
  switch (range.value) {
    case "1":
      value.innerHTML = "10K";
      dot.classList.contains("dot-active") ? (cost.innerHTML = "$" + (8 * (discount / 100)).toFixed(2)) : (cost.innerHTML = "$" + (8).toFixed(2));
      break;
    case "2":
      value.innerHTML = "50K";
      dot.classList.contains("dot-active")
        ? (cost.innerHTML = "$" + (12 * (discount / 100)).toFixed(2))
        : (cost.innerHTML = "$" + (12).toFixed(2));
      break;
    case "3":
      value.innerHTML = "100K";
      dot.classList.contains("dot-active")
        ? (cost.innerHTML = "$" + (16 * (discount / 100)).toFixed(2))
        : (cost.innerHTML = "$" + (16).toFixed(2));
      break;
    case "4":
      value.innerHTML = "500K";
      dot.classList.contains("dot-active")
        ? (cost.innerHTML = "$" + (24 * (discount / 100)).toFixed(2))
        : (cost.innerHTML = "$" + (24).toFixed(2));
      break;
    case "5":
      value.innerHTML = "5M";
      dot.classList.contains("dot-active")
        ? (cost.innerHTML = "$" + (36 * (discount / 100)).toFixed(2))
        : (cost.innerHTML = "$" + (36).toFixed(2));
      break;
  }
}
