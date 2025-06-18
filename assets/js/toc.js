// Table of Contents JavaScript functionality - Mobile Only

document.addEventListener('DOMContentLoaded', function () {
  initMobileTOC();
  initTOCInjector();
});

// Initialize Mobile TOC functionality
function initMobileTOC() {
  const mobileTocLinks = document.querySelectorAll(
    '.toc-mobile .toc-nav-mobile a'
  );
  const headings = document.querySelectorAll('h1, h2, h3');

  if (mobileTocLinks.length === 0 || headings.length === 0) return;

  function updateMobileActiveLink() {
    let current = '';

    headings.forEach(heading => {
      const rect = heading.getBoundingClientRect();
      if (rect.top <= 150) {
        current = heading.id;
      }
    });

    mobileTocLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  // Update on scroll
  window.addEventListener('scroll', updateMobileActiveLink);

  // Initial update
  updateMobileActiveLink();

  // Smooth scroll for mobile TOC links
  mobileTocLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        // Close the details element after clicking
        const details = this.closest('details');
        if (details) {
          details.removeAttribute('open');
        }
      }
    });
  });
}

// Initialize TOC Injector - Move mobile TOC before first H2
function initTOCInjector() {
  // Find the mobile TOC element
  const mobileToc = document.querySelector('.toc-mobile');
  if (!mobileToc) return;

  // Find the first H2 in the content
  const contentArea = document.querySelector('.prose, .content, article, main');
  if (!contentArea) return;

  const firstH2 = contentArea.querySelector('h2');
  if (firstH2) {
    // Remove TOC from its current position
    mobileToc.remove();

    // Insert before the first H2
    firstH2.parentNode.insertBefore(mobileToc, firstH2);

    // Make sure it's visible
    mobileToc.style.display = 'block';
  }
}
