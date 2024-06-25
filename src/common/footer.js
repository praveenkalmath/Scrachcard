import React from "react";
import enteslog from "../assests/images/enteslog.png";
import { FaFacebook } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { FaMobileRetro } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className="mainfooter">
      <div className="top-section">
        <img src={enteslog} className="logo" alt="Logo" />
        <div className="social-icons">
          <FaFacebook className="icon" />
          <FaThreads className="icon" />
          <FaInstagram className="icon" />
          <FaYoutube className="icon" />
          <RiLinkedinLine className="icon" />
        </div>
      </div>
      <div className="bottom-section">
        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <p className="footertext">
              Dudullu OSB, 1. Cadde, No:23 34776 Ümraniye - İstanbul
            </p>
            <li className="footertext">
              <IoCall className="iconcolor" /> +90 (216) 313 0110
            </li>
            <li className="footertext">
              <FaMobileRetro className="iconcolor" />
              +90 (216) 314 1615
            </li>
            <li className="footertext">
              <MdEmail className="iconcolor " />
              contact@entes.eu
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Links</h3>
          <ul>
            <li className="footertext">- About Us</li>
            <li className="footertext">- Products</li>
            <li className="footertext">- Solutions</li>
            <li className="footertext">- Support and Documents</li>
            <li className="footertext">- Contact</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Categories</h3>
          <ul>
            <li className="footertext">- Power Quality and Energy </li>
            <li className="footertext">- Electrical Measurement</li>
            <li className="footertext">- Power Factor Correction</li>
            <li className="footertext">
              - Energy Management Hardware and Software
            </li>
            <li className="footertext">- Protection & Control</li>
            <li className="footertext">- Current Transformers</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Blog Post</h3>
          <ul>
            <li className="footertext">- Underwater Data Centers</li>
            <li className="footertext">- Shortcut to Quick Installation</li>
            <li className="footertext">
              - Manufacturing 4.0 - A Bug Fix for Economy
            </li>
            <li className="footertext">
              - ENTES SSRC-04P Liquid Level Controller
            </li>
          </ul>
        </div>
      </div>
      <div className="subscribe-text">
        <span className="black-text">SUBSCRIBE</span>,{" "}
        <span className="grey-text">OUR E-BULLETIN FOR ALL NEWS</span>
      </div>
      <div className="search-section">
      <div className="input-group">
          <input type="text" placeholder="E-mail" className="search-input" />
          <input type="text" placeholder="REGISTER " className="register-input black-text" />
        </div>
      </div>
      <hr className="divider" />
      <div className="footer-bottom">
        <span className="left-text">Copyright 2024 entes.com.tr - All Rights Reserved.</span>
        <span className="right-text"> marsus</span>
      </div>
    </div>
  );
}
