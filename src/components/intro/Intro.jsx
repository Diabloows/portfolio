import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"


export default function Intro() {

    const textRef = useRef();


    useEffect(()=>{
        init(textRef.current, {
            showCursor: false,
            strings: ["French Web Developer", "Looking for Work Study Contract"]
        })
    },[])
    return(
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="images/MC.png" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, I'm</h2>
                    <h1>Matthieu CARRARA</h1>
                    <h3>A Young <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="images/ARROW DOWN.png"/>
                </a>
            </div>

        </div>
    )
}