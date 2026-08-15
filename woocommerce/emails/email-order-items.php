<?php
/**
 * Email Order Items - OrCam Việt Nam (No Image, Clean Layout)
 */

defined('ABSPATH') || exit;

$text_align  = is_rtl() ? 'right' : 'left';
$margin_side = is_rtl() ? 'left' : 'right';

foreach ($items as $item_id => $item) :
    $product       = $item->get_product();
    $sku           = '';
    $purchase_note = '';
    $formatted_meta = array();

    if (is_object($product)) {
        $sku           = $product->get_sku();
        $purchase_note = $product->get_purchase_note();
    }

?>
<tr class="<?php echo esc_attr(apply_filters('woocommerce_order_item_class', 'order_item', $item, $order)); ?>">
    <td class="td" style="text-align:<?php echo esc_attr($text_align); ?>; vertical-align: middle; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; word-wrap:break-word; padding: 16px 20px;">
        <div style="font-size: 15px; font-weight: 700; color: #0f172a; line-height: 1.4;">
            <?php echo wp_kses_post(apply_filters('woocommerce_order_item_name', $item->get_name(), $item, false)); ?>
        </div>
        <?php if ($sku) : ?>
            <div style="font-size: 12px; color: #64748b; margin-top: 4px;">
                Mã SP: <?php echo esc_html($sku); ?>
            </div>
        <?php endif; ?>
        <?php
        wc_display_item_meta(
            $item,
            array(
                'label_before' => '<strong class="wc-item-meta-label" style="float: ' . esc_attr($text_align) . '; margin-' . esc_attr($margin_side) . ': .25em; clear: both">',
            )
        );
        ?>
    </td>
    <td class="td" style="text-align:center; vertical-align:middle; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 15px; font-weight: 600; color: #334155; padding: 16px 20px;">
        × <?php echo esc_html($item->get_quantity()); ?>
    </td>
    <td class="td" style="text-align:right; vertical-align:middle; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 15px; font-weight: 700; color: #0f172a; padding: 16px 20px; white-space: nowrap;">
        <?php echo wp_kses_post($order->get_formatted_line_subtotal($item)); ?>
    </td>
</tr>

<?php if ($show_purchase_note && $purchase_note) : ?>
<tr>
    <td colspan="3" style="text-align:<?php echo esc_attr($text_align); ?>; vertical-align:middle; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 12px 20px; background-color: #f8fafc; color: #475569; font-size: 13px;">
        <?php echo wp_kses_post(wpautop(do_shortcode($purchase_note))); ?>
    </td>
</tr>
<?php endif; ?>

<?php endforeach; ?>
