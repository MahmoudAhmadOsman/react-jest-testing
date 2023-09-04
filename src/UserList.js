import React from "react";

const UserList = ({ users }) => {
	const renderedUsers = users.map((user) => {
		return (
			<tr key={user.name}>
				<td>{user.name}</td>
				<td>{user.email}</td>
			</tr>
		);
	});

	return (
		<div className="container mt-3">
			{users.length > 0 ? (
				<>
					<h2 className="text-success">User List</h2> <hr />
					<table className="table table-striped">
						<thead>
							<tr>
								<th>Name</th>
								<th>Email</th>
							</tr>
						</thead>
						<tbody>{renderedUsers}</tbody>
					</table>
				</>
			) : (
				<>
					<div className="text-danger">
						<p>No uses found!</p>
						<span>Please add a user to get started!</span>
					</div>{" "}
				</>
			)}
		</div>
	);
};

export default UserList;
