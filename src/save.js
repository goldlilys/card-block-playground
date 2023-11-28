/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	const blockProps = useBlockProps.save();
	const { title, description, date, time, location, registrationLink, selectedCategories } = attributes;

	const dateObj = new Date(attributes.date);
	const day = { weekday: 'long' };
	const monthday = { month: 'short', day: 'numeric' };
	const formattedDay = dateObj.toLocaleDateString(undefined, day);
	const formattedMonth = dateObj.toLocaleDateString(undefined, monthday);

	return (
		<div className="card">
			<div className="header">
				<div className="card-date"><div className="day">{formattedDay}</div><div className="month">{formattedMonth}</div></div>
				<div className="card-location">{time} <br /> {location}</div>
			</div>
			<div className="body">
				<h3 className="card-title">{title}</h3>
				<div className="card-description">
					<RichText.Content
						value={description}
					/>
				</div>
				<div className="card-registration-link">
					<a aria-label="Registration Link to the Event Site" href={registrationLink} target='_blank'>Register now</a>
				</div>
			</div>
			<div className="card-categories">
				<ul>
					{selectedCategories.map((category, index) => (
						<li key={index}><a href="#">{category}</a></li>
					))}
				</ul>
			</div>
		</div>
	);
}
