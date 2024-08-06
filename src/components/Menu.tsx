import { useState } from "react";
import logo from "../assets/logo-witcherry.svg";
import arrow from "../assets/chevron.svg";
import bebidas from "../assets/menu/bebidas-witcherry.svg";
import desayuno from "../assets/menu/desayuno-witcherry.svg";
import postres from "../assets/menu/postres-witcherry.svg";
import promos from "../assets/menu/promos-witcherry.svg";
import waffles from "../assets/menu/waffles-witcherry.svg";
import "./menu.css";
import { NavLink } from "react-router-dom";

export const Menu = () => {
  const [toggle, setToggle] = useState(false);

  const handleClickActive = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <header className="header">
        <button
          className={`button-nav ${!toggle ? "btn-active-border" : ""}`}
          onClick={handleClickActive}
        >
          <div className="cont-buton">
            <img src={logo} className="logo" />
            <img
              src={arrow}
              alt="arrow"
              style={{ marginTop: "10px" }}
              className={`arrow ${toggle ? "activo" : ""}`}
            />
          </div>
        </button>
        <nav className={`nav ${toggle ? "current" : ""}`}>
          <ul className="list-items">
            <NavLink to={"/witcherry/waffles"}>
              <li className="items">
                <img src={waffles} alt="waffles" />
              </li>
            </NavLink>
            <NavLink to={"/witcherry/desayunos"}>
              <li className="items">
                <img src={desayuno} alt="desayuno" />
              </li>
            </NavLink>
            <NavLink to={"/witcherry/bebidas"}>
              <li className="items">
                <img src={bebidas} alt="bebidas" />
              </li>
            </NavLink>
            <NavLink to={"/witcherry/postres"}>
              <li className="items">
                <img src={postres} alt="postres" />
              </li>
            </NavLink>
            <NavLink to={"/witcherry/promos"}>
              <li className="items">
                <img src={promos} alt="promos" />
              </li>
            </NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
};
