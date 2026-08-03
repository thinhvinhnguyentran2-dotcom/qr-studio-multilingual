# QR Studio — Phần mềm tạo mã QR đa ngôn ngữ

QR Studio là ứng dụng web tĩnh, chạy trực tiếp trên GitHub Pages, không cần backend, cơ sở dữ liệu hoặc npm.

## Chức năng

- 4 ngôn ngữ: Tiếng Việt, 日本語, English, नेपाली.
- 8 loại QR: văn bản, URL, Wi‑Fi, email, điện thoại, SMS, vị trí và vCard.
- Tùy chỉnh màu QR, màu nền, kích thước, mức sửa lỗi và kiểu điểm.
- Thêm logo vào giữa QR; tự chuyển mức sửa lỗi sang H.
- Tải PNG hoặc SVG, sao chép và chia sẻ trên điện thoại.
- Lưu tối đa 12 QR trong LocalStorage của thiết bị.
- Giao diện sáng/tối, full responsive cho điện thoại, máy tính bảng và máy tính.
- PWA: có thể thêm vào màn hình chính và dùng lại sau lần truy cập đầu tiên.
- Tự động triển khai bằng GitHub Actions.

## Chạy thử trên Windows bằng VS Code

Mở Terminal tại thư mục dự án và chạy:

```cmd
py -m http.server 5500
```

Sau đó mở:

```text
http://localhost:5500
```

Không nên mở trực tiếp `index.html` bằng `file://` vì Service Worker chỉ hoạt động qua HTTP hoặc HTTPS.

## Đưa lên GitHub Pages

### 1. Tạo repository mới trên GitHub

Ví dụ tên repository:

```text
qr-studio-multilingual
```

### 2. Đẩy dự án lên GitHub

```cmd
git init
git add .
git commit -m "Create multilingual QR Studio"
git branch -M main
git remote add origin https://github.com/TEN_TAI_KHOAN/qr-studio-multilingual.git
git push -u origin main
```

### 3. Bật GitHub Pages

Trong repository:

1. Mở **Settings**.
2. Chọn **Pages**.
3. Tại **Build and deployment → Source**, chọn **GitHub Actions**.
4. Mở tab **Actions** và chờ workflow `Deploy QR Studio to GitHub Pages` hoàn tất.

Trang sẽ có dạng:

```text
https://TEN_TAI_KHOAN.github.io/qr-studio-multilingual/
```

## Cấu trúc dự án

```text
qr-studio-multilingual/
├── .github/workflows/deploy-pages.yml
├── assets/
│   ├── app.js
│   ├── qrcode.js
│   └── styles.css
├── icons/
│   ├── icon-192.png
│   ├── icon-512.png
│   └── icon-maskable-512.png
├── index.html
├── manifest.webmanifest
├── sw.js
├── .nojekyll
├── LICENSE
├── THIRD_PARTY_NOTICES.md
└── README.md
```

## Quyền riêng tư

Nội dung QR và lịch sử được xử lý bằng JavaScript trong trình duyệt. Lịch sử được lưu trong LocalStorage của thiết bị và không được gửi tới backend.

Thư viện mã nguồn mở `qrcode-generator` được đóng gói trực tiếp trong thư mục `assets`, vì vậy ứng dụng không phụ thuộc CDN hoặc dịch vụ bên ngoài khi chạy. Service Worker lưu toàn bộ tài nguyên cốt lõi để tiếp tục sử dụng khi ngoại tuyến sau lần truy cập đầu tiên.

## Lưu ý khi thiết kế QR

- Màu QR nên tương phản rõ với màu nền.
- Khi thêm logo, nên giữ mức sửa lỗi H.
- Logo không nên che quá 20% diện tích QR.
- Mã QR kiểu chấm tròn hoặc màu quá nhạt nên được kiểm tra bằng nhiều điện thoại trước khi in.

## Giấy phép

MIT License. Thư viện `qrcode-generator` cũng được phát hành theo MIT License.
