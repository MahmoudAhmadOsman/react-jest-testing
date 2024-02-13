import { render, screen } from "@testing-library/react";
import IconButton from "./IconButton";

test("should find elements based on label", () => {
	render(<IconButton />);

	// Find the input elements by their ARIA roles
	const signInButton = screen.getByRole("button", {
		name: /sign in/i,
	});

	const signOutButton = screen.getByRole("button", {
		name: /sign out/i,
	});

	// Assert that the input elements are in the document
	expect(signInButton).toBeInTheDocument();
	expect(signOutButton).toBeInTheDocument();
});
