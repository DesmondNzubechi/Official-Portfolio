import './App.css';
import { Home } from './Pages/HomePage/Home';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { NavDesktop } from './Components/Nav/NavDesktop';
import { Footer } from './Components/Footer/Footer';
import { ContactMe } from './Components/Contacts/ContactMe';
import { About } from './Components/About/About';
import { Projects } from './Components/Projects/projects';





function App() {
  return (
    <div className="App bg-black overflow-x-hidden ... px-[10px] ">
    <BrowserRouter>
        <NavDesktop/>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/Contact' element={<ContactMe/>} />
<Route path='/About' element={<About/>} />
<Route path='/Project' element={<Projects/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
