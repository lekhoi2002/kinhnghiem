/**
 * Enhanced Main JavaScript for Hugo Theme with Tailwind CSS v4.1
 * Optimized for performance and accessibility
 */

// Theme management with improved performance
class ThemeManager {
  constructor() {
    this.storageKey = 'color-theme';
    this.darkClass = 'dark';
    this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.icons = new Map();
    
    // Bind methods to preserve context
    this.toggle = this.toggle.bind(this);
    this.handleSystemThemeChange = this.handleSystemThemeChange.bind(this);
    
    this.init();
  }
  
  init() {
    // Apply theme immediately to prevent flash
    this.applyTheme();
    
    // Listen for system theme changes
    this.mediaQuery.addEventListener('change', this.handleSystemThemeChange);
    
    // Cache icon elements for better performance
    this.cacheIcons();
    
    // Update icons
    this.updateIcons();
  }
  
  getCurrentTheme() {
    const stored = localStorage.getItem(this.storageKey);
    if (stored) return stored;
    return this.mediaQuery.matches ? 'dark' : 'light';
  }
  
  isDark() {
    return this.getCurrentTheme() === 'dark';
  }
  
  applyTheme() {
    const isDark = this.isDark();
    document.documentElement.classList.toggle(this.darkClass, isDark);
    
    // Update meta theme-color for mobile browsers
    this.updateMetaThemeColor(isDark);
  }
  
  updateMetaThemeColor(isDark) {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', isDark ? '#181a1b' : '#ffffff');
    }
  }
  
  toggle() {
    const newTheme = this.isDark() ? 'light' : 'dark';
    localStorage.setItem(this.storageKey, newTheme);
    this.applyTheme();
    this.updateIcons();
    
    // Dispatch custom event for other components
    window.dispatchEvent(new CustomEvent('themechange', {
      detail: { theme: newTheme }
    }));
  }
  
  handleSystemThemeChange() {
    if (!localStorage.getItem(this.storageKey)) {
      this.applyTheme();
      this.updateIcons();
    }
  }
  
  cacheIcons() {
    const iconSelectors = ['#icon', '#icon2', '.theme-icon'];
    iconSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      if (elements.length > 0) {
        this.icons.set(selector, elements);
      }
    });
  }
  
  updateIcons() {
    const isDark = document.documentElement.classList.contains(this.darkClass);
    const sunIcon = '<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />';
    const moonIcon = '<path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />';
    
    this.icons.forEach((elements) => {
      elements.forEach(icon => {
        if (icon) {
          icon.innerHTML = isDark ? sunIcon : moonIcon;
          icon.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
        }
      });
    });
  }
}

// Mobile menu management with improved accessibility
class MobileMenuManager {
  constructor() {
    this.hamburger = document.getElementById('hamburgerbtn');
    this.mobileMenu = document.getElementById('mobileMenu');
    this.isOpen = false;
    
    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    
    this.init();
  }
  
  init() {
    if (!this.hamburger || !this.mobileMenu) return;
    
    // Add event listeners
    this.hamburger.addEventListener('click', this.toggle);
    document.addEventListener('keydown', this.handleKeydown);
    document.addEventListener('click', this.handleClickOutside);
    
    // Set initial ARIA attributes
    this.hamburger.setAttribute('aria-expanded', 'false');
    this.hamburger.setAttribute('aria-controls', 'mobileMenu');
    this.mobileMenu.setAttribute('aria-hidden', 'true');
  }
  
  toggle() {
    this.isOpen ? this.close() : this.open();
  }
  
  open() {
    this.isOpen = true;
    this.mobileMenu.classList.add('active');
    this.hamburger.setAttribute('aria-expanded', 'true');
    this.mobileMenu.setAttribute('aria-hidden', 'false');
    
    // Focus first menu item for accessibility
    const firstMenuItem = this.mobileMenu.querySelector('a, button');
    if (firstMenuItem) {
      firstMenuItem.focus();
    }
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
  }
  
  close() {
    this.isOpen = false;
    this.mobileMenu.classList.remove('active');
    this.hamburger.setAttribute('aria-expanded', 'false');
    this.mobileMenu.setAttribute('aria-hidden', 'true');
    
    // Restore body scroll
    document.body.style.overflow = '';
    
    // Return focus to hamburger button
    this.hamburger.focus();
  }
  
  handleKeydown(event) {
    if (event.key === 'Escape' && this.isOpen) {
      this.close();
    }
  }
  
  handleClickOutside(event) {
    if (this.isOpen &&
        !this.mobileMenu.contains(event.target) &&
        !this.hamburger.contains(event.target)) {
      this.close();
    }
  }
}

// Performance utilities
class PerformanceUtils {
  static debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  
  static throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  
  static preloadImages(urls) {
    urls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }
  
  static lazyLoadImages() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });
      
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme manager
  const themeManager = new ThemeManager();
  
  // Initialize mobile menu
  const mobileMenuManager = new MobileMenuManager();
  
  // Add event listeners for theme toggles
  document.querySelectorAll('.dark-mode-toggler').forEach(toggler => {
    toggler.addEventListener('click', themeManager.toggle);
  });
  
  // Initialize performance optimizations
  PerformanceUtils.lazyLoadImages();
  
  // Add smooth scroll behavior for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Add loading states for forms
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function() {
      const submitBtn = this.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Loading...';
      }
    });
  });
  
  // Announce theme changes for screen readers
  window.addEventListener('themechange', (event) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = `Theme changed to ${event.detail.theme} mode`;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  });
});

// Handle page visibility changes for performance
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Page is hidden, pause non-essential operations
    console.log('Page hidden - pausing operations');
  } else {
    // Page is visible, resume operations
    console.log('Page visible - resuming operations');
  }
});

// Export for potential use in other scripts
window.ThemeManager = ThemeManager;
window.MobileMenuManager = MobileMenuManager;
window.PerformanceUtils = PerformanceUtils;