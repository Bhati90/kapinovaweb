import './App.css';
import About from './component/About';
import Desktop from './component/Desktop';
import MacBookPro from './component/MacBookPro';
import PageStructure from './component/pageStructure'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
 
  return (
    <div className="App">
 <BrowserRouter>
        <Routes>

          <Route path ='/' element={<PageStructure/>}/>
          <Route path ='/services' element={<MacBookPro/>}/>
          <Route path ='/home' element={<PageStructure/>}/>
          <Route path ='/about' element={<About/>}/>
          <Route path ='/contact' element={<Desktop/>}/>
          

        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
