import './App.css';
import { Home } from './Pages/HomePage/Home';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { NavDesktop } from './Components/Nav/NavDesktop';
import { Footer } from './Components/Footer/Footer';
import { ContactMe } from './Components/Contacts/ContactMe';
//import { About } from './Components/About/About';
import { Projects } from './Components/Projects/projects';
import { ContactLink } from './Components/ContactLink/ContactLink';




function App() {
  return (
    <div className="App bg-black overflow-x-hidden ...  ">
    <BrowserRouter>
        <NavDesktop/>
        <ContactLink/>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/Contact' element={<ContactMe/>} />
<Route path='/Project' element={<Projects/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
