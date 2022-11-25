import "./about.css"
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
const About = () =>{
    return (
     <div className="con1_about">
        <Navbar/>
         <div className="about_text1">ABOUT US</div>
         <hr className="line"/>
        <div className="con2_about">
  
            <img src="./about_img2.jpg" className="img_about" alt="About us"/>
            <div className="about_text2">
            "Nomadic Stay" is an Online hotel booking website to manage room booking in the hotel.
                <br/> This site provides facility to manage all the rooms in the hotel.
                <br/> It makes it easier for the user to book the room of their choice anytime and anywhere.
                <br/> Preventing the hassle of physically going to book the room.
                <br/> The user can choice according to their desirable location and view.
                <br className="heart" />🖤🖤

            </div>

        </div>
        <div className="service_text1">SERVICES</div>
         <hr className="line"/>
        <div className="con2_about">
            
            <img src="./about_img2.jpg" className="img_about" alt="About us"/>
            <div className="about_text2">
            Our website provides various services like:
                    <br/>  A customer can book hotels, apartments,villas,resorts and cabins online from anywhere.
                    <br/>  Our site provides the facility to compare costs of different hotels ,cabins etc and give you the best and affordable option. 
                    <br/>  We also provide you with the locations of the resorts , villas,etc so that you can book according to your desirable view.
                    
                <br className="heart" />🖤🖤

            </div>
        </div>        
       
       </div>
     

     
   
    )
}
export default About