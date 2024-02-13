import { render, screen } from "@testing-library/react";
import AccessibleName from "./AccessibleName";

test("can select by accessible or elements with same name", () => {
	render(<AccessibleName />);

	//select the submit button
	const submitButton = screen.getByRole("button", {
		name: /submit/i,
	});

	//select the cancel button
	const cancelButton = screen.getByRole("button", {
		name: /cancel/i,
	});

	expect(submitButton).toBeInTheDocument();
	expect(cancelButton).toBeInTheDocument();
});
