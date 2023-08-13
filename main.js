var buttons = document.querySelectorAll(".buttons button");
var rating = document.querySelector("#rating");
var submit = document.querySelector(".submit");
var card = document.querySelector(".card");
var cardTwo = document.querySelector(".card2");

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", changeValue);

  function changeValue() {
    var buttonContent = this.value;
    // You can also use this.innerHTML
    rating.innerHTML = buttonContent;
  }
}

submit.addEventListener("click", function () {
  cardTwo.classList.remove("hidden")
})

submit.addEventListener("click", function(){
  card.classList.add("hidden")
})

