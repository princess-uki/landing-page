/**
 * Define Global Variables
 *
 */
 const mybutton = document.getElementById('myBtn');
 const sectionsElements = document.querySelectorAll('section');
 const navbarUl = document.getElementById('navbar__list');
 // change title's text
 const title = document.getElementById('landing-title');
 
 let navList = '';
 title.textContent = `Udactiy's Project`;
 /**
  * End Global Variables
  * Start Helper Functions
  
  *
  */
 // Generate navbar from sections id names we got from the querySelectorAll
 function gernerateNavbar() {
   sectionsElements.forEach((section) => {
     // add html tags for list items
     // dataset.nav returns DOMStringMap {nav: section 1}
     navList += `<li> <a class="nav__link menu__link" href="#${section.id}" id="navli">${section.dataset.nav}</a></li>`;
   });
   // add the tags to the inner htmls
   navbarUl.innerHTML = navList;
 }
 gernerateNavbar();
 
 

 getBoundingClient