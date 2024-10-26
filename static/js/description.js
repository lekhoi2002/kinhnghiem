document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".category-description-container");
    const description = document.getElementById("categoryDescription");
    const toggleBtn = document.getElementById("toggleDescriptionBtn");
    const btnText = toggleBtn.querySelector(".btn-text") || toggleBtn;
    const overlay = container.querySelector(".read-more-overlay");

    const EXPANDED_TEXT = "Thu gọn";
    const COLLAPSED_TEXT = "Xem Chi Tiết";
    
    // Thêm một khoảng thời gian nhỏ để đảm bảo nội dung đã được render
    setTimeout(() => {
        checkOverflow();
    }, 100);

    function checkOverflow() {
        // Đảm bảo các elements tồn tại
        if (!description || !toggleBtn || !overlay) return;

        // Reset trạng thái để đo chính xác
        description.style.maxHeight = "300px";
        description.classList.remove('expanded');
        
        // Đo lại kích thước
        const scrollHeight = description.scrollHeight;
        const clientHeight = description.clientHeight;
        const isOverflowing = scrollHeight > clientHeight;

        // Hiển thị/ẩn nút và overlay
        toggleBtn.style.display = isOverflowing ? "inline-block" : "none";
        overlay.style.display = isOverflowing ? "block" : "none";

        // Reset text
        btnText.textContent = COLLAPSED_TEXT;
    }

    function toggleDescription(e) {
        e.preventDefault(); // Ngăn chặn hành vi mặc định
        
        // Đảm bảo elements tồn tại
        if (!description || !toggleBtn || !overlay) return;

        const isExpanded = description.classList.toggle('expanded');
        btnText.textContent = isExpanded ? EXPANDED_TEXT : COLLAPSED_TEXT;
        
        if (isExpanded) {
            description.style.maxHeight = "none";
            overlay.style.display = "none";
        } else {
            description.style.maxHeight = "300px";
            overlay.style.display = "block";
            // Cuộn mượt đến nút khi thu gọn
            toggleBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    // Thêm sự kiện click
    toggleBtn.addEventListener("click", toggleDescription);
    
    // Xử lý resize với debounce
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(checkOverflow, 150);
    });

    // Thêm sự kiện load để đảm bảo tất cả resources (ảnh, fonts, etc.) đã được tải
    window.addEventListener('load', checkOverflow);

    // Thêm Mutation Observer để theo dõi thay đổi nội dung
    const observer = new MutationObserver(checkOverflow);
    observer.observe(description, {
        childList: true,
        subtree: true,
        characterData: true
    });
});