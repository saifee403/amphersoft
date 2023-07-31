import './App.css';
import Header from './component/common/heading/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './component/home/Home';
import About from './component/about/About';
import ServiceHome from './component/services/ServiceHome';
import Team from './component/team/Team';
import Contact from './component/contact/Contact';
import Footer from './component/common/footer/Footer';


function App() {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<ServiceHome/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
