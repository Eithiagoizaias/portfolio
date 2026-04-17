import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    // Configure GTranslate
    (window as any).gtranslateSettings = {
      default_language: "en",
      detect_browser_language: true,
      languages: ["en", "pt"],
      globe_color: "#66aaff",
      wrapper_selector: ".gtranslate_wrapper",
      alt_flags: { en: "usa", pt: "brazil" },
      globe_size: 24,
    };

    const SCRIPT_ID = "gtranslate-globe-script";
    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

    if (!existing) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = "https://cdn.gtranslate.net/widgets/latest/globe.js";
      script.defer = true;
      document.body.appendChild(script);
    } else {
      // Re-trigger init if script already present (e.g., HMR / route change)
      const wrapper = document.querySelector(".gtranslate_wrapper");
      if (wrapper && wrapper.childNodes.length === 0) {
        const reload = document.createElement("script");
        reload.src = "https://cdn.gtranslate.net/widgets/latest/globe.js";
        reload.defer = true;
        document.body.appendChild(reload);
      }
    }
  }, []);

  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-medium text-green-400">Available for work</span>
        </div>
        <nav className="flex items-center gap-4 sm:gap-6">
          <a href="https://github.com/Eithiagoizaias" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Github
          </a>
          <a href="https://drive.google.com/file/d/1IgRFzFndUCCWt95IrwR5P4skxchf18bs/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Resume
          </a>
          <div className="gtranslate_wrapper flex items-center" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
