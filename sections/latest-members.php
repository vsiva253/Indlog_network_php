<section class="section latest-members">
    <div class="container">
        <div class="section-header">
            <h2>Meet Our Latest Members</h2>
            <p>Discover exciting freight forwarders and logistics professionals who recently joined our network.</p>
        </div>
        
        <div class="members-grid" data-slider>
            <div class="members-track" data-track>
            <?php foreach ($latest_members as $member): ?>
            <div class="member-card" data-slide>
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
            <div class="member-card" data-slide>
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
            
            <?php 
            // Add 6 duplicate slides to help test the slider
            $hasFirst = isset($latest_members) && is_array($latest_members) && isset($latest_members[0]);
            for ($i = 0; $i < 6; $i++):
                if ($hasFirst): $m = $latest_members[0]; ?>
                <div class="member-card" data-slide>
                    <div class="member-header">
                        <div class="member-logo">
                            <i class="fas fa-ship"></i>
                        </div>
                        <div class="member-info">
                            <h3><?php echo htmlspecialchars($m['company']); ?></h3>
                            <div class="member-location"><?php echo htmlspecialchars($m['location']); ?></div>
                        </div>
                    </div>
                    <div class="member-details">
                        <p><strong>Address:</strong> <?php echo htmlspecialchars($m['address']); ?></p>
                        <p><strong>Phone:</strong> <?php echo formatPhoneNumber($m['phone']); ?></p>
                        <p><strong>Website:</strong> <a href="http://<?php echo htmlspecialchars($m['website']); ?>" target="_blank"><?php echo htmlspecialchars($m['website']); ?></a></p>
                    </div>
                    <a href="#profile" class="btn btn-outline">View Profile</a>
                </div>
                <?php else: ?>
                <div class="member-card" data-slide>
                    <div class="member-header">
                        <div class="member-logo">IMEX</div>
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
                <?php endif;
            endfor; ?>
            </div>
        </div>
        
        <div class="pagination-dots" role="tablist" aria-label="Member pages" data-dots>
            <button class="dot active" type="button" role="tab" aria-selected="true" aria-label="Page 1" data-index="0"></button>
            <button class="dot" type="button" role="tab" aria-selected="false" aria-label="Page 2" data-index="1"></button>
            <button class="dot" type="button" role="tab" aria-selected="false" aria-label="Page 3" data-index="2"></button>
        </div>
    </div>
</section>
