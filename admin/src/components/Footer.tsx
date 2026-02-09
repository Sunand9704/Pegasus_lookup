import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <span className="text-2xl font-display font-bold gradient-text">PepsLookUp</span>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Building scalable digital products that drive business growth and innovation.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#portfolio" className="hover:text-foreground transition-colors">Work</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Mobile Apps</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">UI/UX Design</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">AI Integration</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {[Github, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} PepsLookUp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
