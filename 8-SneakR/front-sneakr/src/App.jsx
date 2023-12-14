import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import RegisterForm from './Components/RegisterForm';
import LogInForm from './Components/Login/LogInForm';
import Sneakers from './Components/Sneakers';
import CartWish from './Components/CartWish';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Sneakers />} />
        <Route path="/Cart" element={<CartWish />} />
        <Route path="/Login" element={<LogInForm />} />
        <Route path="/Register" element={<RegisterForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
