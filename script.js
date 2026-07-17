// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});



// Close menu when clicking a link

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});




// Booking Form

const bookingForm = document.getElementById("bookingForm");


bookingForm.addEventListener("submit",(e)=>{

    e.preventDefault();


    alert(
        "Thank you! Your booking request has been received. We will contact you soon."
    );


    bookingForm.reset();

});




// Scroll animation

const sections = document.querySelectorAll("section");


window.addEventListener("scroll",()=>{


    sections.forEach(section=>{


        const position = section.getBoundingClientRect().top;


        if(position < window.innerHeight - 100){

            section.style.opacity="1";
            section.style.transform="translateY(0)";

        }


    });


});




// Initial animation style

sections.forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(40px)";

    section.style.transition="0.8s ease";

});
