/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { TextControl, CheckboxControl, DateTimePicker } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();

	// Simplify the attribute calls
	const { title, description, date, time, location, registrationLink, selectedCategories } = attributes;

	// Set the onChange functions for each component
	const onChangeTitle = (newTitle) => {
		setAttributes({ title: newTitle })
	}

	const onChangeDate = (newDate) => {
		setAttributes({ date: newDate })
	}

	const onChangeTime = (newTime) => {
		setAttributes({ time: newTime })
	}

	const onChangeContent = (newContent) => {
		setAttributes({ description: newContent })
	}

	const onChangeLocation = (newLocation) => {
		setAttributes({ location: newLocation })
	}

	const onChangeLink = (newLink) => {
		setAttributes({ registrationLink: newLink })
	}

	const onChangeCategories = (newCategories) => {
		setAttributes({ selectedCategories: newCategories })
	}

	// Display the components in the editor
	return (
		<div id="clockwork-card-block-edit" className="container">
			<TextControl
				label="Event Time"
				aria-label="Your Event Time for example 11am - 12pm EST"
				onChange={onChangeTime}
				value={time}
				placeholder="Your Event Time: 11am - 12pm EST"
				className="card-time"
			/>
			<TextControl
				label="Location"
				aria-label="Your Event Location: City, State"
				onChange={onChangeLocation}
				value={location}
				placeholder="Your Event Location: City, State"
				className="card-location"
			/>
			<TextControl
				label="Event Title"
				aria-label="Your Event Title"
				onChange={onChangeTitle}
				value={title}
				placeholder="Your Event Title"
				className="card-title"
			/>
			<RichText
				{...blockProps}
				onChange={onChangeContent}
				value={description}
				multiline="p"
				placeholder="Your Event Description"
				formattingControls={['bold', 'italic', 'underline']}
			/>
			<TextControl
				label="Event Registration Link"
				aria-label="Your Event Registration Link"
				placeholder="Event Registration Link"
				value={registrationLink}
				onChange={onChangeLink}
			/>
			<CheckboxControl
				label="Categories"
				aria-label="Your Event Tags"
				checked={selectedCategories}
				onChange={onChangeCategories}
				options={[
					{ label: 'Capital Markets', value: 'capital-markets' },
					{ label: 'Corporate Compliance', value: 'corporate-compliance' },
					{ label: 'Financial Services', value: 'financial-services' },
					{ label: 'Investment Company', value: 'investment-company' },
				]}
			/>
			<DateTimePicker
				currentDate={date}
				onChange={onChangeDate}
				is12Hour={true}
				className="card-date"
			/>
		</div>
	);
}
