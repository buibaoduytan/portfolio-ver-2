import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Nền tảng thương mại điện tử hoàn chỉnh với hệ thống thanh toán, quản lý đơn hàng và dashboard admin.",
      image: "🛒",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Ứng dụng quản lý công việc với tính năng real-time collaboration và notifications.",
      image: "📋",
      category: "frontend",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Dashboard hiển thị thông tin thời tiết với API integration và interactive charts.",
      image: "🌤️",
      category: "frontend",
      technologies: ["Vue.js", "Chart.js", "Weather API"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Blog CMS",
      description: "Hệ thống quản lý nội dung blog với rich text editor và SEO optimization.",
      image: "📝",
      category: "fullstack",
      technologies: ["Next.js", "PostgreSQL", "Prisma"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Website portfolio responsive với animations và modern design.",
      image: "🎨",
      category: "frontend",
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "API Gateway",
      description: "API Gateway với authentication, rate limiting và microservices integration.",
      image: "🔗",
      category: "backend",
      technologies: ["Node.js", "Express", "Redis", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'Tất cả' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Dự án của tôi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Khám phá các dự án tôi đã thực hiện, từ ứng dụng web đến hệ thống backend phức tạp
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Dự án nổi bật
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.filter(p => p.featured).map((project) => (
                <div key={project.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 h-80 flex flex-col justify-center items-center">
                    <div className="text-8xl mb-6">{project.image}</div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 text-center mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a href={project.liveUrl} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Xem demo
                      </a>
                      <a href={project.githubUrl} className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.filter(p => !p.featured).map((project) => (
              <div key={project.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 h-64 flex flex-col justify-center items-center">
                  <div className="text-6xl mb-4">{project.image}</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3 text-center">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 text-center text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-white rounded text-xs font-medium text-gray-700 shadow-sm">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-white rounded text-xs font-medium text-gray-700 shadow-sm">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <a href={project.liveUrl} className="px-4 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors">
                      Demo
                    </a>
                    <a href={project.githubUrl} className="px-4 py-1 border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-50 transition-colors">
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">
              Bạn có muốn xem thêm dự án của tôi không?
            </p>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Xem GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
