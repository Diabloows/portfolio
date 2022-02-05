import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"


export default function Intro() {

    const textRef = useRef();


    useEffect(()=>{
        init(textRef.current, {
            showCursor: false,
            strings: ["French Web Developer", "26 Years Old Man"]
        })
    },[])
    return(
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img alt="" src="images/MC.png" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, I'm</h2>
                    <h1>Matthieu CARRARA</h1>
                    <h3>A Young <span ref={textRef}></span></h3>
                    <h4>Looking for a Work Study Contract. </h4>
                    <h5>2020 was a big year. I decided to change my life, my work ! So i started to learn Web Dev.</h5>
                    <h5>Today I have the opportunity to integrate the Wild Code School (3rd year).</h5>
                    <h5>That's why I'm actively looking for a work study contract in Les Landes (40).</h5>
                </div>
                <a href="#portfolio">
                    <img alt="" src="images/ARROW DOWN.png"/>
                </a>
            </div>

        </div>
    )
}