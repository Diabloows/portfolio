import { useState } from "react";
import "./skills.scss"

export default function Skills() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        {
            id:"1",
            img:"images/HTML LOGO.png"
        },
        {
            id: "2",
            img: "images/CSS LOGO.png"
        },
        {
            id: "3",
            img: "images/SASS LOGO.png"
        },
        {
            id: "4",
            img: "images/JAVASCRIPT LOGO.png"
        },
        {
            id: "5",
            img: "images/PHP LOGO.png"
        },
        {
            id: "6",
            img: "images/REACT LOGO.png"
        },


    ];

    const handleClick =(way)=>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
        setCurrentSlide(currentSlide<data.length-1 ? currentSlide +1: 0 )
    }
    return(
        <div className="skills" id="skills">
                <h1>Skills</h1>
            <div className="slider" style={{transform:`translateX(-${currentSlide *100}vw)`}}>
                {data.map((d) => (
                <div className="container">
                    <div className="item">
                        <img src={d.img}></img>
                    </div>
                </div>
                ))}
            </div>
            <img src="images/white-arrow.png" className="arrow left" onClick={()=>handleClick("left")}/>
            <img src="images/white-arrow.png" className="arrow right" onClick={() => handleClick("right")}/>
        </div>
    );
}