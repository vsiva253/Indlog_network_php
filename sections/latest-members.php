<section class="section">
    <div class="container">
        <div class="section-header">
            <h2>Meet Our Latest Members</h2>
            <p>Discover exciting freight forwarders and logistics professionals who recently joined our network.</p>
        </div>
        
        <div class="members-grid">
            <?php foreach ($latest_members as $member): ?>
            <div class="member-card">
                <div class="member-header">
                    <div class="member-logo">
                        <i class="fas fa-ship"></i>
                    </div>
                    <div class="member-info">
                        <h3><?php echo htmlspecialchars($member['company']); ?></h3>
                        <div class="member-location"><?php echo htmlspecialchars($member['location']); ?></div>
                    </div>
                </div>
                
                <div class="member-details">
                    <p><strong>Address:</strong> <?php echo htmlspecialchars($member['address']); ?></p>
                    <p><strong>Phone:</strong> <?php echo formatPhoneNumber($member['phone']); ?></p>
                    <p><strong>Website:</strong> <a href="http://<?php echo htmlspecialchars($member['website']); ?>" target="_blank"><?php echo htmlspecialchars($member['website']); ?></a></p>
                </div>
                
                <a href="#profile" class="btn btn-outline">View Profile</a>
            </div>
            <?php endforeach; ?>
            
            <!-- Duplicate member card for demonstration -->
            <div class="member-card">
                <div class="member-header">
                    <div class="member-logo">
                        IMEX
                    </div>
                    <div class="member-info">
                        <h3>IMEX SHIPPING & LOGISTICS LLC</h3>
                        <div class="member-location">UAE, Dubai</div>
                    </div>
                </div>
                
                <div class="member-details">
                    <p><strong>Address:</strong> Zarouni Building, Office Number 103, 1st Floor, Opposite to Burjuman Mall, Near to Paris, Riggat Al Buteen - Deira - Dubai - United Arab Emirates</p>
                    <p><strong>Phone No:</strong> +971-336 8040</p>
                    <p><strong>Website:</strong> <a href="http://www.imexshipping.com" target="_blank">www.imexshipping.com</a></p>
                </div>
                
                <a href="#profile" class="btn btn-outline">View Profile</a>
            </div>
        </div>
        
        <div class="pagination-dots">
            <div class="dot active"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
    </div>
</section>
