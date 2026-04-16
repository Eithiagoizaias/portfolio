import { Mail, Github, Linkedin } from "lucide-react";

const ReachOutSection = () => {
  return (
    <section>
      <h2 className="section-title mb-3">Reach out to me.</h2>
      <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
        Reach out via email or LinkedIn. I'm open to freelance gigs or full-time roles. Let's chat if you've got something in mind!
      </p>
      <div className="flex items-center gap-3">
        <a href="mailto:seuemail@gmail.com" className="social-icon hover:text-foreground hover:border-foreground">
          <Mail className="w-5 h-5" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon hover:text-foreground hover:border-foreground">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer" className="social-icon hover:text-linkedin hover:border-linkedin">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="#" className="ml-2 px-4 py-2 text-sm border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300">
          Schedule a meet
        </a>
      </div>
    </section>
  );
};

export default ReachOutSection;
