function getAllStarsByClassName(className) {
  return document.querySelectorAll("." + className);
}
console.log(getAllStarsByClassName("star"));

document.addEventListener("DOMContentLoaded", ratingStars);

function ratingStars() {
  for (let i = 0; i < getAllStarsByClassName("star").length; i++) {
    getAllStarsByClassName("star")[i].addEventListener(
      "click",
      ratingStarClickHandler.bind(null, i)
    );
  }
}

function ratingStarClickHandler(index, event) {
  if (event) {
    // console.log(event)
    let star = event.target.parentElement.children;

    for (let i = 0; i < star.length; i++) {
      star[i].classList.remove("orange");
    }
  }
  if (event.target.previousElementSibling !== null) {
    for (let i = 0; i <= index; i++) {
      getAllStarsByClassName("star")[i].classList.add("orange");
    }
  } else {
    event.target.classList.add("orange");
  }
}
