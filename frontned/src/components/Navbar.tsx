import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { label: "WHAT WE DO", to: "/what-we-do" },
  { label: "PORTFOLIO", to: "/work" },
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
  const isTransparentRoute = ["/", "/what-we-do"].includes(location.pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const showSolidBackground = scrolled || !isTransparentRoute;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`header ${showSolidBackground ? "header--solid" : "header--transparent"} ${isHomeRoute && scrolled ? "header--light" : ""
        } ${mobileOpen ? "header--mobile-open" : ""}`}
    >
      <div className="header__inner">
        <Link to="/" className="logo" aria-label="Ferret Technologies">
          <img
            src={isHomeRoute && scrolled ? "/assets/brand/ferret-symbol.svg" : "/assets/brand/ferret-symbol-white.svg"}
            alt="Ferret Technologies"
            className="logo__img"
          />
          <div className={`logo__text logo__wordmark ${isHomeRoute && scrolled ? "logo__wordmark--light" : "logo__wordmark--dark"}`}>
            <span className="logo__wordmark-main">Ferret</span>
            <span className="logo__wordmark-sub">Technologies</span>
          </div>
        </Link>

        <div className="nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav__link ${isActive ? "is-active" : ""} ${showSolidBackground ? "is-solid" : "is-transparent"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="header__request">
          <Link to="/contact" className="button button--primary">
            <span className="button__content button__content--icon-text">
              <span className="button__icon">
                <MailIcon />
              </span>
              <span className="button__text">Lets connect</span>
            </span>
          </Link>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-toggle" aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-menu"
          >
            <div className="mobile-menu__inner">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `mobile-menu__link ${isActive ? "is-active" : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link to="/contact" className="button button--primary mobile-menu__request">
                <span className="button__content button__content--icon-text">
                  <span className="button__icon">
                    <MailIcon />
                  </span>
                  <span className="button__text">Lets connect</span>
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
