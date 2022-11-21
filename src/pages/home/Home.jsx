import "./home.css";
import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
//import "D:/mini_project/Nomadic_Stay/nomadic_stay/node_modules/bootstrap/dist/css/bootstrap.min.css";
const Home = () => {
  return (
  <div>
    <Navbar/>
    <Header/>
    <div className="homeContainer">
    <Featured/>
    <h1 className="homeTitle">Browse by property type</h1>
    <PropertyList/>
    <h1 className="homeTitle">Homes guests love</h1>
    <FeaturedProperties/>
    <MailList/>
    <Footer/>
    </div>
   </div> 
  );
};

export default Home
