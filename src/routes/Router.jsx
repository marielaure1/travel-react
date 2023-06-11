import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Destinations from "../pages/Destinations"
import Contact from "../pages/Contact"
import AboutUs from "../pages/AboutUs"

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}