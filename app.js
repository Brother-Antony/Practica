

// Hamburger
const hamBurger = document.querySelector(".ham-burger");
hamBurger.addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle("show");
});


const btnHamburger = document.querySelector('.ham-burger');
btnHamburger.addEventListener('click', function() {
    
    if(btnHamburger.classList.contains('open')) {
        btnHamburger.classList.remove('open');
    }
    else {
        btnHamburger.classList.add('open');
    }
});




