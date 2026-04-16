import { Rocket } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section>
      <h2 className="section-title mb-5">Experience</h2>
      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary">
            <Rocket className="w-5 h-5" />
          </div>
          <div className="w-px flex-1 bg-border mt-2" />
        </div>
        <div className="pb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
            <div>
              <h3 className="font-semibold text-foreground">Data Analyst Intern</h3>
              <p className="text-sm text-muted-foreground">LawLevelUp</p>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-red-400 tracking-wider">LATEST WORK!</span>
              <p className="text-sm text-muted-foreground">May 2025 – Aug 2025</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Developed a real-time KPI dashboard in Power BI, integrating predictive analytics to forecast trends 
            and saving 5+ hours weekly in reporting. Analyzed learning data from 2K+ enrollments to uncover 
            engagement insights, recommending improvements that boosted learner participation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
