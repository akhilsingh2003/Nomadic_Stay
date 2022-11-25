import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Login from "./pages/login/Login";
import Contact from "./pages/contact/Contact";
import Feedback from "./pages/feedback/Feedback";
import About from"./pages/about/About";
import Gallery from "./pages/gallery/Gallery";
import Registration from "./pages/registration/Registration";
import Invoice from "./pages/invoice/Invoice";


function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/feedback" element={<Feedback/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
        <Route path="/invoice" element={<Invoice/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
