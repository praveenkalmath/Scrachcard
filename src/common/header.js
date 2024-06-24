import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { SlGlobeAlt } from "react-icons/sl";
import enteslog from "../enteslog.png";

function Header() {
  return (
    <header>
      <div className="top-header">
        <div className="top-left">
          <div className="languages">
            <div className="icons">
              <SlGlobeAlt />
            </div>
            <select className="language" id="languages">
              <option value="language">Language</option>
              <option value="deutsch">Deutsch</option>
              <option value="turkish">Turkish</option>
            </select>
          </div>
          <div className="number">
            <div className="icons">
              <FaPhone />
            </div>
            +90(216)313 0110
          </div>
          <div className="contact">
            <div className="icons">
              <CiMail />
            </div>
            contact@entes.eu
          </div>
        </div>
        <div className="top-right">
          <ul>
            <li>About Us</li>
            <li>Catalogue</li>
            <li>Technical Support</li>
            <li>Enermedic</li>
          </ul>
          <a href="#" title="Search" className="search">
            <div className="searchheader">
              <CiSearch />
            </div>
            Search
          </a>
        </div>
      </div>
      <div className="bottom-header">
        <img src={enteslog} className="logo" alt="Logo" />
        <div className="left-bottom">
          <ul className="navbar-nav d-lg-flex align-items-center">
            <li className="nav-item dropdown">
              <a
                href="https://www.entes.eu/products/"
                className="nav-link dropdown-toggle headcolor"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                Products
              </a>
              <ul className="dropdown-menu">
                <p> Power Quality and Energy </p>
                <p> Electrical Measurement </p>
                <p> Power Factor Correction</p>
                <p>Energy Management Hardware and Software</p>
                <p> Protection and Control </p>
                <p> Current Transformers</p>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                href="https://www.entes.eu/solutions/"
                className="nav-link dropdown-toggle headcolor"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                Solutions
              </a>

              <ul className="dropdown-menu">
                <p>Energy Management Solutions</p>

                <p>Power Factor Correction Solutions</p>

                <p>Protection &amp; Control Solutions</p>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                href="https://www.entes.eu/support-and-documents/"
                className="nav-link dropdown-toggle headcolor"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                Support and Documents
              </a>

              <ul className="dropdown-menu">
                <p>Videos</p>

                <p>Catalogue</p>

                <p>Brochures</p>

                <p>User Manuals</p>

                <p>Setup Files</p>

                <p>Quality Certificates</p>

                <p>Test Reports</p>

                <p>FAQ</p>
              </ul>
            </li>

            <li className="nav-item">
              <a href="https://www.entes.eu/blog/" className="nav-link headcolor">
                Blog
              </a>
            </li>

            <li className="nav-item contact-button">
              <a href="https://www.entes.eu/contact/" className="nav-link headcolor">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="right-bottom"></div>
      </div>
    </header>
  );
}

export default Header;
