function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
    
    function animatioinScroll(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animatioinScroll);
    }
    
    function ease(t,b,c,d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t*(t-2) -1) + b;
    }
    requestAnimationFrame(animatioinScroll);

}

var toBio = document.querySelector('.link-to-bio');
toBio.addEventListener('click', function(){
    smoothScroll('.bio-container', 1000);
})

var toContact = document.querySelector('.link-to-contact');
toContact.addEventListener('click', function(){
    smoothScroll('.contact-show', 1000);
})

var toTop= document.querySelector('.top');
toTop.addEventListener('click', function(){
    smoothScroll('.first-section', 1000);
})



const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    
    // Toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
         
         //Animate links
    navLinks.forEach((link, index)=>{
        if(link.style.animation){
            link.style.animation = '';
        } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
    });
    
    burger.classList.toggle('toggle');
    
    });
}

navSlide();