# SabiKerja Website Redesign

## Key Features

### 1. Dark Mode Integration 🌓
- Seamless dark/light theme switching
- System preference detection
- Persistent theme selection
- Smooth transition animations
- Optimized color contrasts for both modes
- Accessible across all pages
- Custom-designed dark mode UI elements

### 2. Enhanced Job Search Features 🔍
- Real-time search functionality
- Keyword highlighting
- Smart matching algorithm
- Search suggestions
- Filter by categories
- Mobile-responsive search interface

### 3. Responsive Navigation 📱
- Hamburger menu for mobile
- Sticky header
- Smooth scrolling
- Active state indicators
- Breadcrumb navigation
- Adaptive layout

### 4. Interactive UI Elements ✨
- Hover effects
- Loading animations
- Scroll-to-top button
- Card hover animations
- Button state animations
- Form feedback
- Toast notifications

### 5. Job Management System 💼
- Job posting interface
- Application tracking
- Category filtering
- Advanced search options
- Apply now functionality
- Save job feature

### 6. Enhanced User Experience 🎯
- Optimized loading times
- Smooth page transitions
- Intuitive navigation
- Consistent styling
- Error handling
- Form validation
- Success messages

### 7. Additional Features 🌟
- Contact form integration
- Social media links
- Newsletter subscription
- Share job functionality
- Print job details
- Responsive images
- SEO optimization

## Technical Implementation

### Dark Mode Implementation
```javascript
// Theme switching functionality
const themeSwitch = document.getElementById('theme-switch');
themeSwitch.addEventListener('click', () => {
    document.body.classList.toggle('darkmode');
    localStorage.setItem('theme', document.body.classList.contains('darkmode') ? 'dark' : 'light');
});

// Theme persistence
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('darkmode');
}
```

### Color Scheme
```css
:root {
    /* Light theme */
    --base-color: white;
    --text-color: #333;
    --accent-color: #c41e3a;
}

.darkmode {
    /* Dark theme */
    --base-color: #232323;
    --text-color: #ffffff;
    --accent-color: #304486;
}
```

## Setup Instructions

1. Clone the repository
2. Open `home.html` in a modern web browser
3. For development:
   - Edit styles in `style.css`
   - Modify scripts in `script.js`
   - Update dark mode settings in `darkmode.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Project Structure
```
sabikerja/
├── css/
│   └── style.css
├── js/
│   ├── script.js
│   └── darkmode.js
├── images/
├── home.html
├── findjob.html
├── about.html
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.

