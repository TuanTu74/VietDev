import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Contact from './component/Contact';
import Teacher from './component/Teacher';
import Course from './component/Course';
import {
  Routes,
  Route,
} from "react-router-dom";
import Price from './component/Price';
function App() {
  return (
    <div className="App container">
      <Navbar/>
      {/* <Home/> */}
      {/* <Course/> */}
      {/* <Teacher/> */}
      {/* <Price/> */}
      {/* <Contact/> */}  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Course/>}/>
        <Route path="/teacher" element={<Teacher/>}/>
        <Route path="/price" element={<Price/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
