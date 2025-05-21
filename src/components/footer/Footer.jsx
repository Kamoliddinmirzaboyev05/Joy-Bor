import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaPhoneAlt, FaTelegram } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="logoSide">
          <div className="logo">
            <div className="logoImg">
              <img src="/public/logo.png" alt="" />
            </div>
            <h2>Joy Bor</h2>
          </div>
          <div className="logoText">
            <p>
              Joy Bor - Talabalar Turar joyini topish, band qilish va
              boshqarishni avtomatlashtirishga qaratilgan inovatsion platforma
            </p>
          </div>
        </div>
        <div className="footerLinks">
          <div className="col">
            <h4>Tezkor havolalar</h4>
            <Link>Bosh Sahifa</Link>
            <Link>Yotoqxonalar</Link>
            <Link>Arizalarim</Link>
            <Link>Platforma haqida</Link>
            <Link>Bog'lanish</Link>
          </div>
          <div className="col">
            <h4>Kontakt</h4>
            <Link>
              <FaPhoneAlt />
              <span>+998 99 999 99 99</span>
            </Link>
            <Link>
              <IoMail />
              <span>kamoliddinmirzaboyev05@gmail.com </span>
            </Link>
            <Link>
              <FaPhoneAlt />
              <span>+998 99 999 99 99</span>
            </Link>
          </div>
          <div className="col">
            <h4>Ijtimoiy tarmoq</h4>
            <Link>
              <FaInstagram />
              Instagram
            </Link>
            <Link>
              <FaTelegram />
              Telegram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
