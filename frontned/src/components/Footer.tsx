import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ferret-private-limited/?viewAsMember=true", icon: Linkedin },
  // { label: "Instagram", href: "https://www.instagram.com", icon: Instagram },
  { label: "X", href: "https://x.com/FERRET_Pvt_Ltd", icon: X },
  // { label: "Facebook", href: "https://www.facebook.com", icon: Facebook },
];

const footerBadges = [
  { title: "GoodFirms", subtitle: "Top Mobile App Developers", variant: "text" },
  { title: "Top Wearable App", subtitle: "Creators 2018", variant: "text" },
  { title: "Find Best", subtitle: "Web Dev 2019/2020", variant: "text" },
  { title: "UpCity", subtitle: "Top Local Agency", variant: "text" },
  { title: "Top Developers", subtitle: "Top Mobile App Developer", variant: "pill" },
  { title: "appfutura", subtitle: "", variant: "text" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(90deg,#141827_0%,#1A1E31_50%,#141827_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(255,255,255,0.04),transparent_36%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.025),transparent_42%)]" />

      <div className="relative mx-auto w-[min(1150px,calc(100vw-34px))] py-12 md:py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="text-white">
            <Link to="/" className="inline-flex items-center">
              <img src="/assets/brand/ferret-logo-light.svg" alt="Ferret Technologies" className="h-[50px] w-auto" />
            </Link>
            <p className="mt-3 text-[12px] font-extrabold uppercase tracking-[0.5px]">(c) 2025-{year} Ferret private limited (company)</p>
            <a
              href="mailto:info@ferrettechnologies.com"
              className="mt-1.5 inline-block text-[13px] font-normal text-white/75 transition-colors hover:text-[#ff0044]"
            >
              info@ferrettechnologies.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/75 p-3 text-white/70 transition-opacity hover:opacity-100"
              >
                <Icon size={21} strokeWidth={2} />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-10">
            <Link
              to="/contact"
              className="text-[12px] font-bold uppercase tracking-[0.84px] text-white/60 transition-opacity hover:opacity-100"
            >
              Support
            </Link>
            <Link
              to="/contact"
              className="text-[12px] font-bold uppercase tracking-[0.84px] text-white/60 transition-opacity hover:opacity-100"
            >
              Customer Login
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-x-5 gap-y-4">
          {footerBadges.map((badge) => (
            <div key={badge.title} className="opacity-45 transition-opacity hover:opacity-70">
              {badge.variant === "pill" ? (
                <div className="inline-flex flex-col items-center rounded-full border border-white/35 px-4 py-1.5 text-white/80">
                  <span className="text-[16px] font-semibold leading-none">{badge.title}</span>
                  <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.55px]">{badge.subtitle}</span>
                </div>
              ) : (
                <div className="min-w-[140px] text-white/80">
                  <p className="text-[16px] font-semibold leading-none tracking-[0.18px]">{badge.title}</p>
                  {badge.subtitle ? (
                    <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.5px] text-white/70">{badge.subtitle}</p>
                  ) : null}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
