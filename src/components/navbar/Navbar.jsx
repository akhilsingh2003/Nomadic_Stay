
import "./navbar.css"
import {
  faBed,
  faCar,
  faPhotoFilm,
  faPlane,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faComment } from "@fortawesome/free-regular-svg-icons";

function Navbar() {
  const navigate = useNavigate();
  const handlelogin = () => {
    navigate("/login");
  };
  const handleContact =() => {
    navigate("/contact");
  }
  const handleFeedback =() => {
    navigate("/feedback");
  }

  const handleGallery =() => {
    navigate("/gallery");
  }
  
  const handleregistration =() => {
    navigate("./registration");
  }
    return (
    <div className="navbar">
        <div className="navContainer">
        <div className="navbarList">
          <div className="navbarItem active">
            <FontAwesomeIcon icon={faUser} />
            <span onClick={handleContact}>Contact Us </span>
          </div>
          <div className="navbarItem active">
          <FontAwesomeIcon icon={faComment} />
            <span onClick={handleFeedback}>Feedback</span>
          </div>

          <div className="navbarItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="navbarItem">
            <FontAwesomeIcon icon={faPhotoFilm} />
            <span onClick={handleGallery}>Gallery</span>
          </div>
          <div className="navbarItem">
                <button className="navButton" onClick={handleregistration}>Register</button>
                <button className="navButton" onClick={handlelogin}>Login</button>
          </div> 
        </div>
          
 
        </div>
    </div>
  )
}

export default Navbar