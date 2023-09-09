import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

test("render one row per user", () => {
	//1. render the component - that expect list of users
	const users = [
		{
			name: "John",
			email: "john55@yahoo.com",
		},
		{
			name: "Jane",
			email: "jane10@yahoo.com",
		},
		{
			name: "Sarah",
			email: "sarah61@yahoo.com",
		},
	];

	//2. Find all the rows in the table
	render(<UserList users={users} />);

	//eslint-disable-next-line
	// screen.logTestingPlaygroundURL(); // gives you url for the test playground

	const rows = within(screen.getByTestId("users")).getAllByRole("row");

	//Assertion: correct number of rows in the table - not working because of the row length is more then 3
	expect(rows).toHaveLength(3);
});

test("render the email and  name of each user", () => {
	//1. render the component - that expect list of users
	const users = [
		{
			name: "John",
			email: "john55@yahoo.com",
		},
		{
			name: "Jane",
			email: "jane10@yahoo.com",
		},
		{
			name: "Sarah",
			email: "sarah61@yahoo.com",
		},
	];

	//2. Find all the rows in the table
	render(<UserList users={users} />);

	//eslint-disable-next-line
	// screen.logTestingPlaygroundURL();

	//Assertion:  -- loop through each row and find the email and name
	for (let user of users) {
		// const name = screen.getByRole("cell", { name: user.name }); // using this, the test is failling
		// const email = screen.getByRole("cell", { email: user.email }); // using this, the test is failling
		const name = screen.getByText(user.name);
		const email = screen.getByText(user.email);

		expect(name).toBeInTheDocument();
		expect(email).toBeInTheDocument();
	}
});
