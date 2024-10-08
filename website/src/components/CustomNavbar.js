// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const CustomNavbar = () => {
    return (
        <div className="layout-container flex h-full grow flex-col bg-[#111218]">
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#292b38] px-10 py-3">
            <div className="flex items-center gap-4 text-white">
              <div className="size-15">
                {/* <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
                    fill="currentColor"
                  ></path>
                </svg> */}
                <img src="/images/cLogo.png" width="48px" height="48px"/>
              </div>
              <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                Constellation
              </h2>
            </div>
            <div className="flex flex-1 justify-end gap-8">
              <div className="flex items-center gap-9">
                <a className="text-white text-sm font-medium leading-normal" href="#">
                  Solutions
                </a>
                <a className="text-white text-sm font-medium leading-normal" href="#">
                  Company
                </a>
              </div>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f6edd5] text-black text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Contact</span>
              </button>
            </div>
          </header>
        </div>
      );
};

export default CustomNavbar;
