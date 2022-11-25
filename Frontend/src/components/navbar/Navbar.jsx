import "./navbar.css";
import {
  faPhotoFilm,
  faUser,
  
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contact");
  };
  const handleFeedback = () => {
    navigate("/feedback");
  };
  const handleAbout = () => {
    navigate("/about");
  };

  const handleGallery = () => {
    navigate("/gallery");
  };

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
            <FontAwesomeIcon icon={faUser} />
            <span onClick={handleAbout}>About Us</span>
          </div>
          <div className="navbarItem">
            <FontAwesomeIcon icon={faPhotoFilm} />
            <span onClick={handleGallery}>Gallery</span>
          </div>

          {user ? (
            user.username
          ) : (
            <div div className="navItems" id="navitm">
              <button className="navButton">Register</button>
              <button className="navButton">Login</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
