const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const headerMenu = document.querySelector('.header-menu');
const medaiQuery = window.matchMedia('(max-width: 768px)');
const overlay = document.querySelector('.overlay');
//click events

btnHamburger.addEventListener('click', function(){

    if(header.classList.contains('open')){
        header.classList.remove('open');
        headerMenu.style.display = "none";
        overlay.style.display = 'none';

          
    }else  {
        header.classList.add('open');
        headerMenu.style.display = 'block';
        overlay.style.display = 'block';

    }

});
    

//media query 

medaiQuery.addEventListener('change', (e) => {
    if((e.matches) && header.classList.contains('open')){
        headerMenu.style.display ='block';
        overlay.style.display = 'block';


    }else {
        headerMenu.style.display = 'none';
        overlay.style.display = 'none';

    }
})


// fixed header

window.onscroll = function() {myFunction()};

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
      console.log("hello world");
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}