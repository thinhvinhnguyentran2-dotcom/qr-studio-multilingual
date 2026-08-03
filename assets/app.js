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
      resetStyle: 'Đặt lại', presetLibrary: 'Thư viện style QR', presetLibraryHint: 'Chọn nhanh 1 trong 50 preset theo ngành nghề.', presetCategory: 'Nhóm preset', applyPreset: 'Áp dụng preset', presetApplied: 'Đã áp dụng preset: {name}', categoryAll: 'Tất cả', categoryBusiness: 'Doanh nghiệp', categoryFood: 'Ẩm thực', categoryTech: 'Công nghệ', categoryBeauty: 'Thời trang & làm đẹp', categoryHealth: 'Y tế', categoryEducation: 'Giáo dục', categoryTravel: 'Du lịch', categoryEvents: 'Sự kiện', categoryRetail: 'Bán lẻ', categoryCreative: 'Sáng tạo', foregroundColor: 'Màu mã QR', backgroundColor: 'Màu nền', qrSize: 'Kích thước', errorCorrection: 'Khả năng sửa lỗi', moduleStyle: 'Kiểu điểm', labelFrames: 'Tạo label và khung QR', labelFramesHint: 'Đặt mã QR vào nhãn đẹp để in, dán sản phẩm hoặc đăng mạng xã hội.', enableLabel: 'Bật label cho mã QR', frameStyle: 'Mẫu khung', labelTitleField: 'Tiêu đề label', labelSubtitleField: 'Mô tả ngắn', labelCtaField: 'Dòng kêu gọi quét', frameAccent: 'Màu nhấn', frameBackground: 'Màu label', frameTextColor: 'Màu chữ', defaultLabelTitle: 'QUÉT MÃ QR', defaultLabelSubtitle: 'Hướng camera vào mã để mở nội dung', defaultLabelCta: 'QUÉT TẠI ĐÂY',
      styleSquare: 'Vuông', styleRounded: 'Bo tròn', styleDots: 'Chấm tròn', addLogo: 'Thêm logo ở giữa', chooseImage: 'Chọn ảnh', noImageSelected: 'Chưa chọn ảnh',
      logoHint: 'Nên dùng mức sửa lỗi H và logo nhỏ hơn 20% mã QR.', livePreview: 'Xem trước trực tiếp', previewEmptyTitle: 'Mã QR sẽ hiện ở đây', previewEmptyHint: 'Nhập nội dung để bắt đầu',
      generateSave: 'Tạo và lưu vào lịch sử', copy: 'Sao chép', share: 'Chia sẻ', privacyTitle: 'Dữ liệu riêng tư', privacyText: 'Mọi xử lý diễn ra trên thiết bị. Không có dữ liệu nào được tải lên máy chủ.',
      localHistory: 'Lưu cục bộ', historyTitle: 'Lịch sử gần đây', historyHint: 'Tối đa 12 mã QR được lưu trên thiết bị này.', clearHistory: 'Xóa lịch sử', historyEmptyTitle: 'Chưa có mã QR nào', historyEmptyHint: 'Mã QR bạn lưu sẽ xuất hiện tại đây.',
      featureFastTitle: 'Tạo tức thì', featureFastText: 'Xem trước cập nhật ngay khi nhập.', featureResponsiveTitle: 'Tối ưu điện thoại', featureResponsiveText: 'Giao diện full responsive trên mọi màn hình.',
      featureOfflineTitle: 'Có thể cài đặt', featureOfflineText: 'Thêm vào màn hình chính như một ứng dụng.', featureLanguageTitle: '4 ngôn ngữ', featureLanguageText: 'Việt, Nhật, Anh và Nepal.',
      footerTagline: 'Tạo QR miễn phí cho mọi người', footerOpenSource: 'Mã nguồn mở, triển khai trên GitHub Pages.', policyEyebrow: 'Sử dụng có trách nhiệm', policyTitle: 'Chính sách sử dụng QR Studio', policyIntro: 'Hãy tạo và chia sẻ mã QR đúng pháp luật, tôn trọng người khác và tự chịu trách nhiệm về nội dung bạn đưa vào mã QR.', policyLawfulTitle: 'Sử dụng đúng mục đích', policyLawfulText: 'Không dùng QR Studio cho lừa đảo, giả mạo, phát tán mã độc, quấy rối hoặc nội dung trái pháp luật.', policyResponsibilityTitle: 'Bạn tự chịu trách nhiệm', policyResponsibilityText: 'Bạn chịu trách nhiệm về đường dẫn, dữ liệu, bản quyền, quyền riêng tư và mọi hậu quả phát sinh từ mã QR mình tạo.', policyCheckTitle: 'Kiểm tra trước khi phát hành', policyCheckText: 'Luôn thử quét, kiểm tra đường dẫn, độ tương phản và nội dung trước khi in hoặc chia sẻ rộng rãi.', policyReadFull: 'Đọc toàn bộ chính sách', policyFooterLink: 'Chính sách sử dụng',
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
      resetStyle: 'リセット', presetLibrary: 'QRスタイルライブラリ', presetLibraryHint: '業種別の50種類のプリセットからすばやく選択できます。', presetCategory: 'プリセットカテゴリ', applyPreset: 'プリセットを適用', presetApplied: 'プリセットを適用しました: {name}', categoryAll: 'すべて', categoryBusiness: 'ビジネス', categoryFood: '飲食', categoryTech: 'テクノロジー', categoryBeauty: 'ファッション・美容', categoryHealth: '医療', categoryEducation: '教育', categoryTravel: '旅行', categoryEvents: 'イベント', categoryRetail: '小売', categoryCreative: 'クリエイティブ', foregroundColor: 'QRの色', backgroundColor: '背景色', qrSize: 'サイズ', errorCorrection: '誤り訂正レベル', moduleStyle: 'ドット形式', labelFrames: 'QRラベル・フレーム', labelFramesHint: '印刷、商品ラベル、SNS投稿向けの美しいフレームにQRコードを配置します。', enableLabel: 'QRラベルを有効にする', frameStyle: 'フレームデザイン', labelTitleField: 'ラベル見出し', labelSubtitleField: '短い説明', labelCtaField: 'スキャン案内', frameAccent: 'アクセント色', frameBackground: 'ラベル背景色', frameTextColor: '文字色', defaultLabelTitle: 'QRコードをスキャン', defaultLabelSubtitle: 'カメラを向けて内容を開いてください', defaultLabelCta: 'ここをスキャン',
      styleSquare: '四角', styleRounded: '角丸', styleDots: '丸', addLogo: '中央にロゴを追加', chooseImage: '画像を選択', noImageSelected: '画像未選択',
      logoHint: '誤り訂正H、ロゴはQR全体の20%未満を推奨します。', livePreview: 'ライブプレビュー', previewEmptyTitle: 'QRコードがここに表示されます', previewEmptyHint: '内容を入力して開始',
      generateSave: '作成して履歴に保存', copy: 'コピー', share: '共有', privacyTitle: 'プライバシー保護', privacyText: '処理はすべて端末上で行われ、データはサーバーへ送信されません。',
      localHistory: '端末内保存', historyTitle: '最近の履歴', historyHint: 'この端末に最大12件保存します。', clearHistory: '履歴を削除', historyEmptyTitle: '履歴はまだありません', historyEmptyHint: '保存したQRコードがここに表示されます。',
      featureFastTitle: '即時作成', featureFastText: '入力に合わせてプレビューを更新。', featureResponsiveTitle: 'スマホ最適化', featureResponsiveText: 'すべての画面サイズに完全対応。',
      featureOfflineTitle: 'インストール可能', featureOfflineText: 'ホーム画面にアプリとして追加。', featureLanguageTitle: '4言語対応', featureLanguageText: 'ベトナム語、日本語、英語、ネパール語。',
      footerTagline: 'すべての人のための無料QR作成', footerOpenSource: 'オープンソース・GitHub Pages対応。', policyEyebrow: '責任ある利用', policyTitle: 'QR Studio 利用ポリシー', policyIntro: '法律を守り、他者の権利を尊重し、QRコードに含める内容について利用者自身が責任を負ってください。', policyLawfulTitle: '正しい目的で利用', policyLawfulText: '詐欺、なりすまし、マルウェア配布、嫌がらせ、違法な内容のために使用しないでください。', policyResponsibilityTitle: '利用者の責任', policyResponsibilityText: 'リンク、データ、著作権、プライバシー、および作成したQRコードから生じる結果は利用者の責任です。', policyCheckTitle: '公開前に確認', policyCheckText: '印刷や公開前に、読み取り、リンク先、コントラスト、内容を必ず確認してください。', policyReadFull: '利用ポリシー全文', policyFooterLink: '利用ポリシー',
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
      resetStyle: 'Reset', presetLibrary: 'QR style library', presetLibraryHint: 'Quickly choose from 50 presets grouped by industry.', presetCategory: 'Preset category', applyPreset: 'Apply preset', presetApplied: 'Preset applied: {name}', categoryAll: 'All', categoryBusiness: 'Business', categoryFood: 'Food & Drink', categoryTech: 'Technology', categoryBeauty: 'Fashion & Beauty', categoryHealth: 'Healthcare', categoryEducation: 'Education', categoryTravel: 'Travel', categoryEvents: 'Events', categoryRetail: 'Retail', categoryCreative: 'Creative', foregroundColor: 'QR color', backgroundColor: 'Background color', qrSize: 'Size', errorCorrection: 'Error correction', moduleStyle: 'Module style', labelFrames: 'QR label and frame', labelFramesHint: 'Place the QR code inside a polished label for printing, packaging, or social posts.', enableLabel: 'Enable QR label', frameStyle: 'Frame design', labelTitleField: 'Label title', labelSubtitleField: 'Short description', labelCtaField: 'Scan call-to-action', frameAccent: 'Accent color', frameBackground: 'Label background', frameTextColor: 'Text color', defaultLabelTitle: 'SCAN QR CODE', defaultLabelSubtitle: 'Point your camera at the code to open', defaultLabelCta: 'SCAN HERE',
      styleSquare: 'Square', styleRounded: 'Rounded', styleDots: 'Dots', addLogo: 'Add a center logo', chooseImage: 'Choose image', noImageSelected: 'No image selected',
      logoHint: 'Use error correction H and keep the logo under 20% of the QR code.', livePreview: 'Live preview', previewEmptyTitle: 'Your QR code will appear here', previewEmptyHint: 'Enter content to begin',
      generateSave: 'Generate and save to history', copy: 'Copy', share: 'Share', privacyTitle: 'Private by design', privacyText: 'Everything is processed on your device. No data is uploaded to a server.',
      localHistory: 'Stored locally', historyTitle: 'Recent history', historyHint: 'Up to 12 QR codes are stored on this device.', clearHistory: 'Clear history', historyEmptyTitle: 'No QR codes yet', historyEmptyHint: 'QR codes you save will appear here.',
      featureFastTitle: 'Instant generation', featureFastText: 'The preview updates as you type.', featureResponsiveTitle: 'Mobile optimized', featureResponsiveText: 'Fully responsive across every screen size.',
      featureOfflineTitle: 'Installable', featureOfflineText: 'Add it to your home screen like an app.', featureLanguageTitle: '4 languages', featureLanguageText: 'Vietnamese, Japanese, English, and Nepali.',
      footerTagline: 'Free QR creation for everyone', footerOpenSource: 'Open source and ready for GitHub Pages.', policyEyebrow: 'Responsible use', policyTitle: 'QR Studio Usage Policy', policyIntro: 'Create and share QR codes lawfully, respect other people, and take responsibility for the content you place in each QR code.', policyLawfulTitle: 'Use it for lawful purposes', policyLawfulText: 'Do not use QR Studio for fraud, impersonation, malware distribution, harassment, or unlawful content.', policyResponsibilityTitle: 'You are responsible', policyResponsibilityText: 'You are responsible for links, data, copyright, privacy, and any consequences arising from the QR codes you create.', policyCheckTitle: 'Test before publishing', policyCheckText: 'Always test scanning, destination links, contrast, and content before printing or sharing widely.', policyReadFull: 'Read the full policy', policyFooterLink: 'Usage Policy',
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
      resetStyle: 'रिसेट', presetLibrary: 'QR शैली पुस्तकालय', presetLibraryHint: 'उद्योग अनुसार वर्गीकृत ५० प्रिसेटबाट छिटो छान्नुहोस्।', presetCategory: 'प्रिसेट समूह', applyPreset: 'प्रिसेट लागू गर्नुहोस्', presetApplied: 'प्रिसेट लागू भयो: {name}', categoryAll: 'सबै', categoryBusiness: 'व्यवसाय', categoryFood: 'खाना र पेय', categoryTech: 'प्रविधि', categoryBeauty: 'फेसन र सौन्दर्य', categoryHealth: 'स्वास्थ्य', categoryEducation: 'शिक्षा', categoryTravel: 'यात्रा', categoryEvents: 'कार्यक्रम', categoryRetail: 'रिटेल', categoryCreative: 'सिर्जनात्मक', foregroundColor: 'QR को रङ', backgroundColor: 'पृष्ठभूमिको रङ', qrSize: 'आकार', errorCorrection: 'त्रुटि सुधार', moduleStyle: 'बिन्दु शैली', labelFrames: 'QR लेबल र फ्रेम', labelFramesHint: 'प्रिन्ट, उत्पादन लेबल वा सामाजिक सञ्जालका लागि QR कोडलाई सुन्दर फ्रेममा राख्नुहोस्।', enableLabel: 'QR लेबल सक्रिय गर्नुहोस्', frameStyle: 'फ्रेम डिजाइन', labelTitleField: 'लेबल शीर्षक', labelSubtitleField: 'छोटो विवरण', labelCtaField: 'स्क्यान सन्देश', frameAccent: 'मुख्य रङ', frameBackground: 'लेबल पृष्ठभूमि', frameTextColor: 'अक्षरको रङ', defaultLabelTitle: 'QR कोड स्क्यान गर्नुहोस्', defaultLabelSubtitle: 'खोल्नका लागि क्यामेरा कोडतर्फ राख्नुहोस्', defaultLabelCta: 'यहाँ स्क्यान गर्नुहोस्',
      styleSquare: 'चौकोर', styleRounded: 'गोलो किनारा', styleDots: 'गोल बिन्दु', addLogo: 'बीचमा लोगो थप्नुहोस्', chooseImage: 'तस्बिर छान्नुहोस्', noImageSelected: 'तस्बिर छानिएको छैन',
      logoHint: 'त्रुटि सुधार H प्रयोग गर्नुहोस् र लोगो QR को 20% भन्दा सानो राख्नुहोस्।', livePreview: 'प्रत्यक्ष पूर्वावलोकन', previewEmptyTitle: 'QR कोड यहाँ देखिनेछ', previewEmptyHint: 'सुरु गर्न सामग्री लेख्नुहोस्',
      generateSave: 'बनाउनुहोस् र इतिहासमा राख्नुहोस्', copy: 'प्रतिलिपि', share: 'साझा', privacyTitle: 'निजी डेटा', privacyText: 'सबै काम उपकरणमै हुन्छ। कुनै डेटा सर्भरमा पठाइँदैन।',
      localHistory: 'उपकरणमै सुरक्षित', historyTitle: 'हालको इतिहास', historyHint: 'यस उपकरणमा अधिकतम 12 QR कोड राखिन्छ।', clearHistory: 'इतिहास मेटाउनुहोस्', historyEmptyTitle: 'अहिलेसम्म QR कोड छैन', historyEmptyHint: 'तपाईंले सुरक्षित गरेका QR कोड यहाँ देखिन्छन्।',
      featureFastTitle: 'तुरुन्तै तयार', featureFastText: 'टाइप गर्दा पूर्वावलोकन अपडेट हुन्छ।', featureResponsiveTitle: 'मोबाइलमैत्री', featureResponsiveText: 'सबै स्क्रिन आकारमा पूर्ण रूपमा मिल्छ।',
      featureOfflineTitle: 'स्थापना गर्न मिल्ने', featureOfflineText: 'एपजस्तै गृह स्क्रिनमा थप्नुहोस्।', featureLanguageTitle: '४ भाषा', featureLanguageText: 'भियतनामी, जापानी, अङ्ग्रेजी र नेपाली।',
      footerTagline: 'सबैका लागि निःशुल्क QR निर्माण', footerOpenSource: 'खुला स्रोत र GitHub Pages का लागि तयार।', policyEyebrow: 'जिम्मेवार प्रयोग', policyTitle: 'QR Studio प्रयोग नीति', policyIntro: 'QR कोड कानुनअनुसार बनाउनुहोस्, अरूको अधिकारको सम्मान गर्नुहोस् र राखिएको सामग्रीको जिम्मेवारी आफैं लिनुहोस्।', policyLawfulTitle: 'सही उद्देश्यका लागि प्रयोग', policyLawfulText: 'ठगी, नक्कली पहिचान, हानिकारक सफ्टवेयर, दुर्व्यवहार वा गैरकानुनी सामग्रीका लागि प्रयोग नगर्नुहोस्।', policyResponsibilityTitle: 'जिम्मेवारी तपाईंको हो', policyResponsibilityText: 'लिङ्क, डेटा, प्रतिलिपि अधिकार, गोपनीयता र तपाईंले बनाएको QR बाट हुने परिणामको जिम्मेवारी तपाईंको हो।', policyCheckTitle: 'प्रकाशनअघि परीक्षण', policyCheckText: 'प्रिन्ट वा व्यापक रूपमा साझा गर्नुअघि स्क्यान, लिङ्क, कन्ट्रास्ट र सामग्री जाँच गर्नुहोस्।', policyReadFull: 'पूर्ण नीति पढ्नुहोस्', policyFooterLink: 'प्रयोग नीति',
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
    moduleStyle: 'square',
    labelEnabled: false,
    labelFrame: 'minimal',
    labelTitle: '',
    labelSubtitle: '',
    labelCta: '',
    labelAccent: '#6757F5',
    labelBackground: '#FFFFFF',
    labelTextColor: '#17152F'
  };

  const frameTemplates = [
    { id: 'minimal', icon: '▦', names: { vi: 'Tối giản', ja: 'ミニマル', en: 'Minimal', ne: 'मिनिमल' } },
    { id: 'rounded', icon: '▢', names: { vi: 'Bo tròn', ja: '角丸', en: 'Rounded', ne: 'गोलो' } },
    { id: 'ticket', icon: '🎟', names: { vi: 'Vé sự kiện', ja: 'チケット', en: 'Ticket', ne: 'टिकट' } },
    { id: 'ribbon', icon: '◆', names: { vi: 'Ruy băng', ja: 'リボン', en: 'Ribbon', ne: 'रिबन' } },
    { id: 'business', icon: '▤', names: { vi: 'Doanh nghiệp', ja: 'ビジネス', en: 'Business', ne: 'व्यवसाय' } },
    { id: 'restaurant', icon: '☕', names: { vi: 'Nhà hàng', ja: 'レストラン', en: 'Restaurant', ne: 'रेस्टुरेन्ट' } },
    { id: 'wifi', icon: '⌁', names: { vi: 'Wi-Fi', ja: 'Wi-Fi', en: 'Wi-Fi', ne: 'Wi-Fi' } },
    { id: 'event', icon: '✦', names: { vi: 'Lễ hội', ja: 'イベント', en: 'Event', ne: 'कार्यक्रम' } },
    { id: 'product', icon: '🏷', names: { vi: 'Nhãn sản phẩm', ja: '商品タグ', en: 'Product Tag', ne: 'उत्पादन ट्याग' } },
    { id: 'luxury', icon: '◇', names: { vi: 'Cao cấp', ja: 'ラグジュアリー', en: 'Luxury', ne: 'लक्जरी' } },
    { id: 'sakura', icon: '❀', names: { vi: 'Sakura', ja: 'さくら', en: 'Sakura', ne: 'साकुरा' } },
    { id: 'neon', icon: '⚡', names: { vi: 'Neon', ja: 'ネオン', en: 'Neon', ne: 'नियोन' } }
  ];

  const presetCategories = [
    { id: 'all', label: 'categoryAll' },
    { id: 'business', label: 'categoryBusiness' },
    { id: 'food', label: 'categoryFood' },
    { id: 'tech', label: 'categoryTech' },
    { id: 'beauty', label: 'categoryBeauty' },
    { id: 'health', label: 'categoryHealth' },
    { id: 'education', label: 'categoryEducation' },
    { id: 'travel', label: 'categoryTravel' },
    { id: 'events', label: 'categoryEvents' },
    { id: 'retail', label: 'categoryRetail' },
    { id: 'creative', label: 'categoryCreative' }
  ];

  const presetStyles = [
    { id: 'classic-black', name: 'Classic Black', category: 'business', foreground: '#17152F', background: '#FFFFFF', moduleStyle: 'square', errorCorrection: 'M' },
    { id: 'navy-boardroom', name: 'Navy Boardroom', category: 'business', foreground: '#132A5E', background: '#FFFFFF', moduleStyle: 'square', errorCorrection: 'M' },
    { id: 'executive-gold', name: 'Executive Gold', category: 'business', foreground: '#5D4600', background: '#FFF8E3', moduleStyle: 'diamond', errorCorrection: 'Q' },
    { id: 'finance-trust', name: 'Finance Trust', category: 'business', foreground: '#114B5F', background: '#F3FBFD', moduleStyle: 'rounded', errorCorrection: 'M' },
    { id: 'legal-formal', name: 'Legal Formal', category: 'business', foreground: '#20273A', background: '#F5F6FA', moduleStyle: 'square', errorCorrection: 'M' },
    { id: 'pho-street', name: 'Pho Street', category: 'food', foreground: '#7A2318', background: '#FFF4E8', moduleStyle: 'rounded', errorCorrection: 'Q' },
    { id: 'matcha-cafe', name: 'Matcha Cafe', category: 'food', foreground: '#4E6B2A', background: '#F7FBF1', moduleStyle: 'dots', errorCorrection: 'Q' },
    { id: 'coffee-bean', name: 'Coffee Bean', category: 'food', foreground: '#4D2F24', background: '#FAF5EF', moduleStyle: 'diamond', errorCorrection: 'Q' },
    { id: 'bubble-tea', name: 'Bubble Tea', category: 'food', foreground: '#7B4CE2', background: '#FFF6FB', moduleStyle: 'dots', errorCorrection: 'H' },
    { id: 'bbq-flame', name: 'BBQ Flame', category: 'food', foreground: '#A82E16', background: '#FFF6F2', moduleStyle: 'hex', errorCorrection: 'Q' },
    { id: 'cyber-blue', name: 'Cyber Blue', category: 'tech', foreground: '#0064FF', background: '#F7FAFF', moduleStyle: 'square', errorCorrection: 'M' },
    { id: 'neon-pulse', name: 'Neon Pulse', category: 'tech', foreground: '#00B2A9', background: '#F1FFFD', moduleStyle: 'diamond', errorCorrection: 'Q' },
    { id: 'data-grid', name: 'Data Grid', category: 'tech', foreground: '#1A1F36', background: '#F5F7FE', moduleStyle: 'square', errorCorrection: 'M' },
    { id: 'circuit-green', name: 'Circuit Green', category: 'tech', foreground: '#007A55', background: '#F0FFF8', moduleStyle: 'hex', errorCorrection: 'Q' },
    { id: 'quantum-violet', name: 'Quantum Violet', category: 'tech', foreground: '#5B3DF5', background: '#F8F6FF', moduleStyle: 'classy', errorCorrection: 'Q' },
    { id: 'rose-glam', name: 'Rose Glam', category: 'beauty', foreground: '#C44F8A', background: '#FFF7FC', moduleStyle: 'dots', errorCorrection: 'H' },
    { id: 'luxe-beauty', name: 'Luxe Beauty', category: 'beauty', foreground: '#8B6A15', background: '#FFFBEF', moduleStyle: 'diamond', errorCorrection: 'Q' },
    { id: 'sakura-boutique', name: 'Sakura Boutique', category: 'beauty', foreground: '#E2679D', background: '#FFF7FB', moduleStyle: 'extraRounded', errorCorrection: 'H' },
    { id: 'black-elegance', name: 'Black Elegance', category: 'beauty', foreground: '#1A1A1A', background: '#FFFDF9', moduleStyle: 'classy', errorCorrection: 'Q' },
    { id: 'pastel-salon', name: 'Pastel Salon', category: 'beauty', foreground: '#8B64C6', background: '#FCF8FF', moduleStyle: 'rounded', errorCorrection: 'Q' },
    { id: 'medical-clean', name: 'Medical Clean', category: 'health', foreground: '#1479C9', background: '#F4FBFF', moduleStyle: 'rounded', errorCorrection: 'M' },
    { id: 'dental-fresh', name: 'Dental Fresh', category: 'health', foreground: '#00A0B8', background: '#F3FFFF', moduleStyle: 'dots', errorCorrection: 'Q' },
    { id: 'clinic-trust', name: 'Clinic Trust', category: 'health', foreground: '#297373', background: '#F5FCFB', moduleStyle: 'square', errorCorrection: 'M' },
    { id: 'pharmacy-green', name: 'Pharmacy Green', category: 'health', foreground: '#3B7D3A', background: '#F5FFF3', moduleStyle: 'classy', errorCorrection: 'M' },
    { id: 'wellness-soft', name: 'Wellness Soft', category: 'health', foreground: '#5DA399', background: '#F7FFFC', moduleStyle: 'extraRounded', errorCorrection: 'Q' },
    { id: 'study-smart', name: 'Study Smart', category: 'education', foreground: '#355CDE', background: '#F6F8FF', moduleStyle: 'square', errorCorrection: 'M' },
    { id: 'kids-rainbow', name: 'Kids Rainbow', category: 'education', foreground: '#FF7A59', background: '#FFF9F5', moduleStyle: 'dots', errorCorrection: 'H' },
    { id: 'language-hub', name: 'Language Hub', category: 'education', foreground: '#00A17D', background: '#F4FFFB', moduleStyle: 'rounded', errorCorrection: 'Q' },
    { id: 'campus-formal', name: 'Campus Formal', category: 'education', foreground: '#243B53', background: '#F8FAFC', moduleStyle: 'diamond', errorCorrection: 'M' },
    { id: 'learning-lab', name: 'Learning Lab', category: 'education', foreground: '#6D5AE6', background: '#F9F8FF', moduleStyle: 'hex', errorCorrection: 'Q' },
    { id: 'ocean-travel', name: 'Ocean Travel', category: 'travel', foreground: '#1572A1', background: '#F3FAFF', moduleStyle: 'dots', errorCorrection: 'Q' },
    { id: 'resort-premium', name: 'Resort Premium', category: 'travel', foreground: '#0E5A6C', background: '#F6FFFE', moduleStyle: 'classy', errorCorrection: 'Q' },
    { id: 'hotel-elegant', name: 'Hotel Elegant', category: 'travel', foreground: '#574B90', background: '#F8F7FF', moduleStyle: 'diamond', errorCorrection: 'Q' },
    { id: 'mountain-retreat', name: 'Mountain Retreat', category: 'travel', foreground: '#45624E', background: '#F8FFF7', moduleStyle: 'hex', errorCorrection: 'Q' },
    { id: 'city-guide', name: 'City Guide', category: 'travel', foreground: '#C25B2A', background: '#FFF8F4', moduleStyle: 'rounded', errorCorrection: 'Q' },
    { id: 'event-neon', name: 'Event Neon', category: 'events', foreground: '#FF2F92', background: '#FFF8FD', moduleStyle: 'star', errorCorrection: 'H' },
    { id: 'concert-glow', name: 'Concert Glow', category: 'events', foreground: '#6B40FF', background: '#F8F5FF', moduleStyle: 'diamond', errorCorrection: 'H' },
    { id: 'festival-night', name: 'Festival Night', category: 'events', foreground: '#1D267D', background: '#F6F7FF', moduleStyle: 'hex', errorCorrection: 'H' },
    { id: 'party-pop', name: 'Party Pop', category: 'events', foreground: '#F86624', background: '#FFF8F2', moduleStyle: 'dots', errorCorrection: 'H' },
    { id: 'wedding-soft', name: 'Wedding Soft', category: 'events', foreground: '#AF5D98', background: '#FFF9FD', moduleStyle: 'extraRounded', errorCorrection: 'H' },
    { id: 'retail-pop', name: 'Retail Pop', category: 'retail', foreground: '#D94841', background: '#FFF7F6', moduleStyle: 'square', errorCorrection: 'Q' },
    { id: 'social-media-pop', name: 'Social Media Pop', category: 'retail', foreground: '#E94057', background: '#FFF8FA', moduleStyle: 'dots', errorCorrection: 'H' },
    { id: 'gift-shop', name: 'Gift Shop', category: 'retail', foreground: '#B56576', background: '#FFF8FA', moduleStyle: 'rounded', errorCorrection: 'Q' },
    { id: 'organic-market', name: 'Organic Market', category: 'retail', foreground: '#4E8D3B', background: '#F7FFF4', moduleStyle: 'hex', errorCorrection: 'Q' },
    { id: 'modern-store', name: 'Modern Store', category: 'retail', foreground: '#1F2937', background: '#FAFAFA', moduleStyle: 'classy', errorCorrection: 'M' },
    { id: 'creator-studio', name: 'Creator Studio', category: 'creative', foreground: '#6651F0', background: '#F8F7FF', moduleStyle: 'diamond', errorCorrection: 'Q' },
    { id: 'watercolor-soft', name: 'Watercolor Soft', category: 'creative', foreground: '#4BA3C3', background: '#F3FBFF', moduleStyle: 'extraRounded', errorCorrection: 'Q' },
    { id: 'handmade-craft', name: 'Handmade Craft', category: 'creative', foreground: '#A05A2C', background: '#FFF8F0', moduleStyle: 'rounded', errorCorrection: 'Q' },
    { id: 'poster-bold', name: 'Poster Bold', category: 'creative', foreground: '#111827', background: '#F9FAFB', moduleStyle: 'star', errorCorrection: 'H' },
    { id: 'art-house', name: 'Art House', category: 'creative', foreground: '#7C3AED', background: '#FAF5FF', moduleStyle: 'hex', errorCorrection: 'Q' }
  ];

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
    selectedPresetId: '',
    presetCategory: 'all',
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
    renderPresetLibrary();
    renderFrameLibrary();
    updateLabelControls();
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


  function renderPresetLibrary() {
    const select = $('#presetCategory');
    if (select) {
      select.innerHTML = presetCategories.map((item) => `<option value="${escapeHtml(item.id)}">${escapeHtml(t(item.label))}</option>`).join('');
      select.value = state.presetCategory || 'all';
    }
    const grid = $('#presetGrid');
    if (!grid) return;
    const visible = presetStyles.filter((item) => state.presetCategory === 'all' || item.category === state.presetCategory);
    grid.innerHTML = visible.map((preset) => `
      <button class="preset-card ${state.selectedPresetId === preset.id ? 'is-active' : ''}" type="button" data-preset-id="${escapeHtml(preset.id)}" aria-label="${escapeHtml(preset.name)}">
        <span class="preset-card__preview preset-shape--${escapeHtml(preset.moduleStyle)}" style="--preset-fg:${escapeHtml(preset.foreground)};--preset-bg:${escapeHtml(preset.background)}">
          <i></i><i></i><i></i><b></b>
        </span>
        <span class="preset-card__name">${escapeHtml(preset.name)}</span>
      </button>
    `).join('');
    $$('[data-preset-id]', grid).forEach((button) => button.addEventListener('click', () => applyPreset(button.dataset.presetId)));
  }

  function applyPreset(id) {
    const preset = presetStyles.find((item) => item.id === id);
    if (!preset) return;
    state.selectedPresetId = preset.id;
    state.settings.foreground = preset.foreground;
    state.settings.background = preset.background;
    state.settings.moduleStyle = preset.moduleStyle;
    state.settings.errorCorrection = preset.errorCorrection;
    syncSettingsControls();
    saveWorkingState();
    renderPresetLibrary();
    updatePreview();
    toast(t('presetApplied', { name: preset.name }));
  }

  function frameName(frame) {
    return frame?.names?.[state.language] || frame?.names?.en || frame?.id || '';
  }

  function labelTextValue(key, fallbackKey) {
    const value = String(state.settings[key] || '').trim();
    return value || t(fallbackKey);
  }

  function renderFrameLibrary() {
    const grid = $('#frameGrid');
    if (!grid) return;
    grid.innerHTML = frameTemplates.map((frame) => `
      <button class="frame-card ${state.settings.labelFrame === frame.id ? 'is-active' : ''}" type="button" data-frame-id="${escapeHtml(frame.id)}" aria-label="${escapeHtml(frameName(frame))}">
        <span class="frame-card__preview" style="--frame-accent:${escapeHtml(state.settings.labelAccent)};--frame-bg:${escapeHtml(state.settings.labelBackground)}"><span></span>${escapeHtml(frame.icon)}</span>
        <span class="frame-card__name">${escapeHtml(frameName(frame))}</span>
      </button>
    `).join('');
    $$('[data-frame-id]', grid).forEach((button) => button.addEventListener('click', () => {
      state.settings.labelFrame = button.dataset.frameId;
      saveWorkingState();
      renderFrameLibrary();
      updatePreview();
    }));
  }

  function updateLabelControls() {
    const enabled = Boolean(state.settings.labelEnabled);
    $('#labelEnabled').checked = enabled;
    $('#labelControls').classList.toggle('is-disabled', !enabled);
    $('#qrStage').classList.toggle('has-label', enabled);
    $('#labelTitle').placeholder = t('defaultLabelTitle');
    $('#labelSubtitle').placeholder = t('defaultLabelSubtitle');
    $('#labelCta').placeholder = t('defaultLabelCta');
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


  function drawModule(ctx, style, x, y, unit) {
    switch (style) {
      case 'dots':
        ctx.beginPath();
        ctx.arc(x + unit / 2, y + unit / 2, unit * .43, 0, Math.PI * 2);
        ctx.fill();
        break;
      case 'rounded':
        roundedRect(ctx, x + unit * .06, y + unit * .06, unit * .88, unit * .88, unit * .24);
        ctx.fill();
        break;
      case 'extraRounded':
        roundedRect(ctx, x + unit * .08, y + unit * .08, unit * .84, unit * .84, unit * .38);
        ctx.fill();
        break;
      case 'diamond':
        ctx.beginPath();
        ctx.moveTo(x + unit / 2, y + unit * .05);
        ctx.lineTo(x + unit * .95, y + unit / 2);
        ctx.lineTo(x + unit / 2, y + unit * .95);
        ctx.lineTo(x + unit * .05, y + unit / 2);
        ctx.closePath();
        ctx.fill();
        break;
      case 'hex':
        ctx.beginPath();
        ctx.moveTo(x + unit * .5, y + unit * .04);
        ctx.lineTo(x + unit * .88, y + unit * .26);
        ctx.lineTo(x + unit * .88, y + unit * .74);
        ctx.lineTo(x + unit * .5, y + unit * .96);
        ctx.lineTo(x + unit * .12, y + unit * .74);
        ctx.lineTo(x + unit * .12, y + unit * .26);
        ctx.closePath();
        ctx.fill();
        break;
      case 'star':
        drawStar(ctx, x + unit / 2, y + unit / 2, unit * .42, unit * .2, 4);
        ctx.fill();
        break;
      case 'classy':
        roundedRect(ctx, x + unit * .02, y + unit * .12, unit * .96, unit * .76, unit * .2);
        ctx.fill();
        break;
      default:
        ctx.fillRect(Math.floor(x), Math.floor(y), Math.ceil(unit + .25), Math.ceil(unit + .25));
    }
  }

  function drawStar(ctx, cx, cy, outerRadius, innerRadius, points) {
    let rotation = -Math.PI / 2;
    ctx.beginPath();
    for (let i = 0; i < points * 2; i += 1) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const x = cx + Math.cos(rotation) * radius;
      const y = cy + Math.sin(rotation) * radius;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      rotation += Math.PI / points;
    }
    ctx.closePath();
  }

  async function renderQrCore(qr, token, size) {
    const core = document.createElement('canvas');
    const count = qr.getModuleCount();
    const margin = 4;
    const total = count + margin * 2;
    const unit = size / total;
    core.width = size;
    core.height = size;
    const ctx = core.getContext('2d');
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
        if (finder) ctx.fillRect(Math.floor(x), Math.floor(y), Math.ceil(unit + .25), Math.ceil(unit + .25));
        else drawModule(ctx, state.settings.moduleStyle, x, y, unit);
      }
    }

    if (state.logoDataUrl) {
      const image = await loadImage(state.logoDataUrl);
      if (token !== state.renderToken) return core;
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
    return core;
  }

  function drawFittedText(ctx, text, centerX, y, maxWidth, startSize, minSize, weight = 800) {
    let size = startSize;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    while (size > minSize) {
      ctx.font = `${weight} ${size}px system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;
      if (ctx.measureText(text).width <= maxWidth) break;
      size -= 1;
    }
    let output = text;
    while (ctx.measureText(output).width > maxWidth && output.length > 4) output = `${output.slice(0, -2)}…`;
    ctx.fillText(output, centerX, y);
  }

  function drawWifiSymbol(ctx, x, y, radius, color) {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = Math.max(2, radius * .11);
    ctx.lineCap = 'round';
    [1, .66, .34].forEach((ratio) => {
      ctx.beginPath();
      ctx.arc(x, y, radius * ratio, Math.PI * 1.16, Math.PI * 1.84);
      ctx.stroke();
    });
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y + radius * .08, radius * .08, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawLabelDecorations(ctx, frame, w, h, accent, bg, textColor) {
    const s = w / 360;
    ctx.save();
    switch (frame) {
      case 'rounded':
        ctx.strokeStyle = accent;
        ctx.lineWidth = 3 * s;
        roundedRect(ctx, 11*s, 11*s, w-22*s, h-22*s, 25*s); ctx.stroke();
        ctx.globalAlpha = .35;
        ctx.lineWidth = 1.5*s;
        roundedRect(ctx, 19*s, 19*s, w-38*s, h-38*s, 20*s); ctx.stroke();
        break;
      case 'ticket':
        ctx.strokeStyle = accent; ctx.lineWidth = 3*s;
        roundedRect(ctx, 8*s, 8*s, w-16*s, h-16*s, 20*s); ctx.stroke();
        ctx.setLineDash([7*s, 6*s]); ctx.globalAlpha = .55;
        ctx.beginPath(); ctx.moveTo(25*s, 90*s); ctx.lineTo(w-25*s, 90*s); ctx.stroke();
        ctx.setLineDash([]); ctx.globalCompositeOperation = 'destination-out';
        [0,w].forEach((x) => { ctx.beginPath(); ctx.arc(x, 90*s, 14*s, 0, Math.PI*2); ctx.fill(); });
        break;
      case 'ribbon':
        ctx.fillStyle = accent;
        roundedRect(ctx, 45*s, 0, w-90*s, 50*s, 0); ctx.fill();
        ctx.beginPath(); ctx.moveTo(45*s, 50*s); ctx.lineTo(65*s, 63*s); ctx.lineTo(82*s, 50*s); ctx.closePath(); ctx.fill();
        ctx.beginPath(); ctx.moveTo(w-45*s, 50*s); ctx.lineTo(w-65*s, 63*s); ctx.lineTo(w-82*s, 50*s); ctx.closePath(); ctx.fill();
        break;
      case 'business':
        ctx.fillStyle = accent; roundedRect(ctx, 0, 0, 18*s, h, 0); ctx.fill();
        ctx.globalAlpha = .12; ctx.fillRect(18*s, 0, 38*s, h); ctx.globalAlpha = 1;
        break;
      case 'restaurant':
        ctx.fillStyle = accent;
        ctx.beginPath(); ctx.arc(35*s, 38*s, 18*s, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = bg; ctx.font = `900 ${19*s}px system-ui`; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText('☕',35*s,39*s);
        ctx.strokeStyle = accent; ctx.globalAlpha=.35; ctx.lineWidth=2*s;
        ctx.beginPath(); ctx.arc(w-30*s, h-30*s, 18*s, 0, Math.PI*2); ctx.stroke();
        break;
      case 'wifi':
        ctx.fillStyle = accent; roundedRect(ctx, w/2-35*s, 9*s, 70*s, 55*s, 25*s); ctx.fill();
        drawWifiSymbol(ctx, w/2, 48*s, 23*s, bg);
        break;
      case 'event':
        for (let i=0;i<18;i+=1) {
          const x = (18 + (i*47)%325)*s;
          const y = (14 + (i*71)%450)*s;
          ctx.fillStyle = i%3===0 ? accent : textColor;
          ctx.globalAlpha = i%3===0 ? .8 : .18;
          ctx.save(); ctx.translate(x,y); ctx.rotate(i*.7); ctx.fillRect(-2*s,-5*s,4*s,10*s); ctx.restore();
        }
        break;
      case 'product':
        ctx.strokeStyle=accent; ctx.lineWidth=3*s;
        ctx.beginPath(); ctx.moveTo(20*s,0); ctx.lineTo(w-20*s,0); ctx.lineTo(w,20*s); ctx.lineTo(w,h); ctx.lineTo(0,h); ctx.lineTo(0,20*s); ctx.closePath(); ctx.stroke();
        ctx.beginPath(); ctx.arc(w/2, 24*s, 7*s, 0, Math.PI*2); ctx.stroke();
        break;
      case 'luxury':
        ctx.strokeStyle=accent; ctx.lineWidth=2*s;
        roundedRect(ctx, 9*s,9*s,w-18*s,h-18*s,18*s);ctx.stroke();
        ctx.globalAlpha=.45; roundedRect(ctx,16*s,16*s,w-32*s,h-32*s,14*s);ctx.stroke();
        ctx.globalAlpha=1; ctx.fillStyle=accent;
        [[24,24],[336,24],[24,466],[336,466]].forEach(([x,y])=>{ctx.save();ctx.translate(x*s,y*s);ctx.rotate(Math.PI/4);ctx.fillRect(-4*s,-4*s,8*s,8*s);ctx.restore();});
        break;
      case 'sakura':
        ctx.fillStyle=accent; ctx.globalAlpha=.23;
        [[28,28],[52,16],[333,35],[318,62],[28,447],[333,455]].forEach(([x,y],idx)=>{
          for(let p=0;p<5;p+=1){ctx.save();ctx.translate(x*s,y*s);ctx.rotate((Math.PI*2/5)*p+idx*.2);ctx.beginPath();ctx.ellipse(0,-7*s,4*s,8*s,0,0,Math.PI*2);ctx.fill();ctx.restore();}
        });
        break;
      case 'neon':
        ctx.shadowColor=accent; ctx.shadowBlur=18*s; ctx.strokeStyle=accent; ctx.lineWidth=3*s;
        roundedRect(ctx,10*s,10*s,w-20*s,h-20*s,24*s);ctx.stroke();
        ctx.shadowBlur=8*s; ctx.globalAlpha=.5; roundedRect(ctx,18*s,18*s,w-36*s,h-36*s,18*s);ctx.stroke();
        break;
      default:
        ctx.fillStyle = accent; roundedRect(ctx, 0, 0, w, 10*s, 0); ctx.fill();
        ctx.globalAlpha=.12; ctx.fillRect(0,10*s,w,8*s);
    }
    ctx.restore();
  }

  function composeLabelCanvas(canvas, qrCore) {
    const w = Number(state.settings.size);
    const h = Math.round(w * 1.36);
    const s = w / 360;
    const frame = state.settings.labelFrame;
    const accent = state.settings.labelAccent;
    const textColor = frame === 'neon' && state.settings.labelTextColor === '#17152F' ? '#FFFFFF' : state.settings.labelTextColor;
    const bg = frame === 'neon' && state.settings.labelBackground === '#FFFFFF' ? '#10132B' : state.settings.labelBackground;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,w,h);
    ctx.save();
    ctx.shadowColor = 'rgba(20, 20, 50, .16)';
    ctx.shadowBlur = 16*s;
    ctx.shadowOffsetY = 5*s;
    ctx.fillStyle = bg;
    roundedRect(ctx, 6*s, 6*s, w-12*s, h-12*s, 26*s); ctx.fill();
    ctx.restore();
    drawLabelDecorations(ctx, frame, w, h, accent, bg, textColor);

    const headingColor = frame === 'ribbon' || frame === 'neon' ? '#FFFFFF' : textColor;
    ctx.fillStyle = headingColor;
    drawFittedText(ctx, labelTextValue('labelTitle','defaultLabelTitle'), w/2, 44*s, w-92*s, 26*s, 14*s, 900);
    ctx.fillStyle = textColor;
    ctx.globalAlpha = .72;
    drawFittedText(ctx, labelTextValue('labelSubtitle','defaultLabelSubtitle'), w/2, 73*s, w-72*s, 13*s, 9*s, 600);
    ctx.globalAlpha = 1;

    const qrSide = 252*s;
    const qrX = (w-qrSide)/2;
    const qrY = 99*s;
    ctx.save();
    ctx.shadowColor='rgba(20,20,50,.15)'; ctx.shadowBlur=14*s; ctx.shadowOffsetY=4*s;
    ctx.fillStyle=state.settings.background;
    roundedRect(ctx, qrX-9*s, qrY-9*s, qrSide+18*s, qrSide+18*s, 19*s); ctx.fill();
    ctx.restore();
    ctx.drawImage(qrCore, qrX, qrY, qrSide, qrSide);

    const ctaY = 390*s;
    ctx.fillStyle = accent;
    roundedRect(ctx, 48*s, ctaY, w-96*s, 45*s, 22*s); ctx.fill();
    ctx.fillStyle = frame === 'neon' ? '#FFFFFF' : '#FFFFFF';
    drawFittedText(ctx, labelTextValue('labelCta','defaultLabelCta'), w/2, ctaY+23*s, w-120*s, 15*s, 10*s, 900);

    ctx.fillStyle=textColor; ctx.globalAlpha=.55;
    drawFittedText(ctx, 'QR Studio • Free & Private', w/2, 459*s, w-70*s, 10*s, 8*s, 700);
    ctx.globalAlpha=1;
  }

  async function drawQrToCanvas(qr, token) {
    const canvas = $('#qrCanvas');
    const size = Number(state.settings.size);
    const core = await renderQrCore(qr, token, size);
    if (token !== state.renderToken) return;
    if (!state.settings.labelEnabled) {
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, size, size);
      ctx.drawImage(core, 0, 0);
      $('#qrStage').classList.remove('has-label');
      return;
    }
    $('#qrStage').classList.add('has-label');
    composeLabelCanvas(canvas, core);
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


  function svgModule(style, x, y) {
    switch (style) {
      case 'dots': return `<circle cx="${x + .5}" cy="${y + .5}" r=".43" fill="__FG__"/>`;
      case 'rounded': return `<rect x="${x + .06}" y="${y + .06}" width=".88" height=".88" rx=".24" fill="__FG__"/>`;
      case 'extraRounded': return `<rect x="${x + .08}" y="${y + .08}" width=".84" height=".84" rx=".38" fill="__FG__"/>`;
      case 'diamond': return `<path d="M ${x + .5} ${y + .05} L ${x + .95} ${y + .5} L ${x + .5} ${y + .95} L ${x + .05} ${y + .5} Z" fill="__FG__"/>`;
      case 'hex': return `<path d="M ${x + .5} ${y + .04} L ${x + .88} ${y + .26} L ${x + .88} ${y + .74} L ${x + .5} ${y + .96} L ${x + .12} ${y + .74} L ${x + .12} ${y + .26} Z" fill="__FG__"/>`;
      case 'star': return `<path d="M ${x + .5} ${y + .08} L ${x + .62} ${y + .38} L ${x + .92} ${y + .5} L ${x + .62} ${y + .62} L ${x + .5} ${y + .92} L ${x + .38} ${y + .62} L ${x + .08} ${y + .5} L ${x + .38} ${y + .38} Z" fill="__FG__"/>`;
      case 'classy': return `<rect x="${x + .02}" y="${y + .12}" width=".96" height=".76" rx=".2" fill="__FG__"/>`;
      default: return `<rect x="${x}" y="${y}" width="1.02" height="1.02" fill="__FG__"/>`;
    }
  }

  function buildQrSvgElements(qr, total, fg, bg, style) {
    const parts = [`<rect width="${total}" height="${total}" fill="${bg}"/>`];
    const count = qr.getModuleCount();
    const margin = 4;
    for (let row = 0; row < count; row += 1) {
      for (let col = 0; col < count; col += 1) {
        if (!qr.isDark(row, col)) continue;
        const x = col + margin;
        const y = row + margin;
        const finder = isFinderModule(row, col, count);
        if (finder) parts.push(`<rect x="${x}" y="${y}" width="1.02" height="1.02" fill="${fg}"/>`);
        else parts.push(svgModule(style, x, y).replaceAll('__FG__', fg));
      }
    }
    if (state.logoDataUrl) {
      const safe = total * .20;
      const logo = total * .16;
      parts.push(`<rect x="${(total-safe)/2}" y="${(total-safe)/2}" width="${safe}" height="${safe}" rx="${safe*.16}" fill="${bg}"/>`);
      parts.push(`<image href="${escapeHtml(state.logoDataUrl)}" x="${(total-logo)/2}" y="${(total-logo)/2}" width="${logo}" height="${logo}" preserveAspectRatio="xMidYMid meet"/>`);
    }
    return parts.join('');
  }

  function buildLabelSvgDecorations(frame, accent, bg, textColor) {
    const parts = [];
    switch (frame) {
      case 'rounded':
        parts.push(`<rect x="11" y="11" width="338" height="468" rx="25" fill="none" stroke="${accent}" stroke-width="3"/>`);
        parts.push(`<rect x="19" y="19" width="322" height="452" rx="20" fill="none" stroke="${accent}" stroke-opacity=".35" stroke-width="1.5"/>`);
        break;
      case 'ticket':
        parts.push(`<rect x="8" y="8" width="344" height="474" rx="20" fill="none" stroke="${accent}" stroke-width="3"/>`);
        parts.push(`<path d="M25 90H335" stroke="${accent}" stroke-opacity=".55" stroke-width="2" stroke-dasharray="7 6"/>`);
        break;
      case 'ribbon':
        parts.push(`<path d="M45 0H315V50L295 63L278 50H82L65 63L45 50Z" fill="${accent}"/>`);
        break;
      case 'business':
        parts.push(`<path d="M0 0H18V490H0Z" fill="${accent}"/><path d="M18 0H56V490H18Z" fill="${accent}" opacity=".12"/>`);
        break;
      case 'restaurant':
        parts.push(`<circle cx="35" cy="38" r="18" fill="${accent}"/><text x="35" y="44" text-anchor="middle" font-size="19" fill="${bg}">☕</text>`);
        parts.push(`<circle cx="330" cy="460" r="18" fill="none" stroke="${accent}" stroke-opacity=".35" stroke-width="2"/>`);
        break;
      case 'wifi':
        parts.push(`<rect x="145" y="9" width="70" height="55" rx="27" fill="${accent}"/>`);
        parts.push(`<path d="M158 42Q180 22 202 42M164 48Q180 34 196 48M171 54Q180 46 189 54" fill="none" stroke="${bg}" stroke-width="4" stroke-linecap="round"/><circle cx="180" cy="57" r="3" fill="${bg}"/>`);
        break;
      case 'event':
        for (let i=0;i<18;i+=1) {
          const x=18+(i*47)%325, y=14+(i*71)%450;
          parts.push(`<rect x="${x}" y="${y}" width="4" height="10" rx="2" fill="${i%3===0?accent:textColor}" opacity="${i%3===0?.8:.18}" transform="rotate(${i*17} ${x+2} ${y+5})"/>`);
        }
        break;
      case 'product':
        parts.push(`<path d="M20 2H340L358 20V488H2V20Z" fill="none" stroke="${accent}" stroke-width="3"/><circle cx="180" cy="24" r="7" fill="none" stroke="${accent}" stroke-width="3"/>`);
        break;
      case 'luxury':
        parts.push(`<rect x="9" y="9" width="342" height="472" rx="18" fill="none" stroke="${accent}" stroke-width="2"/><rect x="16" y="16" width="328" height="458" rx="14" fill="none" stroke="${accent}" stroke-opacity=".45"/>`);
        [[24,24],[336,24],[24,466],[336,466]].forEach(([x,y])=>parts.push(`<rect x="${x-4}" y="${y-4}" width="8" height="8" fill="${accent}" transform="rotate(45 ${x} ${y})"/>`));
        break;
      case 'sakura':
        [[28,28],[52,16],[333,35],[318,62],[28,447],[333,455]].forEach(([x,y],idx)=>{
          for(let n=0;n<5;n+=1) parts.push(`<ellipse cx="${x}" cy="${y-7}" rx="4" ry="8" fill="${accent}" opacity=".23" transform="rotate(${n*72+idx*12} ${x} ${y})"/>`);
        });
        break;
      case 'neon':
        parts.push(`<rect x="10" y="10" width="340" height="470" rx="24" fill="none" stroke="${accent}" stroke-width="3" filter="url(#glow)"/><rect x="18" y="18" width="324" height="454" rx="18" fill="none" stroke="${accent}" stroke-opacity=".5"/>`);
        break;
      default:
        parts.push(`<path d="M0 0H360V10H0Z" fill="${accent}"/><path d="M0 10H360V18H0Z" fill="${accent}" opacity=".12"/>`);
    }
    return parts.join('');
  }

  function buildSvg(qr) {
    const count = qr.getModuleCount();
    const margin = 4;
    const total = count + margin * 2;
    const fg = state.settings.foreground;
    const bg = state.settings.background;
    const style = state.settings.moduleStyle;
    const qrElements = buildQrSvgElements(qr, total, fg, bg, style);
    if (!state.settings.labelEnabled) {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${total} ${total}" shape-rendering="geometricPrecision">${qrElements}</svg>`;
    }

    const frame = state.settings.labelFrame;
    const accent = state.settings.labelAccent;
    const frameBg = frame === 'neon' && state.settings.labelBackground === '#FFFFFF' ? '#10132B' : state.settings.labelBackground;
    const textColor = frame === 'neon' && state.settings.labelTextColor === '#17152F' ? '#FFFFFF' : state.settings.labelTextColor;
    const title = escapeHtml(labelTextValue('labelTitle','defaultLabelTitle'));
    const subtitle = escapeHtml(labelTextValue('labelSubtitle','defaultLabelSubtitle'));
    const headingColor = frame === 'ribbon' || frame === 'neon' ? '#FFFFFF' : textColor;
    const cta = escapeHtml(labelTextValue('labelCta','defaultLabelCta'));
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 490" shape-rendering="geometricPrecision">
      <defs><filter id="glow"><feGaussianBlur stdDeviation="5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <rect x="6" y="6" width="348" height="478" rx="26" fill="${frameBg}"/>
      ${buildLabelSvgDecorations(frame,accent,frameBg,textColor)}
      <text x="180" y="49" text-anchor="middle" fill="${headingColor}" font-family="system-ui,-apple-system,Segoe UI,sans-serif" font-size="24" font-weight="900">${title}</text>
      <text x="180" y="76" text-anchor="middle" fill="${textColor}" fill-opacity=".72" font-family="system-ui,-apple-system,Segoe UI,sans-serif" font-size="12" font-weight="600">${subtitle}</text>
      <rect x="45" y="90" width="270" height="270" rx="19" fill="${bg}"/>
      <svg x="54" y="99" width="252" height="252" viewBox="0 0 ${total} ${total}">${qrElements}</svg>
      <rect x="48" y="390" width="264" height="45" rx="22" fill="${accent}"/>
      <text x="180" y="419" text-anchor="middle" fill="#FFFFFF" font-family="system-ui,-apple-system,Segoe UI,sans-serif" font-size="15" font-weight="900">${cta}</text>
      <text x="180" y="463" text-anchor="middle" fill="${textColor}" fill-opacity=".55" font-family="system-ui,-apple-system,Segoe UI,sans-serif" font-size="10" font-weight="700">QR Studio • Free &amp; Private</text>
    </svg>`;
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
    ctx.fillStyle = state.settings.labelEnabled ? state.settings.labelBackground : state.settings.background;
    ctx.fillRect(0, 0, 180, 180);
    const ratio = Math.min(180 / source.width, 180 / source.height);
    const width = source.width * ratio;
    const height = source.height * ratio;
    ctx.drawImage(source, (180 - width) / 2, (180 - height) / 2, width, height);
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
    state.selectedPresetId = '';
    syncSettingsControls();
    renderPresetLibrary();
    renderFrameLibrary();
    updateLabelControls();
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
    const snapshot = { type: state.type, data: state.data, settings: state.settings, logoDataUrl: state.logoDataUrl, logoName: state.logoName, selectedPresetId: state.selectedPresetId, presetCategory: state.presetCategory };
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
      state.selectedPresetId = typeof saved.selectedPresetId === 'string' ? saved.selectedPresetId : '';
      state.presetCategory = typeof saved.presetCategory === 'string' ? saved.presetCategory : 'all';
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
    $('#labelEnabled').checked = Boolean(state.settings.labelEnabled);
    $('#labelTitle').value = state.settings.labelTitle || '';
    $('#labelSubtitle').value = state.settings.labelSubtitle || '';
    $('#labelCta').value = state.settings.labelCta || '';
    $('#labelAccent').value = state.settings.labelAccent;
    $('#labelAccentHex').value = state.settings.labelAccent.toUpperCase();
    $('#labelBackground').value = state.settings.labelBackground;
    $('#labelBackgroundHex').value = state.settings.labelBackground.toUpperCase();
    $('#labelTextColor').value = state.settings.labelTextColor;
    $('#labelTextColorHex').value = state.settings.labelTextColor.toUpperCase();
    const category = $('#presetCategory'); if (category) category.value = state.presetCategory || 'all';
    updateLabelControls();
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
        state.selectedPresetId = '';
        saveWorkingState(); renderPresetLibrary(); updatePreview();
      });
      $(hex).addEventListener('input', () => {
        const value = $(hex).value.trim();
        if (validHex(value)) {
          state.settings[key] = value.toUpperCase();
          $(color).value = state.settings[key];
          state.selectedPresetId = '';
          saveWorkingState(); renderPresetLibrary(); updatePreview();
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
      state.selectedPresetId = '';
      saveWorkingState(); renderPresetLibrary(); updatePreview();
    });
    $('#moduleStyle').addEventListener('change', () => {
      state.settings.moduleStyle = $('#moduleStyle').value;
      state.selectedPresetId = '';
      saveWorkingState(); renderPresetLibrary(); updatePreview();
    });

    $('#labelEnabled').addEventListener('change', () => {
      state.settings.labelEnabled = $('#labelEnabled').checked;
      updateLabelControls();
      saveWorkingState();
      updatePreview();
    });

    [
      { selector: '#labelTitle', key: 'labelTitle' },
      { selector: '#labelSubtitle', key: 'labelSubtitle' },
      { selector: '#labelCta', key: 'labelCta' }
    ].forEach(({ selector, key }) => {
      $(selector).addEventListener('input', () => {
        state.settings[key] = $(selector).value;
        saveWorkingState(); updatePreview();
      });
    });

    [
      { color: '#labelAccent', hex: '#labelAccentHex', key: 'labelAccent' },
      { color: '#labelBackground', hex: '#labelBackgroundHex', key: 'labelBackground' },
      { color: '#labelTextColor', hex: '#labelTextColorHex', key: 'labelTextColor' }
    ].forEach(({ color, hex, key }) => {
      $(color).addEventListener('input', () => {
        state.settings[key] = $(color).value.toUpperCase();
        $(hex).value = state.settings[key];
        saveWorkingState(); renderFrameLibrary(); updatePreview();
      });
      $(hex).addEventListener('input', () => {
        const value = $(hex).value.trim();
        if (validHex(value)) {
          state.settings[key] = value.toUpperCase();
          $(color).value = state.settings[key];
          saveWorkingState(); renderFrameLibrary(); updatePreview();
        }
      });
      $(hex).addEventListener('blur', () => { $(hex).value = state.settings[key].toUpperCase(); });
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


  const usagePolicyCopy = {
    vi: {
      title: 'Chính sách sử dụng QR Studio',
      intro: 'QR Studio là công cụ hỗ trợ tạo mã QR. Người dùng phải sử dụng công cụ đúng pháp luật, đúng mục đích và tự chịu trách nhiệm về nội dung, đường dẫn và cách phân phối mã QR do mình tạo.',
      sections: [
        { title: '1. Mục đích sử dụng hợp pháp', text: 'Chỉ sử dụng QR Studio cho mục đích hợp pháp, minh bạch và không xâm phạm quyền hoặc lợi ích hợp pháp của cá nhân, tổ chức khác.' },
        { title: '2. Các hành vi không được phép', text: 'Không dùng mã QR để lừa đảo, giả mạo, đánh cắp thông tin, phát tán mã độc, chuyển hướng đến nội dung nguy hiểm, quấy rối, vi phạm bản quyền hoặc thực hiện hành vi trái pháp luật.' },
        { title: '3. Trách nhiệm về nội dung', text: 'Người dùng tự chịu trách nhiệm về văn bản, đường dẫn, hình ảnh, logo, thông tin liên hệ, dữ liệu cá nhân và mọi nội dung được đưa vào mã QR. Hãy bảo đảm bạn có quyền sử dụng và chia sẻ các nội dung đó.' },
        { title: '4. Kiểm tra trước khi phát hành', text: 'Hãy thử quét bằng nhiều thiết bị, kiểm tra chính xác đường dẫn, nội dung, độ tương phản, kích thước và khả năng đọc trước khi in, dán lên sản phẩm hoặc chia sẻ rộng rãi.' },
        { title: '5. Quyền riêng tư và dịch vụ bên thứ ba', text: 'QR Studio tạo mã QR trực tiếp trên thiết bị. Tuy nhiên, khi mã QR dẫn đến website hoặc dịch vụ bên thứ ba, chính sách và mức độ an toàn của dịch vụ đó sẽ được áp dụng.' },
        { title: '6. Giới hạn trách nhiệm', text: 'Công cụ được cung cấp miễn phí theo hiện trạng. Tác giả không kiểm duyệt nội dung người dùng tạo và không chịu trách nhiệm cho thiệt hại phát sinh từ việc sử dụng sai mục đích, đường dẫn hỏng, nội dung độc hại, lỗi in ấn hoặc mã QR không thể quét.' },
        { title: '7. Thay đổi chính sách', text: 'Chính sách có thể được điều chỉnh để phù hợp với tính năng mới và yêu cầu an toàn. Phiên bản hiển thị trong ứng dụng là phiên bản đang áp dụng.' }
      ],
      acknowledgement: 'Bằng việc tiếp tục sử dụng QR Studio, bạn xác nhận đã hiểu các nguyên tắc trên và đồng ý tự chịu trách nhiệm về mã QR do mình tạo và chia sẻ.',
      done: 'Tôi đã hiểu', close: 'Đóng'
    },
    ja: {
      title: 'QR Studio 利用ポリシー',
      intro: 'QR StudioはQRコード作成を支援するツールです。利用者は法律と適切な目的に従って使用し、作成したQRコードの内容、リンク、配布方法について自ら責任を負います。',
      sections: [
        { title: '1. 合法的な目的', text: '法律を守り、透明性のある目的で使用し、個人または組織の正当な権利や利益を侵害しないでください。' },
        { title: '2. 禁止される利用', text: '詐欺、なりすまし、情報窃取、マルウェア配布、危険なサイトへの誘導、嫌がらせ、著作権侵害、その他の違法行為に使用しないでください。' },
        { title: '3. コンテンツの責任', text: 'QRコードに含める文章、リンク、画像、ロゴ、連絡先、個人情報については利用者が責任を負います。使用・共有する権利があることを確認してください。' },
        { title: '4. 公開前の確認', text: '印刷、商品への貼付、広範囲な共有の前に、複数の端末で読み取り、リンク先、内容、コントラスト、サイズを確認してください。' },
        { title: '5. プライバシーと第三者サービス', text: 'QR Studioは端末上でQRコードを生成します。ただし、リンク先のWebサイトや第三者サービスには、それぞれの規約とプライバシーポリシーが適用されます。' },
        { title: '6. 責任の制限', text: '本ツールは無料で現状のまま提供されます。作者は利用者の内容を審査せず、不正利用、無効なリンク、有害な内容、印刷不良、読み取り不能などによる損害について責任を負いません。' },
        { title: '7. ポリシーの変更', text: '新機能や安全上の要件に応じて本ポリシーを変更する場合があります。アプリ内に表示される内容が現在の適用版です。' }
      ],
      acknowledgement: 'QR Studioを継続して使用することで、上記を理解し、作成・共有するQRコードについて自ら責任を負うことに同意したものとみなされます。',
      done: '理解しました', close: '閉じる'
    },
    en: {
      title: 'QR Studio Usage Policy',
      intro: 'QR Studio is a tool for creating QR codes. You must use it lawfully and for legitimate purposes, and you are responsible for the content, destination links, and distribution of every QR code you create.',
      sections: [
        { title: '1. Lawful use', text: 'Use QR Studio only for lawful and transparent purposes that do not infringe the legitimate rights or interests of another person or organization.' },
        { title: '2. Prohibited misuse', text: 'Do not use QR codes for fraud, impersonation, credential theft, malware distribution, unsafe redirects, harassment, copyright infringement, or any unlawful activity.' },
        { title: '3. Responsibility for content', text: 'You are responsible for all text, links, images, logos, contact details, personal data, and other content placed in a QR code. Make sure you have permission to use and share it.' },
        { title: '4. Test before release', text: 'Before printing, attaching a QR code to a product, or sharing it widely, test it on multiple devices and verify the destination, content, contrast, size, and scan reliability.' },
        { title: '5. Privacy and third parties', text: 'QR Studio generates QR codes on your device. When a QR code opens a third-party website or service, that provider’s terms, privacy practices, and security measures apply.' },
        { title: '6. Limitation of responsibility', text: 'The tool is provided free of charge and as-is. The author does not review user-generated content and is not responsible for loss caused by misuse, broken links, malicious destinations, printing defects, or unscannable QR codes.' },
        { title: '7. Policy changes', text: 'This policy may be updated for new features or safety requirements. The version displayed in the application is the version currently in effect.' }
      ],
      acknowledgement: 'By continuing to use QR Studio, you confirm that you understand these rules and accept responsibility for the QR codes you create and distribute.',
      done: 'I understand', close: 'Close'
    },
    ne: {
      title: 'QR Studio प्रयोग नीति',
      intro: 'QR Studio QR कोड बनाउन सहयोग गर्ने उपकरण हो। यसलाई कानुनअनुसार र उचित उद्देश्यका लागि प्रयोग गर्नुहोस्, र बनाइएको QR को सामग्री, लिङ्क तथा वितरणको जिम्मेवारी आफैं लिनुहोस्।',
      sections: [
        { title: '१. कानुनी प्रयोग', text: 'QR Studio कानुनी, पारदर्शी र अरू व्यक्ति वा संस्थाको अधिकार तथा हित नउल्लङ्घन गर्ने उद्देश्यका लागि मात्र प्रयोग गर्नुहोस्।' },
        { title: '२. निषेधित दुरुपयोग', text: 'ठगी, नक्कली पहिचान, गोप्य जानकारी चोरी, हानिकारक सफ्टवेयर, असुरक्षित लिङ्क, दुर्व्यवहार, प्रतिलिपि अधिकार उल्लङ्घन वा गैरकानुनी कामका लागि प्रयोग नगर्नुहोस्।' },
        { title: '३. सामग्रीको जिम्मेवारी', text: 'QR मा राखिएको पाठ, लिङ्क, तस्बिर, लोगो, सम्पर्क विवरण, व्यक्तिगत डेटा र अन्य सामग्रीको जिम्मेवारी प्रयोगकर्ताकै हुन्छ। प्रयोग तथा साझा गर्ने अनुमति भएको सुनिश्चित गर्नुहोस्।' },
        { title: '४. सार्वजनिक गर्नुअघि परीक्षण', text: 'प्रिन्ट, उत्पादनमा टाँस्ने वा व्यापक रूपमा साझा गर्नुअघि विभिन्न उपकरणमा स्क्यान गरी लिङ्क, सामग्री, कन्ट्रास्ट, आकार र पढ्न सकिने अवस्था जाँच गर्नुहोस्।' },
        { title: '५. गोपनीयता र तेस्रो पक्ष', text: 'QR Studio ले उपकरणमै QR बनाउँछ। QR ले तेस्रो पक्षको वेबसाइट वा सेवामा लैजाँदा त्यस सेवाको नीति, गोपनीयता र सुरक्षा लागू हुन्छ।' },
        { title: '६. जिम्मेवारीको सीमा', text: 'यो उपकरण निःशुल्क र यथास्थितिमा उपलब्ध छ। लेखकले प्रयोगकर्ताको सामग्री जाँच गर्दैन र दुरुपयोग, बिग्रिएको लिङ्क, हानिकारक गन्तव्य, प्रिन्ट त्रुटि वा स्क्यान नहुने QR बाट हुने क्षतिको जिम्मेवारी लिँदैन।' },
        { title: '७. नीति परिवर्तन', text: 'नयाँ सुविधा वा सुरक्षा आवश्यकताअनुसार नीति परिवर्तन हुन सक्छ। एपमा देखाइएको संस्करण हाल लागू संस्करण हो।' }
      ],
      acknowledgement: 'QR Studio प्रयोग जारी राख्दा तपाईंले यी नियम बुझ्नुभएको र आफूले बनाएको तथा साझा गरेको QR को जिम्मेवारी लिने सहमति दिनुभएको मानिन्छ।',
      done: 'मैले बुझें', close: 'बन्द गर्नुहोस्'
    }
  };

  const installGuideCopy = {
    vi: {
      title: 'Cài QR Studio trên điện thoại',
      iosDescription: 'Trên iPhone hoặc iPad, trình duyệt không hiện hộp cài tự động. Hãy thêm QR Studio vào Màn hình chính theo các bước sau:',
      androidDescription: 'Hãy cài QR Studio như một ứng dụng để mở nhanh, dùng toàn màn hình và tiếp tục sử dụng khi kết nối không ổn định.',
      genericDescription: 'Trình duyệt chưa mở hộp cài tự động. Bạn vẫn có thể thêm QR Studio vào màn hình chính từ menu trình duyệt.',
      iosSteps: ['Mở trang bằng Safari.', 'Nhấn nút Chia sẻ ở thanh công cụ.', 'Chọn “Thêm vào Màn hình chính”.', 'Nhấn “Thêm” để hoàn tất.'],
      androidSteps: ['Nhấn menu ba chấm ⋮ của trình duyệt.', 'Chọn “Cài đặt ứng dụng” hoặc “Thêm vào màn hình chính”.', 'Xác nhận “Cài đặt”.'],
      genericSteps: ['Mở menu của trình duyệt.', 'Chọn “Cài đặt ứng dụng” hoặc “Thêm vào màn hình chính”.', 'Xác nhận để hoàn tất.'],
      done: 'Đã hiểu', close: 'Đóng'
    },
    ja: {
      title: 'QR Studioをスマートフォンにインストール',
      iosDescription: 'iPhone・iPadでは自動インストール画面が表示されません。次の手順でホーム画面に追加してください。',
      androidDescription: 'QR Studioをアプリとしてインストールすると、すぐに起動でき、全画面で利用できます。',
      genericDescription: '自動インストール画面がまだ利用できません。ブラウザのメニューからホーム画面に追加できます。',
      iosSteps: ['Safariでこのページを開きます。', 'ツールバーの共有ボタンを押します。', '「ホーム画面に追加」を選びます。', '「追加」を押して完了します。'],
      androidSteps: ['ブラウザの三点メニュー ⋮ を押します。', '「アプリをインストール」または「ホーム画面に追加」を選びます。', '「インストール」を確認します。'],
      genericSteps: ['ブラウザのメニューを開きます。', '「アプリをインストール」または「ホーム画面に追加」を選びます。', '確認して完了します。'],
      done: '確認しました', close: '閉じる'
    },
    en: {
      title: 'Install QR Studio on your phone',
      iosDescription: 'On iPhone or iPad, browsers do not show an automatic install prompt. Add QR Studio to your Home Screen with these steps:',
      androidDescription: 'Install QR Studio as an app for quick access, full-screen use, and better access when the connection is unstable.',
      genericDescription: 'The automatic install prompt is not available yet. You can still add QR Studio from your browser menu.',
      iosSteps: ['Open this page in Safari.', 'Tap the Share button in the toolbar.', 'Choose “Add to Home Screen”.', 'Tap “Add” to finish.'],
      androidSteps: ['Open the browser menu ⋮.', 'Choose “Install app” or “Add to Home screen”.', 'Confirm the installation.'],
      genericSteps: ['Open the browser menu.', 'Choose “Install app” or “Add to Home screen”.', 'Confirm to finish.'],
      done: 'Got it', close: 'Close'
    },
    ne: {
      title: 'फोनमा QR Studio स्थापना गर्नुहोस्',
      iosDescription: 'iPhone वा iPad मा स्वचालित स्थापना सन्देश देखिँदैन। यी चरणबाट गृह स्क्रिनमा थप्नुहोस्:',
      androidDescription: 'छिटो खोल्न, पूर्ण स्क्रिनमा चलाउन र कमजोर इन्टरनेटमा पनि सजिलो प्रयोगका लागि QR Studio स्थापना गर्नुहोस्।',
      genericDescription: 'स्वचालित स्थापना सन्देश अहिले उपलब्ध छैन। ब्राउजर मेनुबाट गृह स्क्रिनमा थप्न सकिन्छ।',
      iosSteps: ['यो पृष्ठ Safari मा खोल्नुहोस्।', 'टुलबारको Share बटन थिच्नुहोस्।', '“Add to Home Screen” छान्नुहोस्।', 'पूरा गर्न “Add” थिच्नुहोस्।'],
      androidSteps: ['ब्राउजरको तीन-बिन्दु मेनु ⋮ खोल्नुहोस्।', '“Install app” वा “Add to Home screen” छान्नुहोस्।', 'स्थापना पुष्टि गर्नुहोस्।'],
      genericSteps: ['ब्राउजर मेनु खोल्नुहोस्।', '“Install app” वा “Add to Home screen” छान्नुहोस्।', 'पूरा गर्न पुष्टि गर्नुहोस्।'],
      done: 'बुझें', close: 'बन्द गर्नुहोस्'
    }
  };

  function isMobileDevice() {
    return window.matchMedia?.('(max-width: 820px)').matches || /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
  }

  function isStandaloneMode() {
    return window.matchMedia?.('(display-mode: standalone)').matches || window.navigator.standalone === true;
  }

  function installPlatform() {
    const ua = navigator.userAgent || '';
    if (/iPhone|iPad|iPod/i.test(ua)) return 'ios';
    if (/Android/i.test(ua)) return 'android';
    return 'generic';
  }

  function updateInstallButtonVisibility() {
    const button = $('#installBtn');
    if (!button) return;
    const shouldShow = !isStandaloneMode() && (isMobileDevice() || Boolean(state.deferredInstallPrompt));
    button.classList.toggle('is-hidden', !shouldShow);
  }

  function renderInstallGuide() {
    const copy = installGuideCopy[state.language] || installGuideCopy.en;
    const platform = installPlatform();
    const descriptionKey = `${platform}Description`;
    const stepsKey = `${platform}Steps`;
    $('#installGuideTitle').textContent = copy.title;
    $('#installGuideDescription').textContent = copy[descriptionKey] || copy.genericDescription;
    $('#installGuideSteps').innerHTML = (copy[stepsKey] || copy.genericSteps).map((step) => `<li>${escapeHtml(step)}</li>`).join('');
    $('#installGuideDone').textContent = copy.done;
    $('#installGuideClose').setAttribute('aria-label', copy.close);
  }

  function openInstallGuide() {
    renderInstallGuide();
    const guide = $('#installGuide');
    guide.hidden = false;
    document.body.classList.add('install-guide-open');
    $('#installGuideClose').focus();
  }

  function closeInstallGuide() {
    const guide = $('#installGuide');
    guide.hidden = true;
    document.body.classList.remove('install-guide-open');
    $('#installBtn')?.focus();
  }

  function renderUsagePolicy() {
    const copy = usagePolicyCopy[state.language] || usagePolicyCopy.en;
    $('#usagePolicyModalTitle').textContent = copy.title;
    $('#usagePolicyModalIntro').textContent = copy.intro;
    $('#usagePolicySections').innerHTML = copy.sections.map((section) => `
      <article class="policy-modal__section">
        <h3>${escapeHtml(section.title)}</h3>
        <p>${escapeHtml(section.text)}</p>
      </article>
    `).join('');
    $('#usagePolicyAcknowledgement').textContent = copy.acknowledgement;
    $('#usagePolicyDone').textContent = copy.done;
    $('#usagePolicyClose').setAttribute('aria-label', copy.close);
  }

  function openUsagePolicy() {
    renderUsagePolicy();
    const modal = $('#usagePolicyModal');
    modal.hidden = false;
    document.body.classList.add('policy-modal-open');
    $('#usagePolicyClose').focus();
  }

  function closeUsagePolicy() {
    const modal = $('#usagePolicyModal');
    modal.hidden = true;
    document.body.classList.remove('policy-modal-open');
    $('#openPolicyBtn')?.focus();
  }

  function bindEvents() {
    $('#languageSelect').addEventListener('change', () => {
      state.language = $('#languageSelect').value;
      localStorage.setItem(STORAGE.language, state.language);
      applyLanguage();
      updateLogoStatus();
      if (!$('#installGuide').hidden) renderInstallGuide();
      if (!$('#usagePolicyModal').hidden) renderUsagePolicy();
    });
    $('#themeToggle').addEventListener('click', () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem(STORAGE.theme, state.theme);
      applyTheme();
    });
    $('#resetStyleBtn').addEventListener('click', () => {
      state.settings = { ...defaultSettings };
      state.selectedPresetId = '';
      state.presetCategory = 'all';
      state.logoDataUrl = ''; state.logoName = '';
      syncSettingsControls(); renderPresetLibrary(); renderFrameLibrary(); updateLabelControls(); updateLogoStatus(); saveWorkingState(); updatePreview(); toast(t('styleReset'));
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
    $('#presetCategory')?.addEventListener('change', () => {
      state.presetCategory = $('#presetCategory').value;
      saveWorkingState();
      renderPresetLibrary();
    });
    $('#downloadPngBtn').addEventListener('click', downloadPng);
    $('#downloadSvgBtn').addEventListener('click', downloadSvg);
    $('#copyBtn').addEventListener('click', copyQr);
    $('#shareBtn').addEventListener('click', shareQr);
    $('#openPolicyBtn')?.addEventListener('click', openUsagePolicy);
    $('#footerPolicyBtn')?.addEventListener('click', openUsagePolicy);
    $('#usagePolicyClose')?.addEventListener('click', closeUsagePolicy);
    $('#usagePolicyDone')?.addEventListener('click', closeUsagePolicy);
    $$('[data-policy-close]').forEach((element) => element.addEventListener('click', closeUsagePolicy));
    $('#clearHistoryBtn').addEventListener('click', () => {
      if (!state.history.length || !window.confirm(t('confirmClear'))) return;
      state.history = []; writeHistory(); renderHistory(); toast(t('historyCleared'));
    });

    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      state.deferredInstallPrompt = event;
      updateInstallButtonVisibility();
      toast(t('installReady'));
    });
    $('#installBtn').addEventListener('click', async () => {
      if (state.deferredInstallPrompt) {
        state.deferredInstallPrompt.prompt();
        const choice = await state.deferredInstallPrompt.userChoice;
        if (choice?.outcome === 'accepted') {
          state.deferredInstallPrompt = null;
          updateInstallButtonVisibility();
          return;
        }
      }
      openInstallGuide();
    });
    $('#installGuideClose').addEventListener('click', closeInstallGuide);
    $('#installGuideDone').addEventListener('click', closeInstallGuide);
    $$('[data-install-close]').forEach((element) => element.addEventListener('click', closeInstallGuide));
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      if (!$('#usagePolicyModal').hidden) closeUsagePolicy();
      else if (!$('#installGuide').hidden) closeInstallGuide();
    });
    window.addEventListener('appinstalled', () => {
      state.deferredInstallPrompt = null;
      updateInstallButtonVisibility();
      toast(t('installed'));
    });
    window.matchMedia?.('(display-mode: standalone)').addEventListener?.('change', updateInstallButtonVisibility);
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
    updateInstallButtonVisibility();
    $('#currentYear').textContent = new Date().getFullYear();
    registerServiceWorker();

    // Retry once in case the CDN library finishes after the application script.
    if (typeof window.qrcode !== 'function') setTimeout(updatePreview, 1200);
  }

  init();
})();
