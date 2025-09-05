import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90, color: "from-blue-500 to-cyan-500" },
        { name: "JavaScript", level: 85, color: "from-yellow-500 to-orange-500" },
        { name: "TypeScript", level: 80, color: "from-blue-600 to-blue-700" },
        { name: "HTML/CSS", level: 95, color: "from-orange-500 to-red-500" },
        { name: "Tailwind CSS", level: 88, color: "from-cyan-500 to-blue-500" },
        { name: "Vue.js", level: 75, color: "from-green-500 to-emerald-500" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85, color: "from-green-600 to-green-700" },
        { name: "Express.js", level: 80, color: "from-gray-600 to-gray-700" },
        { name: "Python", level: 75, color: "from-blue-500 to-indigo-500" },
        { name: "MongoDB", level: 70, color: "from-green-500 to-green-600" },
        { name: "PostgreSQL", level: 65, color: "from-blue-600 to-blue-800" },
        { name: "Firebase", level: 80, color: "from-orange-500 to-yellow-500" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90, color: "from-orange-600 to-red-600" },
        { name: "Docker", level: 70, color: "from-blue-500 to-blue-600" },
        { name: "AWS", level: 65, color: "from-orange-500 to-yellow-600" },
        { name: "Figma", level: 75, color: "from-purple-500 to-pink-500" },
        { name: "Jest", level: 80, color: "from-red-500 to-pink-500" },
        { name: "Webpack", level: 70, color: "from-blue-500 to-indigo-600" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Kỹ năng & Công nghệ
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tôi đã làm việc với nhiều công nghệ khác nhau và luôn cập nhật những xu hướng mới nhất trong ngành
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Kỹ năng bổ sung
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Responsive Design", "RESTful APIs", "GraphQL", "Microservices",
                "CI/CD", "Agile/Scrum", "Problem Solving", "Team Leadership",
                "Performance Optimization", "Security Best Practices", "Testing", "Documentation"
              ].map((skill, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Đang học & Khám phá
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Next.js", "React Native", "Machine Learning", "Blockchain", "Web3"].map((tech, index) => (
                <span key={index} className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
