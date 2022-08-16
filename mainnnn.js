const mybutton = document.getElementById('myBtn');
const sectionsElements = document.querySelectorAll('section');
const navbarUl = document.getElementById('navbar__list');

const title = document.getElementById('landing-title');

let navList = '';
title.textContent = `Udactiy's Project`;

function createNavbar() {
    sectionsElements.forEach((section) => {
        navList += `<li> <a class="nav__link menu__link" href="#${section.id}" id="navli">${section.dataset.nav}</a></li>`;
    });

    navbarUl.innerHTML = navList;
}
createNavbar();

function addActiveClass(section) {

    const id = section.getAttribute('id');

    document.querySelector(`#${id}`).classList.add('your-active-class');
}



function removeActiveClass(section) {

    const id = section.getAttribute('id');

    document.querySelector(`#${id}`).classList.remove('your-active-class');
}


function makeActiveSection() {
    sectionsElements.forEach((section) => {

        let elementOffset = section.getBoundingClientRect();
    if (elementOffset.top <= 150 && elementOffset.bottom >= 150) {
      addActiveClass(section);
    } else {
      removeActiveClass(section);
    }
  });
}


document.addEventListener('scroll', makeActiveSection);



window.onscroll = function () {
    scrollFunction();
  };

  

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = 'block';
    } else {
      mybutton.style.display = 'none';
    }
  }

  
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  
  mybutton.addEventListener('click', topFunction);
  
  let navbar = document.getElementById('navbar').querySelectorAll('li');
  
