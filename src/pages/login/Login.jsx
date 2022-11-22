import "./login.css"
const Login = () => {
   
  return (
    <div>
        <div className="container">
            <div className="login-from">
             <form action="">
                <label>Username</label>
                <input type="text" />
                <label>Password</label>
                <input type="password" />
                <button className="lg-btn">Login</button>
                <p>Don't have a account</p><button className="R-btn">Register</button>
             </form>
            </div>
            <div className="login-logo">
            <img src="./logo.png" alt="logo"/>
            </div>
        </div>
    </div>
  )
}

export default Login