import { render, screen } from "@testing-library/react";
import UserForm from "./UserForm";

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
