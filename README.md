# Portfolio Website

Một website portfolio hiện đại và responsive được xây dựng bằng React và Tailwind CSS.

## 🚀 Tính năng

- **Responsive Design**: Tương thích với mọi thiết bị
- **Modern UI**: Giao diện đẹp mắt với gradient và animations
- **Smooth Scrolling**: Cuộn mượt mà giữa các section
- **Interactive Components**: Các component tương tác và động
- **Contact Form**: Form liên hệ hoạt động
- **Project Showcase**: Trưng bày dự án với filter
- **Skills Visualization**: Hiển thị kỹ năng với progress bars

## 📁 Cấu trúc dự án

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── Hero.jsx            # Hero section
│   ├── About.jsx           # About section
│   ├── Skills.jsx          # Skills section
│   ├── Projects.jsx        # Projects showcase
│   ├── Contact.jsx         # Contact form
│   └── Footer.jsx          # Footer
├── App.jsx                 # Main app component
├── main.jsx               # Entry point
└── index.css              # Global styles
```

## 🛠️ Công nghệ sử dụng

- **React 18**: Framework JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Build tool
- **JavaScript ES6+**: Modern JavaScript features

## 🚀 Cách chạy dự án

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd my-app
   ```

2. **Cài đặt dependencies**
   ```bash
   npm install
   ```

3. **Chạy development server**
   ```bash
   npm run dev
   ```

4. **Mở trình duyệt**
   ```
   http://localhost:5173
   ```

## 📝 Tùy chỉnh

### Thay đổi thông tin cá nhân

1. **Hero Section** (`src/components/Hero.jsx`):
   - Thay đổi tên trong `[Tên của bạn]`
   - Cập nhật mô tả và social links

2. **About Section** (`src/components/About.jsx`):
   - Cập nhật thông tin về bản thân
   - Thay đổi số liệu thống kê

3. **Skills Section** (`src/components/Skills.jsx`):
   - Thêm/bớt kỹ năng
   - Điều chỉnh mức độ thành thạo (%)

4. **Projects Section** (`src/components/Projects.jsx`):
   - Thêm dự án mới vào array `projects`
   - Cập nhật links và mô tả

5. **Contact Section** (`src/components/Contact.jsx`):
   - Thay đổi thông tin liên hệ
   - Cập nhật social media links

6. **Footer** (`src/components/Footer.jsx`):
   - Cập nhật thông tin copyright
   - Thay đổi links

### Thay đổi màu sắc

Các màu chính được định nghĩa trong Tailwind classes:
- **Primary Blue**: `blue-600`
- **Secondary Purple**: `purple-600`
- **Gradient**: `from-blue-600 to-purple-600`

### Thêm animations

Sử dụng các class animation có sẵn:
- `animate-fade-in-up`
- `animate-fade-in-left`
- `animate-fade-in-right`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Design Features

- **Gradient Backgrounds**: Sử dụng gradient từ blue đến purple
- **Card Design**: Cards với shadow và hover effects
- **Smooth Transitions**: Tất cả interactions có smooth transitions
- **Modern Typography**: Font hierarchy rõ ràng
- **Icon Integration**: SVG icons cho social media và UI elements

## 📧 Contact Form

Form liên hệ hiện tại chỉ log data ra console. Để tích hợp với backend:

1. Thay đổi `handleSubmit` trong `Contact.jsx`
2. Thêm API endpoint
3. Xử lý response và error handling

## 🚀 Deployment

### Vercel
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Upload dist folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Push dist folder to gh-pages branch
```

## 📄 License

MIT License - tự do sử dụng và chỉnh sửa.

## 🤝 Contributing

Mọi đóng góp đều được chào đón! Hãy tạo issue hoặc pull request.

---

**Lưu ý**: Đừng quên thay thế tất cả placeholder text (như `[Tên của bạn]`, `your.email@example.com`) bằng thông tin thực của bạn trước khi deploy!
