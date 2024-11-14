---
title: Lỗi 'rimraf' khi chạy npm start run
description: ""
date: 2024-10-29T14:38:42.914Z
lastmod: null
thumbnail: ""
draft: false
tags: []
categories: []
modules: ""
---
Đây là lỗi khi lệnh `rimraf` không được nhận diện trong hệ thống. Rimraf là một package của Node.js dùng để xóa thư mục và file một cách đệ quy.

Có 3 cách khắc phục:

1. Cài đặt rimraf globally:
```bash
npm install -g rimraf
```

2. Sử dụng npx để chạy rimraf:
```bash 
npx rimraf <tên_thư_mục>
```

3. Cài đặt rimraf như một dev dependency trong project:
```bash
npm install rimraf --save-dev
```
Sau đó thêm vào phần scripts trong package.json:
```json
{
  "scripts": {
    "clean": "rimraf dist"
  }
}
```
Và chạy lệnh:
```bash
npm run clean
```

Bạn muốn tôi giải thích thêm về cách nào không?