---
title: Khi mạng chậm. Git clone bị lõi
description: ""
date: 2024-10-29T14:38:42.914Z
lastmod: null
thumbnail: ""
draft: false
tags: []
categories: []
modules: ""
---
Tải file zip và giải nén về máy tính. Thay đổi tên folder ( xoá branch) 
Để làm việc với một repository Git từ xa mà không cần phải clone, bạn có thể thực hiện các bước sau:

### 1. **Tạo thư mục local và khởi tạo Git**
   - Tạo một thư mục trống trong máy của bạn:
     ```bash
     mkdir my_project
     cd my_project
     ```
   - Khởi tạo Git trong thư mục này:
     ```bash
     git init
     ```

### 2. **Kết nối đến repository từ xa**
   - Thêm URL của repository Git từ xa:
     ```bash
     git remote add origin <URL-repository>
     ```

### 3. **Lấy thông tin nhánh (branch)**
   - Fetch thông tin các nhánh từ xa:
     ```bash
     git fetch origin
     ```
   - Tạo và theo dõi nhánh bạn muốn làm việc:
     ```bash
     git checkout -b <branch-name> origin/<branch-name>
     ```

### 4. **Thêm, chỉnh sửa và commit file**
   - Thêm hoặc chỉnh sửa file trong thư mục local.
   - Sau khi chỉnh sửa, thêm file vào staged area:
     ```bash
     git add <file-name>
     ```
   - Commit thay đổi:
     ```bash
     git commit -m "Mô tả thay đổi"
     ```

### 5. **Push thay đổi lên repository từ xa**
   - Push các thay đổi lên nhánh từ xa:
     ```bash
     git push origin <branch-name>
     ```

---

### Một số lưu ý:
- Nếu repository từ xa yêu cầu xác thực, bạn cần có thông tin đăng nhập hoặc SSH key được thiết lập.
- Nếu branch chưa tồn tại trên remote, bạn cần tạo branch bằng lệnh:
  ```bash
  git push -u origin <branch-name>
  ```

Tổng hợp lệnh

Bằng cách này, bạn không cần phải clone toàn bộ repository mà chỉ làm việc với các file cần thiết.
# Tạo thư mục và chuyển vào thư mục đó
mkdir folder repo
cd folder repo

# Khởi tạo Git và kết nối đến repository từ xa
git init
git remote add origin https: // github(.)com/user/git-repo.git

# Lấy thông tin nhánh từ repository từ xa
git fetch origin
git checkout -b main origin/main  # Thay "main" bằng tên nhánh bạn muốn làm việc, nếu khác.

# Chỉnh sửa file, thêm file, và commit thay đổi
echo "Hello Git" > example.txt   # Tạo file ví dụ (có thể bỏ qua bước này)
git add .
git commit -m "First commit from local"

# Push thay đổi lên repository từ xa
git push origin main

## Nếu bị xung đột:

git pull origin main --rebase
# Giải quyết xung đột nếu có
git add <file-bị-xung-đột>
git rebase --continue
git push origin main
