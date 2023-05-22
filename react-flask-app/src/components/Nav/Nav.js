import React, { useState } from "react";
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
    const [navOpen, setNaveOpen] = useState(false);

    return(
        <nav className="navbar">
            <button className="hamburger" onClick={() => setNaveOpen(!navOpen)}>
                {navOpen ? (
                    <MdClose style={{ width: "32px", height: "32px" }} />
                ) : (
                    <FiMenu style={{ width: "32px", height: "32px" }} />
                )}
            </button>
            <ul className={`nav-links ${navOpen ? "open" : ""}`}>
                <li><a href="/home">Home</a></li>
                <li><a href="/features">Favorites</a></li>
                <li><a href="/pricing">Cocktail Creator</a></li>
                <li><a href="/contact">Add Ingredients</a></li>
            </ul>
        </nav>
    );
};

export default Navbar
