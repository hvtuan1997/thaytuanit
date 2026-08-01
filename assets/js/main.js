document.addEventListener('DOMContentLoaded', () => {
    
    // 1. XỬ LÝ MENU TRÊN ĐIỆN THOẠI (MOBILE MENU TOGGLE)
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const toggleIcon = menuToggle.querySelector('i');

    menuToggle.addEventListener('click', () => {
        // Bật/tắt class 'open' để ẩn hiện menu
        navMenu.classList.toggle('open');
        
        // Thay đổi icon từ thanh Menu thành dấu X và ngược lại
        if (navMenu.classList.contains('open')) {
            toggleIcon.classList.remove('fa-bars');
            toggleIcon.classList.add('fa-xmark');
        } else {
            toggleIcon.classList.remove('fa-xmark');
            toggleIcon.classList.add('fa-bars');
        }
    });

    // Tự động đóng menu khi học sinh bấm vào 1 đường link điều hướng
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            toggleIcon.classList.remove('fa-xmark');
            toggleIcon.classList.add('fa-bars');
        });
    });


    // 2. HIỆU ỨNG NAVBAR KHI CUỘN CHUỘT (SCROLL EFFECT)
    const header = document.querySelector('.main-header');
    
    window.addEventListener('scroll', () => {
        // Nếu cuộn xuống quá 50px thì thêm hiệu ứng shadow cho thanh menu
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. XỬ LÝ ẨN HIỆN & CUỘN LÊN CỦA NÚT SCROLL TO TOP
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', () => {
        // Nếu cuộn màn hình xuống quá 400px thì hiện nút, ngược lại thì ẩn đi
        if (window.scrollY > 400) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    // Sự kiện khi học sinh click vào nút
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Cuộn mượt mà lên đầu trang
        });
    });
});