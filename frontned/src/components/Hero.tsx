import { Link } from "react-router-dom";
import TwinklingStars from "./TwinklingStars";

const awards = [
  {
    icon: "/assets/hero/i-48-apple.svg",
    title: "2 APPS IN APP STORE'S",
    subtitle: "TRENDS OF THE YEAR",
  },
  {
    icon: "/assets/hero/i-48-clutch.svg",
    title: "GLOBAL LEADERS, TOP B2B",
    subtitle: "COMPANIES, TOP DEVELOPERS",
  },
  {
    icon: "/assets/hero/i-48-css-new.svg",
    title: "UX, UI, INNOVATION,",
    subtitle: "SPECIAL KUDOS CSS AWARDS",
  },
  {
    icon: "/assets/hero/i-48-top.svg",
    title: "TOP ANDROID APP",
    subtitle: "DEVELOPMENT COMPANY",
  },
];

const Hero = () => {
  return (
    <section id="home" className="hero relative">
      <TwinklingStars />

      <div className="hero__content">
        <div className="hero__intro">
          <h1 className="hero__title">
            <span>BUILDING TOMORROW'S SOLUTIONS.</span>
            <span className="hero__title-accent">GLOBALLY.</span>
          </h1>

          <p className="hero__proof">Trusted expertise with numerous mobile and wearable applications featured globally.</p>

          <Link to="/contact" className="button button--primary hero__cta">
            <span className="button__content">
              <span className="button__text">Request Estimate</span>
            </span>
          </Link>
        </div>

        <ul className="achievements">
          {awards.map((award) => (
            <li key={award.title} className="achievements__item">
              <div className="achievements__icon-wrap">
                <img src={award.icon} alt="" width={48} height={48} />
              </div>
              <p className="achievements__text">{award.title}</p>
              <p className="achievements__text">{award.subtitle}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
