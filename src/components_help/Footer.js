import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <div className="input-areas"></div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Sobre nosotros</h2>
            <Link to="/sign-up">Que somos</Link>
            <Link to="/">Propositos</Link>
            <Link to="/">Testimonios</Link>
            <Link to="/">Terminos de servicio</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contactanos</h2>
            <Link to="/">Contacto</Link>
            <Link to="/">Ayuda</Link>
            <Link to="/">Donanos </Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              PHILA
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">PHILA © 2021</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
