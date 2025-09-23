# INDLOG Website

A professional logistics network website built with PHP and CSS, replicating the INDLOG design with modern web development practices.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Modular Structure**: Organized PHP includes and sections for easy maintenance
- **Accessibility**: WCAG compliant with proper focus management and ARIA labels
- **Performance Optimized**: Optimized CSS and JavaScript for fast loading
- **Cross-browser Compatible**: Works on all modern browsers

## 📁 Project Structure

```
php/
├── index.php                 # Main homepage
├── includes/
│   ├── config.php            # Configuration and data
│   ├── functions.php         # Helper functions
│   ├── header.php           # Header section
│   ├── footer.php           # Footer section
│   └── newsletter-subscribe.php # Newsletter handler
├── sections/
│   ├── hero.php             # Hero section
│   ├── why-join.php         # Why join section
│   ├── container-availability.php # Container table
│   ├── latest-members.php   # Members section
│   └── newsletter.php       # Newsletter signup
└── assets/
    ├── css/
    │   ├── reset.css        # CSS reset
    │   ├── main.css         # Main styles
    │   ├── components.css    # Component styles
    │   └── responsive.css   # Responsive styles
    └── js/
        └── main.js          # JavaScript functionality
```

## 🎨 Design Features

### Color Scheme
- **Primary Purple**: #584BD4
- **Dark Purple**: #4C1D95
- **Light Purple**: #F3F4F6
- **White**: #ffffff
- **Dark Gray**: #1F2937
- **Light Gray**: #6B7280
- **Success Green**: #10B981
- **Warning Orange**: #F59E0B

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

### Components
- **Header**: Fixed navigation with logo and action buttons
- **Hero Section**: Eye-catching headline with world map graphic
- **Feature Cards**: Four key benefits with icons
- **Data Table**: Container availability with responsive design
- **Member Cards**: Company profiles with contact information
- **Newsletter**: Dark purple background with form validation
- **Footer**: Comprehensive links and social media

## 🛠️ Installation

1. **Clone or download** the project files
2. **Set up a local server** (XAMPP, WAMP, or PHP built-in server)
3. **Place files** in your web server directory
4. **Access** via `http://localhost/php/`

### Using PHP Built-in Server
```bash
cd /path/to/php
php -S localhost:8000
```

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## ⚡ Performance Features

- **CSS Variables**: For consistent theming
- **Optimized Images**: SVG icons and optimized graphics
- **Minimal JavaScript**: Only essential functionality
- **Efficient CSS**: Organized and optimized stylesheets
- **Lazy Loading**: Ready for image lazy loading implementation

## 🔧 Customization

### Adding New Sections
1. Create a new PHP file in `sections/`
2. Include it in `index.php`
3. Add corresponding CSS styles

### Modifying Data
- Update `$container_availability` in `config.php`
- Update `$latest_members` in `config.php`
- Modify site constants as needed

### Styling Changes
- Use CSS variables in `main.css` for consistent theming
- Add new component styles in `components.css`
- Update responsive styles in `responsive.css`

## 🌐 Browser Support

- **Chrome**: 60+
- **Firefox**: 60+
- **Safari**: 12+
- **Edge**: 79+
- **Internet Explorer**: Not supported

## 📋 TODO / Future Enhancements

- [ ] Database integration for dynamic content
- [ ] User authentication system
- [ ] Admin panel for content management
- [ ] Multi-language support
- [ ] Advanced search functionality
- [ ] Real-time chat integration
- [ ] API endpoints for mobile apps
- [ ] SEO optimization
- [ ] Analytics integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For support or questions, please contact:
- **Email**: info@indlog.com
- **Phone**: +1 800 123 4567

---

**Built with ❤️ for the logistics industry**
