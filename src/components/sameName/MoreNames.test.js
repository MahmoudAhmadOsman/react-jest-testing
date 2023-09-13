import { render, screen } from "@testing-library/react";
import MoreNames from "./MoreNames";

test("shows email and search input", () => {
	render(<MoreNames />);

	// Find the input elements by their ARIA roles
	const emailInput = screen.getByRole("textbox", { name: /email/i });
	const searchInput = screen.getByRole("textbox", { name: /search/i });

	// Assert that the input elements are in the document
	expect(emailInput).toBeInTheDocument();
	expect(searchInput).toBeInTheDocument();
});
