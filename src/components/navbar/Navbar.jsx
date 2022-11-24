
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
  const handleAbout =() => {
    navigate("/about");
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

          <div className="navbarItem active">
          <FontAwesomeIcon icon="fa-sharp fa-solid fa-circle-question" /> 
          <span onClick={handleAbout}>About Us</span>
          </div>
          <div className="navbarItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
         
          <div className="navbarItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
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