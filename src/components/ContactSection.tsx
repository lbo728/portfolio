export default function ContactSection() {
  return (
    <section id="contact" className="py-16">
      <div className="w-full h-px bg-black mb-16"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Contact</h2>
          <p className="text-lg text-gray-700 mb-6">
            프론트엔드 개발자로서 다양한 웹 애플리케이션을 구축하고 있습니다.
            <br />
            새로운 프로젝트나 협업 기회에 대해 언제든 연락주세요.
          </p>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <a
              href="mailto:your.email@example.com"
              className="text-lg text-gray-700 hover:text-black transition-colors"
            >
              your.email@example.com
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">GitHub</h3>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-700 hover:text-black transition-colors"
            >
              github.com/yourusername
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-700 hover:text-black transition-colors"
            >
              linkedin.com/in/yourusername
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
