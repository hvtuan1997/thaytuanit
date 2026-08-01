// Tự động load Header và Footer
const headerHTML = `<header class="main-header">
        <div class="container nav-container">
            <a href="index.html" class="logo">
                <i class="fa-solid Nav-icon fa-code"></i>
                <span>Thầy Hoàng Tuân</span>
            </a>

            <nav class="nav-menu" id="navMenu">
                <a href="index.html" class="nav-link">Trang chủ</a>

                <div class="dropdown">
                    <a href="index.html#courses-k12" class="nav-link">
                        Khóa học K-12 <i class="fa-solid fa-chevron-down dropdown-icon"></i>
                    </a>
                    <div class="dropdown-menu">
                        <div class="dropdown-group">
                            <h4>Khám phá (Cấp 1-2)</h4>
                            <a href="scratch.html" class="dropdown-item"><i class="fa-solid fa-cubes"></i> Lập trình
                                Scratch</a>
                            <a href="game-maker.html" class="dropdown-item"><i class="fa-solid fa-gamepad"></i>
                                GameMaker Studio</a>
                        </div>
                        <div class="dropdown-group">
                            <h4>Phát triển (Cấp 2-3)</h4>
                            <a href="python.html" class="dropdown-item"><i class="fa-brands fa-python"></i> Lập trình
                                Python & C#</a>
                            <a href="web.html" class="dropdown-item"><i class="fa-solid fa-globe"></i> Thiết kế
                                Website</a>
                            <a href="cs.html" class="dropdown-item"><i class="fa-solid fa-microchip"></i> Computer
                                Science</a>
                        </div>
                    </div>
                </div>

                <div class="dropdown">
                    <a href="index.html#competitions" class="nav-link">
                        Lập trình thi đấu <i class="fa-solid fa-chevron-down dropdown-icon"></i>
                    </a>
                    <div class="dropdown-menu dropdown-large">
                        <a href="tin-hoc-tre-a.html" class="dropdown-item item-two-lines">
                            <i class="fa-solid fa-star text-amber"></i>
                            <div class="item-text">
                                <strong>Tin học trẻ - Bảng A</strong>
                                <span class="dropdown-subtext">Tiểu học (Scratch / Python)</span>
                            </div>
                        </a>
                        <a href="tin-hoc-tre-b.html" class="dropdown-item item-two-lines">
                            <i class="fa-solid fa-award text-blue"></i>
                            <div class="item-text">
                                <strong>Tin học trẻ - Bảng B</strong>
                                <span class="dropdown-subtext">Trung học cơ sở (C++ / Python)</span>
                            </div>
                        </a>
                        <a href="hsg-tin.html" class="dropdown-item item-two-lines">
                            <i class="fa-solid fa-medal text-purple"></i>
                            <div class="item-text">
                                <strong>Học sinh giỏi Tin học</strong>
                                <span class="dropdown-subtext">Trung học cơ sở (C++ / Python)</span>
                            </div>
                        </a>
                        <a href="chuyen-tin-10.html" class="dropdown-item item-two-lines">
                            <i class="fa-solid fa-graduation-cap text-indigo"></i>
                            <div class="item-text">
                                <strong>Thi vào lớp 10 Chuyên Tin</strong>
                                <span class="dropdown-subtext">Trung học cơ sở (C++ / Python)</span>
                            </div>
                        </a>
                        <a href="hkico.html" class="dropdown-item item-two-lines">
                            <i class="fa-solid fa-trophy text-red"></i>
                            <div class="item-text">
                                <strong>Kỳ thi Quốc tế HKICO</strong>
                                <span class="dropdown-subtext">Tiểu học & THCS (Scratch / Python)</span>
                            </div>
                        </a>
                    </div>
                </div>

                <a href="office.html" class="nav-link">Tin học văn phòng</a>
                <a href="index.html#contact" class="nav-btn">Liên hệ ngay</a>
            </nav>

            <button class="mobile-menu-toggle" id="menuToggle" aria-label="Toggle menu">
                <i class="fa-solid fa-bars"></i>
            </button>
        </div>
    </header>`;

