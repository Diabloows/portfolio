import "./topbar.scss"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return(
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">CARRARA.M</a>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="ligne1"></span>
                        <span className="ligne2"></span>
                        <span className="ligne3"></span>
                    </div>

                </div>

            </div>

        </div>
    )
}