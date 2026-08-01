// Dữ liệu tĩnh đã được chuyển sang file config.js để dễ quản lý.

// Trích xuất ID video từ link YouTube
function extractVideoID(url) {
    if (typeof url !== 'string') return url;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : url;
}

async function fetchDriveImages(folderId) {
    if (!CONFIG.GOOGLE_API_KEY || CONFIG.GOOGLE_API_KEY === 'YOUR_API_KEY_HERE') {
        return [];
    }

    const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType+contains+'image/'&key=${CONFIG.GOOGLE_API_KEY}&fields=files(id,name,description)&pageSize=50`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            return [];
        }
        const data = await response.json();
        return data.files || [];
    } catch (error) {
        return [];
    }
}

// Hàm tạo slider. showText = true sẽ hiển thị thêm tiêu đề và mô tả.
function createSlider(container, items, isDrive = false, showText = false, isVideo = false) {
    if (!container || !items || items.length === 0) return;

    // Create wrapper for relative positioning of buttons
    const wrapper = document.createElement('div');
    wrapper.className = 'gallery-wrapper';
    
    // Create the actual scroll container
    const scrollArea = document.createElement('div');
    scrollArea.className = 'gallery-scroll-area';

    items.forEach(file => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        let clickableWrapper = item;
        
        if (isVideo) {
            // Hàn chết thẻ a link
            const a = document.createElement('a');
            a.href = "javascript:void(0)";
            a.onclick = function() {
                openVideoModal(file.id);
            };
            a.style.display = 'block';
            a.style.position = 'relative';
            item.appendChild(a);
            clickableWrapper = a;
            
            // Icon play YouTube overlay
            const playIcon = document.createElement('div');
            playIcon.className = 'yt-play-icon';
            playIcon.innerHTML = '<i class="fa-brands fa-youtube"></i>';
            clickableWrapper.appendChild(playIcon);
        } else {
            // Bao bọc ảnh bằng thẻ a để có hiệu ứng click cho ảnh thường/Drive
            const a = document.createElement('a');
            a.href = "javascript:void(0)";
            a.style.display = 'block';
            a.style.position = 'relative';
            item.appendChild(a);
            clickableWrapper = a;
        }
        
        const image = document.createElement('img');
        
        if (isVideo) {
            image.src = `https://img.youtube.com/vi/${file.id}/hqdefault.jpg`;
            image.alt = file.title;
        } else if (isDrive) {
            // Google Drive HD Thumbnail
            image.src = `https://drive.google.com/thumbnail?id=${file.id}&sz=w1920`;
            image.alt = file.name || "Ảnh học viên";
            
            clickableWrapper.onclick = function() {
                const titleText = (file.name || "Sản phẩm học viên").replace(/\.[^/.]+$/, "");
                const descText = file.description || "";
                openImageModal(image.src, titleText, descText);
            };
        } else {
            image.src = file.img;
            image.alt = file.title;
            
            clickableWrapper.onclick = function() {
                openImageModal(image.src, file.title, file.desc);
            };
        }
        image.loading = "lazy";
        image.style.cursor = "pointer"; // Hiệu ứng con trỏ tay
        clickableWrapper.appendChild(image);
        
        // Thêm text nếu có yêu cầu
        if (showText) {
            const info = document.createElement('div');
            info.className = 'gallery-info';
            const title = document.createElement('h4');
            const desc = document.createElement('p');

            if (isDrive) {
                title.textContent = (file.name || "Sản phẩm học viên").replace(/\.[^/.]+$/, "");
                desc.textContent = file.description || "Dự án xuất sắc";
            } else {
                title.textContent = file.title;
                desc.textContent = file.desc || "Video bài giảng tham khảo";
            }

            info.appendChild(title);
            info.appendChild(desc);
            item.appendChild(info);
        }
        
        scrollArea.appendChild(item);
    });

    // Create navigation buttons
    const prevBtn = document.createElement('button');
    prevBtn.className = 'gallery-nav prev-btn';
    prevBtn.innerHTML = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>';
    
    const nextBtn = document.createElement('button');
    nextBtn.className = 'gallery-nav next-btn';
    nextBtn.innerHTML = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>';

    // Button click handlers
    prevBtn.addEventListener('click', () => {
        const itemWidth = scrollArea.querySelector('.gallery-item').offsetWidth + 20; // 20 is gap
        scrollArea.scrollBy({ left: -itemWidth, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        const itemWidth = scrollArea.querySelector('.gallery-item').offsetWidth + 20;
        scrollArea.scrollBy({ left: itemWidth, behavior: 'smooth' });
    });

    // Assemble
    wrapper.appendChild(prevBtn);
    wrapper.appendChild(scrollArea);
    wrapper.appendChild(nextBtn);
    
    container.appendChild(wrapper);
}

// Chức năng Modal cho Video
function openVideoModal(videoId) {
    let modal = document.getElementById('yt-video-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'yt-video-modal';
        modal.className = 'video-modal';
        
        const content = document.createElement('div');
        content.className = 'video-modal-content';
        
        const closeBtn = document.createElement('span');
        closeBtn.className = 'video-modal-close';
        closeBtn.innerHTML = '&times;';
        closeBtn.onclick = function() {
            modal.style.display = 'none';
            document.getElementById('yt-iframe').src = ''; // Dừng video khi đóng
        };
        
        const iframeWrapper = document.createElement('div');
        iframeWrapper.className = 'video-iframe-wrapper';
        
        const iframe = document.createElement('iframe');
        iframe.id = 'yt-iframe';
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        
        iframeWrapper.appendChild(iframe);
        content.appendChild(closeBtn);
        content.appendChild(iframeWrapper);
        modal.appendChild(content);
        document.body.appendChild(modal);
        
        // Đóng khi click ngoài
        modal.onclick = function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.getElementById('yt-iframe').src = '';
            }
        };
    }
    
    document.getElementById('yt-iframe').src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    modal.style.display = 'flex';
}

