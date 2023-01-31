import './nav.css'
import { useState, useEffect } from "react";
import logo from '../assets/logo.png'
export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="nav-container" >
            <nav>
                <ul>
                    <div className="logo-containr">
                        {/* <img src={logo} alt=' logo image' /> */}
                        <h1>ANYBooks</h1>
                    </div>
                    <div className="responsive-div" >
                    </div>
                    <div className={`nav-options ClassForResponsive ${isOpen && "open"}`}>
                        <div className="nav-options-container">

                            <li onClick={() => setIsOpen(!isOpen)}>
                                {/* <a style={{ textDecoration: 'none', color: 'black' }} href="#home-section" address="true"> home</a> */}
                                Home
                            </li>
                            <li onClick={() => setIsOpen(!isOpen)}>
                                {/* <a style={{ textDecoration: 'none', color: 'black' }} href="#about-me-container" address="true"> about</a> */}
                                About Us
                            </li>
                            <li onClick={() => setIsOpen(!isOpen)}>
                                {/* <a href="#skills-section">skills</a> */}
                                FAQ
                            </li>
                            <li onClick={() => setIsOpen(!isOpen)}>
                                services
                            </li>
                            <li onClick={() => setIsOpen(!isOpen)}>
                                {/* <a style={{ textDecoration: 'none', color: 'black' }} href="#home-section" address="true"> home</a> */}
                                Skills
                            </li>
                            <li onClick={() => setIsOpen(!isOpen)}>
                                contact me
                            </li>
                            <li onClick={() => setIsOpen(!isOpen)}>
                                Products
                            </li>
                            {/* <li className="mood" onClick={() => setIsOpen(!isOpen)}>
                                <TfiShine />
                            </li> */}
                        </div>
                    </div>
                    <div className={`nav-toggle ${isOpen && "open"}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="bar"></div>
                    </div>
                </ul>

            </nav>
        </div >

    )
}
