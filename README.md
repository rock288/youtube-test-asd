# Hướng dẫn cài đặt Chrome Extension dạng Developer từ local

## Bước 1: Mở trang quản lý tiện ích mở rộng

1. Mở Google Chrome.
2. Truy cập vào địa chỉ: `chrome://extensions/`
3. Bật **Chế độ dành cho nhà phát triển (Developer mode)** ở góc trên bên phải.

## Bước 2: Tải tiện ích mở rộng từ thư mục local

1. Nhấn nút **"Tải tiện ích chưa đóng gói" (Load unpacked)**.
2. Trong cửa sổ hiện ra, chọn **thư mục chứa mã nguồn extension của bạn** (thư mục này phải có file `manifest.json` bên trong).
3. Sau khi chọn, extension sẽ được cài đặt và hiển thị trong danh sách tiện ích.

## Bước 3: Kiểm tra hoạt động

- Nếu extension có popup, bạn sẽ thấy biểu tượng xuất hiện trên thanh công cụ.
- Click vào để kiểm tra popup hoặc mở DevTools để kiểm tra console.
- Nếu có lỗi, Chrome sẽ hiển thị thông báo ngay tại phần extension đã cài.

## Ghi chú

- Mỗi lần bạn thay đổi mã nguồn, hãy quay lại trang `chrome://extensions/` và nhấn nút **“Làm mới” (Refresh)** ở extension để áp dụng thay đổi.
