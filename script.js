'use strict';

//add Event on multiple element
 

 const addEventOnElements= function(elements,eventType,callback){
    for(let i=0;i<elements.length;i++)
    {
        elements[i].addEventListener(eventType,callback);
    }
 }

 //PreLoading

 const loadingElement= document.querySelector("[data-loading]");

 window.addEventListener("load",function(){
  loadingElement.classList.add("loaded");
  document.body.classList.remove("active");

 });




 //MOBILE NAV TOGGLE

 const [navTogglers, navLinks, navbar, overlay]=[
    document.querySelectorAll("[data-nav-toggler]"),
    document.querySelectorAll("[data-nav-link]"),
    document.querySelector("[data-navbar]"),
    document.querySelector("[data-overlay]")


 ];

 const toggleNav=function() {
   navbar.classList.toggle("active");
   overlay.classList.toggle("active");
   document.body.classList.toggle("active");

 }
