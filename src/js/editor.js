/**
 * editor.js
 *
 * JavaScript für den Block-Editor (Gutenberg).
 * Wird ausschließlich im Backend geladen.
 *
 * Hinweis:
 * Diese Datei enthält editor-spezifische Interaktionen oder React-Komponenten.
 * Wird über webpack zu editor.js gebündelt und in block.json oder enqueue.php eingebunden.
 */

import edit from './edit';
import save from './save';
import metadata from '../../block.json';
import { BreadcrumbIcon } from './edit'; // 👈 Icon importieren

wp.blocks.registerBlockType(metadata.name, {
    ...metadata,
    icon: BreadcrumbIcon, // 👈 Icon explizit setzen
    edit,
    save,
});
