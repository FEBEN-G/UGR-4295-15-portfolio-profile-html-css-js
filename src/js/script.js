
const menuIcon = document.querySelector('#menu-icon img');
const navbar = document.querySelector('.navbar');


document.querySelector('#menu-icon').onclick = () => {
 
  if (menuIcon.src.includes('bx-menu.svg')) {
    menuIcon.src = './Icons/bx-x.svg'; 
  } else {
    menuIcon.src = './Icons/bx-menu.svg';
  }

  // Toggle navbar visibility
  navbar.classList.toggle('active');
};




//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset=sec.offsetTop - 100;
        let height =sec.offsetHeight;
        let id= sec.getAttribute('id');

        if(top >= offset && top < offset + height ){
          
            navLinks.forEach(links =>{
               links.classList.remove('active');
               document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
            
            sec.classList.add('show-animate');
        }
      
        else{
          sec.classList.remove('show-animate');
        }
    });
    let header=document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY>100);

  
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active'); 
  
    let footer =document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

