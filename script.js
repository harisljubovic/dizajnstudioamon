let navBar = document.querySelector("#navigacijskiMeni");

window.onscroll = () => {
  navBarScroll();
};

function navBarScroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navBar.classList.add("navigacijaScroll");
  } else {
    navBar.classList.remove("navigacijaScroll");
  }
}
