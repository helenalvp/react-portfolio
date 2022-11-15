import { useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss"

const Testimonials = () => {
    const [letterClass, setLetterClass] =useState('text-animate')

    return (
        <>
        <div className="container testimonials-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={["T","e","s","t","i","m","o","n","i","a","l","s"]} idx={15}/>
                </h1>
                <p>I'm an ambitious front-end developer looking for opportunities to work with the latest
                            technologies on challenging and diverse projects.
                        </p>
                        <p>
                            I'm naturally curious, always learning, and perpetually working on improving my craft one design problem at a time.
                        </p>
                        <p>add other paragraph here</p>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Testimonials;