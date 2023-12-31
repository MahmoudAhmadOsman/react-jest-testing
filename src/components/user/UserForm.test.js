import { render, screen } from "@testing-library/react";

import user from "@testing-library/user-event";
import UserForm from "./components/user/UserForm";

test("it shows two inputs and a button", () => {
	//1. render the component
	render(<UserForm />);

	//2. Manipulate the rendered component OR find an element in it
	const inputs = screen.getAllByRole("textbox");
	const button = screen.getByRole("button");

	//3. Assertion - Make sure the component is doing what we expect it to do
	expect(inputs).toHaveLength(2);
	expect(button).toBeInTheDocument();
});

//====test 2=====

test("it calls onUserAdd when the form is submitted", () => {
	const mock = jest.fn(); // mock function

	render(<UserForm onUserAdd={mock} />);

	//Find the two inputs - not recommended
	// const [nameInput, emailInput] = screen.getAllByRole("textbox");

	//better way of testing the inputs
	const nameInput = screen.getByRole("textbox", { name: /Enter name/i }); // read the lable text that say, 'Enter name'
	const emailInput = screen.getByRole("textbox", { name: /Enter email/i }); // read the lable text that say, 'Enter email'

	//Simulate typing in a name
	user.click(nameInput);
	user.keyboard("John");

	//Simulate typing in an email
	user.click(emailInput);
	user.keyboard("john6@yahoo.com");

	//Find the button
	const button = screen.getByRole("button");

	//Simulate clicking the button
	user.click(button);

	//Assetion - Make sure the mock function was called with the correct data
	expect(mock).toHaveBeenCalled();
	expect(mock).toHaveBeenCalledWith({ name: "John", email: "john6@yahoo.com" });
});

//test 3
test("empty the name and email fields when form is submitted", () => {
	//render the component
	<UserForm onUserAdd={() => {}} />;

	//find the two inputs and button
	const nameInput = screen.getByRole("textbox", { name: /name/i });
	const emailInput = screen.getByRole("textbox", { name: /email/i });
	const button = screen.getByRole("button");

	//Simulate typing in a name
	user.click(nameInput);
	user.keyboard("john");
	user.click(emailInput);
	user.keyboard("john99@yahoo.com");

	user.click(button);

	//Assertion - Make sure the name and email fields are empty
	expect(nameInput).toHaveValue("");
	expect(emailInput).toHaveValue("");
});
