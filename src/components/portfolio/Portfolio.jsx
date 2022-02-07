import "./portfolio.scss"

export default function Portfolio() {

     return (
         <div className="background">
             
             <div className="portfolio" id="portfolio">
                 <h1>Portfolio</h1>
                 <div className="container">
                     <div className="item">
                         <a href="https://diabloows.github.io/APA-Association-Protection-Animali-re" target="_blank" rel="noreferrer">
                             <img alt="" src="images/APA.jpg" />
                             <h3>APA Website HTML CSS</h3>
                         </a>
                     </div>
                     <div className="item">
                         <a href="https://diabloows.github.io/V3-Tout-ou-Rien" target="_blank" rel="noreferrer">
                             <img alt="" src="images/DICEGAME.jpg" />
                             <h3>Marvel Dice Game JavaScript</h3>
                         </a>
                     </div>
                     <div className="item">
                         <a>
                             <img alt="" src="images/ARGONAUTES.jpg" href="https://argonautesmc.herokuapp.com" target="_blank" rel="noreferrer"/>
                             <h3>Create/Read PHP</h3>
                         </a>
                     </div>
                     <div className="item">
                             <img alt="" src="images/under-construction.jpg" />
                             <h3>More Coming</h3>
                     </div>
                 </div>


             </div>

         </div>
        
    )
}