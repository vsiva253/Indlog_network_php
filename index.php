<?php
// Main index page for INDLOG website
require_once 'includes/config.php';
require_once 'includes/functions.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>INDLOG - Connect. Collaborate. Ship Smarter.</title>
    <meta name="description" content="The Only Global Network Bridging NVOCCs & Freight Forwarders – Access Live Container Availability, Expand Reach, and Optimize Logistics.">
    
    <!-- CSS Files -->
    <link rel="stylesheet" href="assets/css/reset.css">
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/components.css">
    <link rel="stylesheet" href="assets/css/responsive.css">
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body class="theme-light">
    <!-- Header -->
    <?php include 'includes/header.php'; ?>
    
    <!-- Hero Section -->
    <?php include 'sections/hero.php'; ?>
    
    <!-- Why Join Our Network Section -->
    <?php include 'sections/why-join.php'; ?>
    
    <!-- Recent Container Availability Section -->
    <?php include 'sections/container-availability.php'; ?>
    
    <!-- Meet Our Latest Members Section -->
    <?php include 'sections/latest-members.php'; ?>
    
    <!-- Newsletter Signup Section -->
    <?php include 'sections/newsletter.php'; ?>
    
    <!-- Footer -->
    <?php include 'includes/footer.php'; ?>
    
    <!-- JavaScript -->
    <script src="assets/js/main.js"></script>
</body>
</html>
