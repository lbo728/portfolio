export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce 플랫폼",
      period: "2024.01 - 2024.03",
      tags: ["사이드 프로젝트", "웹 애플리케이션"],
      description: "React와 Next.js를 활용한 현대적인 이커머스 플랫폼 구축",
      image: "/api/placeholder/400/250",
      links: {
        github: "https://github.com/byungwoo",
        demo: "https://demo.example.com",
        blog: "https://blog.example.com",
      },
    },
    {
      title: "실시간 채팅 애플리케이션",
      period: "2023.09 - 2023.12",
      tags: ["팀 프로젝트", "실시간 통신"],
      description: "Socket.io를 활용한 실시간 채팅 및 화상통화 기능 구현",
      image: "/api/placeholder/400/250",
      links: {
        github: "https://github.com/byungwoo",
        demo: "https://demo.example.com",
      },
    },
    {
      title: "포트폴리오 웹사이트",
      period: "2023.06 - 2023.08",
      tags: ["개인 프로젝트", "포트폴리오"],
      description: "Next.js와 Tailwind CSS를 활용한 반응형 포트폴리오 사이트",
      image: "/api/placeholder/400/250",
      links: {
        github: "https://github.com/byungwoo",
        demo: "https://portfolio.example.com",
        blog: "https://blog.example.com",
      },
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                <div className="text-blue-600 text-6xl">📱</div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{project.period}</p>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex gap-3">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      GitHub
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Demo
                    </a>
                  )}
                  {project.links.blog && (
                    <a
                      href={project.links.blog}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Blog
                    </a>
                  )}
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    자세히 보기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-20 bg-gray-50 mt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            Contact
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            새로운 프로젝트나 협업 기회에 대해 언제든 연락주세요.
            <br />
            함께 멋진 것들을 만들어가고 싶습니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:byungwoo@example.com"
              className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <span>📧</span>
              <span>byungwoo@example.com</span>
            </a>
            <a
              href="https://github.com/byungwoo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span>🔗</span>
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/byungwoo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span>💼</span>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-500">© 2025 이병우. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
}
