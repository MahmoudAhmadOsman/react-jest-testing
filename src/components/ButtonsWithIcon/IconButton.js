import React from "react";

const IconButton = () => {
	return (
		<div>
			{/* use aria-label to describe the button for testing */}
			<button aria-label="sign in">
				<svg />
			</button>

			<button aria-label="sign out">
				<svg />
			</button>
		</div>
	);
};

export default IconButton;
