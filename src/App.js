import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/socialLinks";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

// this is our main class where we include all the components.
function App() {
  return (
   <div>
 <Navbar/>
 <Home/>
<SocialLinks/>
<About/>
<Experience/>
<Contact/>

   </div> 
  );
}

export default App;