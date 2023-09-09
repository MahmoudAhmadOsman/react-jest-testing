import { render, screen } from "@testing-library/react";
import App from "./App";
import user from "@testing-library/user-event";

test("it receives a new user and shows it on a list", () => {
	//render the component
	render(<App />);

	// find name input, email input  and button
	const nameInput = screen.getByRole("textbox", {
		name: /name/i,
	});

	const emailInput = screen.getByRole("textbox", {
		name: /email/i,
	});

	const button = screen.getByRole("button");

	//===== QUERY ========
	user.click(nameInput);
	user.keyboard("jane");
	user.click(emailInput);
	user.keyboard("jame99@yahoo.com");

	user.click(button);

	//.debug(); // built in the screen object to debug the DOM

	//find name and email of the user

	const name = screen.getByRole("cell", { name: "jane" });
	const email = screen.getByRole("cell", { email: "jame99@yahoo.com" });

	screen.logTestingPlaygroundURL(); // for debugging purpose

	expect(name).toBeInTheDocument();
	expect(email).toBeInTheDocument();
});
