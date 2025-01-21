// Scroll to top functionality
jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
    });
});
var words = ['Solution', 'Future', 'Handler', ' Journey', 'Fortune'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});

// Update scroll top functionality
document.addEventListener('DOMContentLoaded', () => {
    const scrollTop = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 200) {
            scrollTop.classList.add('active');
        } else {
            scrollTop.classList.remove('active');
        }
    });

    scrollTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

  
  // Stats Section 
  function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    const range = end - start;
    const increment = range / (duration / 16); // 60fps
    let current = start;
    let progress = 0;

    const animate = () => {
        progress += 16;
        current += increment;
        
        if (id === 'talent') {
            obj.innerHTML = Math.round(current).toLocaleString() + '++';
        } else if (id === 'clients') {
            obj.innerHTML = Math.round(current) + '+';
        } else {
            obj.innerHTML = Math.round(current);
        }

        if (progress < duration) {
            requestAnimationFrame(animate);
        }
    };

    requestAnimationFrame(animate);
}

// Add intersection observer for better performance
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateValue("minutes", 0, 10, 1500);
            animateValue("talent", 0, 25000, 2000);
            animateValue("clients", 0, 50, 1500);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) {
        statsObserver.observe(statsContainer);
    }
});

  //Contact Us

  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const spinner = document.getElementById('spinner');
    const button = this.querySelector('button');
    const buttonText = button.querySelector('span');
    
    // Show loading state
    spinner.style.display = 'block';
    buttonText.style.display = 'none';
    button.disabled = true;

    // Simulate form submission
    setTimeout(() => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Basic valid
        if (!name || !email || !subject || !message) {
            showAlert('error');
            return;
        }

        // Email valid
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showAlert('error');
            return;
        }

        showAlert('success');
        this.reset();

        // Reset button state
        spinner.style.display = 'none';
        buttonText.style.display = 'inline';
        button.disabled = false;
    }, 2000);
});

function showAlert(type) {
    const successAlert = document.getElementById('successAlert');
    const errorAlert = document.getElementById('errorAlert');

    if (type === 'success') {
        successAlert.style.display = 'block';
        errorAlert.style.display = 'none';
    } else {
        successAlert.style.display = 'none';
        errorAlert.style.display = 'block';
    }

    setTimeout(() => {
        successAlert.style.display = 'none';
        errorAlert.style.display = 'none';
    }, 5000);
}

// Add hover effect to social icons
document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('mouseover', function() {
        this.style.transform = 'rotate(360deg) scale(1.2)';
        this.style.transition = 'all 0.5s ease';
    });

    icon.addEventListener('mouseout', function() {
        this.style.transform = 'rotate(0deg) scale(1)';
    });
});

//Chat bot logo 
const chatBubble = document.querySelector('.chat-bubble');
    
chatBubble.addEventListener('click', () => {
  chatBubble.style.background = getRandomColor();
  const bubble = chatBubble.querySelector(':before');
  if (bubble) {
    bubble.style.borderTopColor = chatBubble.style.background;
  }
});

function getRandomColor() {
  const colors = [
    '#2196F3', // Blue
    '#4CAF50', // Green
    '#9C27B0', // Purple
    '#FF9800', // Orange
    '#E91E63'  // Pink
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

// New code for counting animation
function animateNumber(element, start, end, duration, isDecimal = false) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentNumber = Math.floor(progress * (end - start) + start);
        
        element.textContent = isDecimal ? currentNumber.toLocaleString() : currentNumber;
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            element.textContent = isDecimal ? end.toLocaleString() : end;
        }
    };
    window.requestAnimationFrame(step);
}

// Intersection Observer for triggering animations when elements are visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Start animations when stats section is visible
            animateNumber(document.getElementById('minutes'), 0, 10, 1500);
            animateNumber(document.getElementById('talent'), 0, 25000, 2000, true);
            animateNumber(document.getElementById('clients'), 0, 50, 1500);
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, { threshold: 0.5 });

// Observe the stats container
document.addEventListener('DOMContentLoaded', () => {
    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) {
        observer.observe(statsContainer);
    }
});

// Navbar scroll effect
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
});

