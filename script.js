// slideshow highlight
let slides = document.querySelectorAll(".slide");
let index = 0;

function changeSlide(){

slides.forEach(slide=>{
slide.classList.remove("active");
});

slides[index].classList.add("active");

index++;

if(index>=slides.length){
index=0;
}

}

setInterval(changeSlide,2000);


// scroll animation
const cards = document.querySelectorAll(".card");

function showCards(){
cards.forEach(card=>{
const top = card.getBoundingClientRect().top;
const trigger = window.innerHeight * 0.85;

if(top < trigger){
card.classList.add("show");
}
});
}

window.addEventListener("scroll",showCards);

showCards();
