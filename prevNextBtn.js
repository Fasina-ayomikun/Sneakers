import get from "./getElement.js"

const modalPrevBtn = get('.modal-prev-btn');
const modalNextBtn = get('.modal-next-btn');
const mainPrevBtn = get('.prev-btn');
const mainNextBtn = get('.next-btn');
const slides = Array.from(document.querySelectorAll('.modal .img'));
const mainSlides = Array.from(document.querySelectorAll('.main-image .img'));

slides.forEach((slide,index)=>{
    slide.style.transform = `${index * 100}%`;
})

let counter = 0;
modalNextBtn.addEventListener('click',function(){
    counter++;
    carousel()
})
modalPrevBtn.addEventListener('click',function(){
    counter--;
    carousel()
})

function carousel(){
    if(counter > slides.length-1){
    
        counter = 0
    }
    if(counter < 0){
        counter = slides.length-1;
    }
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter * 100}%)`;
        
    })
    
    slides[counter].style.visibility = `visible`
    
    
}


mainSlides.forEach((slide,index)=>{
    slide.style.transform = `${index * 100}%`;
})

let mainCounter = 0;
mainNextBtn.addEventListener('click',function(){
    mainCounter++;
    maincarousel()
})
mainPrevBtn.addEventListener('click',function(){
    mainCounter--;
    maincarousel()
})

function maincarousel(){
    if(mainCounter > mainSlides.length-1){
    
        mainCounter = 0
    }
    if(mainCounter < 0){
        mainCounter = mainSlides.length-1;
    }
    mainSlides.forEach((slide)=>{
        slide.style.transform = `translateX(-${mainCounter * 100}%)`;
        
    })
    mainSlides[mainCounter].style.visibility = `visible`
    
    
}
