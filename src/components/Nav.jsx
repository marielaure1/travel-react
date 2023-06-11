import React, {useEffect, useState} from "react"
import {Link, useLocation} from "react-router-dom"

export default function Nav(){
    const [activePage, setActivePage] = useState("")
    const [menuActive, setMenuActive] = useState("")
    const location = useLocation()

    useEffect(() => {
      setActivePage(location.pathname)
    })

    const toggleMenu = () => {
        setMenuActive("active")
    }
    
    return (
        <nav>
            <div>
                <h1>Travel</h1>
                <div className="menu">
                    <div className={"icon-menu mobile " + menuActive}>
                        <div onClick={toggleMenu}></div>
                    </div>
                    <div className={"menu-content " + menuActive}>
                        <ul>
                            <li className={activePage === "/" ? "active" : ""}><Link to="/">Home</Link></li>
                            <li className={activePage === "/destinations" ? "active" : ""}><Link to="/destinations">Destinations</Link></li>
                            <li className={activePage === "/about-us" ? "active" : ""}><Link to="/about-us">About us</Link></li>
                            <li className={activePage === "/contact" ? "active" : ""}><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="tools">
                        <button type="submit"></button>
                        <select className="lang">
                            <option value="en">EN</option>
                            <option value="fr">FR</option>
                            <option value="es">ES</option>
                        </select>
                    </div>    
                </div>

            
            </div>
        </nav>
    )
}