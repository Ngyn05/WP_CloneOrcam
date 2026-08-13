<?php
/** Front page: preserve the bundled OrCam homepage. */

if (orcam_theme_maybe_render_static()) {
    return;
}

get_template_part('page');
