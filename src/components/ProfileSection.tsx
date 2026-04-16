import { Linkedin, Mail } from "lucide-react";

const ProfileSection = () => {
  return (
    <section className="glow-card p-6 flex flex-col sm:flex-row gap-6 items-start"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
      }}
    >
      <img
        src="https://eharshit.cfd/images/profile.jpeg"
        alt="Profile"
        className="w-24 h-24 rounded-xl object-cover border border-border"
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-xl font-bold text-foreground">Seu Nome</h1>
          <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <Mail className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">seuemail@gmail.com</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Data Engineering-focused professional. Experience in data analysis, building ETL pipelines, 
          warehouse systems, and ML workflows, while focusing on scalable data systems and architecture.
        </p>
      </div>
      <a
        href="https://www.linkedin.com/in/seu-perfil"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon hover:text-linkedin hover:border-linkedin"
      >
        <Linkedin className="w-5 h-5" />
      </a>
    </section>
  );
};

export default ProfileSection;
