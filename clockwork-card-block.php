<?php
/**
 * Plugin Name:       Clockwork Card Block
 * Description:       Accessible Card Block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Frances Naty Go
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       clockwork-card-block
 *
 * @package           create-block
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function clockwork_card_block_clockwork_card_block_block_init() {
    register_block_type(__DIR__ . '/build');
}
add_action('init', 'clockwork_card_block_clockwork_card_block_block_init');

function enqueue_moment_js() {
    wp_enqueue_script('moment-js', 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js', array(), null, true);
}

add_action('wp_enqueue_scripts', 'enqueue_moment_js');
