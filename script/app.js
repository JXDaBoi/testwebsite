const ldb = document.querySelectorAll('.ldButton');

ldb.forEach(function(ldbutton) {
  ldbutton.addEventListener('click', function(e) {
    if (e.target.name == "light") {
      document.querySelector(".title").style.backgroundColor = "salmon";
      document.body.style.backgroundColor = "white";
      document.querySelector(".nav-bar").style.backgroundColor = "cyan";
    } else if (e.target.name == "dark") {
      document.querySelector(".title").style.backgroundColor = "rgb(120, 233, 58)";
      document.body.style.backgroundColor = "rgb(61, 61, 207)";
      document.querySelector(".nav-bar").style.backgroundColor = "rgb(58, 237, 237)";
    }
  })
})