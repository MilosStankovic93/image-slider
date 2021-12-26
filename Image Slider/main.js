const wrap = document.querySelector('.wrap-slider');
const slides = document.querySelectorAll('.slide');

const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

rightBtn.addEventListener('click', () =>{
    activeSlide++

    if(activeSlide > slides.length -1){
        activeSlide = 0;
    }

    setBgToWrap();
    setActiveSlide();
})


leftBtn.addEventListener('click', () =>{
    activeSlide--;

    if(activeSlide < 0){
        activeSlide = slides.length -1;
    }
    setBgToWrap();
    setActiveSlide();

})

setBgToWrap();


function setBgToWrap(){
    wrap.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide(){
    slides.forEach(slide =>{
        slide.classList.remove('active');
    })

    slides[activeSlide].classList.add('active');
}