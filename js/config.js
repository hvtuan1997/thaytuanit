// js/config.js
// ======================================================================
// FILE CẤU HÌNH TRUNG TÂM (DÀNH CHO KHÁCH HÀNG BÀN GIAO)
// ======================================================================

const CONFIG = {
    // Google Drive API Key (Bắt buộc để tải ảnh từ Drive)
    GOOGLE_API_KEY: 'AIzaSyAwaj_0Cho4jJi9wwj3vQ5HW7mGeQv9XNI', 

    // ======================================================================
    // CẤU HÌNH RIÊNG CHO TỪNG KHÓA HỌC
    // Khách hàng thay ID thư mục Drive và Link YouTube tương ứng vào bên dưới
    // ======================================================================
    COURSES: {
        // ------------------------------------------
        // NHÓM K12 (Chỉ cần ID thư mục Drive Sản phẩm)
        // ------------------------------------------
        'scratch': {
            PRODUCTS_DRIVE_FOLDER_ID: '19SK04ob-WGhThS6goCB3hoifhpt93lDJ'
        },
        'python': {
            PRODUCTS_DRIVE_FOLDER_ID: '19SK04ob-WGhThS6goCB3hoifhpt93lDJ'
        },
        'gamemaker': {
            PRODUCTS_DRIVE_FOLDER_ID: '19SK04ob-WGhThS6goCB3hoifhpt93lDJ'
        },
        'web': {
            PRODUCTS_DRIVE_FOLDER_ID: '19SK04ob-WGhThS6goCB3hoifhpt93lDJ'
        },
        'thpt': {
            PRODUCTS_DRIVE_FOLDER_ID: '19SK04ob-WGhThS6goCB3hoifhpt93lDJ'
        },
        'cs': {
            PRODUCTS_DRIVE_FOLDER_ID: '19SK04ob-WGhThS6goCB3hoifhpt93lDJ'
        },

        // ------------------------------------------
        // NHÓM THI ĐẤU (Cần cả ID Drive Thành tựu & Link YouTube)
        // ------------------------------------------
        'tin-hoc-tre-a': {
            ACHIEVEMENTS_DRIVE_FOLDER_ID: '1-IwZmZcxwYvNgK7z0jt-ZHMF88vPyNeR',
            YOUTUBE_VIDEOS: [
                "https://www.youtube.com/watch?v=Ts9byfFQAw0",
                "https://www.youtube.com/watch?v=xstOm9IWamg",
                "https://www.youtube.com/watch?v=10Gsbr9la2Q",
                "https://www.youtube.com/watch?v=Y_Cz5QrTduw"
            ]
        },
        'tin-hoc-tre-b': {
            ACHIEVEMENTS_DRIVE_FOLDER_ID: '1-IwZmZcxwYvNgK7z0jt-ZHMF88vPyNeR',
            YOUTUBE_VIDEOS: [
                "https://www.youtube.com/watch?v=aTnSqdU5WaU",
                "https://www.youtube.com/watch?v=hLbYHBan-xs",
                "https://www.youtube.com/watch?v=yPB1Q5dkM5o",
                "https://www.youtube.com/watch?v=-VrmvpQeQzM"
            ]
        },
        'tin-hoc-tre-c': {
            ACHIEVEMENTS_DRIVE_FOLDER_ID: '1-IwZmZcxwYvNgK7z0jt-ZHMF88vPyNeR',
            YOUTUBE_VIDEOS: [
                "https://www.youtube.com/watch?v=8JgmzSbWmE4",
                "https://www.youtube.com/watch?v=EqNaDB-zwto",
                "https://www.youtube.com/watch?v=hDGJk-MHXRQ",
                "https://www.youtube.com/watch?v=5XcqRzAWNKQ"
            ]
        },
        'hsg-tin': {
            ACHIEVEMENTS_DRIVE_FOLDER_ID: '1-IwZmZcxwYvNgK7z0jt-ZHMF88vPyNeR',
            YOUTUBE_VIDEOS: [
                "https://www.youtube.com/watch?v=X7iRpfE7E7U",
                "https://www.youtube.com/watch?v=YrQU30cWkL0",
                "https://www.youtube.com/watch?v=vH0VhSs0irk",
                "https://www.youtube.com/watch?v=0SgoX6oaYeY"
            ]
        },
        'chuyen-tin-10': {
            ACHIEVEMENTS_DRIVE_FOLDER_ID: '1-IwZmZcxwYvNgK7z0jt-ZHMF88vPyNeR',
            YOUTUBE_VIDEOS: [
                "https://www.youtube.com/watch?v=GVFNgyrcWSw",
                "https://www.youtube.com/watch?v=BY3aRhQif3E",
                "https://www.youtube.com/watch?v=qJEo7aP3UgU"
            ]
        },
        'hkico': {
            ACHIEVEMENTS_DRIVE_FOLDER_ID: '1-IwZmZcxwYvNgK7z0jt-ZHMF88vPyNeR',
            YOUTUBE_VIDEOS: [
                "https://www.youtube.com/watch?v=ox3AMFla3kg",
                "https://www.youtube.com/watch?v=djtTglmh6Bc",
                "https://www.youtube.com/watch?v=9_-1kNUYtVM",
                "https://www.youtube.com/watch?v=VJWPJYzYTsU"
            ]
        }
    }
};
