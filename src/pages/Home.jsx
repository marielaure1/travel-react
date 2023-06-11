import React, {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import $ from "jquery";
// import {IonIcon} from "react-ion-icon";

export default function Home() {
    const [iconMenuActive, setIconMenuActive] = useState()

    useEffect(() => {


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
            let slideActive = 0
            
            
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
                    if(direction == 1){
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
        
    }, [])
    
    return (
        <>
            <header>
            <div className="slider">
                <div className="slide">
                    <img src="./static/images/tianshu-liu-SBK40fdKbAg-unsplash.jpg" alt="" />
                    <div className="text-slide">
                        <h3>Visit <br />Japan</h3>
                    </div>
                </div>
                <div className="slide">
                    <img src="./static/images/marcin-nowak-iXqTqC-f6jI-unsplash.jpg" alt="" />
                    <div className="text-slide">
                        <h3>Visit <br /> France</h3>
                    </div>
                </div>
                <div className="slide">
                    <img src="./static/images/gloria-villa-GjYw5xyMI3w-unsplash.jpg" alt="" />
                    <div className="text-slide">
                        <h3>Visit <br /> England</h3>
                    </div>
                </div>
                <div className="slide">
                    <img src="./static/images/tianshu-liu-SBK40fdKbAg-unsplash.jpg" alt="" />
                    <div className="text-slide">
                        <h3>Visit <br /> Japan</h3>
                    </div>
                </div>
                <div className="slide">
                    <img src="./static/images/marcin-nowak-iXqTqC-f6jI-unsplash.jpg" alt="" />
                    <div className="text-slide">
                        <h3>Visit <br /> France</h3>
                    </div>
                </div>
                <div className="slide">
                    <img src="./static/images/gloria-villa-GjYw5xyMI3w-unsplash.jpg" alt="" />
                    <div className="text-slide">
                        <h3>Visit <br /> England</h3>
                    </div>
                </div>
            </div>

            <div className="slider-controll">
                <button className="prev" type="button"></button>
                <button className="next" type="button"></button>
            </div>

            <div className="infos">
                <div>
                    <div className="animate-line"></div>
                    <div className="infos-slide active">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo fuga deleniti dignissimos.</p>
                        <Link href="/">Read more </Link>
                    </div>
                    <div className="infos-slide">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, vitae.</p>
                        <Link href="/">Read more </Link>
                    </div>
                    <div className="infos-slide">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error debitis perferendis maiores rerum.</p>
                        <Link href="/">Read more </Link>
                    </div>
                </div>
            </div>
        </header>

        <section className="favoris">
            <h3>Find the best spots for you</h3>
            <h2>Favorite spots</h2>
            <div className="container-slider-favoris">
                <div className="slider-favoris">
                    <div className="slide-favoris">
                        <img src="./static/images/matheo-jbt-3vQXi_i0P4w-unsplash.jpg" alt="" />
                        <div className="text">
                            <h4>Amsterdam</h4>
                            <h3>Lorem, ipsum dolor</h3>
                        </div>
                    </div>
                    <div className="slide-favoris">
                        <img src="./static/images/reiseuhu-EOiycv7y3zg-unsplash.jpg" alt="" />
                        <div className="text">
                            <h4>Berlin</h4>
                            <h3>Lorem, ipsum dolor</h3>
                        </div>
                    </div>
                    <div className="slide-favoris">
                        <img src="./static/images/tokyo-SBK40fdKbAg-unsplash.jpg" alt="" />
                        <div className="text">
                            <h4>Tokyo</h4>
                            <h3>Lorem, ipsum dolor</h3>
                        </div>
                    </div>
                    <div className="slide-favoris">
                        <img src="./static/images/alicia-abeloos-TtA_vuaRczE-unsplash.jpg" alt="" />
                        <div className="text">
                            <h4>Bruxelles</h4>
                            <h3>Lorem, ipsum dolor</h3>
                        </div>
                    </div>
                    <div className="slide-favoris">
                        <img src="./static/images/zach-dyson-3mzn2xpA2YA-unsplash.jpg" alt="" />
                        <div className="text">
                            <h4>Rome</h4>
                            <h3>Lorem, ipsum dolor</h3>
                        </div>
                    </div>
                    <div className="slide-favoris">
                        <img src="./static/images/alexandre-trouve-Via0Hy2rYIc-unsplash.jpg" alt="" />
                        <div className="text">
                            <h4>Séoul</h4>
                            <h3>Lorem, ipsum dolor</h3>
                        </div>
                    </div>
                    <div className="slide-favoris">
                        <img src="./static/images/dustin-bowdige-CY75mVDrHT0-unsplash.jpg" alt="" />
                        <div className="text">
                            <h4>Las Vegas</h4>
                            <h3>Lorem, ipsum dolor</h3>
                        </div>
                    </div>
                    <div className="slide-favoris">
                        <img src="./static/images/sabrina-mazzeo-g-krQzQo9mI-unsplash.jpg" alt="" />
                        <div className="text">
                            <h4>Londres</h4>
                            <h3>Lorem, ipsum dolor</h3>
                        </div>
                    </div>
                    <div className="slide-favoris">
                        <img src="./static/images/alvaro-bernal-d5vpK2XFF5E-unsplash.jpg" alt="" />
                        <div className="text">
                            <h4>Madrid</h4>
                            <h3>Lorem, ipsum dolor</h3>
                        </div>
                    </div>
                    <div className="slide-favoris">
                        <img src="./static/images/alessandra-da-veiga-xaIEq6owYvM-unsplash.jpg" alt="" />
                        <div className="text">
                            <h4>Rio de Janeiro</h4>
                            <h3>Lorem, ipsum dolor</h3>
                        </div>
                    </div>
                </div>
                <div className="slider-favoris-controller">
                    <button type="button" className="prev-favoris">
                        <img src="./static/images/icon-arrow-left.svg" alt="" />
                    </button>
                    <button type="button" className="next-favoris">
                        <img src="./static/images/icon-arrow-right.svg" alt="" />
                    </button>
                </div>
            </div>
        </section>
        <section className="discover">
            <img src="./static/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg" alt="" />
            <div className="gradient"></div>
            <div className="content">
                <h2>Travel and inspire your life</h2>
                <div>
                    <img src="./static/images/icon-play-circle.svg" alt="" />
                    <p>Dolor sit amet.</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed doloribus voluptate corporis libero quod laudantium eum quidem fugit cumque atque ipsum similique, provident velit laborum unde amet molestiae ab earum.</p>
            </div>
            <div className="videos">
                <div className="video">
                    <img src="./static/images/icon-play-circle.svg" alt="" />
                </div>
                <div className="video">
                    <img src="./static/images/icon-play-circle.svg" alt="" />
                </div>
            </div>
        </section>
        </>
    )
}