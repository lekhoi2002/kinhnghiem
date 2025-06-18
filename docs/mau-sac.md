# Hướng dẫn Thay đổi Màu sắc trong Theme

Dự án này sử dụng Tailwind CSS để quản lý giao diện. Việc thay đổi màu sắc rất linh hoạt. Dưới đây là các cách bạn có thể áp dụng, từ đơn giản đến nâng cao.

---

### Cách 1: Sử dụng Utility Classes trực tiếp trong HTML (Phổ biến nhất)

Đây là cách làm cốt lõi và được khuyến khích nhất của Tailwind CSS. Bạn chỉ cần áp dụng các class tiện ích về màu sắc trực tiếp vào các thẻ HTML trong các tệp layout hoặc shortcode của bạn.

- **Khi nào dùng:** Khi bạn muốn thay đổi màu cho một hoặc một vài thành phần cụ thể, mang tính cục bộ.
- **Tệp cần sửa:** Các tệp layout trong `layouts/**/*.html`.

**Ví dụ:** Đổi màu một tiêu đề từ xám sang xanh dương.

```html
<!-- Trước khi thay đổi -->
<h1 class="text-4xl font-bold text-gray-900">Tiêu đề bài viết</h1>

<!-- Sau khi thay đổi -->
<h1 class="text-4xl font-bold text-blue-600">Tiêu đề bài viết</h1>
```

Một số utility class phổ biến khác:

- `bg-red-500`: Thay đổi màu nền (background).
- `border-green-500`: Thay đổi màu viền (border).

---

### Cách 2: Tùy chỉnh màu trong `tailwind.config.js` (Tốt nhất để thay đổi toàn cục)

Khi bạn muốn định nghĩa một hệ thống màu sắc riêng cho thương hiệu hoặc thay đổi một màu trên toàn bộ trang web, cách tốt nhất là chỉnh sửa tệp cấu hình của Tailwind.

- **Khi nào dùng:**
  - Thay đổi giá trị của một màu có sẵn (ví dụ: làm cho màu `primary` đậm hơn).
  - Thêm màu sắc mới cho thương hiệu của bạn.
  - Đảm bảo tính nhất quán trên toàn bộ website.
- **Tệp cần sửa:** [`tailwind.config.js`](../../tailwind.config.js)

**Ví dụ:** Đổi màu `primary` mặc định (xanh dương) thành màu tím trên toàn trang.

```javascript
// tailwind.config.js

module.exports = {
  // ...
  theme: {
    extend: {
      colors: {
        // Thay đổi màu primary
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6', // Màu primary-500 mới
          600: '#7c3aed', // Màu primary-600 mới
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
      },
    },
  },
  // ...
};
```

Sau khi lưu tệp này và build lại, tất cả các thành phần đang sử dụng class như `bg-primary-600` hoặc `text-primary-600` sẽ tự động chuyển sang màu tím mới.

---

### Cách 3: Viết CSS tùy chỉnh (Dùng cho các trường hợp đặc biệt)

Nếu bạn có những yêu cầu phức tạp mà utility class không giải quyết được, bạn có thể viết CSS thuần.

- **Khi nào dùng:** Khi cần định kiểu cho các thành phần được tạo ra từ markdown mà bạn không thể thêm class trực tiếp, hoặc các selector CSS phức tạp.
- **Tệp cần sửa:** [`assets/css/main.css`](../../assets/css/main.css)

**Ví dụ:** Muốn tất cả các đường link _bên trong một bài viết_ có màu cam khi hover.

```css
/* assets/css/main.css */

@layer components {
  .prose a:hover {
    color: #f97316; /* Màu cam */
  }
}
```

---

### Sơ đồ quyết định

Sử dụng sơ đồ dưới đây để chọn cách phù hợp nhất.

```mermaid
graph TD
    A[Bạn muốn thay đổi màu sắc?] --> B{Chỉ một vài nơi?};
    B -->|Đúng| C[Dùng Utility Class trong HTML<br><i>ví dụ: class="text-red-500"</i>];
    B -->|Không, trên toàn trang| D{Màu đã có trong theme<br> (ví dụ: 'primary')?};
    D -->|Đúng| E[Chỉnh sửa `tailwind.config.js`<br><i>Thay đổi giá trị của màu 'primary'</i>];
    D -->|Không, màu mới| F[Thêm màu mới vào `tailwind.config.js`<br><i>ví dụ: 'brand-color': '#ff00ff'</i>];
    A --> G{Yêu cầu phức tạp<br>(ví dụ: selector lồng nhau)?};
    G -->|Đúng| H[Viết CSS tùy chỉnh trong `assets/css/main.css`];
```

**Khuyến nghị:**

- **Ưu tiên Cách 1 và 2** để tận dụng tối đa sức mạnh và sự nhất quán của Tailwind CSS.
- Chỉ sử dụng **Cách 3** khi thực sự cần thiết.
