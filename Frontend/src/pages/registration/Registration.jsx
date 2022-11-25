import "./registration.css"

function Registration() {
  return (
    <div className="container11">
        <div className="container12">
            <div className="reg-logo">
            <img src="./logo.png" className="img-re-logo" alt="logo"/>
            </div>

            <div className="login-f"> 
            <h3 className="recon"> Nomadic Stay</h3>
             <form action="" className="login-r"> 
             <br /> <br /> 
                <label className="reg reg1" >Username</label><br />  
                <input  className="reg" type="text" /><br /> 
                <label className="reg reg1">E-mail</label> <br />
                <input type="email" className="reg" /><br />
                <label className="reg reg1" >Password</label><br /> 
                <input className="reg"  type="password" /><br /> 
                <button className="reg-btn">Submit</button>
                
             </form>
            </div>

        </div>
    </div>
  )
}

export default Registration
