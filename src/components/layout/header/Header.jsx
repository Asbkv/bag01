import React from "react";
import "./Header.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LuSunMoon } from "react-icons/lu";
import { MdOutlineLightMode } from "react-icons/md";

const Header = () => {
  const navigate = useNavigate();
  const dark = useSelector((s) => s.dark);
  const basket = useSelector((s) => s.basket);
  const dispatch = useDispatch();
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <h1>Bag</h1>
          <div className="header--nav">
            <NavLink to={"/"}>home</NavLink>
            <NavLink to={"/favorite"}>Favorite</NavLink>
            <NavLink to={"/basket"}>Basket</NavLink>
            {basket.length ? <h3>{basket.length}</h3> : null}
            <NavLink to={"/product"}>Product</NavLink>
            <button onClick={() => navigate("/admin")}>Admin</button>
            {dark ? (
              <a
                href="#"
                onClick={() => dispatch({ type: "DARK_BLACK", payload: false })}
              >
                <MdOutlineLightMode />
              </a>
            ) : (
              <a
                href="#"
                onClick={() => dispatch({ type: "DARK_WHITE", payload: false })}
              >
                <LuSunMoon />
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
