const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border backdrop-blur-md bg-background/80">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-medium text-green-400">Available for work</span>
        </div>
        <nav className="flex items-center gap-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Github
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
