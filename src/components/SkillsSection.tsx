export default function SkillsSection() {
  const languages = ["JavaScript", "TypeScript", "Python", "Java", "C++"];

  const frameworks = [
    "React",
    "Next.js",
    "Vue.js",
    "Node.js",
    "Express.js",
    "Spring Boot",
  ];

  const tools = [
    "Git",
    "Docker",
    "Firebase",
    "AWS",
    "PostgreSQL",
    "MongoDB",
    "Figma",
    "Postman",
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Languages */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-800">Languages</h3>
            <div className="space-y-4">
              {languages.map((language, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">{language}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-800">
              Frameworks & Libraries
            </h3>
            <div className="space-y-4">
              {frameworks.map((framework, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">{framework}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-800">
              Tools & Platforms
            </h3>
            <div className="space-y-4">
              {tools.map((tool, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
