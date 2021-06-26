function Parallax() {
    scrollPos = $(document).scrollTop();
    var opacityVal = (Math.min(scrollPos/300,1));
    var rgbaCol = 'rgba(0, 0, 0, ' + opacityVal + ')'
    $('.navbar').css('background-color', rgbaCol);
};

$(function(){
    $(window).scroll(function() {
        Parallax();
    });
});

const arrowsRight = document.querySelectorAll(".arrowRight");
const arrowsLeft = document.querySelectorAll(".arrowLeft");
const movieLists = document.querySelectorAll(".movie-list");
console.log(outerWidth);

arrowsRight.forEach((arrow,i)=>{

    
    let clickCounter = 0;
    let countLimit = 1;
    let moveLimit = 630;

    arrow.addEventListener("click",()=>{

        

            clickCounter++;

            if (window.outerWidth < 1500) {
                console.log(outerWidth);
                countLimit = 1;
                moveLimit = 1050;
            }
            
            movieLists[i].style.transform = `translateX(${
            movieLists[i].computedStyleMap().get("transform")[0].x.value-moveLimit}px)` 
           
                
            if (clickCounter == countLimit) {
                arrowsRight[i].style.opacity = "0";
                arrowsRight[i].style.pointerEvents = "none";
                arrowsRight[i].style.transition = "0.5s";
                arrowsLeft[i].style.opacity = "0.35";
                arrowsLeft[i].style.transition = "0.5s";
                arrowsLeft[i].style.pointerEvents = "all";     
            }
            
    })  
})

arrowsLeft.forEach((arrow,i)=>{
    let clickCounter = 0;
    arrow.addEventListener("click",()=>{
        clickCounter++;

        if (clickCounter == 1) {

            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value+650
            }px)`;

            arrowsRight[i].style.opacity = "0.35";
            arrowsRight[i].style.pointerEvents = "all";
            arrowsRight[i].style.transition = "1s";
            arrowsLeft[i].style.opacity = "0";
            arrowsLeft[i].style.transition = "0.5s";
            arrowsLeft[i].style.pointerEvents = "none";
            clickCounter = 0;
        }
    })
})