// Chức năng Modal cho Ảnh
function openImageModal(src, titleText, descText) {
    let modal = document.getElementById('image-viewer-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'image-viewer-modal';
        modal.className = 'video-modal'; // Kế thừa nền đen từ video modal
        
        const content = document.createElement('div');
        content.className = 'video-modal-content';
        content.style.maxWidth = '900px';
        content.style.background = 'transparent';
        content.style.boxShadow = 'none';
        
        const closeBtn = document.createElement('span');
        closeBtn.className = 'video-modal-close';
        closeBtn.innerHTML = '&times;';
        closeBtn.onclick = function() {
            modal.style.display = 'none';
        };
        
        const img = document.createElement('img');
        img.id = 'image-modal-img';
        img.style.width = '100%';
        img.style.height = 'auto';
        img.style.maxHeight = '80vh';
        img.style.objectFit = 'contain';
        img.style.borderRadius = '8px';
        img.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        
        const title = document.createElement('h3');
        title.id = 'image-modal-title';
        title.style.color = '#fff';
        title.style.marginTop = '15px';
        title.style.textAlign = 'center';
        
        const desc = document.createElement('p');
        desc.id = 'image-modal-desc';
        desc.style.color = '#ccc';
        desc.style.textAlign = 'center';
        
        content.appendChild(closeBtn);
        content.appendChild(img);
        content.appendChild(title);
        content.appendChild(desc);
        modal.appendChild(content);
        document.body.appendChild(modal);
        
        // Đóng khi click ngoài
        modal.onclick = function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        };
    }
    
    document.getElementById('image-modal-img').src = src;
    document.getElementById('image-modal-title').textContent = titleText || '';
    document.getElementById('image-modal-desc').textContent = descText || '';
    modal.style.display = 'flex';
}

