import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const companyLinks = [
  { label: "About", to: "/about" },
  { label: "Work", to: "/work" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/contact" },
];

const serviceLinks = [
  { label: "Web Development", to: "/services" },
  { label: "Mobile Apps", to: "/services" },
  { label: "UI/UX Design", to: "/services" },
  { label: "AI Integration", to: "/services" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-display font-bold gradient-text">
              PepsLookUp
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Building scalable digital products that drive business growth and innovation.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="transition-colors hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="transition-colors hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display font-semibold">Connect</h4>
            <div className="flex gap-3">
              {[Github, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-foreground"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          (c) {new Date().getFullYear()} PepsLookUp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
