import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Nav from './components/Navbar/Nav';
import ContactUs from './pages/ContactUs';
import About from './pages/About';
import Career from './pages/Career';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import TermandCondition from './pages/Term&Condition';
import Preference from './pages/Preference';
import Service from './pages/Service';
import DevServices from './pages/DevServices';
import DetailBussinesConsulting from './pages/DetailBussinesConsulting';
import DetailBPON from './pages/DetailBPON';
import DetailGlobalService from './pages/DetailGlobalService';
import DetailCloud from './pages/DetailCloud';
import DetailBPO from './pages/DetailBPO';
import Blog from './pages/Blog';
import BlogDeatail from './pages/BlogDeatail';

function App() {
  return (
   
      <div className="App">
      <Nav/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/career' element={<Career/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/privacy' element={<Privacy/>}/>
       <Route path='/term&condition' element={<TermandCondition/>}/>
      <Route path='/preference' element={<Preference/>}/>
      <Route path='/devservice' element={<DevServices/>}/>
      <Route path='/bussinessconsulting' element={<DetailBussinesConsulting/>}/>
      <Route path='/bpononvoice' element={<DetailBPON/>}/>
      <Route path='/globalservice' element={<DetailGlobalService/>}/>
      <Route path='/cloudservice' element={<DetailCloud/>}/>
      <Route path='/BPOvoice' element={<DetailBPO/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path="/blog/:id" element={<BlogDeatail/>} />
    </Routes>
    <Footer/>
     
    </div>
    

  );
}

export default App;
