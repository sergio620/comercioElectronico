import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import React from "react";

function Nav({ input, handleChange, handleKeyDown }) {
  return (
    <nav>
      <div className="nav-container">
        <input
          value={input}
          name="title"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          type="text"
          className="search-input"
          placeholder="Introduce tu busqueda"
        />
      </div>
      <div className="profile-container">
        <a href=".">
          <FiHeart className="nav-icons" />
        </a>
        <a href=".">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href=".">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
