const stackItems = [
  { name: "Python", icon: "https://cdn.simpleicons.org/python" },
  { name: "PySpark", icon: "https://cdn.simpleicons.org/apachespark" },
  { name: "Airflow", icon: "https://cdn.simpleicons.org/apacheairflow" },
  { name: "Databricks", icon: "https://cdn.simpleicons.org/databricks" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
  { name: "Power BI", icon: "https://cdn.simpleicons.org/powerbi" },
  { name: "Excel", icon: "https://cdn.simpleicons.org/microsoftexcel" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
  { name: "Postman", icon: "https://cdn.simpleicons.org/postman" },
  { name: "Jupyter", icon: "https://cdn.simpleicons.org/jupyter" },
];

const StackSection = () => {
  return (
    <section>
      <h2 className="section-title mb-5">Stack</h2>
      <div className="flex flex-wrap gap-3">
        {stackItems.map((item) => (
          <div
            key={item.name}
            className="glow-card flex items-center gap-2.5 px-4 py-2.5 cursor-default"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
              e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
            }}
          >
            <img src={item.icon} alt={item.name} className="w-5 h-5" />
            <span className="text-sm text-foreground">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StackSection;
