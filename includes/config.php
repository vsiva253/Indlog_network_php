<?php
// Configuration file for INDLOG website
define('SITE_NAME', 'INDLOG');
define('SITE_URL', 'http://localhost');
define('SITE_EMAIL', 'hello@indlog.com');
define('SITE_PHONE', '+1 800 123 4567');
define('SITE_ADDRESS', 'New York, NY 10011');

// Database configuration (if needed later)
define('DB_HOST', 'localhost');
define('DB_NAME', 'indlog_db');
define('DB_USER', 'root');
define('DB_PASS', '');

// Container availability data
$container_availability = [
    [
        'country' => 'India',
        'country_flag' => '🇮🇳',
        'port' => 'Mundra',
        'containers' => '10',
        'special_rates' => 'N/A',
        'last_updated' => '30-07-2025 10:00 PM',
        'contact' => 'Login to Contact'
    ],
    [
        'country' => 'UAE',
        'country_flag' => '🇦🇪',
        'port' => 'Jebel Ali',
        'containers' => '10',
        'special_rates' => 'Available',
        'last_updated' => '30-07-2025 09:45 PM',
        'contact' => 'Login to Contact'
    ],
    [
        'country' => 'USA',
        'country_flag' => '🇺🇸',
        'port' => 'Los Angeles',
        'containers' => '10',
        'special_rates' => 'Bulk Discount',
        'last_updated' => '30-07-2025 09:30 PM',
        'contact' => 'Login to Contact'
    ],
    [
        'country' => 'China',
        'country_flag' => '🇨🇳',
        'port' => 'Shanghai',
        'containers' => '10',
        'special_rates' => 'N/A',
        'last_updated' => '30-07-2025 09:15 PM',
        'contact' => 'Login to Contact'
    ]
];

// Latest members data
$latest_members = [
    [
        'company' => 'IMEX SHIPPING & LOGISTICS LLC',
        'location' => 'UAE, Dubai',
        'address' => 'Zarouni Building, Office Number 103, 1st Floor, Opposite Al Barjuman Mall, Near Al Fahidi Metro Station - Dubai - United Arab Emirates',
        'phone' => '+971-336 8040',
        'website' => 'www.imexshipping.com',
        'logo' => 'assets/images/member-logos/imex-logo.png'
    ],
    
];
?>
