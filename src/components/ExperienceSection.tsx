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
        <div className="pb-6 flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
            <div>
              <h3 className="font-semibold text-foreground">IT Assistant</h3>
              <p className="text-sm text-muted-foreground">Shopping Vida Group</p>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-red-400 tracking-wider">LATEST WORK!</span>
              <p className="text-sm text-muted-foreground">May 2025 – Present</p>
            </div>
          </div>
          <ul className="text-sm text-muted-foreground leading-relaxed list-disc pl-5 space-y-1">
            <li>Supported data extraction, transformation, and loading (ETL) processes for reporting and analytics</li>
            <li>Built and maintained structured datasets for Power BI dashboards</li>
            <li>Assisted in data migration and integration using SQL Server</li>
            <li>Performed data validation and ensured consistency across systems (WMS, sales, and internal platforms)</li>
            <li>Managed IT assets, user access, and system configurations, maintaining data security and integrity</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
