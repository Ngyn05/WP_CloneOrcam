<?php
/**
 * Customer processing order email - OrCam Việt Nam (100% Vietnamese)
 */

defined('ABSPATH') || exit;

/*
 * @hooked WC_Emails::email_header() Output the email header
 */
do_action('woocommerce_email_header', $email_heading, $email); ?>

<div style="margin-bottom: 24px;">
    <p style="font-size: 16px; color: #0f172a; font-weight: 600; line-height: 1.5; margin: 0 0 12px 0;">
        Xin chào <?php echo esc_html($order->get_billing_first_name() ?: 'Quý khách'); ?>,
    </p>
    <p style="font-size: 15px; color: #334155; line-height: 1.6; margin: 0 0 16px 0;">
        Cảm ơn bạn đã đặt hàng tại <strong>OrCam Việt Nam</strong>! Đơn hàng của bạn đã được hệ thống tiếp nhận thành công. Chuyên viên của chúng tôi sẽ liên hệ trong thời gian sớm nhất để xác nhận thông tin và tiến hành bàn giao / hướng dẫn sử dụng thiết bị cho bạn.
    </p>
</div>

<?php
/*
 * @hooked WC_Emails::order_details() Shows the order details table.
 * @hooked WC_Structured_Data::generate_order_data() Generates structured data.
 * @hooked WC_Structured_Data::output_structured_data() Outputs structured data.
 * @since 2.5.0
 */
do_action('woocommerce_email_order_details', $order, $sent_to_admin, $plain_text, $email);

/*
 * @hooked WC_Emails::order_meta() Shows order meta data.
 */
do_action('woocommerce_email_order_meta', $order, $sent_to_admin, $plain_text, $email);

/*
 * @hooked WC_Emails::customer_details() Shows customer details
 * @hooked WC_Emails::email_address() Shows email address
 */
do_action('woocommerce_email_customer_details', $order, $sent_to_admin, $plain_text, $email);

?>
<p style="font-size: 14px; color: #64748b; line-height: 1.6; margin: 24px 0 0 0;">
    Nếu bạn cần hỗ trợ khẩn cấp hoặc có bất kỳ thắc mắc nào, xin vui lòng gọi ngay tổng đài Hotline 24/7: <strong style="color: #1d4ed8;">1900.63.8400</strong>.
</p>
<?php

/*
 * @hooked WC_Emails::email_footer() Output the email footer
 */
do_action('woocommerce_email_footer', $email);
