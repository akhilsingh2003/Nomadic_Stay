
import "./navbar.css"

function Navbar() {
  return (
    <div className="navbar">
        <div className="navContainer">
            <div className="logo">
            {/* Nomadic Stay */}
            <img src="./gt.png" alt="logo" className="" />  
            </div>
            <div className="logo-name">
              Nomadic Stay 
            </div>
           <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
           </div> 
 
        </div>
    </div>
  )
}

export default Navbar