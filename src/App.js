
import './App.css';
import Navbar from "./Components/Navbar";
import { Route, Routes} from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Offering from './routes/Offering';
import Login from './routes/Signup';
import { Register } from './Components/Register';



export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element ={<Home/>} />
        <Route path = "/about" element ={<About/>} />
        <Route path = "/contact" element ={<Contact/>} />
        <Route path = "/offerings" element ={<Offering/>} />
        <Route path = "/signup" element ={<Login/>} />
        <Route path = "/signup" element ={<Register/>} />
      </Routes>
    </div>    
  );
}
