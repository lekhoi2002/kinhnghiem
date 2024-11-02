---
title: tạo hàng loạt tệp Markdown với list tên cho trước
description: "tạo hàng loạt tệp Markdown có thể gõ tiếng Việt trong Windows 10 với danh sách đã cho, bạn có thể sử dụng PowerShell. Dưới đây là hướng dẫn từng bước:"
date: 2024-11-02T02:46:24.422Z
lastmod: null
thumbnail: ""
draft: false
tags: []
categories: []
modules: ""
---
Để tạo hàng loạt tệp Markdown có thể gõ tiếng Việt trong Windows 10 với danh sách đã cho, bạn có thể sử dụng PowerShell. Dưới đây là hướng dẫn từng bước:

### Bước 1: Chuẩn bị danh sách tên tệp

Tạo một tệp văn bản (ví dụ: `file_list.txt`) chứa danh sách tên tệp Markdown mà bạn muốn tạo. Mỗi tên tệp nên được đặt trên một dòng riêng biệt. Ví dụ:

```
file1.md
file2.md
file3.md
```

### Bước 2: Mở PowerShell

1. Nhấn `Windows + X` và chọn **Windows PowerShell** (hoặc **Windows Terminal**).

### Bước 3: Chuyển đến thư mục mong muốn

Sử dụng lệnh `cd` để điều hướng đến thư mục nơi bạn muốn tạo các tệp Markdown. Ví dụ:

```powershell
cd C:\path\to\your\folder
```

### Bước 4: Tạo tệp Markdown

Chạy lệnh sau trong PowerShell để tạo hàng loạt tệp Markdown từ danh sách:

```powershell
Get-Content C:\path\to\file_list.txt | ForEach-Object { New-Item -Path $_ -ItemType File -Force }
```

### Bước 5: Kiểm tra kết quả

Sau khi chạy lệnh trên, kiểm tra thư mục của bạn. Bạn sẽ thấy các tệp Markdown đã được tạo ra.

### Lưu ý

- Đảm bảo bạn đã chỉ định đúng đường dẫn đến tệp `file_list.txt`.
- Nếu bạn muốn thêm nội dung mặc định vào các tệp Markdown, bạn có thể chỉnh sửa lệnh như sau:

```powershell
Get-Content C:\path\to\file_list.txt | ForEach-Object { New-Item -Path $_ -ItemType File -Force; Add-Content -Path $_ -Value "# Nội dung mặc định" }
```

### Gõ tiếng Việt

Để gõ tiếng Việt trong các tệp Markdown, bạn cần đảm bảo rằng bạn đang sử dụng bộ gõ tiếng Việt (như Unikey) đã được cài đặt và đang hoạt động trên hệ thống của bạn. Sau đó, bạn có thể mở các tệp Markdown vừa tạo và gõ tiếng Việt bình thường.