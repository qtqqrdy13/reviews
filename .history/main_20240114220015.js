document.addEventListener("DOMContentLoaded",function(){
    const testimonial = document.querySelectorAll(".testimonial");
    function activateTestimonial(){
        testimonial.forEach((testimonial,index)=>{
            setTimeout(()=>{
                testimonial.classList.add("active");
            },index * 500)
        })
    }
    activateTestimonial();
});
