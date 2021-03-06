import React from '../../src';
import { setupScratch, teardown } from '../../../test/_util/helpers';

describe('svg', () => {

	/** @type {HTMLDivElement} */
	let scratch;

	beforeEach(() => {
		scratch = setupScratch();
	});

	afterEach(() => {
		teardown(scratch);
	});

	it('should render SVG to string', () => {
		let svg = (
			<svg viewBox="0 0 360 360">
				<path stroke="white" fill="black" d="M347.1 357.9L183.3 256.5 13 357.9V1.7h334.1v356.2zM58.5 47.2v231.4l124.8-74.1 118.3 72.8V47.2H58.5z" />
			</svg>
		);
		// string -> parse
		expect(svg).to.eql(svg);
	});

	it('should render SVG to DOM #1', () => {
		const Demo = () => (
			<svg viewBox="0 0 360 360">
				<path stroke="white" fill="black" d="M347.1 357.9L183.3 256.5 13 357.9V1.7h334.1v356.2zM58.5 47.2v231.4l124.8-74.1 118.3 72.8V47.2H58.5z" />
			</svg>
		);
		React.render(<Demo />, scratch);

		expect(scratch.innerHTML).to.equal('<svg viewBox="0 0 360 360"><path stroke="white" fill="black" d="M347.1 357.9L183.3 256.5 13 357.9V1.7h334.1v356.2zM58.5 47.2v231.4l124.8-74.1 118.3 72.8V47.2H58.5z"></path></svg>');
	});

	it('should render SVG to DOM #2', () => {
		React.render((
			<svg viewBox="0 0 100 100">
				<text textAnchor="mid">foo</text>
				<path vectorEffect="non-scaling-stroke" d="M0 0 L100 100" />
			</svg>
		), scratch);

		expect(scratch.innerHTML).to.equal('<svg viewBox="0 0 100 100"><text text-anchor="mid">foo</text><path vector-effect="non-scaling-stroke" d="M0 0 L100 100"></path></svg>');
	});
});
