var link = document.querySelector(".search-hotels");
var search = document.querySelector(".search-form");
var close = document.querySelector(".search-form-close");
var form = search.querySelector("form");
var datein = search.querySelector("[name=check-in]");
var dateout = search.querySelector("[name=check-out]");
var adults = search.querySelector("[name=adults]");
var children = search.querySelector("[name=children]");

link.addEventListener("click", function(event){
  event.preventDefault();
  search.classList.add("search-form-show");
  date.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  search.classList.remove("search-form-show");
});

window.addEventListener("keydow", function(event) {
  if (event.keyCode === 27) {
    if (search.classList.contains("search-form-show")) {
      search.classList.remove("search-form-show");
    }
  }
});
