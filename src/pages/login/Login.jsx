import "./login.css"
const Login = () => {
   
  return (
    <div className="container1">
        <div className="container">
            
            <div className="log-logo">
            <img src="./logo.png" className="img-logo" alt="logo"/>
            </div>

            <div className="login-f"> 
            <h3 className="h"> Nomadic Stay</h3>
             <form action="" className="login-f"> 
             <br /> <br /> 
                <label className="form text1" >Username</label><br /> <br /> 
                <input  className="form" type="text" /><br /> <br />
                <label className="form text1" >Password</label><br /> <br />
                <input className="form"  type="password" /><br /> <br />
                <button className="lg-btn form">Login</button> <br /> <br /> <br />
                <p className="form text" >Don't have a account</p> <br /> 
                <button className="R-btn form"  >Register</button>
             </form>
            </div>

        </div>
    </div>
  )
}

export default Login