document.addEventListener("DOMContentLoaded", async function () {
    const productsContainer = document.getElementById('products-gallery-slider');
    const achievementsContainer = document.getElementById('achievements-gallery-slider');
    const videosContainer = document.getElementById('videos-gallery-slider');
    
    // Determine the current course from the <main> layout class
    let courseId = null;
    const mainEl = document.querySelector('main');
    if (mainEl && mainEl.className) {
        const match = mainEl.className.match(/layout-([a-zA-Z0-9-]+)/);
        if (match) {
            courseId = match[1];
        }
    }
    
    // Resolve configurations for the current course
    const courseConfig = (courseId && CONFIG.COURSES && CONFIG.COURSES[courseId]) ? CONFIG.COURSES[courseId] : {};
    const productsDriveId = courseConfig.PRODUCTS_DRIVE_FOLDER_ID || null;
    const achievementsDriveId = courseConfig.ACHIEVEMENTS_DRIVE_FOLDER_ID || null;
    const youtubeVideos = courseConfig.YOUTUBE_VIDEOS || [];
    
    // 1. Khởi tạo slider Sản Phẩm (K12) bằng Google Drive (có chữ)
    if (productsContainer) {
        if (productsDriveId) {
            const driveProductsFiles = await fetchDriveImages(productsDriveId);
            if (driveProductsFiles.length > 0) {
                createSlider(productsContainer, driveProductsFiles, true, true, false);
            } else {
                const msg = document.createElement('p');
                msg.style.textAlign = 'center';
                msg.style.color = '#ef4444';
                msg.innerHTML = "Chưa thể tải ảnh sản phẩm từ Drive.";
                productsContainer.appendChild(msg);
            }
        } else {
            productsContainer.innerHTML = '<p style="text-align: center; color: #ef4444;">Chưa cấu hình thư mục Drive (PRODUCTS_DRIVE_FOLDER_ID) cho khóa học này.</p>';
        }
    }
    
    // 2. Khởi tạo slider Thành Tựu (Thi đấu) bằng Google Drive (chỉ ảnh)
    if (achievementsContainer) {
        const driveAchievementsFiles = await fetchDriveImages(achievementsDriveId);
        if (driveAchievementsFiles.length > 0) {
            createSlider(achievementsContainer, driveAchievementsFiles, true, false, false);
        } else {
            const msg = document.createElement('p');
            msg.style.textAlign = 'center';
            msg.style.color = '#ef4444';
            msg.innerHTML = "Chưa thể tải ảnh thành tựu từ Drive. Hãy kiểm tra API Key.";
            achievementsContainer.appendChild(msg);
        }
    }
    
    // 3. Khởi tạo slider Video Khóa Học Tham Khảo (Thi đấu)
    if (videosContainer) {
        // Chuyển mảng string link thành mảng object
        const videoObjects = youtubeVideos.map(url => {
            return {
                id: extractVideoID(url),
                title: "Đang tải tiêu đề...",
                desc: "Video bài giảng tham khảo",
                url: url
            };
        });
        
        // Khởi tạo giao diện lập tức để user không phải chờ
        createSlider(videosContainer, videoObjects, false, true, true);
        
        // Dùng dịch vụ Noembed (miễn phí, không cần API Key) để bypass CORS và lấy tiêu đề
        videoObjects.forEach((vObj, index) => {
            fetch(`https://noembed.com/embed?url=${vObj.url}`)
                .then(res => res.json())
                .then(data => {
                    if (data.title) {
                        // Cập nhật text trực tiếp trên giao diện
                        const videoElements = videosContainer.querySelectorAll('.gallery-item');
                        const el = videoElements[index];
                        if (el) {
                            const titleEl = el.querySelector('h4');
                            if (titleEl) titleEl.textContent = data.title;
                        }
                    }
                })
                .catch(err => {
                    console.error("Không thể tải tiêu đề YouTube từ Noembed:", err);
                    // Đổi text loading thành mặc định nếu lỗi
                    const videoElements = videosContainer.querySelectorAll('.gallery-item');
                    const el = videoElements[index];
                    if (el) {
                        const titleEl = el.querySelector('h4');
                        if (titleEl && titleEl.textContent === "Đang tải tiêu đề...") {
                            titleEl.textContent = "Video bài giảng";
                        }
                    }
                });
        });
    }
});
