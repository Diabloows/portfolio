
import Particles from "react-tsparticles"
import particlesConfig from "./particle-config"
import "./portfolio.scss"

export default function Portfolio() {

        <Particles params={particlesConfig}></Particles>


     return (
         <div className="background">
             <Particles params={particlesConfig}></Particles>
             <div className="portfolio" id="portfolio">
                 <h1>Portfolio</h1>
                 <div className="container">
                     <div className="item">
                         <a href="https://diabloows.github.io/APA-Association-Protection-Animali-re" target="_blank">
                             <img alt="" src="images/APA.jpg" />
                             <h3>APA Website HTML CSS</h3>
                         </a>
                     </div>
                     <div className="item">
                         <a href="https://diabloows.github.io/V3-Tout-ou-Rien" target="_blank">
                             <img alt="" src="images/DICEGAME.jpg" />
                             <h3>Marvel Dice Game JavaScript</h3>
                         </a>
                     </div>
                     <div className="item">
                         <a href="https://argonautesmc.herokuapp.com" target="_blank">
                             <img alt="" src="images/ARGONAUTES.jpg" />
                             <h3>Create/Read PHP</h3>
                         </a>
                     </div>
                     <div className="item">
                         <a>
                             <img alt="" src="images/under-construction.jpg" />
                             <h3>More Coming </h3>
                         </a>
                     </div>
                 </div>


             </div>

         </div>
        
    )
}