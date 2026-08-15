<?php
/**
 * Email Addresses - OrCam Việt Nam (100% Vietnamese)
 */

defined('ABSPATH') || exit;

$text_align = is_rtl() ? 'right' : 'left';
$address    = $order->get_formatted_billing_address();
$phone      = $order->get_billing_phone();
$email_addr = $order->get_billing_email();

?><table id="addresses" cellspacing="0" cellpadding="0" style="width: 100%; vertical-align: top; margin-bottom: 24px; padding:0;" border="0">
    <tr>
        <td class="td" style="text-align: <?php echo esc_attr($text_align); ?>; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 20px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px;" valign="top" width="100%">
            <h3 style="color: #0f172a; font-size: 16px; font-weight: 800; margin: 0 0 12px 0; padding: 0;">
                Thông tin nhận hàng
            </h3>
            <div class="address" style="color: #334155; font-size: 14.5px; line-height: 1.6;">
                <?php if ($order->get_formatted_billing_full_name()) : ?>
                    <p style="margin: 0 0 6px 0;"><strong>Họ và tên:</strong> <?php echo esc_html($order->get_formatted_billing_full_name()); ?></p>
                <?php endif; ?>

                <?php if ($phone) : ?>
                    <p style="margin: 0 0 6px 0;"><strong>Số điện thoại:</strong> <a href="tel:<?php echo esc_attr($phone); ?>" style="color: #1d4ed8; font-weight: 700; text-decoration: none;"><?php echo esc_html($phone); ?></a></p>
                <?php endif; ?>

                <?php if ($email_addr) : ?>
                    <p style="margin: 0 0 6px 0;"><strong>Email:</strong> <?php echo esc_html($email_addr); ?></p>
                <?php endif; ?>

                <?php if ($order->get_billing_address_1() || $address) : ?>
                    <p style="margin: 0 0 6px 0;"><strong>Địa chỉ:</strong> <?php echo esc_html($order->get_billing_address_1() ?: wp_strip_all_tags($address)); ?></p>
                <?php endif; ?>
            </div>
        </td>
    </tr>
</table>
