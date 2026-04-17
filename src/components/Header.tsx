const Header = () => {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-medium text-green-400">Available for work</span>
        </div>
        <nav className="flex items-center gap-6">
          <a href="https://github.com/Eithiagoizaias" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Github
          </a>
          <a href="https://drive.google.com/file/d/1IgRFzFndUCCWt95IrwR5P4skxchf18bs/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
