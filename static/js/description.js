document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".category-description-container");
    const description = document.getElementById("categoryDescription");
    const toggleBtn = document.getElementById("toggleDescriptionBtn");
    const overlay = document.createElement('div');
    overlay.classList.add('read-more-overlay');
    
    // Kiểm tra xem nội dung có tràn không
    function checkOverflow() {
        const isOverflowing = description.scrollHeight > description.offsetHeight;
        toggleBtn.style.display = isOverflowing ? "inline-block" : "none";
        overlay.style.display = isOverflowing ? "block" : "none";
        
        if (isOverflowing && !container.contains(overlay)) {
            container.insertBefore(overlay, container.lastElementChild);
        }
    }

    // Sự kiện click để ẩn/hiện mô tả
    toggleBtn.addEventListener("click", function() {
        description.classList.toggle('expanded');
        toggleBtn.textContent = description.classList.contains('expanded') ? "Thu gọn" : "Xem Chi Tiết";

        if (description.classList.contains('expanded')) {
            overlay.style.display = "none";
        } else {
            overlay.style.display = "block";
        }

        // Đảm bảo danh mục con luôn ở đúng vị trí
        const subCategories = document.querySelector(".sub-categories");
        if (subCategories) {
            subCategories.style.marginTop = description.classList.contains('expanded') ? "20px" : "0";
        }
    });

    // Kiểm tra tràn nội dung khi tải trang hoặc khi cửa sổ thay đổi kích thước
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
});
