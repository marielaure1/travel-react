import $ from "jquery";

$(".icon-menu div").click(() => {
// Slide Header 

const slider = document.querySelector('.slider')
const slide = document.querySelectorAll('.slide')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')

let direction; // 1 => slide précédent , -1 => slide suivant
let nbSlide = 6  
let translate = 100/nbSlide  //pourcentage de chaque slide pour le transform translate
let time = 10000
var intervalId  // Id de l'intervalle en cours


function activeClass(){

    slide.forEach(element => {
        element.classList.remove("active")
    });

    let first = slider.firstElementChild  //1er élément du slider
    first.classList.add("active")
}

function carousel() {

    // Si un interval existe déjà on le supprime
    if (intervalId) {
        clearInterval(intervalId)
    }

    // Animation slider
    intervalId = setInterval(() => {
        // position par rapport a au slide selon si c'est la direction
        if(direction === 1){
            slider.style.transform = `translate(${translate}%)`

        } else{
            slider.style.transform = `translate(-${translate}%)`
        }
    }, time)
}

carousel()


next.addEventListener('click', function() {
    direction = -1
    slider.style.transform = `translate(-${translate}%)`

    carousel()
});

prev.addEventListener('click', function() {
    direction = 1; 
    slider.style.transform = `translate(${translate}%)`

    carousel()

});

//Si la transition du slider est fini 
slider.addEventListener('transitionend', function() {

    // On verifie la direction pour savoir si on ajoute le dernier slide en premiere position ou la premiere slide en derniere position
    if (direction === 1) {
        slider.prepend(slider.lastElementChild);
    } else {
        slider.appendChild(slider.firstElementChild);
    }
    // La direction redevient vers la droite
    direction = -1
    slider.style.transition = 'none';
    slider.style.transform = 'translate(0)';

    activeClass()
    
    setTimeout(() => {
        slider.style.transition = 'all 0.5s';
    })

}, false);

let gap = 10 * 2
let containerSliderWidth = $(".container-slider-favoris").width()

// Slide Favoris
let nbSlideToShow 
if (window.matchMedia("(max-width: 400px)").matches) {
    nbSlideToShow = 1
    gap = 50
} else if (window.matchMedia("(max-width: 768px)").matches) {
    nbSlideToShow = 2
} else {
    nbSlideToShow = 4
}



$(".slide-favoris").each((item, i) => {
    $(i).css("width", `${(containerSliderWidth / nbSlideToShow) - gap}px`)
})

window.addEventListener("resize", () => {
    if (window.matchMedia("(max-width: 600px)").matches) {
        nbSlideToShow = 1
        gap = 50
    } else if (window.matchMedia("(max-width: 1200px)").matches) {
        nbSlideToShow = 2
    } else {
        nbSlideToShow = 4
    }
    
    containerSliderWidth = $(".container-slider-favoris").width()

    $(".slide-favoris").each((item, i) => {
        $(i).css("width", `${(containerSliderWidth / nbSlideToShow) - gap}px`)
    })
})

let sliderWidth = $(".slider-favoris").width()
let scrollLeftSlide = 0

arrowFavoris()

$(".prev-favoris").click(()=>{
    if(scrollLeftSlide > 0){
        scrollLeftSlide -= containerSliderWidth
    }
    $(".slider-favoris").css("transform", `translate(-${scrollLeftSlide}px)`)
    arrowFavoris()
})

$(".next-favoris").click(( )=>{
    if(scrollLeftSlide < (sliderWidth - containerSliderWidth)){
        scrollLeftSlide += containerSliderWidth
    }
    $(".slider-favoris").css("transform", `translate(-${scrollLeftSlide}px)`)
    arrowFavoris()
})

function arrowFavoris(){
    if(scrollLeftSlide >= (sliderWidth - containerSliderWidth)){
        $(".next-favoris").css("opacity", "0.5")
    } else {
        $(".next-favoris").css("opacity", "1")
    }
    
    if(scrollLeftSlide <= 0){
        $(".prev-favoris").css("opacity", "0.5")
    } else {
        $(".prev-favoris").css("opacity", "1")
    }
} 

// INFOS 
$(".infos-slide").each((e, item)=>{
    $(item).mouseenter(()=>{
        $(".infos-slide").each((e, item)=>{
            $(item).removeClass("active")
        })

        $(item).addClass("active")
        let position = $(item).position()
        let width = $(item).width() + 40
        $(".animate-line").css({left: position.left, width: width})
    })
})

})
