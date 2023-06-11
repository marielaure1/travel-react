import React from "react"

export default function Contact() {
    
    return (
        <>
           <section class="discover contact">
                <img src="./static/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg" alt=""/>
                <div class="gradient"></div>
                
                <div class="content">
                    <h2>Contact</h2>
                    
                    <form action="">
                        <input type="text" placeholder="Nom"/>
                        <input type="text" placeholder="Prénom"/>
                        <input type="text" placeholder="Téléphone"/>
                        <input type="text" placeholder="Email"/>
                        <input type="text" placeholder="Sujet"/>
                        <textarea cols="30" rows="10" placeholder="Message"></textarea>

                        <div class="submit">
                            <input type="submit" value="Envoyer"/>
                        </div>
                    </form>
                </div>
            
            </section>
        </>
    )
}