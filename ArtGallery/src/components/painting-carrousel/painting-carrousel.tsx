import React from 'react';

export interface PaintingCarrouselProps {
	options: any;
}
function PaintingCarrousel({ options }: PaintingCarrouselProps) {
	return (
		<div>
			{options.map((x: any) => (
				<div>{x}</div>
			))}
		</div>
	);
}

export default PaintingCarrousel;
