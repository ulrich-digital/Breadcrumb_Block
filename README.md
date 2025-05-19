# Breadcrumb Block (WordPress Plugin)

Dieses Plugin ergänzt den WordPress-Editor um einen einfachen, dynamischen **Breadcrumb-Block** zur Anzeige von Navigationspfaden. Die Ausgabe erfolgt serverseitig und kann über das Theme oder Plugins angepasst werden.

## Was macht das Plugin?

Der Block zeigt eine Breadcrumb-Navigation an – also eine „Sie sind hier“-Struktur, die Nutzer:innen hilft, sich innerhalb einer Website zurechtzufinden. Die Ausgabe ist barrierearm, anpassbar und erfolgt über ein PHP-Render-Template.

**Besonderheit:**  
Im Gegensatz zu vielen anderen Breadcrumb-Plugins wird **die aktuelle Seite nicht im Breadcrumb-Pfad angezeigt**. Das vermeidet unnötige Wortdopplung – insbesondere dann, wenn der Seitentitel direkt unter dem Breadcrumb erscheint (z. B. als H1). Das sorgt für ein aufgeräumtes und klareres Layout.

## Features

- Gutenberg-Block für Breadcrumbs
- Aktuelle Seite wird bewusst *nicht* im Pfad angezeigt
- Automatische Ausgabe anhand der aktuellen Seitenstruktur
- Ausgabe erfolgt über `render.php` (PHP-basiert)
- Optional erweiterbar über Filter (`breadcrumb_block_get_items`)
- Volle Kontrolle über HTML und CSS durch eigene Templates und Styles

## Vorschau

![Breadcrumb-Frontend](./assets/img/breadcrumb_frontend.png)

*Abbildung: Frontend-Darstellung des Breadcrumb-Blocks im Standard-Theme.*

## Integration

Du kannst das Plugin wie jeden anderen Gutenberg-Block nutzen – einfach in einen Beitrag oder eine Seite einfügen. Anpassungen an der Logik sind über `breadcrumb-functions.php` möglich.

## Installation

1. Plugin-Ordner in `wp-content/plugins/` legen
2. Aktivieren
3. Block „Breadcrumb“ im Editor einfügen
