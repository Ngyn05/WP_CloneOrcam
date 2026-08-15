<?php
/**
 * Order details table shown in emails - OrCam Việt Nam (100% Vietnamese)
 */

defined('ABSPATH') || exit;

$text_align = is_rtl() ? 'right' : 'left';

do_action('woocommerce_email_before_order_table', $order, $sent_to_admin, $plain_text, $email); ?>

<div style="margin-bottom: 24px;">
    <h2 style="color: #0f172a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 19px; font-weight: 800; margin: 0 0 6px 0; border: none; padding: 0;">
        Chi tiết đơn hàng
    </h2>
    <div style="color: #64748b; font-size: 13.5px; margin: 0 0 18px 0;">
        Mã đơn: <strong style="color: #0f172a;">#<?php echo esc_html($order->get_order_number()); ?></strong> 
        (Ngày đặt: <?php echo esc_html(wc_format_datetime($order->get_date_created(), 'd/m/Y H:i')); ?>)
    </div>

    <table class="td" cellspacing="0" cellpadding="6" style="width: 100%; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin-bottom: 24px; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;" border="1">
        <thead>
            <tr style="background-color: #f8fafc;">
                <th class="td" scope="col" style="text-align:<?php echo esc_attr($text_align); ?>; color: #475569; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; padding: 12px 20px; border-bottom: 2px solid #e2e8f0;">Sản phẩm</th>
                <th class="td" scope="col" style="text-align:center; color: #475569; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; padding: 12px 20px; border-bottom: 2px solid #e2e8f0;">Số lượng</th>
                <th class="td" scope="col" style="text-align:right; color: #475569; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; padding: 12px 20px; border-bottom: 2px solid #e2e8f0;">Thành tiền</th>
            </tr>
        </thead>
        <tbody>
            <?php
            echo wc_get_email_order_items(
                $order,
                array(
                    'show_sku'      => $sent_to_admin,
                    'show_image'    => false,
                    'image_size'    => array(32, 32),
                    'plain_text'    => $plain_text,
                    'sent_to_admin' => $sent_to_admin,
                )
            );
            ?>
        </tbody>
        <tfoot>
            <?php
            $totals = $order->get_order_item_totals();

            if ($totals) {
                $i = 0;
                foreach ($totals as $total_key => $total) {
                    $i++;
                    $is_total = ($total_key === 'order_total');
                    $label = $total['label'];
                    // Translate labels into clean Vietnamese
                    if ($total_key === 'cart_subtotal') $label = 'Tạm tính:';
                    if ($total_key === 'order_total') $label = 'Tổng thanh toán:';
                    if ($total_key === 'shipping') $label = 'Giao hàng:';
                    if ($total_key === 'payment_method') $label = 'Phương thức thanh toán:';
                    ?>
                    <tr style="<?php echo $is_total ? 'background-color: #f8fafc;' : ''; ?>">
                        <th class="td" scope="row" colspan="2" style="text-align:<?php echo esc_attr($text_align); ?>; <?php echo ($i === 1) ? 'border-top-width: 2px;' : ''; ?> padding: 12px 20px; color: <?php echo $is_total ? '#0f172a' : '#475569'; ?>; font-size: <?php echo $is_total ? '16px' : '14px'; ?>; font-weight: <?php echo $is_total ? '800' : '600'; ?>;">
                            <?php echo wp_kses_post($label); ?>
                        </th>
                        <td class="td" style="text-align:right; <?php echo ($i === 1) ? 'border-top-width: 2px;' : ''; ?> padding: 12px 20px; color: <?php echo $is_total ? '#0f172a' : '#334155'; ?>; font-size: <?php echo $is_total ? '18px' : '14.5px'; ?>; font-weight: <?php echo $is_total ? '800' : '700'; ?>; white-space: nowrap;">
                            <?php echo wp_kses_post($total['value']); ?>
                        </td>
                    </tr>
                    <?php
                }
            }
            if ($order->get_customer_note()) {
                ?>
                <tr>
                    <th class="td" scope="row" colspan="2" style="text-align:<?php echo esc_attr($text_align); ?>; padding: 12px 20px; color: #475569; font-size: 14px; font-weight: 600;">
                        Ghi chú của khách hàng:
                    </th>
                    <td class="td" style="text-align:left; padding: 12px 20px; color: #0f172a; font-size: 14px;">
                        <?php echo wp_kses_post(nl2br(wptexturize($order->get_customer_note()))); ?>
                    </td>
                </tr>
                <?php
            }
            ?>
        </tfoot>
    </table>
</div>

<?php do_action('woocommerce_email_after_order_table', $order, $sent_to_admin, $plain_text, $email); ?>
