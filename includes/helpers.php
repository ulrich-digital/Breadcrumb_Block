<?php
function render_custom_breadcrumb() {
    global $post;


    // Fallback für Site Editor / REST / Vorschau etc.
    if (
        ! isset($post) ||
        ! is_object($post) ||
        ! $post instanceof WP_Post
    ) {
        return '<div class="wp-block-custom-breadcrumb template-editor">[Breadcrumb-Platzhalter]</div>';
    }

    // Optional: Auf Startseite keine Breadcrumb anzeigen
    if (is_front_page()) {
        return '';
    }

    $home_icon = '<i class="home_icon" style="font-family:\'Font Awesome 6 Sharp\'; font-weight: 400;">&#xf015;</i>';
    $chevron   = '<i class="delimiter" style="font-family:\'Font Awesome 6 Sharp\'; font-weight: 400;">&#xf054;</i>'; // Chevron Right

    $output    = '<nav class="wp-block-custom-breadcrumb">';

    // Startseite
    $output .= '<a class="breadcrumb_link home_link" href="' . home_url() . '">' . $home_icon . '</a>';

    // Elternpfad
    $ancestors = get_post_ancestors($post);
    if (!empty($ancestors)) {
        $output .= ' ' . $chevron . ' ';
        $ancestors = array_reverse($ancestors);
        $count = count($ancestors);
        foreach ($ancestors as $index => $ancestor_id) {
            $output .= '<a class="breadcrumb_link" href="' . get_permalink($ancestor_id) . '">' . get_the_title($ancestor_id) . '</a>';
            if ($index < $count - 1) {
                $output .= ' ' . $chevron . ' ';
            }
        }
    }

    $output .= '</nav>';
    return $output;
}
