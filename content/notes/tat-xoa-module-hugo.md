---
author: Khôi Lê
title: cách để xóa hoặc tắt module trong Hugo
nested: true
---
cách để xóa hoặc tắt module trong Hugo:

1. Xóa module hoàn toàn:

```bash
# Xóa module cụ thể
hugo mod clean --all [đường dẫn module]

# Xóa tất cả modules
hugo mod clean --all
```

2. Tắt module tạm thời:
- Mở file `config.toml` (hoặc config.yaml/config.json)
- Tìm phần module config và comment out hoặc xóa module không muốn sử dụng:

```toml
# Trước
[module]
  [[module.imports]]
    path = "github.com/user/module-name"
    disable = false

# Sau (Cách 1: Đặt disable = true)
[module]
  [[module.imports]]
    path = "github.com/user/module-name" 
    disable = true

# Sau (Cách 2: Comment out toàn bộ phần import)
[module]
  # [[module.imports]]
  #   path = "github.com/user/module-name"
  #   disable = false
```

3. Xóa module khỏi go.mod:
- Mở file `go.mod`
- Xóa dòng require của module không muốn dùng:

```go
// Trước
require (
    github.com/user/module-name v0.16.0
)

// Sau (xóa dòng require của module)
require (
    // đã xóa module
)
```

4. Dọn dẹp sau khi xóa module:

```bash
# Xóa cache
hugo mod clean

# Xóa vendored modules
rm -rf _vendor

# Cập nhật go.mod và go.sum
hugo mod tidy
```

5. Nếu dùng npm, có thể xóa dependencies liên quan trong package.json:

```json
{
  "dependencies": {
    // Xóa dòng module không cần thiết
  }
}
```

Sau đó chạy:
```bash 
npm install
```

6. Kiểm tra modules hiện có:

```bash
# Liệt kê tất cả modules
hugo mod graph

# Kiểm tra status modules  
hugo mod verify
```

Lưu ý quan trọng:
- Backup dữ liệu trước khi xóa module
- Kiểm tra dependencies để tránh lỗi khi xóa module
- Test lại site sau khi xóa module
- Cần rebuild site sau khi thay đổi modules
- Một số module có thể là required dependencies của theme, cần xem kỹ docs

Bạn nên làm theo thứ tự:
1. Backup
2. Tắt module trong config 
3. Xóa khỏi go.mod
4. Dọn dẹp cache và vendors
5. Test lại site
6. Commit thay đổi

Bạn cần xóa module nào cụ thể? Tôi có thể giúp bạn kiểm tra và tắt/xóa module đó an toàn.