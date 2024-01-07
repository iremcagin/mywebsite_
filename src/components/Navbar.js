import React from "react";
import { Outlet, Link } from "react-router-dom";
import me from "../images/logo.jpg";
import "../styles/navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCode} from "@fortawesome/free-solid-svg-icons"

function Navbar(){
    return <div className='body-left'>
        <div className='body-left-img'>
            <img src={me} alt="user-img"/>
            <div className="effect">
                <FontAwesomeIcon className="effect-icon" icon={faCode} />
            </div>
        </div>
        <div className='body-left-name'>
            <h2>İrem Çağın Yurttürk</h2>
            <p>Computer Engineering Student in ITU</p>
        </div>
        <div className='body-left-nav'>
            <nav>
                <ul>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div className='body-left-copyright'>
            <p>© Copyright ©2022 All rigth reserved | This template is made with ♥ by <a id="github-link" href="https://github.com/iremcagin">İrem Çağın</a></p>
        </div>
    
    </div>;
    
}

export default Navbar;