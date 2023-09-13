import React from "react";

const MoreNames = () => {
	// find input by its accessible name, which is email and search using htmlFor attribute names
	return (
		<div>
			<label htmlFor="email">Email </label>
			<input id="email" />
			<label htmlFor="search">Search </label>
			<input id="search" />
		</div>
	);
};

export default MoreNames;
