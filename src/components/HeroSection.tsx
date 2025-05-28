export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            DEVELOPER
          </div>
          <div className="flex justify-center gap-2 mb-6">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              FRONTEND
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              MOBILE
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              WEB
            </span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
          Frontend Developer
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-800">
          이병우
        </h2>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            다양한 플랫폼 생태계에 대한 깊은 관심을 바탕으로,
            <br />
            사람들의 일상에 가치를 더할 수 있는 어플리케이션을
            <br />
            만들어가는 과정에서 큰 보람을 느끼고 있습니다.
          </p>
        </div>

        <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
