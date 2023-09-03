import { render, screen } from "@testing-library/react";

import UserForm from "./UserForm";
import user from "@testing-library/user-event";

test("it shows two inputs and a button", () => {
	//1. render the component
	render(<UserForm />);

	//2. Manipulate the rendered component OR find an element in it
	const inputs = screen.getAllByRole("textbox");
	const button = screen.getByRole("button");

	//3. Assertion - Make tsure the component is doing what we expext it to do
	expect(inputs).toHaveLength(2);
	expect(button).toBeInTheDocument();
});

//test 2

test("it calls onUserAdd when the form is submitted", () => {
	const argList = [];

	const callback = (...args) => {
		argList.push(args);
	};

	// render the component

	render(<UserForm onUserAdd={callback} />);

	//find the two inputs
	const [nameInput, emailInput] = screen.getAllByRole("textbox");

	//Simulate typing in a name
	user.click(nameInput);
	user.keyboard("John");

	//Simulate typing in a email
	user.click(emailInput);
	user.keyboard("john66@yahoo.com");

	//Find the button
	const button = screen.getByRole("button");

	//Simulate clicking the button
	user.click(button);

	//Assertion to make sure the 'onUserAdd' gets called with name/email
	expect(argList).toHaveLength(1);
	expect(argList[0][0]).toEqual({ name: "John", email: "john66@yahoo.com" });
});
