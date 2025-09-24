import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
          <p>SHOPZY</p>
        </div>
      </div>

      <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
        <li
          onClick={() => {
            setMenu("shop");
            setIsMenuOpen(false);
          }}
        >
          {" "}
          <Link to="/" style={{ textDecoration: "none" }}>
            Shop
          </Link>{" "}
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
            setIsMenuOpen(false);
          }}
        >
          {" "}
          <Link to="/mens" style={{ textDecoration: "none" }}>
            Men
          </Link>{" "}
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
            setIsMenuOpen(false);
          }}
        >
          {" "}
          <Link to="/womens" style={{ textDecoration: "none" }}>
            Women
          </Link>{" "}
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
            setIsMenuOpen(false);
          }}
        >
          {" "}
          <Link to="/kids" style={{ textDecoration: "none" }}>
            Kids
          </Link>{" "}
          {menu === "kids" ? <hr /> : <></>}
        </li>
        {/* mobile */}
        <li
          className="nav-login-mobile-item"
          onClick={() => setIsMenuOpen(false)}
        >
          <Link to="/login" style={{ textDecoration: "none" }}>
            {" "}
            <button>Login</button>{" "}
          </Link>
        </li>
      </ul>

      <div className="nav-login-cart">
        {/* desktop*/}
        <Link
          to="/login"
          style={{ textDecoration: "none" }}
          className="nav-login-desktop"
        >
          {" "}
          <button>Login</button>{" "}
        </Link>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          {" "}
          <img
            className="cart-icon-size"
            src={cart_icon}
            alt="Cart Icon"
          />{" "}
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};
