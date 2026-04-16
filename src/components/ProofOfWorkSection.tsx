import { Github } from "lucide-react";

const projects = [
  {
    title: "End-to-End Financial Data Pipeline",
    description: "Financial data pipeline with automated ETL for data ingestion, transformation, and organization, ensuring efficient processing and supporting analytics and decision-making.",
    tags: ["Python", "SQL", "Airflow", "Streamlit", "PySpark"],
    github: "https://github.com/Eithiagoizaias/Projeto-Pipeline-de-Dados-Financeiros",
  },
  {
    title: "IT Inventory Control",
    description: "Interactive dashboard for IT inventory management, providing clear visualization of stock levels, asset tracking, and operational insights to support efficient decision-making.",
    tags: ["Power BI", "Excel", "Python"],
    github: "https://github.com/Eithiagoizaias/Dashboard-Controle-Estoque-TI",
  },
  {
    title: "Batch Data Processing",
    description: "Batch scripting project focused on automating data processing tasks, enabling efficient execution of routines, file handling, and workflow optimization in a lightweight environment.",
    tags: ["Automation", "Python", "Airflow", "Delta Lake"],
    github: "https://github.com/Eithiagoizaias/Projeto-Batch",
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
