import { Mail, Github, Linkedin, Instagram } from "lucide-react";

const ReachOutSection = () => {
  return (
    <section>
      <h2 className="section-title mb-3">Reach out to me.</h2>
      <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
        Reach out via email or LinkedIn. I'm open to freelance gigs or full-time roles. Let's chat if you've got something in mind!
      </p>
      <div className="flex items-center gap-3">
        <a href="mailto:thiago.sizaias@gmail.com" className="social-icon hover:text-gmail hover:border-gmail">
          <Mail className="w-5 h-5" />
        </a>
        <a href="https://github.com/Eithiagoizaias" target="_blank" rel="noopener noreferrer" className="social-icon hover:text-foreground hover:border-foreground">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/eithiagoizaias/" target="_blank" rel="noopener noreferrer" className="social-icon hover:text-linkedin hover:border-linkedin">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="https://www.instagram.com/eithiagoizaias" target="_blank" rel="noopener noreferrer" className="social-icon hover:text-instagram hover:border-instagram">
          <Instagram className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default ReachOutSection;
