import { HashRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Quote from './components/Quote';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quote" element={<Quote />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
