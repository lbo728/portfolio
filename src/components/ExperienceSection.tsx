export default function ExperienceSection() {
  const experiences = [
    {
      company: "테크 스타트업",
      position: "Frontend Developer",
      period: "2023년 3월 - 현재",
      location: "대한민국 서울",
      description: "React와 Next.js를 활용한 웹 애플리케이션 개발",
      details: [
        "사용자 중심의 반응형 웹 애플리케이션 개발",
        "TypeScript를 활용한 타입 안전성 확보",
        "성능 최적화를 통한 사용자 경험 개선",
        "팀 협업을 위한 코드 리뷰 및 문서화",
      ],
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Git"],
    },
    {
      company: "한국대학교",
      position: "컴퓨터공학과 학사",
      period: "2019년 3월 - 2023년 2월",
      location: "대한민국 서울",
      description: "컴퓨터공학 전공",
      details: [
        "학점: 4.2 / 4.5",
        "프로그래밍 언어 및 알고리즘 학습",
        "소프트웨어 공학 및 데이터베이스 설계",
        "팀 프로젝트를 통한 협업 경험",
      ],
      skills: ["Java", "Python", "C++", "Database", "Algorithm"],
    },
    {
      company: "개발 동아리",
      position: "Frontend Developer",
      period: "2022년 1월 - 2023년 2월",
      location: "대한민국 서울",
      description: "대학교 개발 동아리 활동",
      details: [
        "React를 활용한 웹 애플리케이션 개발",
        "정기적인 스터디와 세션 발표를 통한 기술 습득",
        "디자이너와의 협업을 위한 UI/UX 구현",
        "프로젝트 기획부터 배포까지 전 과정 경험",
      ],
      skills: ["React", "JavaScript", "CSS", "Figma", "GitHub"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Experience
          </h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-100"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-600 rounded"></div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {exp.company}
                      </h3>
                      <p className="text-blue-600 font-medium">
                        {exp.position}
                      </p>
                    </div>
                    <div className="text-sm text-gray-500 mt-2 md:mt-0">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{exp.description}</p>

                  <ul className="space-y-2 mb-6">
                    {exp.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
