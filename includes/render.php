<?php
/**
 * Dynamische Ausgabe für den Breadcrumb-Block.
 */

function render_ud_breadcrumb_block( $attributes, $content, $block ) {
    // nur dynamisch, niemals $content zurückgeben
    return render_custom_breadcrumb();
}

add_action( 'init', function () {
    register_block_type(
        __DIR__ . '/../block.json',
        [
            'render_callback' => 'render_ud_breadcrumb_block',
        ]
    );
});
