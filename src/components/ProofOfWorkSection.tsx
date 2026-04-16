import { Github } from "lucide-react";

const projects = [
  {
    title: "Heart Disease Prediction",
    description: "Risk prediction with Streamlit and heart failure outcome analysis through a Power BI dashboard.",
    tags: ["Streamlit", "Power BI", "Python", "Scikit-learn", "NumPy", "Pandas"],
    github: "https://github.com",
  },
  {
    title: "Spotify Analytics Pipeline",
    description: "Real-time streaming pipeline for Spotify-style analytics using Kafka, Airflow, Snowflake, DBT, and Power BI.",
    tags: ["Kafka", "Airflow", "Snowflake", "dbt", "Power BI"],
    github: "https://github.com",
  },
  {
    title: "Vendor IQ",
    description: "Analytics platform identifying profitable vendors and pricing gaps. Processes 500K+ transactions to optimize margins and inventory.",
    tags: ["SQL", "Pandas", "Power BI", "Python"],
    github: "https://github.com",
  },
  {
    title: "Jobsy",
    description: "Automated Internship Scraper & Updater.",
    tags: ["Python", "Web Scraping", "Beautiful Soup", "CI/CD", "GitHub Actions"],
    github: "https://github.com",
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <div
    className="glow-card p-5 flex flex-col justify-between"
    onMouseMove={(e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    }}
  >
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-foreground">{project.title}</h3>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
          <Github className="w-5 h-5" />
        </a>
      </div>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
    </div>
    <div className="flex flex-wrap gap-2">
      {project.tags.map((tag) => (
        <span key={tag} className="tech-badge">{tag}</span>
      ))}
    </div>
  </div>
);

const ProofOfWorkSection = () => {
  return (
    <section>
      <h2 className="section-title mb-5">Proof-of-Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProofOfWorkSection;