const footerHTML = `<footer id="contact" class="site-footer">
        <div class="container footer-container">
            <div class="footer-column brand-column">
                <a href="index.html" class="footer-logo">
                    <i class="fa-solid fa-code"></i>
                    <span>Thầy Hoàng Tuân</span>
                </a>
                <p class="footer-brand-desc">
                    Hệ sinh thái học tập công nghệ thông tin dành cho học sinh phổ thông và sinh viên chuyên ngành phần
                    mềm. Kiến tạo tư duy vững chắc cho tương lai số.
                </p>
                <div class="social-links">
                    <a href="#" target="_blank" aria-label="Facebook Thầy Hoàng Tuân"><i
                            class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" target="_blank" aria-label="Kênh YouTube học tập"><i
                            class="fa-brands fa-youtube"></i></a>
                    <a href="https://zalo.me/SỐ_DI_ĐỘNG_CỦA_BẠN" target="_blank" aria-label="Liên hệ Zalo"><i
                            class="fa-solid fa-phone"></i></a>
                </div>
            </div>

            <div class="footer-column links-column">
                <h3 class="footer-heading">Khóa Học & Học Liệu</h3>
                <ul class="footer-links-list">
                    <li><a href="javascript:void(0)">Lập trình Scratch (Cấp 1-2)</a></li>
                    <li><a href="javascript:void(0)">Lập trình GameMaker (Cấp 1-2)</a></li>
                    <li><a href="javascript:void(0)">Phát triển Website & Python</a></li>
                    <li><a href="javascript:void(0)">Lập trình thi đấu & Chuyên Tin</a></li>
                    <li><a href="#videos">Tin học văn phòng (MOS / IC3)</a></li>
                </ul>
            </div>

            <div class="footer-column contact-column">
                <h3 class="footer-heading">Thông Tin Liên Hệ</h3>
                <ul class="contact-info-list">
                    <li>
                        <i class="fa-solid fa-envelope"></i>
                        <span>Email: info@hoangvantuan.edu.vn</span>
                    </li>
                    <li>
                        <i class="fa-solid fa-phone-volume"></i>
                        <span>Hotline/Zalo: 09x.xxx.xxxx</span>
                    </li>
                    <li>
                        <i class="fa-solid fa-location-dot"></i>
                        <span>Hà Nội, Việt Nam</span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="container footer-bottom-container">
                <p class="copyright">© 2026 Hoàng Văn Tuân. All rights reserved.</p>
                <p class="designed-by">Tự hào lan tỏa <i class="fa-solid fa-heart" style="color: #ef4444;"></i> lập
                    trình cho mọi người</p>
            </div>
        </div>
    </footer>`;

document.addEventListener("DOMContentLoaded", function() {
    const headerEl = document.getElementById('shared-header');
    if (headerEl) {
        headerEl.outerHTML = headerHTML;
    }
    
    const footerEl = document.getElementById('shared-footer');
    if (footerEl) {
        footerEl.outerHTML = footerHTML;
    }
    
    // Re-bind scroll effect because DOM was just injected
    const injectedHeader = document.querySelector('.main-header');
    if (injectedHeader) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                injectedHeader.classList.add('scrolled');
            } else {
                injectedHeader.classList.remove('scrolled');
            }
        });
    }

    // Nếu có hàm khởi tạo menu (trong main.js) thì cần re-bind event sau khi load
    // Vì DOM vừa được inject mới
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    if (menuToggle && navMenu) {
        const toggleIcon = menuToggle.querySelector('i');
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            if (navMenu.classList.contains('open')) {
                toggleIcon.classList.remove('fa-bars');
                toggleIcon.classList.add('fa-xmark');
            } else {
                toggleIcon.classList.remove('fa-xmark');
                toggleIcon.classList.add('fa-bars');
            }
        });
        
        const navLinks = document.querySelectorAll('.nav-link, .dropdown-item');
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const currentHash = window.location.hash;

        const setActiveLink = () => {
            document.querySelectorAll('.nav-link, .dropdown-item').forEach(el => el.classList.remove('active'));

            let activeLink = null;
            if ((currentPath === 'index.html' || currentPath === '') && currentHash) {
                activeLink = document.querySelector(`.nav-link[href="index.html${currentHash}"]`);
            }

            if (!activeLink) {
                activeLink = Array.from(navLinks).find(link => {
                    const hrefPath = (link.getAttribute('href') || '').split('#')[0];
                    return hrefPath === currentPath;
                });
            }

            if (activeLink) {
                activeLink.classList.add('active');
                const parentDropdown = activeLink.closest('.dropdown');
                if (parentDropdown) {
                    const parentNavLink = parentDropdown.querySelector('.nav-link');
                    if (parentNavLink) {
                        parentNavLink.classList.add('active');
                    }
                }
            }
        };

        setActiveLink();
        
        navLinks.forEach(link => {
            // Đặt active link
            const href = link.getAttribute('href');
            if (false && href === currentPath) {
                document.querySelectorAll('.nav-link, .dropdown-item').forEach(el => el.classList.remove('active'));
                link.classList.add('active');
                
                // Highlight cả thẻ nav-link cha nếu đang ở trong một menu con (dropdown)
                const parentDropdown = link.closest('.dropdown');
                if (parentDropdown) {
                    const parentNavLink = parentDropdown.querySelector('.nav-link');
                    if (parentNavLink) {
                        parentNavLink.classList.add('active');
                    }
                }
            }

            link.addEventListener('click', () => {
                if (navMenu.classList.contains('open')) {
                    navMenu.classList.remove('open');
                    toggleIcon.classList.remove('fa-xmark');
                    toggleIcon.classList.add('fa-bars');
                }
            });
        });
    }
});
