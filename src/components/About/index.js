import { faAngular, faCss3, faGitAlt, faGithub, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect,useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss"

const About = () =>{
    const [letterClass, setLetterClass ] = useState('text-animate')

    //   useEffect(()=>{
    //     return setTimeout(()=>{
    //         setLetterClass('text-animate-hover')
    //     }, 3000)
    //     },[] )

    return (
        <>
        <div className='container about-page'>
                    <div className='text-zone'>
                        <h1>
                            <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t',' ','M','e']} idx={15}/>
                        </h1>
                        <p>I'm an ambitious front-end developer looking for opportunities to work with the latest
                            technologies on challenging and diverse projects.
                        </p>
                        <p>
                            I'm naturally curious, always learning, and perpetually working on improving my craft one design problem at a time.
                        </p>
                        <p>add other paragraph here</p>
                    </div>

                    <div className="stage-cube-cont">
                        <div className="cubespinner">
                            <div className="face1">
                                <FontAwesomeIcon icon={faReact} color="#61DBFB"/>
                            </div>
                            <div className="face2">
                                <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                            </div>
                            <div className="face3">
                                <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                            </div>
                            <div className="face4">
                                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                            </div>
                            <div className="face5">
                                <FontAwesomeIcon icon={faGithub} color="#000000"/>
                            </div>
                            <div className="face6">
                                <FontAwesomeIcon icon={faGitAlt} color="#ec4d28"/>
                            </div>
                        </div>
                    </div>
                </div>

        <Loader type="pacman" />
        </>
       
    )
}
export default About;