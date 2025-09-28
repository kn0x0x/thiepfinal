# Hướng dẫn thiết lập Google Sheets cho RSVP

## Bước 1: Tạo Google Sheet
1. Truy cập [Google Sheets](https://sheets.google.com)
2. Tạo sheet mới với tên "Wedding RSVP"
3. Tạo các cột: A1: "Tên", B1: "SĐT", C1: "Tham gia", D1: "Lời nhắn", E1: "Thời gian"

## Bước 2: Tạo Google Apps Script
1. Vào Tools > Script Editor
2. Thay thế code mặc định bằng:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  const timestamp = new Date();
  const row = [
    data.name,
    data.phone,
    data.attendance === 'yes' ? 'Có' : 'Không',
    data.message || '',
    timestamp
  ];
  
  sheet.appendRow(row);
  
  return ContentService
    .createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## Bước 3: Deploy Web App
1. Click Deploy > New Deployment
2. Chọn "Web app"
3. Execute as: "Me"
4. Who has access: "Anyone"
5. Click Deploy
6. Copy URL được tạo

## Bước 4: Cập nhật URL trong code
Thay thế `YOUR_SCRIPT_ID` trong file `RSVPModal.jsx` bằng URL vừa copy.
