document.addEventListener("DOMContentLoaded",function(){
  window.addEventListener("scroll",handleScroll);
});

function handleScroll(){
    let testimonials = document.querySelectorAll(".testimonial");
    testimonials.forEach((testimonial) =>{
        let position = testimonial.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        if(position < windowHeight * 0.8){
            testimonial.classList.add("in-view");
        }
    })
}


