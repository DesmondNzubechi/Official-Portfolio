import './App.css';
import { Home } from './Pages/HomePage/Home';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { NavDesktop } from './Components/Nav/NavDesktop';

function App() {
  return (
    <div className="App bg-Tp">
    <BrowserRouter>
        <NavDesktop/>
    <Routes>
<Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
