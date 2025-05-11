// memunculkan kolom pencarian
const search = document.getElementById("logo-search");
const inputSearch = document.getElementById("search");
const divAtas = document.getElementById("div-atas");

search.addEventListener("click", function () {
  inputSearch.classList.remove("hidden");
  divAtas.classList.remove("ml-[35rem]");
});

// klik dimana saja agar kolom pencarian hilang
window.addEventListener("click", function (e) {
  if (e.target != inputSearch && e.target != search) {
    inputSearch.classList.add("hidden");
    divAtas.classList.add("ml-[35rem]");
  }
});

// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

//class active pada navbar
const navLink = document.querySelectorAll('#nav-link')
navLink.forEach((m) => {
  m.addEventListener('click',function (e) {
    e.preventDefault()
    navLink.forEach((link) => link.classList.remove('text-gray-400'))
    this.classList.add('text-gray-400')
  })
})
