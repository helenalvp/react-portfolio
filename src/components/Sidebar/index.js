import { Link, NavLink } from "react-router-dom"
import "./index.scss"
import LogoS from "../../assets/images/logo-s.png"
import LogoSubtitle from "../../assets/images/logo_sub.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons"

const linkColor = "#4d4d4e"

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoS} alt="logo"/>
            <img clasName="sub-logo" src={LogoSubtitle} alt="logo-subtitle"/>
        </Link>
        <nav>
            <NavLink exact="true" activateclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color={linkColor}/>
            </NavLink>
            <NavLink exact="true" activateclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color={linkColor}/>
            </NavLink>
            <NavLink exact="true" activateclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color={linkColor}/>
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
    
)


export default Sidebar