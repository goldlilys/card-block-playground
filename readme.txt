=== Clockwork Card Block ===
Contributors:      Frances Naty Go
Tags:              block
Tested up to:      6.1
Stable tag:        0.1.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Clockwork Card block is scaffolded with Create Block tool.

== Description ==

This Block is meant to show a Single Card for Events with the following fields:

Title, Date, Location, Description, Registration Link and Categories of the Event

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/clockwork-card-block` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress
3. Visit either one of the Pages or Posts
4. Use Gutenberg Editor and search for Accessible Card Block
5. Add contents for all the fields

Development Process
My development process is to use Local App for a local dev environment where I'm doing all the testing for the project first.

Once some parts are working, I'll apply it to the Github repository.

Using the Default WordPress Component References at https://developer.wordpress.org/block-editor/reference-guides/components/, I created all the fields needed to make the card block.

To create Gutenberg Block, I started out by going to the plugins directory in /wp-content/plugins and using the default Gutenberg scaffolding

# npx @wordpress/create-block clockwork-card-block

Go to the newly created clockwork-card-block plugin directory and compile the files in dev environment
# npm start

My usual development workflow for Gutenberg blocks is to:

1. Create the data fields in the block.json file with the type, source and selector names.
2. Update the edit.js file to output the fields in the Admin Edit Area using the default WP components available
3. Update the save.js file to show the results from the edit.js in the format to be displayed in the Front-end

== Accessibility and Development ==
- For Accessibility, I've added aria-labels to all the inputs so that the description for each input can be used by the devices for screen readers.

- Added Placeholders for all the inputs in the Edit part so it's clear what those fields are for.

- I was trying to add tabindex for all the inputs too so using the keyboard will work easily when navigation each field, but it's not working because it's going to the WordPress editing buttons instead of staying in the Card Block section.

== Issues ==
- Had issues when building out the Registration Link component thinking I can use the ExternalLink Component, but that wouldn't allow me to add a URL so I found that using the TextControl component works fine as long as the JSON data includes a href attribute and selector has a anchor tag. I found it by checking StackOverflow and researching if there's a better way to create links.

- DateTimePicker Component is outputting a timestamp and need a way to format the output. Used the default @wordpress/i18n for formatting the date.

- After adding the Date formatting on the save.js, when editing the Block, the formatting of the date becomes Invalid. Got stuck on this part.

- Having issues with getting the tags or categories to list out for the bottom or more like I tried using the CheckboxControl Component and it's not outputting the options. https://developer.wordpress.org/block-editor/reference-guides/components/checkbox-control/ So instead used SelectControl with manual options to display something.



== Changelog ==

= 0.1.0 =
* Release
