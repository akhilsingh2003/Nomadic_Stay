import { faFileExport } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/navbar/Navbar";
import "./Feedback.css"

const Feedback =() =>{
   
    return ( 
        <div>  
            <Navbar/>
              <div className="containerr1">
             <div className="containerr">
             <div >
                <img src="./feedback.jpg" className="img-feedback" alt="Feedback "/>
            </div>
            <div className="feedback-form"></div>
            <p className="feed-head">FEEDBACK</p>
            <form action="" className="feed-f"> <br /> <br /> <br /><br /> <br /><br />
                <label className="ff-text1" >Username</label><br /> <br /> 
                <input  className="f-user" type="text" /><br /> <br />
                <label className="ff-text2" >Message</label><br /> <br /> 
                <textarea className="f-type" >Type here</textarea><br /> <br />
                
                <input className="submit-btn" type="submit" value="Give Feedback" /> <br /> <br /> <br />
                
             </form>
        </div>
        </div>
        </div>
       

    )
}
export default Feedback
