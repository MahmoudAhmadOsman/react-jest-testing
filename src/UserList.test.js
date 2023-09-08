import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

test("render one row per user", () => {
	//1. render the component - that expect list of users
	const users = [
		{
			id: 1,
			name: "John",
			email: "john55@yahoo.com",
		},
		{
			id: 2,
			name: "Jame",
			email: "jane10@yahoo.com",
		},
		{
			id: 3,
			name: "Sarah",
			email: "sarah61@yahoo.com",
		},
	];

	render(<UserList users={users} />);

	//2. Find all the rows in the table

	// screen.logTestingPlaygroundURL(); // gibes you url for the test playground

	// screen.getByRole("row"); // not working because of the row length is more then 3

	// const rows = screen.getAllByRole("row");
	const rows = within(screen.getByTestId("users")).getAllByRole("row");

	//Assertion: correct number of rows in the table
	expect(rows).toHaveLength(3); // not working because of the row length is more then 3
});
