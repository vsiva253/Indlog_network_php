<footer class="footer" id="contact">
    <div class="container">
        <div class="footer-content">
            <!-- Company Info -->
            <div class="footer-section">
                <div class="footer-logo">
                    <img src="assets/indlog_logo.svg" alt="INDLOG" class="footer-logo-img">
                </div>
                <p>Connecting global freight forwarders, NVOCCs and logistics professionals worldwide.</p>
                <p><strong>Email:</strong> <?php echo formatEmail(SITE_EMAIL); ?></p>
                <p><strong>Phone:</strong> <?php echo formatPhoneNumber(SITE_PHONE); ?></p>
                <p><strong>Address:</strong> <?php echo htmlspecialchars(SITE_ADDRESS); ?></p>
            </div>
            
            <!-- Company Links -->
            <div class="footer-section">
                <h3>Company</h3>
                <ul>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#team">Our Team</a></li>
                    <li><a href="#careers">Careers</a></li>
                    <li><a href="#press">Press</a></li>
                </ul>
            </div>
            
            <!-- Navigation Links -->
            <div class="footer-section">
                <h3>Navigation</h3>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#network">Network</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#resources">Resources</a></li>
                </ul>
            </div>
            
            <!-- Support Links -->
            <div class="footer-section">
                <h3>Support</h3>
                <ul>
                    <li><a href="#help">Help Center</a></li>
                    <li><a href="#contact-support">Contact Support</a></li>
                    <li><a href="#privacy">Privacy Policy</a></li>
                    <li><a href="#terms">Terms of Service</a></li>
                </ul>
                
                <div class="social-links">
                    <a href="#" class="social-link" aria-label="LinkedIn">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" class="social-link" aria-label="Twitter">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="social-link" aria-label="Facebook">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="social-link" aria-label="Instagram">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; <?php echo getCurrentYear(); ?> Indlog Network. All rights reserved.</p>
        </div>
    </div>
</footer>
