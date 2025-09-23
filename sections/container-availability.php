<section class="section" id="network">
    <div class="container">
        <div class="section-header">
            <h2>Recent Container Availability</h2>
            <p>Live updates from our verified NVOCC partners worldwide.</p>
        </div>
        
        <div class="container-table">
            <table class="table">
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Port</th>
                        <th>Containers</th>
                        <th>Special rates</th>
                        <th>Last updated</th>
                        <th>Contact Now</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($container_availability as $container): ?>
                    <tr>
                        <td>
                            <div class="country-cell">
                                <span class="country-flag"><?php echo $container['country_flag']; ?></span>
                                <span class="country-name"><?php echo htmlspecialchars($container['country']); ?></span>
                            </div>
                        </td>
                        <td><?php echo htmlspecialchars($container['port']); ?></td>
                        <td>
                            <div class="container-count-badge"><?php echo htmlspecialchars($container['containers']); ?></div>
                        </td>
                        <td>
                            <span class="special-rates <?php echo strtolower(str_replace(['/', ' '], ['', ''], $container['special_rates'])); ?>">
                                <?php echo htmlspecialchars($container['special_rates']); ?>
                            </span>
                        </td>
                        <td><?php echo htmlspecialchars($container['last_updated']); ?></td>
                        <td>
                            <a href="#login" class="btn-contact">
                                <i class="fas fa-lock"></i>
                                <?php echo htmlspecialchars($container['contact']); ?>
                            </a>
                        </td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
        
      <div class="text-center" style="display: flex; justify-content: center;">
    <a href="#all-containers" class="btn btn-primary" style="width: 200px; display: flex; justify-content: center; align-items: center;">
        View all Containers
    </a>
</div>

    </div>
</section>
