<?php
/**
 * Enqueued CSS/JS für Editor und Frontend.
 */

add_action('enqueue_block_editor_assets', function () {
	$base = plugin_dir_url(__DIR__);
	$path = plugin_dir_path(__DIR__);

	wp_enqueue_script(
		'ud-breadcrumb-editor',
		$base . 'build/editor.js',
		['wp-blocks', 'wp-element', 'wp-editor', 'wp-components'],
		filemtime($path . 'build/editor.js'),
		true
	);

	wp_enqueue_style(
		'ud-breadcrumb-editor-style',
		$base . 'build/editor.css',
		[],
		filemtime($path . 'build/editor.css')
	);
});

add_action('wp_enqueue_scripts', function () {
	$base = plugin_dir_url(__DIR__);
	$path = plugin_dir_path(__DIR__);

	wp_enqueue_style(
		'ud-breadcrumb-frontend-style',
		$base . 'build/frontend.css',
		[],
		filemtime($path . 'build/frontend.css')
	);
});
