const ldb = document.querySelectorAll('.ldButton');

ldb.forEach(function(ldbutton) {
  ldbutton.addEventListener('click', function(e) {
    if (e.target.name == "light") {
      document.querySelector(".title").classList.remove("bg-green-400");
      document.querySelector(".title").classList.add("bg-white");
      document.body.style.backgroundColor = "white";
      document.querySelector(".nav-bar").classList.remove("bg-purple-700");
      document.querySelector(".nav-bar").classList.add("bg-purple-300");
      document.querySelector(".nav-bar").classList.remove("text-white");
      document.querySelector(".nav-bar").classList.add("text-black");
    } else if (e.target.name == "dark") {
      document.querySelector(".title").classList.remove("bg-white");
      document.querySelector(".title").classList.add("bg-green-400");
      document.body.style.backgroundColor = "rgb(61, 61, 207)";
      document.querySelector(".nav-bar").classList.add("bg-purple-700");
      document.querySelector(".nav-bar").classList.remove("bg-purple-300");
      document.querySelector(".nav-bar").classList.add("text-white");
      document.querySelector(".nav-bar").classList.remove("text-black");
    }
  })
})