import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Về Mình
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-2 mb-6">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <img src="public/images/z6977613140813_64d42ec49d6a789f92c31aa27fa20c74.jpg" alt="Duy Tân" className="w-full h-full object-cover rounded-full" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Bùi Bảo Duy Tân</h3>
                  <p className="text-gray-600">Full-Stack Developer</p>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Chào mừng bạn đến với portfolio của mình!
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Mình là một Full-Stack Developer trong việc phát triển ứng dụng web. 
                Mình đam mê tạo ra những sản phẩm kỹ thuật số chất lượng cao và trải nghiệm người dùng tuyệt vời.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Với kiến thức vững chắc về cả frontend và backend, mình có thể xây dựng các ứng dụng web hoàn chỉnh 
                từ ý tưởng đến triển khai. Mình luôn tìm hiểu và áp dụng những công nghệ mới nhất để tạo ra 
                những giải pháp hiện đại và hiệu quả.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
                  <div className="text-gray-600">Năm kinh nghiệm</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">20+</div>
                  <div className="text-gray-600">Dự án hoàn thành</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Khách hàng hài lòng</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                  <div className="text-gray-600">Công nghệ thành thạo</div>
                </div>
              </div>

              {/* Download CV Button */}
              <div className="mt-8">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  Tải CV của mình 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
