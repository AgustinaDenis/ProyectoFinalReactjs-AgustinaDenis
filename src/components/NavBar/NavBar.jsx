import CartWidget from "./CartWidget"
import logoM from "../../assets/logomagnetic.png";
import { Link } from "react-router-dom"


import "./navbar.css"




const NavBar = () => {
    return(
        
     <div>
        <nav className="navbar navbar-expand-lg bg-body- fondo">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand"> <
            img src={logoM} alt="logo" style={{width:"200px"}}  /> 
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav letrasMenu">
              <Link to="/category/Albums" className="nav-link" aria-current="page">Albums</Link>
              <Link to="/category/Lightsticks"className="nav-link" >Lightsticks</Link>
              <Link to="/category/Peluches" className="nav-link">Peluches</Link>
            </div>
          </div>
          <CartWidget />
        </div>
      </nav>
      </div>

    )

}

export default NavBar