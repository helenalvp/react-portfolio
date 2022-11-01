import { Link, NavLink } from "react-router-dom"
import "./index.scss"
import LogoS from "../../assets/images/logo-s.png"
import LogoSubtitle from "../../assets/images/logo_sub.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { useState } from "react"

const linkColor = "#4d4d4e"

const Sidebar = () =>{ 
    const [showNav, setShowNav] = useState(false);
    
    return (
    <div className="nav-bar">
        <Link className="logo" to="/" onClick={()=> setShowNav(false)}>
            <img src={LogoS} alt="logo"/>
            <img clasName="sub-logo" src={LogoSubtitle} alt="logo-subtitle"/>
        </Link>


        <nav className={showNav ? 'mobile-show' : ""}>
            <NavLink exact="true" className="home" activeclassname="active" to="/"  onClick={()=> setShowNav(false)}>
                <FontAwesomeIcon icon={faHome} color={linkColor}/>
            </NavLink>
            <NavLink activeclassname="active" className="about-link" to="/about" onClick={()=> setShowNav(false)} >
                <FontAwesomeIcon icon={faUser} color={linkColor}  />
            </NavLink>
            <NavLink  activeclassname="active" className="contact-link" to="/contact" onClick={()=> setShowNav(false)}>
                <FontAwesomeIcon icon={faEnvelope} color={linkColor} />
            </NavLink>
        </nav>
        <ul>
            {/* NOTE: ADD SOCIAL LINKS WHEN DONE */}
            <li>
                <a target="_blank" rel='noreferrer' href="">    
                    <FontAwesomeIcon icon={faLinkedin} color={linkColor}/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="">    
                    <FontAwesomeIcon icon={faGithub} color={linkColor}/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="">    
                    <FontAwesomeIcon icon={faYoutube} color={linkColor}/>
                </a>
            </li>
        </ul>
    </div>
    
)}


export default Sidebar