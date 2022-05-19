const nav = document.querySelector(".navbar");
fetch("../webapp/NavBar.html")
  .then((res) => res.text())
  .then((data) => {
    nav.innerHTML = data;
  });
