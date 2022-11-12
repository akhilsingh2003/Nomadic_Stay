
import "./navbar.css"

function Navbar() {
  return (
    <div className="navbar">
        <div className="navContainer">
            <div className="logo">
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