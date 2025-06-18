# BlogTheme - Hugo Theme với Tailwind CSS v4.1

Một theme Hugo hiện đại được tối ưu hóa với Tailwind CSS v4.1, hỗ trợ dark mode, responsive design và hiệu suất cao.

## ✨ Tính năng

- 🎨 **Tailwind CSS v4.1** - Framework CSS hiện đại nhất
- 🌙 **Dark Mode** - Chuyển đổi theme tự động và thủ công
- 📱 **Responsive Design** - Tối ưu cho mọi thiết bị
- ⚡ **Hiệu suất cao** - Tối ưu hóa CSS và JavaScript
- 🔍 **SEO Friendly** - Meta tags và structured data
- ♿ **Accessibility** - Tuân thủ tiêu chuẩn WCAG
- 🎯 **Typography Plugin** - Styling tự động cho nội dung
- 🔧 **Developer Experience** - Hot reload và linting

## 🚀 Cài đặt

### Yêu cầu hệ thống

- Node.js >= 18.0.0
- PNPM >= 8.0.0
- Hugo >= 0.120.0

### Cài đặt dependencies

```bash
pnpm install
```

## 📝 Sử dụng

### Development

```bash
# Khởi động development server
pnpm run dev

# Hoặc
pnpm start
```

Server sẽ chạy tại `http://localhost:1313`

### Production Build

```bash
# Build cho production
pnpm run build

# Build nhanh (không minify Hugo)
pnpm run build:fast

# Preview production build
pnpm run preview
```

### Các lệnh khác

```bash
# Chỉ build CSS
pnpm run build:css

# Chỉ build Hugo
pnpm run build:hugo

# Dọn dẹp files build
pnpm run clean

# Lint CSS
pnpm run lint:css

# Format CSS
pnpm run format:css

# Phân tích performance
pnpm run analyze
```

## 🎨 Customization

### Colors

Chỉnh sửa màu sắc trong `assets/css/custom-theme.css`:

```css
@theme {
  /* Primary colors */
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;
  
  /* Custom colors */
  --color-warmgray-800: #1e2022;
}
```

### Components

Thêm components mới trong `assets/css/components.css`:

```css
@layer components {
  .my-component {
    @apply bg-white dark:bg-warmgray-800 rounded-lg shadow-sm;
  }
}
```

### Tailwind Config

Mở rộng cấu hình trong `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      // Custom configurations
    }
  }
}
```

## 📁 Cấu trúc thư mục

```
├── archetypes/          # Hugo archetypes
├── assets/
│   ├── css/            # CSS files
│   │   ├── main.css    # Main CSS entry
│   │   ├── components.css
│   │   └── custom-theme.css
│   └── js/             # JavaScript files
├── content/            # Content files
├── layouts/            # Hugo templates
│   ├── _default/       # Default layouts
│   ├── partials/       # Partial templates
│   └── shortcodes/     # Hugo shortcodes
├── static/             # Static assets
├── .vscode/            # VSCode settings
├── hugo.toml           # Hugo configuration
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
└── package.json        # Dependencies
```

## ⚙️ Cấu hình Hugo

Chỉnh sửa `hugo.toml` để tùy chỉnh theme:

```toml
[params]
  # Base color
  base_color = "bg-gray-800"
  
  # Dark mode default
  darkmode = "light"  # hoặc "dark"
  
  # Post settings
  [params.post]
    thumbnail = true
    thumbnail_height = "lg:h-44"
    
  # Widgets
  [params.widgets]
    display = true
    widgets = ["search", "category", "tags", "recent"]
```

## 🔧 Development Tools

### VSCode Extensions được khuyến nghị

- Hugo Language and Syntax Support
- Tailwind CSS IntelliSense
- PostCSS Language Support
- Prettier - Code formatter
- ESLint
- Auto Rename Tag
- Path Intellisense

### Linting và Formatting

Theme đã được cấu hình với:

- **Prettier** - Code formatting
- **Stylelint** - CSS linting
- **ESLint** - JavaScript linting

## 🎯 Performance

### Tối ưu hóa đã áp dụng

- ✅ CSS minification và purging
- ✅ JavaScript optimization
- ✅ Image lazy loading
- ✅ Critical CSS inlining
- ✅ Resource preloading
- ✅ Gzip compression ready

### Lighthouse Score

- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 🌙 Dark Mode

Theme hỗ trợ 3 chế độ dark mode:

1. **Auto** - Theo system preference
2. **Light** - Luôn sáng
3. **Dark** - Luôn tối

Người dùng có thể chuyển đổi bằng nút toggle trên header.

## 📱 Responsive Design

Breakpoints được sử dụng:

- `sm`: 640px
- `md`: 768px  
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🔍 SEO Features

- Meta tags tự động
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD)
- Canonical URLs
- XML sitemap
- RSS feeds

## 🤝 Contributing

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Tạo Pull Request

## 📄 License

MIT License - xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## 🙏 Credits

- [Hugo](https://gohugo.io/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Heroicons](https://heroicons.com/) - Icons

## 📞 Support

Nếu bạn gặp vấn đề hoặc có câu hỏi, vui lòng tạo issue trên GitHub repository.

---

Made with ❤️ by [Lê Khôi](https://github.com/username)