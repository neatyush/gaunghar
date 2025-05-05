document.querySelector('.menuLink').addEventListener('click', function(e) {
    e.preventDefault();
  });

// mbl-menu 

let menuBody = document.querySelector(".menu-body");
let toggleMenu = document.querySelector(".menuLink");
let closeMenu = document.querySelector(".mbl-link-master")

toggleMenu.addEventListener("click", function(){
    menuBody.style.display="block";
    menuBody.style.zIndex="9991";
})

closeMenu.addEventListener("click",function(){
    menuBody.style.display="none";
})
