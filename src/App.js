import './App.css';
import About from './component/About';
import Desktop from './component/Desktop';
import MacBookPro from './component/MacBookPro';
import PageStructure from './component/pageStructure'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Term from './component/Term';
import Team from './component/Team';
import PrivacyPolicy from './component/PrivacyPolicy';

function App() {
 
  return (
    <div className="App">
 <BrowserRouter>
        <Routes>
        <Route path ='/term' element={<Term/>}/>
        <Route path='/team' element={<Team/>}/>
          <Route path ='/' element={<PageStructure/>}/>
  <Route path ='/privacy' element={<PrivacyPolicy/>}/>
          <Route path ='/service' element={<MacBookPro/>}/>
          <Route path ='/home' element={<PageStructure/>}/>
          <Route path ='/about' element={<About/>}/>
          <Route path ='/contact' element={<Desktop/>}/>
          

        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
