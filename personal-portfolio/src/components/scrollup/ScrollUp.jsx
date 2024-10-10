import React from 'react';
import './scrollup.css';

// Wait for the DOM to load before adding the scroll event listener
document.addEventListener("DOMContentLoaded", function () {
    const handleScroll = () => {
        const scrollUp = document.querySelector(".scrollup");
        if (scrollUp) {
            if (window.scrollY >= 560) scrollUp.classList.add("show-scroll");
            else scrollUp.classList.remove("show-scroll");
        }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);
    }
);

const ScrollUp = () => {
    return (
        <a href="#top" className="scrollup">
        <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    );
};

export default ScrollUp;
  
