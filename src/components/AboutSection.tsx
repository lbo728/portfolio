export default function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="w-full h-px bg-black mb-16"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">About</h2>
        </div>
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            안녕하세요, 프론트엔드 개발자 김병석입니다.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            사용자 경험을 중시하며, 현대적이고 반응형인 웹 애플리케이션을
            구축하는 것을 좋아합니다. React, Next.js, TypeScript를 주로
            사용하며, 깔끔하고 유지보수 가능한 코드를 작성하려고 노력합니다.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            새로운 기술을 배우고 적용하는 것을 즐기며, 팀과의 협업을 통해 더
            나은 제품을 만들어가는 과정에서 성장하고 있습니다.
          </p>

          <div className="pt-6">
            <h3 className="text-xl font-semibold mb-4">주요 기술 스택</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Tailwind CSS",
                "Firebase",
                "Git",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
