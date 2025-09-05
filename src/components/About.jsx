import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 transition-colors duration-300">
              Về Mình
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 flex items-center justify-center transition-colors duration-300">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-2 mb-6">
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center transition-colors duration-300">
                      <img src="public/images/z6977613140813_64d42ec49d6a789f92c31aa27fa20c74.jpg" alt="Duy Tân" className="w-full h-full object-cover rounded-full" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 transition-colors duration-300">Bùi Bảo Duy Tân</h3>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Full-Stack Developer</p>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 transition-colors duration-300">
                Chào mừng bạn đến với portfolio của mình!
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                Mình là một Full-Stack Developer trong việc phát triển ứng dụng web. 
                Mình đam mê tạo ra những sản phẩm kỹ thuật số chất lượng cao và trải nghiệm người dùng tuyệt vời.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                Với kiến thức vững chắc về cả frontend và backend, mình có thể xây dựng các ứng dụng web hoàn chỉnh 
                từ ý tưởng đến triển khai. Mình luôn tìm hiểu và áp dụng những công nghệ mới nhất để tạo ra 
                những giải pháp hiện đại và hiệu quả.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors duration-300">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">84+</div>
                  <div className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Năm kinh nghiệm</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors duration-300">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">210+</div>
                  <div className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Dự án hoàn thành</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors duration-300">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">1500+</div>
                  <div className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Khách hàng hài lòng</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors duration-300">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">100+</div>
                  <div className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Công nghệ thành thạo</div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
