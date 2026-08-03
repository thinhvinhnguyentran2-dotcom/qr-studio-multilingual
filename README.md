# QR Studio v1.3.0 — Full source code

QR Studio là ứng dụng tạo mã QR đa ngôn ngữ chạy hoàn toàn trên GitHub Pages, không cần backend hay cơ sở dữ liệu.

## Nội dung có trong bản này

- 4 ngôn ngữ: Tiếng Việt, 日本語, English và नेपाली.
- 8 loại QR: văn bản, URL, Wi‑Fi, email, điện thoại, SMS, vị trí và vCard.
- 50 preset QR theo nhiều ngành nghề.
- 8 hình dạng module QR.
- 12 mẫu label và khung QR.
- Tùy chỉnh màu QR, màu nền, kích thước, mức sửa lỗi và logo.
- Tải PNG, SVG, sao chép, chia sẻ và lưu lịch sử trên thiết bị.
- Giao diện sáng/tối và full responsive.
- Nút cài ứng dụng luôn hiển thị khi chưa chạy ở chế độ PWA.
- Hướng dẫn cài riêng cho Android, iPhone/iPad và trình duyệt khác.
- Chính sách sử dụng hiển thị ngay gần đầu trang, có bản đầy đủ trong cửa sổ riêng và file `USAGE_POLICY.md`.
- Service Worker v1.3.0 sử dụng network-first để hạn chế tình trạng website giữ phiên bản cũ.

## Chạy thử trong VS Code

Mở Terminal tại thư mục dự án:

```cmd
py -m http.server 5500
```

Mở:

```text
http://localhost:5500
```

## Cập nhật repository hiện tại

1. Giải nén bản full.
2. Chép toàn bộ file bên trong `qr-studio-multilingual` đè vào repository hiện tại.
3. Không xóa thư mục `.git`.
4. Chạy `PUSH_TO_GITHUB.bat`, hoặc dùng:

```cmd
git add -A
git commit -m "Release QR Studio v1.3.0"
git push origin main
```

Theo dõi GitHub Pages:

```cmd
gh run list --workflow deploy-pages.yml --limit 5
```

Website:

```text
https://thinhvinhnguyentran2-dotcom.github.io/qr-studio-multilingual/
```

## Khi điện thoại vẫn hiển thị bản cũ

- Đóng hoàn toàn tab hoặc PWA cũ rồi mở lại.
- Trên Chrome Android: vào thông tin trang → Bộ nhớ → Xóa dữ liệu trang.
- Trên iPhone: đóng Safari, mở lại link; nếu đã thêm vào Màn hình chính thì xóa biểu tượng cũ và cài lại.
- Có thể thử bằng tab ẩn danh để xác nhận phiên bản mới đã được triển khai.

## Quyền riêng tư và trách nhiệm sử dụng

Nội dung QR được xử lý trong trình duyệt. Người dùng phải sử dụng đúng pháp luật và tự chịu trách nhiệm về nội dung, đường dẫn, logo, bản quyền và hậu quả phát sinh từ mã QR mình tạo. Xem `USAGE_POLICY.md`.

## Giấy phép

MIT License. Thư viện `qrcode-generator` được phát hành theo MIT License.
