import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { label: "WHAT WE DO", to: "/services" },
  { label: "PORTFOLIO", to: "/work" },
  { label: "COMPANY", to: "/about" },
  { label: "CAREERS", to: "/careers" },
  { label: "CONTACTS", to: "/contact" },
];

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="nonzero"
      d="M3.485 5L10 11.514 16.515 5H3.485zM18 6.485l-6.55 6.55c-.801.8-2.099.8-2.9 0L2 6.484V14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6.485zM3 3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z"
    />
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHomeRoute = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const showSolidBackground = scrolled || !isHomeRoute;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`merc-header ${showSolidBackground ? "merc-header--solid" : "merc-header--transparent"} ${
        mobileOpen ? "merc-header--mobile-open" : ""
      }`}
    >
      <div className="merc-header__inner">
        <Link to="/" className="merc-logo" aria-label="Ferret Technologies">
          <img
            src={showSolidBackground ? "/assets/brand/ferret-logo-dark.svg" : "/assets/brand/ferret-logo-light.svg"}
            alt="Ferret Technologies"
          />
        </Link>

        <div className="merc-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `merc-nav__link ${isActive ? "is-active" : ""} ${showSolidBackground ? "is-solid" : "is-transparent"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="merc-header__request">
          <Link to="/contact" className="merc-button merc-button--primary">
            <span className="merc-button__content merc-button__content--icon-text">
              <span className="merc-button__icon">
                <MailIcon />
              </span>
              <span className="merc-button__text">Request Estimate</span>
            </span>
          </Link>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="merc-mobile-toggle" aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="merc-mobile-menu"
          >
            <div className="merc-mobile-menu__inner">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `merc-mobile-menu__link ${isActive ? "is-active" : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link to="/contact" className="merc-button merc-button--primary merc-mobile-menu__request">
                <span className="merc-button__content merc-button__content--icon-text">
                  <span className="merc-button__icon">
                    <MailIcon />
                  </span>
                  <span className="merc-button__text">Request Estimate</span>
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
