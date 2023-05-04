import './App.css';
import { Home } from './Pages/HomePage/Home';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { NavDesktop } from './Components/Nav/NavDesktop';
import { Footer } from './Components/Footer/Footer';
function App() {
  return (
    <div className="App bg-black px-[10px] ">
    <BrowserRouter>
        <NavDesktop/>
    <Routes>
<Route path='/' element={<Home/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
