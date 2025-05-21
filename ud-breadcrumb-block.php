<?php

/**
 * Plugin Name: Breadcrumb Block
 * Description: Block zur Anzeige einer Breadcrumb-Navigation basierend auf der Seitenhierarchie. Zeigt nur Elternseiten – nicht die aktuelle Seite – um Dopplung mit dem Seitentitel zu vermeiden.
 * Version: 1.2.0
 * Author: ulrich.digital
 * Author URI: https://ulrich.digital/
 * Text Domain: ud-breadcrumb-block
 */

defined('ABSPATH') || exit;

/**
 * Hinweis:
 * Diese Datei dient ausschliesslich als Einstiegspunkt für das Plugin.
 */



// PHP-Funktionen laden
/*
foreach (glob(__DIR__ . '/includes/*.php') as $file) {
    require_once $file;
}
*/

require_once __DIR__ . '/includes/helpers.php';
require_once __DIR__ . '/includes/render.php';
require_once __DIR__ . '/includes/enqueue.php';
