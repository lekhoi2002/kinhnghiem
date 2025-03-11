// File: assets/js/critical/glightbox-init.js
document.addEventListener('DOMContentLoaded', function() {
  if (typeof GLightbox !== 'undefined') {
    // Initialize GLightbox
    const lightbox = GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
      onOpen: () => {
        console.log('Lightbox opened');
      },
      slideEffect: 'slide',
      closeEffect: 'fade',
      cssEfects: {
        fade: { in: 'fadeIn', out: 'fadeOut' },
        slide: { in: 'slideInRight', out: 'slideOutLeft' }
      },
      // Chỉ hiện caption
      showTitle: false,
      preload: true,
      // Debug mode để kiểm tra vấn đề
      debug: true
    });

    // Log để debug
    console.log('GLightbox initialized with elements:', document.querySelectorAll('.glightbox').length);
    
    // Kiểm tra xem có ảnh nào được load không
    lightbox.on('slide_before_load', (data) => {
      console.log('Loading slide:', data);
    });

    lightbox.on('slide_after_load', (data) => {
      console.log('Slide loaded:', data);
    });

    lightbox.on('error', (data) => {
      console.error('GLightbox error:', data);
    });
  } else {
    console.error('GLightbox not loaded');
  }
});