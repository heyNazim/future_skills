import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.js';
import Carddetail from './pages/Carddetail.js';
import Createcards from './pages/Createcards.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

function App() {
  return (
  <>
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" exact element={<Home />} />
    <Route path="*" exact element={<Home />} />
    <Route path="/card-detail/:id" element={<Carddetail />} />
    <Route path="/create-card" element={<Createcards />} />
  </Routes>
  <Footer/>
  </BrowserRouter>
  
  </>
  );
}

export default App;
