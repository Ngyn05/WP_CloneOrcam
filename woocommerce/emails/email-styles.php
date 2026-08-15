<?php
/**
 * Email Styles - OrCam Việt Nam
 */

defined('ABSPATH') || exit;

// Load colors
$bg              = '#f1f5f9';
$body            = '#ffffff';
$base            = '#0f172a';
$base_text       = '#334155';
$text            = '#334155';
$primary         = '#3535c9';
$primary_accent  = '#38bdf8';
$border_color    = '#e2e8f0';

?>
body {
    background-color: <?php echo esc_attr($bg); ?>;
    padding: 0;
    text-align: center;
}

#wrapper {
    background-color: <?php echo esc_attr($bg); ?>;
    margin: 0;
    padding: 30px 0;
    -webkit-text-size-adjust: none !important;
    width: 100%;
}

#template_container {
    box-shadow: 0 4px 24px rgba(15, 23, 42, 0.08) !important;
    background-color: <?php echo esc_attr($body); ?>;
    border: 1px solid <?php echo esc_attr($border_color); ?>;
    border-radius: 16px !important;
    overflow: hidden;
}

#template_header {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%) !important;
    border-bottom: 3px solid <?php echo esc_attr($primary_accent); ?> !important;
    color: #ffffff;
    border-top-left-radius: 16px !important;
    border-top-right-radius: 16px !important;
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-weight: bold;
    line-height: 100%;
    vertical-align: middle;
    text-align: center;
}

#template_header h1,
#template_header h1 a {
    color: #ffffff !important;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 22px !important;
    font-weight: 800 !important;
    letter-spacing: 1px !important;
    text-transform: uppercase;
}

#template_body {
    background-color: <?php echo esc_attr($body); ?>;
}

#body_content {
    background-color: <?php echo esc_attr($body); ?>;
}

#body_content table td {
    padding: 24px 32px;
}

#body_content table td td {
    padding: 12px;
}

#body_content table td th {
    padding: 12px;
}

#body_content td ul.wc-item-meta {
    font-size: small;
    margin: 1em 0 0;
    padding: 0;
    list-style: none;
}

#body_content td ul.wc-item-meta li {
    margin: 0.5em 0 0;
    padding: 0;
}

#body_content p {
    margin: 0 0 16px;
    color: #334155;
    font-size: 15px;
    line-height: 1.6;
}

h1 {
    color: #0f172a;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 24px;
    font-weight: 800;
    line-height: 130%;
    margin: 0 0 18px;
    text-align: left;
}

h2 {
    color: #0f172a;
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-weight: 750;
    line-height: 130%;
    margin: 24px 0 12px;
    text-align: left;
    border-bottom: 1px solid #f1f5f9;
    padding-bottom: 8px;
}

h3 {
    color: #1e293b;
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 130%;
    margin: 16px 0 8px;
    text-align: left;
}

a {
    color: #1d4ed8;
    font-weight: 600;
    text-decoration: underline;
}

table.td {
    border-collapse: separate !important;
    border-spacing: 0 !important;
    border: 1px solid #e2e8f0 !important;
    border-radius: 12px !important;
    overflow: hidden !important;
    margin-bottom: 24px !important;
    width: 100% !important;
}

table.td th {
    background-color: #f8fafc !important;
    color: #475569 !important;
    font-size: 13.5px !important;
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
    border-bottom: 1.5px solid #e2e8f0 !important;
    padding: 14px 16px !important;
}

table.td td {
    border-top: 1px solid #f1f5f9 !important;
    color: #1e293b !important;
    font-size: 14.5px !important;
    padding: 14px 16px !important;
}

.order_item td.product-name {
    font-weight: 600 !important;
    color: #0f172a !important;
}

.order_item td.product-total {
    font-weight: 700 !important;
    color: #0f172a !important;
}

#addresses td {
    background-color: #f8fafc !important;
    border: 1px solid #e2e8f0 !important;
    border-radius: 10px !important;
    padding: 18px 20px !important;
    color: #334155 !important;
}

#addresses h2,
#addresses h3 {
    border: none !important;
    margin-top: 0 !important;
    padding-bottom: 0 !important;
}

.text {
    color: #334155;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}
