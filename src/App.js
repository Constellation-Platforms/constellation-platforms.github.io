import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles/tailwind.css';
import CustomNavbar from './components/CustomNavbar';


const App = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Router>
      <div className="app-container">
      <CustomNavbar/>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/clients" element={<Clients />} />
            <Route path="/storefront" element={<Storefront />} /> */}
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <footer class="flex justify-center bg-[#111218]">
          <div class="flex max-w-[960px] flex-1 flex-col">
            <footer class="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div class="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <a class="text-[#9da2b8] text-base font-normal leading-normal min-w-40" href="#">Solutions</a>
                <a class="text-[#9da2b8] text-base font-normal leading-normal min-w-40" href="#">Company</a>
                <a class="text-[#9da2b8] text-base font-normal leading-normal min-w-40" href="#">Contact</a>
              </div>
              <p class="text-[#9da2b8] text-base font-normal leading-normal">Copyright ©{currentYear} | Constellation Platforms, Inc.</p>
            </footer>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;