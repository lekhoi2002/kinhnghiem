---
title: Hướng dẫn push code từ PC lên máy tính
description: ""
date: 2024-10-29T14:38:42.914Z
lastmod: null
thumbnail: ""
draft: false
tags: []
categories: []
modules: ""
---
Để push code lên GitHub từ máy tính Windows 10, bạn cần có Git được cài đặt và một kho lưu trữ (repository) trên GitHub. Dưới đây là hướng dẫn chi tiết từng bước:

### Bước 1: Cài đặt Git

1. Tải Git từ trang [chính thức Git](https://git-scm.com/download/win).
2. Cài đặt Git bằng cách làm theo hướng dẫn trên màn hình. Bạn có thể chọn các tùy chọn mặc định.

### Bước 2: Tạo kho lưu trữ trên GitHub

1. Đăng nhập vào tài khoản GitHub của bạn.
2. Nhấp vào nút **+** ở góc trên bên phải và chọn **New repository**.
3. Điền thông tin cần thiết:
   - **Repository name**: Tên kho lưu trữ.
   - **Description**: Mô tả (tùy chọn).
   - Chọn **Public** hoặc **Private**.
4. Nhấp vào **Create repository**.

### Bước 3: Chuẩn bị code trên máy tính

1. Mở Command Prompt hoặc PowerShell.
2. Điều hướng đến thư mục chứa dự án của bạn bằng lệnh `cd`. Ví dụ:

   ```bash
   cd C:\path\to\your\project
   ```

### Bước 4: Khởi tạo Git trong thư mục dự án

Nếu thư mục dự án chưa được khởi tạo là một kho lưu trữ Git, hãy chạy lệnh sau:

```bash
git init
```

### Bước 5: Thêm remote repository

Thêm liên kết đến kho lưu trữ trên GitHub bằng lệnh sau (thay `USERNAME` và `REPO_NAME` bằng tên người dùng và tên kho lưu trữ của bạn):

```bash
git remote add origin https://github.com/USERNAME/REPO_NAME.git
```

### Bước 6: Thêm và commit code

1. Thêm tất cả các tệp trong thư mục vào kho lưu trữ Git:

   ```bash
   git add .
   ```

2. Commit các thay đổi với một thông điệp:

   ```bash
   git commit -m "Thông điệp commit của bạn"
   ```

### Bước 7: Push code lên GitHub

Cuối cùng, bạn có thể push code lên GitHub bằng lệnh sau:

```bash
git push -u origin master
```

### Lưu ý

- Nếu bạn đang sử dụng nhánh khác ngoài `master` (ví dụ như `main`), thay thế `master` bằng tên nhánh bạn đang sử dụng.
- Nếu bạn được yêu cầu nhập tên người dùng và mật khẩu GitHub, hãy nhập thông tin đăng nhập của bạn.

### Bước 8: Kiểm tra trên GitHub

Sau khi hoàn thành các bước trên, kiểm tra kho lưu trữ trên GitHub để xác nhận rằng mã nguồn đã được đẩy thành công.

### Kết luận

Bây giờ bạn đã biết cách push code từ máy tính Windows 10 lên GitHub! Bạn có thể lặp lại quy trình này mỗi khi có thay đổi trong dự án của mình.