var link = document.querySelector(".search-hotels");
var search = document.querySelector(".search-form");
var form = search.querySelector("form");

link.addEventListener("click", function(event){
  event.preventDefault();
  search.classList.toggle("search-form-show");
  date.focus();
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (search.classList.contains("search-form-show")) {
      search.classList.remove("search-form-show");
    }
  }
});
