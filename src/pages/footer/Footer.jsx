import style from "./Footer.module.scss";
// import {
//   FaFacebookF,
//   FaYoutube,
//   FaLinkedinIn,
//   FaRegCopyright,
// } from "react-icons/fa";
// import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import logo1 from "../../assets/images/logo1.png";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.left}>
          <div className={style.leftHead}>
            <img src={logo1} alt="logo" />
            <p>Edubin</p>
          </div>
          <p>
            Edubin is perfect for online courses and other institutes. It’s a
            complete solution with LMS features and functionalities. Lorem ipsum
            dolor sit amet, consectetu
          </p>
        </div>
        <div className={style.right}>
          <div className={style.company}>
            <p>Company</p>
            <ul>
              <li>About Us</li>
              <li>Latest News</li>
              <li>Term Condition</li>
              <li>Our Courses</li>
              <li>Our Team</li>
            </ul>
          </div>
          <div className={style.info}>
            <p>Information</p>
            <ul>
              <li>Tutorials</li>
              <li>Documentation</li>
              <li>Privacy Policy</li>
              <li>FAQs</li>
              <li>Support</li>
            </ul>
          </div>
          <div className={style.contact}>
            <p className={style.contactHead}>Contact</p>
            <div className={style.address}>
              <p>PO Box 16122 Colins Street West Victoria 8007</p>
              <p>Melbourne Australia</p>
            </div>
            <div className={style.ph}>
              <p>
                Phone : <span>+1 23-4567-8920</span>
              </p>
              <p>
                Email : <span>info@yourmail.com</span>
              </p>
            </div>
            {/* <div className={style.icons}>
              <FaFacebookF />
              <FaXTwitter />
              <FaYoutube />
              <FaWhatsapp />
              <FaLinkedinIn />
            </div> */}
          </div>
        </div>
      </div>
      <div className={style.bottom}>
        <p>
          {/* <span>
            <FaRegCopyright size={15} />
          </span> */}
          Copyright 2024 Edubin| Developed by Mashup technologies
        </p>
      </div>
    </div>
  );
};

export default Footer;
