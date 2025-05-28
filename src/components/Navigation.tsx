export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">이병우</div>
          <div className="flex items-center gap-8">
            <a
              href="#home"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#skills"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
