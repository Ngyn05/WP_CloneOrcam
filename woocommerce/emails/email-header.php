<?php
/**
 * Email Header - OrCam Việt Nam
 */

defined('ABSPATH') || exit;

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=<?php bloginfo('charset'); ?>" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <title><?php echo get_bloginfo('name', 'display'); ?></title>
</head>
<body <?php echo is_rtl() ? 'rightmargin' : 'leftmargin'; ?>="0" marginwidth="0" topmargin="0" marginheight="0" offset="0" style="background-color: #f1f5f9; padding: 30px 0; margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
    <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #f1f5f9; width: 100%; height: 100%;">
        <tr>
            <td align="center" valign="top">
                <!-- Wrapper Container -->
                <table border="0" cellpadding="0" cellspacing="0" width="600" style="max-width: 600px; width: 100%; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(15, 23, 42, 0.08); border: 1px solid #e2e8f0;">
                    <!-- Top Brand Header -->
                    <tr>
                        <td align="center" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 32px 24px 28px; text-align: center; border-bottom: 3px solid #38bdf8;">
                            <div style="margin-bottom: 4px;">
                                <span style="color: #ffffff; font-size: 24px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;">ORCAM</span>
                                <span style="color: #38bdf8; font-size: 24px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif; margin-left: 6px;">VIỆT NAM</span>
                            </div>
                            <p style="color: #94a3b8; font-size: 13px; margin: 6px 0 0 0; letter-spacing: 0.5px;">Công nghệ trợ năng đột phá cho người khiếm thị & đọc</p>
                        </td>
                    </tr>
                    <!-- Main Email Content -->
                    <tr>
                        <td valign="top" style="padding: 36px 32px; background-color: #ffffff;">
                            <div id="body_content_inner" style="color: #334155; font-size: 15px; line-height: 1.6;">
