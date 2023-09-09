import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

const renderUserListComponent = () => {
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

	return {
		users,
	};
};

test("render one row per user", () => {
	//1. render the component - that expect list of users
	renderUserListComponent();

	const rows = within(screen.getByTestId("users")).getAllByRole("row");

	//Assertion:
	expect(rows).toHaveLength(3);
});

test("render the email and  name of each user", () => {
	//1. render the component
	const { users } = renderUserListComponent();

	//Assertion:
	for (let user of users) {
		const name = screen.getByText(user.name);
		const email = screen.getByText(user.email);

		expect(name).toBeInTheDocument();
		expect(email).toBeInTheDocument();
	}
});
