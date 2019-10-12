// class Slider {
// 	constructor() {

// 	} // fin constructor
	
// } // fin slider

// let MonSlider = new Slider();


function initDiaporama(){
    slideIndex = 0;
    slides=document.getElementsByClassName("contenuImages");
    slides[slideIndex].style.opacity=1;

    legendeText=document.querySelector(".legende .legendeText");
    legendeText.innerText=slides[slideIndex].querySelector(".legendeText").innerText;

    //disable nextPrevBtn if slide count is one
    if(slides.length<2){
        let nextPrevBtns=document.querySelector(".leftArrow,.rightArrow");
        nextPrevBtns.style.display="none";
        for (i = 0; i < nextPrevBtn.length; i++) {
            nextPrevBtn[i].style.display="none";
        }
    }

   
}
initDiaporama();



function plusSlides(n) {
    moveSlide(slideIndex+n);
}
function moveSlide(n){

    const moveSlideAnimClass={
          forCurrent:"",
          forNext:""
    };

    if(n>slideIndex) {
        if(n >= slides.length){n=0;}
        moveSlideAnimClass.forCurrent="moveLeftCurrentSlide";
        moveSlideAnimClass.forNext="moveLeftNextSlide";
        slideTextAnimClass="slideTextFromTop";
    }else if(n<slideIndex){
        if(n<0){n=slides.length-1;}
        moveSlideAnimClass.forCurrent="moveRightCurrentSlide";
        moveSlideAnimClass.forNext="moveRightPrevSlide";
        slideTextAnimClass="slideTextFromBottom";
    }

    if(n!=slideIndex){
        next = slides[n];
        current=slides[slideIndex];
        for (i = 0; i < slides.length; i++) {
            slides[i].className = "contenuImages";
            slides[i].style.opacity=0;
        
        }
        current.classList.add(moveSlideAnimClass.forCurrent);
        next.classList.add(moveSlideAnimClass.forNext);
        
        slideIndex=n;
        legendeText.style.display="none";
        legendeText.className="legendeText "+slideTextAnimClass;
        legendeText.innerText=slides[n].querySelector(".legendeText").innerText;
        legendeText.style.display="block";
    }

}

function setTimer(){
    timer=setInterval(function () {
        plusSlides(1) ;
    },5000);
}
setTimer();
function playPauseSlides() {
    const playPauseBtn=document.getElementById("playPause");
    if(timer==null){
        setTimer();
        playPauseBtn.style.backgroundPositionY="0px"
    }else{
        clearInterval(timer);
        timer=null;
        playPauseBtn.style.backgroundPositionY="-33px"
    }
}
