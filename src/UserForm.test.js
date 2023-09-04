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

//====test 2=====

test("it calls onUserAdd when the form is submitted", () => {
	const mock = jest.fn(); // mock function

	render(<UserForm onUserAdd={mock} />);

	const [nameInput, emailInput] = screen.getAllByRole("textbox");

	user.click(nameInput);
	user.keyboard("John");

	user.click(emailInput);
	user.keyboard("john6@yahoo.com");

	const button = screen.getByRole("button");

	user.click(button);

	expect(mock).toHaveBeenCalled();

	expect(mock).toHaveBeenCalledWith({ name: "John", email: "john6@yahoo.com" });
});
