
import "./navbar.css"
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const handlelogin = () => {
    navigate("/login");
  };
  const handleContact =() => {
    navigate("/contact");
  }
  const handleGallery =() => {
    navigate("/gallery");
  }
    return (
    <div className="navbar">
        <div className="navContainer">
        <div className="navbarList">
          <div className="navbarItem active">
            <FontAwesomeIcon icon={faUser} />
            <span onClick={handleContact}>Contact Us </span>
          </div>
          <div className="navbarItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="navbarItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="navbarItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="navbarItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span onClick={handleGallery}>Gallery</span>
          </div>
          <div className="navbarItem">
                <button className="navButton" >Register</button>
                <button className="navButton" onClick={handlelogin}>Login</button>
          </div> 
        </div>
          
 
        </div>
    </div>
  )
}

export default Navbar