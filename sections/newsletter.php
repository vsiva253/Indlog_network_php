<section class="newsletter-section">
    <div class="newsletter-wrapper">
        <div class="newsletter-content">
            <div class="newsletter-text">
                <h2>Stay Updated. Stay Ahead.</h2>
                <p>Get the latest industry insights, network updates, and exclusive opportunities delivered directly to your inbox.</p>
                
                <div class="newsletter-benefits">
                    <div class="newsletter-benefit">
                        <i class="fas fa-check"></i>
                        <span>Weekly Updates</span>
                    </div>
                    <div class="newsletter-benefit">
                        <i class="fas fa-check"></i>
                        <span>Industry Insights</span>
                    </div>
                    <div class="newsletter-benefit">
                        <i class="fas fa-check"></i>
                        <span>Exclusive Content</span>
                    </div>
                </div>
            </div>
            
            <div class="newsletter-form-section">
                <form class="newsletter-form" method="POST" action="includes/newsletter-subscribe.php">
                    <input type="email" name="email" class="newsletter-input" placeholder="Enter your email address" required>
                    <button type="submit" class="newsletter-btn">
                        Subscribe
                        <i class="fas fa-plus"></i>
                    </button>
                </form>
                
                <div class="social-proof">
                    Join <?php echo getMemberCount(); ?> logistics professionals
                </div>
            </div>
        </div>
    </div>
</section>
