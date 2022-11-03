import { Route, Routes } from 'react-router-dom'; 

import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}

export default App;
