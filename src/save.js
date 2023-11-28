/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { dateI18n, __ } from '@wordpress/i18n';

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

	return (
		<div className="card">
			<div class="header">
				<div className="card-date">{date}</div>
				<div className="card-location">{time} <br /> {location}</div>
			</div>
			<h3 className="card-title">{title}</h3>
			<div className="card-description">
				<RichText.Content
					value={description}
				/>
			</div>
			<div className="card-registration-link">
				<a href={registrationLink}>Register now</a>
			</div>
			<div className="card-categories">
				<strong>Categories</strong>
				<ul>
					{selectedCategories.map((category, index) => (
						<li key={index}>{category}</li>
					))}
				</ul>
			</div>
		</div>
	);
}
