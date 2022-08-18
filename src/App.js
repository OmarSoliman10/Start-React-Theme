import './App.css';
import React from 'react' ;
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'jquery/dist/jquery.js'
import {Routes , Route} from 'react-router-dom'
import Navbar from './Navbar';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Footer from './Footer';
import Notfound from './Notfound';


function App() {
  return ( <div>
      <Navbar/>
    <div>
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='home' element={<Home/>} />
     <Route path='portfolio' element={<Portfolio/>} />
     <Route path='about' element={<About/>} />
     <Route path='contact' element={<Contact/>} />
     <Route path='*' element={<Notfound/>} />
     </Routes>
    </div>
      <Footer/>
    </div>
  );
}

export default App;
