
import "./about.css"
const About = () =>{
    return (
       <div className="about_background"> 
        <div className="container8">
                <div>
                <img src="./about.jpg" className="img-about"
                alt="About Us"/>
                
                </div>
                <div className="about-head">ABOUT US </div>
                
            </div>
           <div className="container9">
            <div className="container10">
            <img src="./logo.png" className="logo-about" alt="About us"/>
            <div className="box">
                 "Nomadic Stay" is an Online hotel booking website to manage room booking in the hotel.
                <br/> This site provides customer and management to manage all the rooms in the hotel.
                <br/> It makes it easier for the user to book the room of their choice anytime and anywhere.
                <br/> Preventing the hassle of physically going to book the room<br/>
            </div>
            

            </div>
            <h1 className="services_head">OUR SERVICES</h1>
            <div className="container11">
            
            <div className="container12">
            <img src="./service_about1.jpg" className="services_about" alt="our services"/>
                <div className="box2">
                    Our website provides various services like:
                    <br/> 1. A customer can book hotels, apartments,villas,resorts and cabins online from anywhere.
                    <br/> 2. Our site provides the facility to compare costs of different hotels ,cabins etc and give you the best and affordable option. 
                    <br/> 3. We also provide you with the locations of the resorts , villas,etc so that you can book according to your desirable view.
                    <br/> 4. The site provides details of the location like the streets and location.
                    <br/>5. We provide you with information of the availability of the basic necessities like wifi or air conditioner.

                </div>
            </div>
            </div>
            
            
       
       </div>
     </div>
          
        
        
    )
}
export default About