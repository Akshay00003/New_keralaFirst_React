import React, { useState } from "react";
import style from "./Navbar.module.scss";
import { IoIosArrowDown, IoMdCart } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import logo from "../../assets/images/logo.png";
import { TiThMenu } from "react-icons/ti";
const Navbar = () => {
  const [menu,setMenu]=useState(true)
  return (
    <div className={style.container}>
      <div className={style.left}>
        <div className={style.logo}>
          <img src={logo} alt="logo" />
        </div>
        {menu && <div className={style.links}>
          <ul>
            <li>
              <a href="">Home</a>
              <IoIosArrowDown className={style.icon} />
            </li>
            <li>
              <a href="">Courses</a>
              <IoIosArrowDown className={style.icon} />
            </li>
            <li>
              <a href="">Pages</a>
              <IoIosArrowDown className={style.icon} />
            </li>
            <li>
              <a href="">Blog</a>
              <IoIosArrowDown className={style.icon} />
            </li>
            <li>
              <a href="">Shop</a>
              <IoIosArrowDown className={style.icon} />
            </li>
            <li>
              <a href="">Contact</a>
              <IoIosArrowDown className={style.icon} />
            </li>
          </ul>
        </div>}
        
      </div>
      <div className={style.right}>
        <IoSearch size={25} />
        <IoMdCart size={25} />
        <TiThMenu size={25} onClick={()=>setMenu(!menu)} className={style.menu} />
      </div>
    </div>
  );
};

export default Navbar;
