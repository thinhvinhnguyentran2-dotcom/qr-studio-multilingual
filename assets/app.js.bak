/* QR Studio — dependency-free UI, QR matrix supplied by qrcode-generator (MIT). */
(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const STORAGE = {
    language: 'qrstudio.language',
    theme: 'qrstudio.theme',
    history: 'qrstudio.history',
    state: 'qrstudio.state'
  };

  const LANGUAGES = {
    vi: { label: 'Tiếng Việt', flag: '🇻🇳', locale: 'vi-VN' },
    ja: { label: '日本語', flag: '🇯🇵', locale: 'ja-JP' },
    en: { label: 'English', flag: '🇬🇧', locale: 'en-US' },
    ne: { label: 'नेपाली', flag: '🇳🇵', locale: 'ne-NP' }
  };

  const translations = {
    vi: {
      brandTagline: 'Nhanh • Riêng tư • Miễn phí', installApp: 'Cài ứng dụng', heroEyebrow: 'Không cần đăng ký',
      heroTitle: 'Tạo mã QR đẹp trong vài giây', heroDescription: 'Chọn nội dung, tùy chỉnh thiết kế và tải xuống. Mọi dữ liệu được xử lý trực tiếp trên thiết bị của bạn.',
      trustFree: 'Miễn phí', trustNoAccount: 'Không tài khoản', trustPrivate: 'Không gửi dữ liệu', chooseType: 'Chọn loại mã QR', chooseTypeHint: 'Bạn muốn chia sẻ nội dung gì?',
      enterContent: 'Nhập nội dung', enterContentHint: 'Điền thông tin sẽ được lưu trong mã QR.', customize: 'Tùy chỉnh thiết kế', customizeHint: 'Màu sắc, kích thước và logo.',
      resetStyle: 'Đặt lại', foregroundColor: 'Màu mã QR', backgroundColor: 'Màu nền', qrSize: 'Kích thước', errorCorrection: 'Khả năng sửa lỗi', moduleStyle: 'Kiểu điểm',
      styleSquare: 'Vuông', styleRounded: 'Bo tròn', styleDots: 'Chấm tròn', addLogo: 'Thêm logo ở giữa', chooseImage: 'Chọn ảnh', noImageSelected: 'Chưa chọn ảnh',
      logoHint: 'Nên dùng mức sửa lỗi H và logo nhỏ hơn 20% mã QR.', livePreview: 'Xem trước trực tiếp', previewEmptyTitle: 'Mã QR sẽ hiện ở đây', previewEmptyHint: 'Nhập nội dung để bắt đầu',
      generateSave: 'Tạo và lưu vào lịch sử', copy: 'Sao chép', share: 'Chia sẻ', privacyTitle: 'Dữ liệu riêng tư', privacyText: 'Mọi xử lý diễn ra trên thiết bị. Không có dữ liệu nào được tải lên máy chủ.',
      localHistory: 'Lưu cục bộ', historyTitle: 'Lịch sử gần đây', historyHint: 'Tối đa 12 mã QR được lưu trên thiết bị này.', clearHistory: 'Xóa lịch sử', historyEmptyTitle: 'Chưa có mã QR nào', historyEmptyHint: 'Mã QR bạn lưu sẽ xuất hiện tại đây.',
      featureFastTitle: 'Tạo tức thì', featureFastText: 'Xem trước cập nhật ngay khi nhập.', featureResponsiveTitle: 'Tối ưu điện thoại', featureResponsiveText: 'Giao diện full responsive trên mọi màn hình.',
      featureOfflineTitle: 'Có thể cài đặt', featureOfflineText: 'Thêm vào màn hình chính như một ứng dụng.', featureLanguageTitle: '4 ngôn ngữ', featureLanguageText: 'Việt, Nhật, Anh và Nepal.',
      footerTagline: 'Tạo QR miễn phí cho mọi người', footerOpenSource: 'Mã nguồn mở, triển khai trên GitHub Pages.',
      typeText: 'Văn bản', typeUrl: 'Liên kết', typeWifi: 'Wi‑Fi', typeEmail: 'Email', typePhone: 'Điện thoại', typeSms: 'SMS', typeLocation: 'Vị trí', typeVcard: 'Danh thiếp',
      hintText: 'Nhập đoạn văn hoặc thông tin bất kỳ.', hintUrl: 'Tạo QR mở một trang web.', hintWifi: 'Kết nối Wi‑Fi mà không cần nhập mật khẩu.', hintEmail: 'Soạn sẵn một email cho người quét.', hintPhone: 'Gọi nhanh đến một số điện thoại.', hintSms: 'Soạn sẵn tin nhắn SMS.', hintLocation: 'Mở tọa độ trên ứng dụng bản đồ.', hintVcard: 'Lưu thông tin liên hệ vào danh bạ.',
      labelText: 'Nội dung', labelUrl: 'Địa chỉ website', labelNetwork: 'Tên Wi‑Fi (SSID)', labelPassword: 'Mật khẩu', labelSecurity: 'Bảo mật', labelHidden: 'Mạng ẩn',
      labelEmail: 'Địa chỉ email', labelSubject: 'Tiêu đề', labelMessage: 'Nội dung tin nhắn', labelPhone: 'Số điện thoại', labelLatitude: 'Vĩ độ', labelLongitude: 'Kinh độ', labelMapLabel: 'Tên địa điểm',
      labelFirstName: 'Tên', labelLastName: 'Họ', labelCompany: 'Công ty', labelJobTitle: 'Chức vụ', labelWebsite: 'Website', labelAddress: 'Địa chỉ', labelNote: 'Ghi chú',
      placeholderText: 'Ví dụ: Cảm ơn bạn đã sử dụng QR Studio!', placeholderUrl: 'https://example.com', placeholderNetwork: 'Tên mạng Wi‑Fi', placeholderPassword: 'Mật khẩu Wi‑Fi',
      placeholderEmail: 'name@example.com', placeholderSubject: 'Tiêu đề email', placeholderMessage: 'Nhập nội dung...', placeholderPhone: '+81 90 1234 5678', placeholderLatitude: '35.6895', placeholderLongitude: '139.6917', placeholderMapLabel: 'Tokyo, Japan',
      placeholderFirstName: 'Taro', placeholderLastName: 'Yamada', placeholderCompany: 'ABC Company', placeholderJobTitle: 'Sales Manager', placeholderWebsite: 'https://example.com', placeholderAddress: 'Địa chỉ đầy đủ', placeholderNote: 'Thông tin bổ sung',
      securityWpa: 'WPA/WPA2/WPA3', securityWep: 'WEP', securityNone: 'Không mật khẩu', required: 'Trường này là bắt buộc.', invalidUrl: 'Địa chỉ website không hợp lệ.', invalidEmail: 'Địa chỉ email không hợp lệ.', invalidPhone: 'Số điện thoại không hợp lệ.', invalidCoordinates: 'Tọa độ không hợp lệ.',
      qrTooLong: 'Nội dung quá dài đối với mức sửa lỗi hiện tại. Hãy rút ngắn hoặc chọn mức L/M.', libraryUnavailable: 'Không tải được thư viện tạo QR. Hãy kiểm tra kết nối Internet và tải lại trang.',
      saved: 'Đã lưu mã QR vào lịch sử.', downloaded: 'Đã tải xuống tệp.', copied: 'Đã sao chép hình ảnh QR.', copiedText: 'Trình duyệt không hỗ trợ sao chép ảnh; nội dung QR đã được sao chép.', copyFailed: 'Không thể sao chép trên trình duyệt này.', shared: 'Đã mở bảng chia sẻ.', shareUnsupported: 'Thiết bị không hỗ trợ chia sẻ tệp; nội dung đã được sao chép.',
      historyCleared: 'Đã xóa lịch sử.', historyRestored: 'Đã khôi phục mã QR.', historyDelete: 'Xóa', historyRestore: 'Mở lại', confirmClear: 'Xóa toàn bộ lịch sử QR trên thiết bị này?', logoSelected: 'Đã chọn: {name}', logoRemoved: 'Đã xóa logo.', invalidImage: 'Tệp ảnh không hợp lệ hoặc quá lớn.',
      styleReset: 'Đã đặt lại kiểu QR.', installReady: 'Ứng dụng đã sẵn sàng để cài đặt.', installed: 'Đã cài đặt ứng dụng.', payloadBytes: '{count} ký tự', today: 'Hôm nay', yesterday: 'Hôm qua',
      defaultTitleText: 'Văn bản', defaultTitleUrl: 'Liên kết website', defaultTitleWifi: 'Mạng Wi‑Fi', defaultTitleEmail: 'Email', defaultTitlePhone: 'Số điện thoại', defaultTitleSms: 'Tin nhắn SMS', defaultTitleLocation: 'Vị trí', defaultTitleVcard: 'Danh thiếp'
    },
    ja: {
      brandTagline: '高速 • 安全 • 無料', installApp: 'アプリをインストール', heroEyebrow: '登録不要',
      heroTitle: '美しいQRコードを数秒で作成', heroDescription: '内容を選び、デザインを調整してダウンロード。すべてのデータは端末上で処理されます。',
      trustFree: '完全無料', trustNoAccount: 'アカウント不要', trustPrivate: 'データ送信なし', chooseType: 'QRコードの種類を選択', chooseTypeHint: '何を共有しますか？',
      enterContent: '内容を入力', enterContentHint: 'QRコードに保存する情報を入力してください。', customize: 'デザインを調整', customizeHint: '色、サイズ、ロゴを設定できます。',
      resetStyle: 'リセット', foregroundColor: 'QRの色', backgroundColor: '背景色', qrSize: 'サイズ', errorCorrection: '誤り訂正レベル', moduleStyle: 'ドット形式',
      styleSquare: '四角', styleRounded: '角丸', styleDots: '丸', addLogo: '中央にロゴを追加', chooseImage: '画像を選択', noImageSelected: '画像未選択',
      logoHint: '誤り訂正H、ロゴはQR全体の20%未満を推奨します。', livePreview: 'ライブプレビュー', previewEmptyTitle: 'QRコードがここに表示されます', previewEmptyHint: '内容を入力して開始',
      generateSave: '作成して履歴に保存', copy: 'コピー', share: '共有', privacyTitle: 'プライバシー保護', privacyText: '処理はすべて端末上で行われ、データはサーバーへ送信されません。',
      localHistory: '端末内保存', historyTitle: '最近の履歴', historyHint: 'この端末に最大12件保存します。', clearHistory: '履歴を削除', historyEmptyTitle: '履歴はまだありません', historyEmptyHint: '保存したQRコードがここに表示されます。',
      featureFastTitle: '即時作成', featureFastText: '入力に合わせてプレビューを更新。', featureResponsiveTitle: 'スマホ最適化', featureResponsiveText: 'すべての画面サイズに完全対応。',
      featureOfflineTitle: 'インストール可能', featureOfflineText: 'ホーム画面にアプリとして追加。', featureLanguageTitle: '4言語対応', featureLanguageText: 'ベトナム語、日本語、英語、ネパール語。',
      footerTagline: 'すべての人のための無料QR作成', footerOpenSource: 'オープンソース・GitHub Pages対応。',
      typeText: 'テキスト', typeUrl: 'URL', typeWifi: 'Wi‑Fi', typeEmail: 'メール', typePhone: '電話', typeSms: 'SMS', typeLocation: '位置情報', typeVcard: '連絡先',
      hintText: '自由な文章や情報を入力します。', hintUrl: 'Webページを開くQRを作成します。', hintWifi: 'パスワード入力なしでWi‑Fiに接続します。', hintEmail: 'メールの宛先と本文を設定します。', hintPhone: '電話番号へすぐ発信します。', hintSms: 'SMSの宛先と本文を設定します。', hintLocation: '地図アプリで座標を開きます。', hintVcard: '連絡先を端末のアドレス帳へ保存します。',
      labelText: 'テキスト', labelUrl: 'WebサイトURL', labelNetwork: 'Wi‑Fi名（SSID）', labelPassword: 'パスワード', labelSecurity: 'セキュリティ', labelHidden: '非公開ネットワーク',
      labelEmail: 'メールアドレス', labelSubject: '件名', labelMessage: 'メッセージ', labelPhone: '電話番号', labelLatitude: '緯度', labelLongitude: '経度', labelMapLabel: '場所名',
      labelFirstName: '名', labelLastName: '姓', labelCompany: '会社名', labelJobTitle: '役職', labelWebsite: 'Webサイト', labelAddress: '住所', labelNote: 'メモ',
      placeholderText: '例：QR Studioをご利用いただきありがとうございます。', placeholderUrl: 'https://example.com', placeholderNetwork: 'Wi‑Fiネットワーク名', placeholderPassword: 'Wi‑Fiパスワード',
      placeholderEmail: 'name@example.com', placeholderSubject: 'メール件名', placeholderMessage: '本文を入力...', placeholderPhone: '+81 90 1234 5678', placeholderLatitude: '35.6895', placeholderLongitude: '139.6917', placeholderMapLabel: '東京、日本',
      placeholderFirstName: '太郎', placeholderLastName: '山田', placeholderCompany: 'ABC株式会社', placeholderJobTitle: '営業マネージャー', placeholderWebsite: 'https://example.com', placeholderAddress: '住所を入力', placeholderNote: '補足情報',
      securityWpa: 'WPA/WPA2/WPA3', securityWep: 'WEP', securityNone: 'パスワードなし', required: '必須項目です。', invalidUrl: '有効なURLを入力してください。', invalidEmail: '有効なメールアドレスを入力してください。', invalidPhone: '有効な電話番号を入力してください。', invalidCoordinates: '有効な座標を入力してください。',
      qrTooLong: '内容が長すぎます。短くするか、誤り訂正レベルをL/Mに変更してください。', libraryUnavailable: 'QRライブラリを読み込めません。インターネット接続を確認して再読み込みしてください。',
      saved: '履歴に保存しました。', downloaded: 'ファイルをダウンロードしました。', copied: 'QR画像をコピーしました。', copiedText: '画像コピー非対応のため、QR内容をコピーしました。', copyFailed: 'このブラウザではコピーできません。', shared: '共有画面を開きました。', shareUnsupported: 'ファイル共有に非対応のため、内容をコピーしました。',
      historyCleared: '履歴を削除しました。', historyRestored: 'QRコードを復元しました。', historyDelete: '削除', historyRestore: '開く', confirmClear: 'この端末のQR履歴をすべて削除しますか？', logoSelected: '選択済み：{name}', logoRemoved: 'ロゴを削除しました。', invalidImage: '画像が無効、またはサイズが大きすぎます。',
      styleReset: 'QRスタイルをリセットしました。', installReady: 'アプリをインストールできます。', installed: 'アプリをインストールしました。', payloadBytes: '{count}文字', today: '今日', yesterday: '昨日',
      defaultTitleText: 'テキスト', defaultTitleUrl: 'Webサイト', defaultTitleWifi: 'Wi‑Fi', defaultTitleEmail: 'メール', defaultTitlePhone: '電話番号', defaultTitleSms: 'SMS', defaultTitleLocation: '位置情報', defaultTitleVcard: '連絡先'
    },
    en: {
      brandTagline: 'Fast • Private • Free', installApp: 'Install app', heroEyebrow: 'No sign-up required',
      heroTitle: 'Create beautiful QR codes in seconds', heroDescription: 'Choose your content, customize the design, and download. All data is processed directly on your device.',
      trustFree: 'Free forever', trustNoAccount: 'No account', trustPrivate: 'No data upload', chooseType: 'Choose a QR code type', chooseTypeHint: 'What would you like to share?',
      enterContent: 'Enter your content', enterContentHint: 'Fill in the information that will be stored in the QR code.', customize: 'Customize the design', customizeHint: 'Colors, size, and logo.',
      resetStyle: 'Reset', foregroundColor: 'QR color', backgroundColor: 'Background color', qrSize: 'Size', errorCorrection: 'Error correction', moduleStyle: 'Module style',
      styleSquare: 'Square', styleRounded: 'Rounded', styleDots: 'Dots', addLogo: 'Add a center logo', chooseImage: 'Choose image', noImageSelected: 'No image selected',
      logoHint: 'Use error correction H and keep the logo under 20% of the QR code.', livePreview: 'Live preview', previewEmptyTitle: 'Your QR code will appear here', previewEmptyHint: 'Enter content to begin',
      generateSave: 'Generate and save to history', copy: 'Copy', share: 'Share', privacyTitle: 'Private by design', privacyText: 'Everything is processed on your device. No data is uploaded to a server.',
      localHistory: 'Stored locally', historyTitle: 'Recent history', historyHint: 'Up to 12 QR codes are stored on this device.', clearHistory: 'Clear history', historyEmptyTitle: 'No QR codes yet', historyEmptyHint: 'QR codes you save will appear here.',
      featureFastTitle: 'Instant generation', featureFastText: 'The preview updates as you type.', featureResponsiveTitle: 'Mobile optimized', featureResponsiveText: 'Fully responsive across every screen size.',
      featureOfflineTitle: 'Installable', featureOfflineText: 'Add it to your home screen like an app.', featureLanguageTitle: '4 languages', featureLanguageText: 'Vietnamese, Japanese, English, and Nepali.',
      footerTagline: 'Free QR creation for everyone', footerOpenSource: 'Open source and ready for GitHub Pages.',
      typeText: 'Text', typeUrl: 'URL', typeWifi: 'Wi‑Fi', typeEmail: 'Email', typePhone: 'Phone', typeSms: 'SMS', typeLocation: 'Location', typeVcard: 'Contact',
      hintText: 'Enter any text or information.', hintUrl: 'Create a QR code that opens a website.', hintWifi: 'Join Wi‑Fi without typing the password.', hintEmail: 'Prepare an email for the scanner.', hintPhone: 'Call a phone number quickly.', hintSms: 'Prepare an SMS message.', hintLocation: 'Open coordinates in a map app.', hintVcard: 'Save contact details to an address book.',
      labelText: 'Content', labelUrl: 'Website address', labelNetwork: 'Wi‑Fi name (SSID)', labelPassword: 'Password', labelSecurity: 'Security', labelHidden: 'Hidden network',
      labelEmail: 'Email address', labelSubject: 'Subject', labelMessage: 'Message', labelPhone: 'Phone number', labelLatitude: 'Latitude', labelLongitude: 'Longitude', labelMapLabel: 'Place name',
      labelFirstName: 'First name', labelLastName: 'Last name', labelCompany: 'Company', labelJobTitle: 'Job title', labelWebsite: 'Website', labelAddress: 'Address', labelNote: 'Note',
      placeholderText: 'Example: Thank you for using QR Studio!', placeholderUrl: 'https://example.com', placeholderNetwork: 'Wi‑Fi network name', placeholderPassword: 'Wi‑Fi password',
      placeholderEmail: 'name@example.com', placeholderSubject: 'Email subject', placeholderMessage: 'Enter your message...', placeholderPhone: '+81 90 1234 5678', placeholderLatitude: '35.6895', placeholderLongitude: '139.6917', placeholderMapLabel: 'Tokyo, Japan',
      placeholderFirstName: 'Taro', placeholderLastName: 'Yamada', placeholderCompany: 'ABC Company', placeholderJobTitle: 'Sales Manager', placeholderWebsite: 'https://example.com', placeholderAddress: 'Full address', placeholderNote: 'Additional details',
      securityWpa: 'WPA/WPA2/WPA3', securityWep: 'WEP', securityNone: 'No password', required: 'This field is required.', invalidUrl: 'Enter a valid website address.', invalidEmail: 'Enter a valid email address.', invalidPhone: 'Enter a valid phone number.', invalidCoordinates: 'Enter valid coordinates.',
      qrTooLong: 'The content is too long for the selected correction level. Shorten it or choose L/M.', libraryUnavailable: 'The QR library could not be loaded. Check your Internet connection and reload the page.',
      saved: 'QR code saved to history.', downloaded: 'File downloaded.', copied: 'QR image copied.', copiedText: 'Image copying is unavailable; the QR content was copied instead.', copyFailed: 'Copying is not available in this browser.', shared: 'Share sheet opened.', shareUnsupported: 'File sharing is unavailable; the content was copied instead.',
      historyCleared: 'History cleared.', historyRestored: 'QR code restored.', historyDelete: 'Delete', historyRestore: 'Open', confirmClear: 'Delete all QR history on this device?', logoSelected: 'Selected: {name}', logoRemoved: 'Logo removed.', invalidImage: 'The image is invalid or too large.',
      styleReset: 'QR style reset.', installReady: 'The app is ready to install.', installed: 'App installed.', payloadBytes: '{count} characters', today: 'Today', yesterday: 'Yesterday',
      defaultTitleText: 'Text', defaultTitleUrl: 'Website link', defaultTitleWifi: 'Wi‑Fi network', defaultTitleEmail: 'Email', defaultTitlePhone: 'Phone number', defaultTitleSms: 'SMS message', defaultTitleLocation: 'Location', defaultTitleVcard: 'Contact card'
    },
    ne: {
      brandTagline: 'छिटो • निजी • निःशुल्क', installApp: 'एप स्थापना गर्नुहोस्', heroEyebrow: 'दर्ता आवश्यक छैन',
      heroTitle: 'केही सेकेन्डमै सुन्दर QR कोड बनाउनुहोस्', heroDescription: 'सामग्री छान्नुहोस्, डिजाइन मिलाउनुहोस् र डाउनलोड गर्नुहोस्। सबै डेटा तपाईंको उपकरणमै प्रशोधन हुन्छ।',
      trustFree: 'सधैं निःशुल्क', trustNoAccount: 'खाता आवश्यक छैन', trustPrivate: 'डेटा अपलोड हुँदैन', chooseType: 'QR कोडको प्रकार छान्नुहोस्', chooseTypeHint: 'तपाईं के साझा गर्न चाहनुहुन्छ?',
      enterContent: 'सामग्री लेख्नुहोस्', enterContentHint: 'QR कोडमा राखिने जानकारी भर्नुहोस्।', customize: 'डिजाइन मिलाउनुहोस्', customizeHint: 'रङ, आकार र लोगो।',
      resetStyle: 'रिसेट', foregroundColor: 'QR को रङ', backgroundColor: 'पृष्ठभूमिको रङ', qrSize: 'आकार', errorCorrection: 'त्रुटि सुधार', moduleStyle: 'बिन्दु शैली',
      styleSquare: 'चौकोर', styleRounded: 'गोलो किनारा', styleDots: 'गोल बिन्दु', addLogo: 'बीचमा लोगो थप्नुहोस्', chooseImage: 'तस्बिर छान्नुहोस्', noImageSelected: 'तस्बिर छानिएको छैन',
      logoHint: 'त्रुटि सुधार H प्रयोग गर्नुहोस् र लोगो QR को 20% भन्दा सानो राख्नुहोस्।', livePreview: 'प्रत्यक्ष पूर्वावलोकन', previewEmptyTitle: 'QR कोड यहाँ देखिनेछ', previewEmptyHint: 'सुरु गर्न सामग्री लेख्नुहोस्',
      generateSave: 'बनाउनुहोस् र इतिहासमा राख्नुहोस्', copy: 'प्रतिलिपि', share: 'साझा', privacyTitle: 'निजी डेटा', privacyText: 'सबै काम उपकरणमै हुन्छ। कुनै डेटा सर्भरमा पठाइँदैन।',
      localHistory: 'उपकरणमै सुरक्षित', historyTitle: 'हालको इतिहास', historyHint: 'यस उपकरणमा अधिकतम 12 QR कोड राखिन्छ।', clearHistory: 'इतिहास मेटाउनुहोस्', historyEmptyTitle: 'अहिलेसम्म QR कोड छैन', historyEmptyHint: 'तपाईंले सुरक्षित गरेका QR कोड यहाँ देखिन्छन्।',
      featureFastTitle: 'तुरुन्तै तयार', featureFastText: 'टाइप गर्दा पूर्वावलोकन अपडेट हुन्छ।', featureResponsiveTitle: 'मोबाइलमैत्री', featureResponsiveText: 'सबै स्क्रिन आकारमा पूर्ण रूपमा मिल्छ।',
      featureOfflineTitle: 'स्थापना गर्न मिल्ने', featureOfflineText: 'एपजस्तै गृह स्क्रिनमा थप्नुहोस्।', featureLanguageTitle: '४ भाषा', featureLanguageText: 'भियतनामी, जापानी, अङ्ग्रेजी र नेपाली।',
      footerTagline: 'सबैका लागि निःशुल्क QR निर्माण', footerOpenSource: 'खुला स्रोत र GitHub Pages का लागि तयार।',
      typeText: 'पाठ', typeUrl: 'लिङ्क', typeWifi: 'Wi‑Fi', typeEmail: 'इमेल', typePhone: 'फोन', typeSms: 'SMS', typeLocation: 'स्थान', typeVcard: 'सम्पर्क',
      hintText: 'कुनै पनि पाठ वा जानकारी लेख्नुहोस्।', hintUrl: 'वेबसाइट खोल्ने QR बनाउनुहोस्।', hintWifi: 'पासवर्ड नलेखी Wi‑Fi जोड्नुहोस्।', hintEmail: 'स्क्यान गर्ने व्यक्तिका लागि इमेल तयार गर्नुहोस्।', hintPhone: 'फोन नम्बरमा छिटो कल गर्नुहोस्।', hintSms: 'SMS सन्देश तयार गर्नुहोस्।', hintLocation: 'नक्सा एपमा निर्देशाङ्क खोल्नुहोस्।', hintVcard: 'सम्पर्क विवरण फोनबुकमा राख्नुहोस्।',
      labelText: 'सामग्री', labelUrl: 'वेबसाइट ठेगाना', labelNetwork: 'Wi‑Fi नाम (SSID)', labelPassword: 'पासवर्ड', labelSecurity: 'सुरक्षा', labelHidden: 'लुकेको नेटवर्क',
      labelEmail: 'इमेल ठेगाना', labelSubject: 'विषय', labelMessage: 'सन्देश', labelPhone: 'फोन नम्बर', labelLatitude: 'अक्षांश', labelLongitude: 'देशान्तर', labelMapLabel: 'स्थानको नाम',
      labelFirstName: 'नाम', labelLastName: 'थर', labelCompany: 'कम्पनी', labelJobTitle: 'पद', labelWebsite: 'वेबसाइट', labelAddress: 'ठेगाना', labelNote: 'टिप्पणी',
      placeholderText: 'उदाहरण: QR Studio प्रयोग गर्नुभएकोमा धन्यवाद!', placeholderUrl: 'https://example.com', placeholderNetwork: 'Wi‑Fi नेटवर्कको नाम', placeholderPassword: 'Wi‑Fi पासवर्ड',
      placeholderEmail: 'name@example.com', placeholderSubject: 'इमेलको विषय', placeholderMessage: 'सन्देश लेख्नुहोस्...', placeholderPhone: '+81 90 1234 5678', placeholderLatitude: '35.6895', placeholderLongitude: '139.6917', placeholderMapLabel: 'टोकियो, जापान',
      placeholderFirstName: 'तारो', placeholderLastName: 'यामादा', placeholderCompany: 'ABC कम्पनी', placeholderJobTitle: 'बिक्री प्रबन्धक', placeholderWebsite: 'https://example.com', placeholderAddress: 'पूरा ठेगाना', placeholderNote: 'थप जानकारी',
      securityWpa: 'WPA/WPA2/WPA3', securityWep: 'WEP', securityNone: 'पासवर्ड छैन', required: 'यो विवरण आवश्यक छ।', invalidUrl: 'मान्य वेबसाइट ठेगाना लेख्नुहोस्।', invalidEmail: 'मान्य इमेल ठेगाना लेख्नुहोस्।', invalidPhone: 'मान्य फोन नम्बर लेख्नुहोस्।', invalidCoordinates: 'मान्य निर्देशाङ्क लेख्नुहोस्।',
      qrTooLong: 'छानिएको त्रुटि सुधार स्तरका लागि सामग्री धेरै लामो छ। छोटो बनाउनुहोस् वा L/M छान्नुहोस्।', libraryUnavailable: 'QR पुस्तकालय लोड हुन सकेन। इन्टरनेट जाँच गरेर पृष्ठ पुनः लोड गर्नुहोस्।',
      saved: 'QR कोड इतिहासमा सुरक्षित भयो।', downloaded: 'फाइल डाउनलोड भयो।', copied: 'QR तस्बिर प्रतिलिपि भयो।', copiedText: 'तस्बिर प्रतिलिपि उपलब्ध नभएकाले QR सामग्री प्रतिलिपि भयो।', copyFailed: 'यो ब्राउजरमा प्रतिलिपि उपलब्ध छैन।', shared: 'साझा गर्ने स्क्रिन खुल्यो।', shareUnsupported: 'फाइल साझा उपलब्ध छैन; सामग्री प्रतिलिपि भयो।',
      historyCleared: 'इतिहास मेटियो।', historyRestored: 'QR कोड पुनः खोलियो।', historyDelete: 'मेटाउनुहोस्', historyRestore: 'खोल्नुहोस्', confirmClear: 'यस उपकरणको सबै QR इतिहास मेटाउने?', logoSelected: 'छानिएको: {name}', logoRemoved: 'लोगो हटाइयो।', invalidImage: 'तस्बिर अमान्य वा धेरै ठूलो छ।',
      styleReset: 'QR शैली रिसेट भयो।', installReady: 'एप स्थापना गर्न तयार छ।', installed: 'एप स्थापना भयो।', payloadBytes: '{count} अक्षर', today: 'आज', yesterday: 'हिजो',
      defaultTitleText: 'पाठ', defaultTitleUrl: 'वेबसाइट लिङ्क', defaultTitleWifi: 'Wi‑Fi नेटवर्क', defaultTitleEmail: 'इमेल', defaultTitlePhone: 'फोन नम्बर', defaultTitleSms: 'SMS सन्देश', defaultTitleLocation: 'स्थान', defaultTitleVcard: 'सम्पर्क कार्ड'
    }
  };

  const typeDefinitions = [
    { id: 'text', icon: '≡', label: 'typeText', hint: 'hintText' },
    { id: 'url', icon: '↗', label: 'typeUrl', hint: 'hintUrl' },
    { id: 'wifi', icon: '⌁', label: 'typeWifi', hint: 'hintWifi' },
    { id: 'email', icon: '@', label: 'typeEmail', hint: 'hintEmail' },
    { id: 'phone', icon: '☎', label: 'typePhone', hint: 'hintPhone' },
    { id: 'sms', icon: '✉', label: 'typeSms', hint: 'hintSms' },
    { id: 'location', icon: '⌖', label: 'typeLocation', hint: 'hintLocation' },
    { id: 'vcard', icon: '▣', label: 'typeVcard', hint: 'hintVcard' }
  ];

  const initialTypeData = {
    text: { text: '' },
    url: { url: '' },
    wifi: { network: '', password: '', security: 'WPA', hidden: false },
    email: { email: '', subject: '', message: '' },
    phone: { phone: '' },
    sms: { phone: '', message: '' },
    location: { latitude: '', longitude: '', mapLabel: '' },
    vcard: { firstName: '', lastName: '', company: '', jobTitle: '', phone: '', email: '', website: '', address: '', note: '' }
  };

  const defaultSettings = {
    foreground: '#17152F',
    background: '#FFFFFF',
    size: 360,
    errorCorrection: 'M',
    moduleStyle: 'square'
  };

  const state = {
    language: localStorage.getItem(STORAGE.language) || detectLanguage(),
    theme: localStorage.getItem(STORAGE.theme) || detectTheme(),
    type: 'url',
    data: structuredCloneSafe(initialTypeData),
    settings: { ...defaultSettings },
    logoDataUrl: '',
    logoName: '',
    history: readHistory(),
    currentPayload: '',
    currentSvg: '',
    valid: false,
    renderToken: 0,
    deferredInstallPrompt: null
  };

  function structuredCloneSafe(value) {
    return typeof structuredClone === 'function' ? structuredClone(value) : JSON.parse(JSON.stringify(value));
  }

  function detectLanguage() {
    const lang = (navigator.language || 'vi').toLowerCase();
    if (lang.startsWith('ja')) return 'ja';
    if (lang.startsWith('ne')) return 'ne';
    if (lang.startsWith('en')) return 'en';
    return 'vi';
  }

  function detectTheme() {
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function t(key, params = {}) {
    let value = translations[state.language]?.[key] ?? translations.en[key] ?? key;
    Object.entries(params).forEach(([name, replacement]) => {
      value = value.replaceAll(`{${name}}`, String(replacement));
    });
    return value;
  }

  function applyLanguage() {
    document.documentElement.lang = state.language;
    document.title = state.language === 'ja' ? 'QR Studio — 無料QRコード作成' : state.language === 'ne' ? 'QR Studio — निःशुल्क QR कोड' : state.language === 'en' ? 'QR Studio — Free QR Code Generator' : 'QR Studio — Tạo mã QR miễn phí';
    $$('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      if (key) element.textContent = t(key);
    });
    $('#languageSelect').value = state.language;
    $('#languageFlag').textContent = LANGUAGES[state.language].flag;
    renderTypeTabs();
    renderFields();
    renderHistory();
    updatePayloadCount();
    updatePreview();
  }

  function applyTheme() {
    document.documentElement.dataset.theme = state.theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', state.theme === 'dark' ? '#171624' : '#6757f5');
  }

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
  }

  function renderTypeTabs() {
    $('#typeTabs').innerHTML = typeDefinitions.map((type) => `
      <button class="type-tab" type="button" role="tab" aria-selected="${state.type === type.id}" data-type="${type.id}">
        <span class="type-tab__icon" aria-hidden="true">${type.icon}</span>
        <span class="type-tab__label">${escapeHtml(t(type.label))}</span>
      </button>
    `).join('');

    $$('.type-tab', $('#typeTabs')).forEach((button) => {
      button.addEventListener('click', () => {
        state.type = button.dataset.type;
        renderTypeTabs();
        renderFields();
        saveWorkingState();
        updatePreview();
      });
    });
  }

  function field(config) {
    const value = state.data[state.type][config.name] ?? '';
    const classes = `field${config.full ? ' field--full' : ''}`;
    const required = config.required ? '<span class="required" aria-hidden="true">*</span>' : '';
    let control = '';
    if (config.control === 'textarea') {
      control = `<textarea id="field-${config.name}" name="${config.name}" placeholder="${escapeHtml(t(config.placeholder))}" ${config.required ? 'required' : ''}>${escapeHtml(value)}</textarea>`;
    } else if (config.control === 'select') {
      control = `<select id="field-${config.name}" name="${config.name}">${config.options.map((option) => `<option value="${escapeHtml(option.value)}" ${String(value) === option.value ? 'selected' : ''}>${escapeHtml(t(option.label))}</option>`).join('')}</select>`;
    } else if (config.control === 'checkbox') {
      return `<div class="field ${config.full ? 'field--full' : ''}"><div class="checkbox-field"><input id="field-${config.name}" name="${config.name}" type="checkbox" ${value ? 'checked' : ''}/><label for="field-${config.name}">${escapeHtml(t(config.label))}</label></div></div>`;
    } else {
      control = `<input id="field-${config.name}" name="${config.name}" type="${config.type || 'text'}" inputmode="${config.inputmode || ''}" autocomplete="${config.autocomplete || 'off'}" placeholder="${escapeHtml(t(config.placeholder))}" value="${escapeHtml(value)}" ${config.required ? 'required' : ''}/>`;
    }
    return `<div class="${classes}"><div class="field__label-row"><label for="field-${config.name}">${escapeHtml(t(config.label))}${required}</label></div>${control}<p class="field-error" id="error-${config.name}"></p></div>`;
  }

  function getFieldsForType(type) {
    switch (type) {
      case 'text': return [
        { name: 'text', label: 'labelText', placeholder: 'placeholderText', control: 'textarea', required: true, full: true }
      ];
      case 'url': return [
        { name: 'url', label: 'labelUrl', placeholder: 'placeholderUrl', type: 'url', inputmode: 'url', required: true, full: true }
      ];
      case 'wifi': return [
        { name: 'network', label: 'labelNetwork', placeholder: 'placeholderNetwork', required: true, full: true },
        { name: 'password', label: 'labelPassword', placeholder: 'placeholderPassword', type: 'text' },
        { name: 'security', label: 'labelSecurity', control: 'select', placeholder: '', options: [
          { value: 'WPA', label: 'securityWpa' }, { value: 'WEP', label: 'securityWep' }, { value: 'nopass', label: 'securityNone' }
        ]},
        { name: 'hidden', label: 'labelHidden', control: 'checkbox', placeholder: '', full: true }
      ];
      case 'email': return [
        { name: 'email', label: 'labelEmail', placeholder: 'placeholderEmail', type: 'email', inputmode: 'email', autocomplete: 'email', required: true, full: true },
        { name: 'subject', label: 'labelSubject', placeholder: 'placeholderSubject', full: true },
        { name: 'message', label: 'labelMessage', placeholder: 'placeholderMessage', control: 'textarea', full: true }
      ];
      case 'phone': return [
        { name: 'phone', label: 'labelPhone', placeholder: 'placeholderPhone', type: 'tel', inputmode: 'tel', autocomplete: 'tel', required: true, full: true }
      ];
      case 'sms': return [
        { name: 'phone', label: 'labelPhone', placeholder: 'placeholderPhone', type: 'tel', inputmode: 'tel', autocomplete: 'tel', required: true, full: true },
        { name: 'message', label: 'labelMessage', placeholder: 'placeholderMessage', control: 'textarea', full: true }
      ];
      case 'location': return [
        { name: 'latitude', label: 'labelLatitude', placeholder: 'placeholderLatitude', inputmode: 'decimal', required: true },
        { name: 'longitude', label: 'labelLongitude', placeholder: 'placeholderLongitude', inputmode: 'decimal', required: true },
        { name: 'mapLabel', label: 'labelMapLabel', placeholder: 'placeholderMapLabel', full: true }
      ];
      case 'vcard': return [
        { name: 'firstName', label: 'labelFirstName', placeholder: 'placeholderFirstName', autocomplete: 'given-name', required: true },
        { name: 'lastName', label: 'labelLastName', placeholder: 'placeholderLastName', autocomplete: 'family-name' },
        { name: 'company', label: 'labelCompany', placeholder: 'placeholderCompany', autocomplete: 'organization' },
        { name: 'jobTitle', label: 'labelJobTitle', placeholder: 'placeholderJobTitle', autocomplete: 'organization-title' },
        { name: 'phone', label: 'labelPhone', placeholder: 'placeholderPhone', type: 'tel', inputmode: 'tel', autocomplete: 'tel' },
        { name: 'email', label: 'labelEmail', placeholder: 'placeholderEmail', type: 'email', inputmode: 'email', autocomplete: 'email' },
        { name: 'website', label: 'labelWebsite', placeholder: 'placeholderWebsite', type: 'url', inputmode: 'url', full: true },
        { name: 'address', label: 'labelAddress', placeholder: 'placeholderAddress', autocomplete: 'street-address', full: true },
        { name: 'note', label: 'labelNote', placeholder: 'placeholderNote', control: 'textarea', full: true }
      ];
      default: return [];
    }
  }

  function renderFields() {
    const definition = typeDefinitions.find((item) => item.id === state.type);
    $('#contentHeading').textContent = t(definition?.label || 'enterContent');
    $('#contentHint').textContent = t(definition?.hint || 'enterContentHint');
    const fields = getFieldsForType(state.type);
    $('#dynamicFields').innerHTML = fields.map(field).join('');
    $$('input, textarea, select', $('#dynamicFields')).forEach((control) => {
      const eventName = control.type === 'checkbox' || control.tagName === 'SELECT' ? 'change' : 'input';
      control.addEventListener(eventName, () => {
        state.data[state.type][control.name] = control.type === 'checkbox' ? control.checked : control.value;
        clearFieldError(control.name);
        saveWorkingState();
        updatePreview();
      });
    });
  }

  function normalizeUrl(value) {
    const trimmed = value.trim();
    if (!trimmed) return '';
    if (/^[a-z][a-z0-9+.-]*:/i.test(trimmed)) return trimmed;
    return `https://${trimmed}`;
  }

  function escapeWifi(value) {
    return String(value || '').replace(/([\\;,:"])/g, '\\$1');
  }

  function escapeVcard(value) {
    return String(value || '').replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
  }

  function buildPayload() {
    const data = state.data[state.type];
    switch (state.type) {
      case 'text': return data.text.trim();
      case 'url': return normalizeUrl(data.url);
      case 'wifi': return `WIFI:T:${data.security};S:${escapeWifi(data.network)};P:${data.security === 'nopass' ? '' : escapeWifi(data.password)};H:${data.hidden ? 'true' : 'false'};;`;
      case 'email': {
        const query = new URLSearchParams();
        if (data.subject.trim()) query.set('subject', data.subject.trim());
        if (data.message.trim()) query.set('body', data.message.trim());
        const qs = query.toString();
        return `mailto:${data.email.trim()}${qs ? `?${qs}` : ''}`;
      }
      case 'phone': return `tel:${data.phone.trim().replace(/\s+/g, '')}`;
      case 'sms': return `SMSTO:${data.phone.trim().replace(/\s+/g, '')}:${data.message.trim()}`;
      case 'location': {
        const lat = data.latitude.trim();
        const lng = data.longitude.trim();
        const label = data.mapLabel.trim();
        return `geo:${lat},${lng}${label ? `?q=${lat},${lng}(${encodeURIComponent(label)})` : ''}`;
      }
      case 'vcard': {
        const lines = ['BEGIN:VCARD', 'VERSION:3.0'];
        lines.push(`N:${escapeVcard(data.lastName)};${escapeVcard(data.firstName)};;;`);
        lines.push(`FN:${escapeVcard([data.firstName, data.lastName].filter(Boolean).join(' '))}`);
        if (data.company.trim()) lines.push(`ORG:${escapeVcard(data.company.trim())}`);
        if (data.jobTitle.trim()) lines.push(`TITLE:${escapeVcard(data.jobTitle.trim())}`);
        if (data.phone.trim()) lines.push(`TEL;TYPE=CELL:${escapeVcard(data.phone.trim())}`);
        if (data.email.trim()) lines.push(`EMAIL:${escapeVcard(data.email.trim())}`);
        if (data.website.trim()) lines.push(`URL:${escapeVcard(normalizeUrl(data.website))}`);
        if (data.address.trim()) lines.push(`ADR;TYPE=WORK:;;${escapeVcard(data.address.trim())};;;;`);
        if (data.note.trim()) lines.push(`NOTE:${escapeVcard(data.note.trim())}`);
        lines.push('END:VCARD');
        return lines.join('\r\n');
      }
      default: return '';
    }
  }

  function validate(showErrors = false) {
    const data = state.data[state.type];
    const errors = {};
    const requiredFields = getFieldsForType(state.type).filter((item) => item.required);
    requiredFields.forEach((item) => {
      if (!String(data[item.name] ?? '').trim()) errors[item.name] = t('required');
    });

    if (state.type === 'url' && data.url.trim()) {
      try { new URL(normalizeUrl(data.url)); } catch { errors.url = t('invalidUrl'); }
    }
    if ((state.type === 'email' || state.type === 'vcard') && data.email?.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) errors.email = t('invalidEmail');
    if ((state.type === 'phone' || state.type === 'sms') && data.phone?.trim() && !/^[+\d][\d\s().-]{5,}$/.test(data.phone.trim())) errors.phone = t('invalidPhone');
    if (state.type === 'location' && data.latitude.trim() && data.longitude.trim()) {
      const lat = Number(data.latitude); const lng = Number(data.longitude);
      if (!Number.isFinite(lat) || !Number.isFinite(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
        errors.latitude = errors.longitude = t('invalidCoordinates');
      }
    }
    if (state.type === 'vcard' && data.website?.trim()) {
      try { new URL(normalizeUrl(data.website)); } catch { errors.website = t('invalidUrl'); }
    }

    if (showErrors) {
      getFieldsForType(state.type).forEach((item) => setFieldError(item.name, errors[item.name] || ''));
    }
    return { valid: Object.keys(errors).length === 0, errors };
  }

  function setFieldError(name, message) {
    const input = $(`#field-${CSS.escape(name)}`);
    const error = $(`#error-${CSS.escape(name)}`);
    if (input) input.setAttribute('aria-invalid', message ? 'true' : 'false');
    if (error) error.textContent = message;
  }

  function clearFieldError(name) { setFieldError(name, ''); }

  async function updatePreview() {
    updatePayloadCount();
    const payload = buildPayload();
    const validation = validate(false);
    state.currentPayload = payload;
    const placeholder = $('#qrPlaceholder');
    const message = $('#validationMessage');
    const buttons = ['#downloadPngBtn', '#downloadSvgBtn', '#copyBtn', '#shareBtn'];

    if (!payload || !validation.valid) {
      state.valid = false;
      state.currentSvg = '';
      placeholder.classList.remove('is-hidden');
      message.textContent = '';
      buttons.forEach((selector) => $(selector).disabled = true);
      clearCanvas();
      return;
    }

    if (typeof window.qrcode !== 'function') {
      state.valid = false;
      placeholder.classList.remove('is-hidden');
      message.textContent = t('libraryUnavailable');
      buttons.forEach((selector) => $(selector).disabled = true);
      return;
    }

    const token = ++state.renderToken;
    try {
      if (window.qrcode.stringToBytesFuncs?.['UTF-8']) window.qrcode.stringToBytes = window.qrcode.stringToBytesFuncs['UTF-8'];
      const qr = window.qrcode(0, state.settings.errorCorrection);
      qr.addData(payload, 'Byte');
      qr.make();
      await drawQrToCanvas(qr, token);
      if (token !== state.renderToken) return;
      state.currentSvg = buildSvg(qr);
      state.valid = true;
      placeholder.classList.add('is-hidden');
      message.textContent = '';
      buttons.forEach((selector) => $(selector).disabled = false);
    } catch (error) {
      console.warn('QR generation failed:', error);
      state.valid = false;
      state.currentSvg = '';
      placeholder.classList.remove('is-hidden');
      message.textContent = t('qrTooLong');
      buttons.forEach((selector) => $(selector).disabled = true);
      clearCanvas();
    }
  }

  function clearCanvas() {
    const canvas = $('#qrCanvas');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  function isFinderModule(row, col, count) {
    const topLeft = row <= 6 && col <= 6;
    const topRight = row <= 6 && col >= count - 7;
    const bottomLeft = row >= count - 7 && col <= 6;
    return topLeft || topRight || bottomLeft;
  }

  async function drawQrToCanvas(qr, token) {
    const canvas = $('#qrCanvas');
    const size = Number(state.settings.size);
    const count = qr.getModuleCount();
    const margin = 4;
    const total = count + margin * 2;
    const unit = size / total;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = true;
    ctx.fillStyle = state.settings.background;
    ctx.fillRect(0, 0, size, size);
    ctx.fillStyle = state.settings.foreground;

    for (let row = 0; row < count; row += 1) {
      for (let col = 0; col < count; col += 1) {
        if (!qr.isDark(row, col)) continue;
        const x = (col + margin) * unit;
        const y = (row + margin) * unit;
        const finder = isFinderModule(row, col, count);
        if (state.settings.moduleStyle === 'dots' && !finder) {
          ctx.beginPath();
          ctx.arc(x + unit / 2, y + unit / 2, unit * .43, 0, Math.PI * 2);
          ctx.fill();
        } else if (state.settings.moduleStyle === 'rounded' && !finder) {
          roundedRect(ctx, x + unit * .06, y + unit * .06, unit * .88, unit * .88, unit * .24);
          ctx.fill();
        } else {
          ctx.fillRect(Math.floor(x), Math.floor(y), Math.ceil(unit + .25), Math.ceil(unit + .25));
        }
      }
    }

    if (state.logoDataUrl) {
      const image = await loadImage(state.logoDataUrl);
      if (token !== state.renderToken) return;
      const logoSize = size * .17;
      const safeSize = logoSize * 1.28;
      const sx = (size - safeSize) / 2;
      const sy = (size - safeSize) / 2;
      ctx.fillStyle = state.settings.background;
      roundedRect(ctx, sx, sy, safeSize, safeSize, safeSize * .18);
      ctx.fill();
      const x = (size - logoSize) / 2;
      const y = (size - logoSize) / 2;
      ctx.save();
      roundedRect(ctx, x, y, logoSize, logoSize, logoSize * .15);
      ctx.clip();
      const ratio = Math.min(logoSize / image.width, logoSize / image.height);
      const width = image.width * ratio;
      const height = image.height * ratio;
      ctx.drawImage(image, x + (logoSize - width) / 2, y + (logoSize - height) / 2, width, height);
      ctx.restore();
    }
  }

  function roundedRect(ctx, x, y, width, height, radius) {
    const r = Math.min(radius, width / 2, height / 2);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + width, y, x + width, y + height, r);
    ctx.arcTo(x + width, y + height, x, y + height, r);
    ctx.arcTo(x, y + height, x, y, r);
    ctx.arcTo(x, y, x + width, y, r);
    ctx.closePath();
  }

  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = src;
    });
  }

  function buildSvg(qr) {
    const count = qr.getModuleCount();
    const margin = 4;
    const total = count + margin * 2;
    const fg = state.settings.foreground;
    const bg = state.settings.background;
    const style = state.settings.moduleStyle;
    const parts = [`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${total} ${total}" shape-rendering="geometricPrecision">`, `<rect width="${total}" height="${total}" fill="${bg}"/>`];
    for (let row = 0; row < count; row += 1) {
      for (let col = 0; col < count; col += 1) {
        if (!qr.isDark(row, col)) continue;
        const x = col + margin;
        const y = row + margin;
        const finder = isFinderModule(row, col, count);
        if (style === 'dots' && !finder) parts.push(`<circle cx="${x + .5}" cy="${y + .5}" r=".43" fill="${fg}"/>`);
        else if (style === 'rounded' && !finder) parts.push(`<rect x="${x + .06}" y="${y + .06}" width=".88" height=".88" rx=".24" fill="${fg}"/>`);
        else parts.push(`<rect x="${x}" y="${y}" width="1.02" height="1.02" fill="${fg}"/>`);
      }
    }
    if (state.logoDataUrl) {
      const safe = total * .20;
      const logo = total * .16;
      parts.push(`<rect x="${(total-safe)/2}" y="${(total-safe)/2}" width="${safe}" height="${safe}" rx="${safe*.16}" fill="${bg}"/>`);
      parts.push(`<image href="${escapeHtml(state.logoDataUrl)}" x="${(total-logo)/2}" y="${(total-logo)/2}" width="${logo}" height="${logo}" preserveAspectRatio="xMidYMid meet"/>`);
    }
    parts.push('</svg>');
    return parts.join('');
  }

  function updatePayloadCount() {
    const count = buildPayload().length;
    $('#payloadCount').textContent = t('payloadBytes', { count });
  }

  function getHistoryTitle() {
    const data = state.data[state.type];
    switch (state.type) {
      case 'text': return data.text.trim().slice(0, 60) || t('defaultTitleText');
      case 'url': return data.url.trim() || t('defaultTitleUrl');
      case 'wifi': return data.network.trim() || t('defaultTitleWifi');
      case 'email': return data.email.trim() || t('defaultTitleEmail');
      case 'phone': return data.phone.trim() || t('defaultTitlePhone');
      case 'sms': return data.phone.trim() || t('defaultTitleSms');
      case 'location': return data.mapLabel.trim() || `${data.latitude}, ${data.longitude}` || t('defaultTitleLocation');
      case 'vcard': return [data.firstName, data.lastName].filter(Boolean).join(' ') || t('defaultTitleVcard');
      default: return 'QR Code';
    }
  }

  function makeThumbnail() {
    const source = $('#qrCanvas');
    const thumb = document.createElement('canvas');
    thumb.width = 180; thumb.height = 180;
    const ctx = thumb.getContext('2d');
    ctx.fillStyle = state.settings.background;
    ctx.fillRect(0, 0, 180, 180);
    ctx.drawImage(source, 0, 0, 180, 180);
    return thumb.toDataURL('image/png');
  }

  function saveToHistory() {
    const validation = validate(true);
    if (!validation.valid || !state.valid) {
      const firstInvalid = $('[aria-invalid="true"]', $('#dynamicFields'));
      firstInvalid?.focus();
      if (!state.valid && !$('#validationMessage').textContent) $('#validationMessage').textContent = t('required');
      return;
    }
    const entry = {
      id: crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      createdAt: new Date().toISOString(),
      type: state.type,
      title: getHistoryTitle(),
      payload: state.currentPayload,
      data: structuredCloneSafe(state.data[state.type]),
      settings: { ...state.settings },
      logoDataUrl: state.logoDataUrl,
      logoName: state.logoName,
      thumbnail: makeThumbnail()
    };
    state.history = [entry, ...state.history].slice(0, 12);
    writeHistory();
    renderHistory();
    toast(t('saved'));
  }

  function readHistory() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE.history) || '[]');
      return Array.isArray(parsed) ? parsed.slice(0, 12) : [];
    } catch { return []; }
  }

  function writeHistory() {
    try {
      localStorage.setItem(STORAGE.history, JSON.stringify(state.history));
    } catch (error) {
      console.warn('History storage failed:', error);
      state.history = state.history.slice(0, 6);
      try { localStorage.setItem(STORAGE.history, JSON.stringify(state.history)); } catch {}
    }
  }

  function formatHistoryDate(iso) {
    const date = new Date(iso);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const target = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const days = Math.round((today - target) / 86400000);
    const time = new Intl.DateTimeFormat(LANGUAGES[state.language].locale, { hour: '2-digit', minute: '2-digit' }).format(date);
    if (days === 0) return `${t('today')} · ${time}`;
    if (days === 1) return `${t('yesterday')} · ${time}`;
    return new Intl.DateTimeFormat(LANGUAGES[state.language].locale, { dateStyle: 'medium', timeStyle: 'short' }).format(date);
  }

  function renderHistory() {
    const grid = $('#historyGrid');
    const empty = $('#historyEmpty');
    if (!state.history.length) {
      grid.innerHTML = '';
      empty.classList.remove('is-hidden');
      return;
    }
    empty.classList.add('is-hidden');
    grid.innerHTML = state.history.map((entry) => {
      const definition = typeDefinitions.find((item) => item.id === entry.type);
      return `<article class="history-card">
        <button class="history-card__restore" type="button" data-restore-id="${escapeHtml(entry.id)}" aria-label="${escapeHtml(t('historyRestore'))}"></button>
        <div class="history-card__image"><img src="${escapeHtml(entry.thumbnail)}" alt=""/></div>
        <div class="history-card__content">
          <span class="history-card__type">${escapeHtml(t(definition?.label || 'typeText'))}</span>
          <h3 title="${escapeHtml(entry.title)}">${escapeHtml(entry.title)}</h3>
          <p title="${escapeHtml(entry.payload)}">${escapeHtml(entry.payload)}</p>
          <time datetime="${escapeHtml(entry.createdAt)}">${escapeHtml(formatHistoryDate(entry.createdAt))}</time>
        </div>
        <button class="history-card__delete" type="button" data-delete-id="${escapeHtml(entry.id)}" aria-label="${escapeHtml(t('historyDelete'))}">×</button>
      </article>`;
    }).join('');

    $$('[data-restore-id]', grid).forEach((button) => button.addEventListener('click', () => restoreHistory(button.dataset.restoreId)));
    $$('[data-delete-id]', grid).forEach((button) => button.addEventListener('click', () => deleteHistory(button.dataset.deleteId)));
  }

  function restoreHistory(id) {
    const entry = state.history.find((item) => item.id === id);
    if (!entry) return;
    state.type = entry.type;
    state.data[entry.type] = structuredCloneSafe(entry.data);
    state.settings = { ...defaultSettings, ...entry.settings };
    state.logoDataUrl = entry.logoDataUrl || '';
    state.logoName = entry.logoName || '';
    syncSettingsControls();
    renderTypeTabs();
    renderFields();
    updateLogoStatus();
    saveWorkingState();
    updatePreview();
    document.querySelector('.workspace')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    toast(t('historyRestored'));
  }

  function deleteHistory(id) {
    state.history = state.history.filter((entry) => entry.id !== id);
    writeHistory();
    renderHistory();
  }

  function saveWorkingState() {
    const snapshot = { type: state.type, data: state.data, settings: state.settings, logoDataUrl: state.logoDataUrl, logoName: state.logoName };
    try { localStorage.setItem(STORAGE.state, JSON.stringify(snapshot)); } catch {}
  }

  function restoreWorkingState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE.state) || 'null');
      if (!saved || typeof saved !== 'object') return;
      if (typeDefinitions.some((item) => item.id === saved.type)) state.type = saved.type;
      state.data = { ...structuredCloneSafe(initialTypeData), ...(saved.data || {}) };
      state.settings = { ...defaultSettings, ...(saved.settings || {}) };
      state.logoDataUrl = typeof saved.logoDataUrl === 'string' ? saved.logoDataUrl : '';
      state.logoName = typeof saved.logoName === 'string' ? saved.logoName : '';
    } catch {}
  }

  function syncSettingsControls() {
    $('#foregroundColor').value = state.settings.foreground;
    $('#foregroundHex').value = state.settings.foreground.toUpperCase();
    $('#backgroundColor').value = state.settings.background;
    $('#backgroundHex').value = state.settings.background.toUpperCase();
    $('#qrSize').value = String(state.settings.size);
    $('#qrSizeValue').textContent = `${state.settings.size} px`;
    $('#errorCorrection').value = state.settings.errorCorrection;
    $('#moduleStyle').value = state.settings.moduleStyle;
  }

  function validHex(value) { return /^#[0-9A-F]{6}$/i.test(value); }

  function bindSettings() {
    const pairs = [
      { color: '#foregroundColor', hex: '#foregroundHex', key: 'foreground' },
      { color: '#backgroundColor', hex: '#backgroundHex', key: 'background' }
    ];
    pairs.forEach(({ color, hex, key }) => {
      $(color).addEventListener('input', () => {
        state.settings[key] = $(color).value.toUpperCase();
        $(hex).value = state.settings[key];
        saveWorkingState(); updatePreview();
      });
      $(hex).addEventListener('input', () => {
        const value = $(hex).value.trim();
        if (validHex(value)) {
          state.settings[key] = value.toUpperCase();
          $(color).value = state.settings[key];
          saveWorkingState(); updatePreview();
        }
      });
      $(hex).addEventListener('blur', () => { $(hex).value = state.settings[key].toUpperCase(); });
    });
    $('#qrSize').addEventListener('input', () => {
      state.settings.size = Number($('#qrSize').value);
      $('#qrSizeValue').textContent = `${state.settings.size} px`;
      saveWorkingState(); updatePreview();
    });
    $('#errorCorrection').addEventListener('change', () => {
      state.settings.errorCorrection = $('#errorCorrection').value;
      saveWorkingState(); updatePreview();
    });
    $('#moduleStyle').addEventListener('change', () => {
      state.settings.moduleStyle = $('#moduleStyle').value;
      saveWorkingState(); updatePreview();
    });
  }

  function updateLogoStatus() {
    $('#logoStatus').textContent = state.logoName ? t('logoSelected', { name: state.logoName }) : t('noImageSelected');
    $('#removeLogoBtn').classList.toggle('is-hidden', !state.logoDataUrl);
  }

  function handleLogoFile(file) {
    if (!file) return;
    if (!file.type.startsWith('image/') || file.size > 2 * 1024 * 1024) {
      toast(t('invalidImage')); return;
    }
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        await loadImage(reader.result);
        state.logoDataUrl = reader.result;
        state.logoName = file.name;
        if (state.settings.errorCorrection !== 'H') {
          state.settings.errorCorrection = 'H';
          $('#errorCorrection').value = 'H';
        }
        updateLogoStatus(); saveWorkingState(); updatePreview();
      } catch { toast(t('invalidImage')); }
    };
    reader.readAsDataURL(file);
  }

  function canvasBlob(type = 'image/png') {
    return new Promise((resolve) => $('#qrCanvas').toBlob(resolve, type, 1));
  }

  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url; anchor.download = filename;
    document.body.appendChild(anchor); anchor.click(); anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function safeFilename() {
    return `qr-${state.type}-${new Date().toISOString().slice(0, 10)}`;
  }

  async function downloadPng() {
    if (!state.valid) return;
    const blob = await canvasBlob();
    if (!blob) return;
    downloadBlob(blob, `${safeFilename()}.png`);
    toast(t('downloaded'));
  }

  function downloadSvg() {
    if (!state.valid || !state.currentSvg) return;
    const blob = new Blob([state.currentSvg], { type: 'image/svg+xml;charset=utf-8' });
    downloadBlob(blob, `${safeFilename()}.svg`);
    toast(t('downloaded'));
  }

  async function copyQr() {
    if (!state.valid) return;
    try {
      const blob = await canvasBlob();
      if (blob && navigator.clipboard?.write && window.ClipboardItem) {
        await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
        toast(t('copied')); return;
      }
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(state.currentPayload);
        toast(t('copiedText')); return;
      }
      throw new Error('Clipboard unavailable');
    } catch { toast(t('copyFailed')); }
  }

  async function shareQr() {
    if (!state.valid) return;
    try {
      const blob = await canvasBlob();
      const file = new File([blob], `${safeFilename()}.png`, { type: 'image/png' });
      if (navigator.share && (!navigator.canShare || navigator.canShare({ files: [file] }))) {
        await navigator.share({ title: 'QR Studio', text: getHistoryTitle(), files: [file] });
        toast(t('shared')); return;
      }
      await copyQr();
      toast(t('shareUnsupported'));
    } catch (error) {
      if (error?.name !== 'AbortError') toast(t('shareUnsupported'));
    }
  }

  let toastTimer;
  function toast(message) {
    const element = $('#toast');
    element.textContent = message;
    element.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => element.classList.remove('is-visible'), 2600);
  }

  function bindEvents() {
    $('#languageSelect').addEventListener('change', () => {
      state.language = $('#languageSelect').value;
      localStorage.setItem(STORAGE.language, state.language);
      applyLanguage();
      updateLogoStatus();
    });
    $('#themeToggle').addEventListener('click', () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem(STORAGE.theme, state.theme);
      applyTheme();
    });
    $('#resetStyleBtn').addEventListener('click', () => {
      state.settings = { ...defaultSettings };
      state.logoDataUrl = ''; state.logoName = '';
      syncSettingsControls(); updateLogoStatus(); saveWorkingState(); updatePreview(); toast(t('styleReset'));
    });
    $('#logoUpload').addEventListener('change', (event) => {
      handleLogoFile(event.target.files?.[0]);
      event.target.value = '';
    });
    $('#removeLogoBtn').addEventListener('click', () => {
      state.logoDataUrl = ''; state.logoName = '';
      updateLogoStatus(); saveWorkingState(); updatePreview(); toast(t('logoRemoved'));
    });
    $('#saveHistoryBtn').addEventListener('click', saveToHistory);
    $('#downloadPngBtn').addEventListener('click', downloadPng);
    $('#downloadSvgBtn').addEventListener('click', downloadSvg);
    $('#copyBtn').addEventListener('click', copyQr);
    $('#shareBtn').addEventListener('click', shareQr);
    $('#clearHistoryBtn').addEventListener('click', () => {
      if (!state.history.length || !window.confirm(t('confirmClear'))) return;
      state.history = []; writeHistory(); renderHistory(); toast(t('historyCleared'));
    });

    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      state.deferredInstallPrompt = event;
      $('#installBtn').classList.remove('is-hidden');
      toast(t('installReady'));
    });
    $('#installBtn').addEventListener('click', async () => {
      if (!state.deferredInstallPrompt) return;
      state.deferredInstallPrompt.prompt();
      await state.deferredInstallPrompt.userChoice;
      state.deferredInstallPrompt = null;
      $('#installBtn').classList.add('is-hidden');
    });
    window.addEventListener('appinstalled', () => {
      $('#installBtn').classList.add('is-hidden');
      toast(t('installed'));
    });
  }

  function registerServiceWorker() {
    if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
      window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch((error) => console.warn('Service worker:', error)));
    }
  }

  function init() {
    restoreWorkingState();
    applyTheme();
    syncSettingsControls();
    bindSettings();
    bindEvents();
    applyLanguage();
    updateLogoStatus();
    $('#currentYear').textContent = new Date().getFullYear();
    registerServiceWorker();

    // Retry once in case the CDN library finishes after the application script.
    if (typeof window.qrcode !== 'function') setTimeout(updatePreview, 1200);
  }

  init();
})();
