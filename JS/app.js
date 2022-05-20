window.addEventListener('scroll',()=>{
    myFunction()
})
function myFunction() {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        document.querySelector('.scroll-up').style.display = 'block'
    } else {
        document.querySelector('.scroll-up').style.display = 'none'
    }
  }

  let anchorlinks = document.querySelectorAll('a[href^="#"]')
 
// for (let item of anchorlinks) { // relitere 
//     item.addEventListener('click', (e)=> {
//         let hashval = item.getAttribute('href')
//         let target = document.querySelector(hashval)
//         target.scrollIntoView({
//             behavior: 'smooth',
//             block: 'start',
//             inline: 'start'
//         })
//         history.pushState(null, null, hashval)
//         e.preventDefault()
//     })
// }

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

const menu = document.getElementById('dropdown')
menu.addEventListener('click',()=>{
    document.querySelector('.menu').style.display = 'none'
    document.querySelector('.social-medias').style.display = 'none'
    document.querySelector('.dropdown-menu').style.display = 'flex'
    document.getElementById('cancel').style.display = 'inline-flex'
    document.getElementById('dropdown').style.display = 'none'
})
document.getElementById('cancel').addEventListener('click', ()=>{
    document.getElementById('dropdown').style.display = 'inline-flex'
    document.querySelector('.dropdown-menu').style.display = 'none'
    document.getElementById('cancel').style.display = 'none'
})
const btns = document.querySelectorAll('.clickable-menu')

btns.forEach((el)=>{
    el.addEventListener('click', ()=>{
        document.getElementById('dropdown').style.display = 'inline-flex'
        document.querySelector('.dropdown-menu').style.display = 'none'
        document.getElementById('cancel').style.display = 'none'
    })
})
