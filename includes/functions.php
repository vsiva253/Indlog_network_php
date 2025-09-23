<?php
// Helper functions for INDLOG website

function getCurrentYear() {
    return date('Y');
}

function formatPhoneNumber($phone) {
    return htmlspecialchars($phone);
}

function formatEmail($email) {
    return htmlspecialchars($email);
}

function getContainerCount() {
    return '2,000+';
}

function getMemberCount() {
    return '10,000+';
}

function sanitizeInput($input) {
    return htmlspecialchars(strip_tags(trim($input)));
}

function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

function getPageTitle($page = '') {
    $baseTitle = 'INDLOG - Connect. Collaborate. Ship Smarter.';
    return $page ? $page . ' | ' . $baseTitle : $baseTitle;
}
?>
