import React from "react";

const UserList = ({ users }) => {
	const renderedUsers = users.map((user) => {
		return (
			<tr key={user.id}>
				<td>{user.name}</td>
				<td>{user.email}</td>
			</tr>
		);
	});

	return (
		<div className="container mt-3">
			{users.length > 0 ? (
				<div>
					<h2>User List</h2>
					<table className="table table-striped">
						<thead>
							<tr>
								<th>Name</th>
								<th>Email</th>
							</tr>
						</thead>
						<tbody>{renderedUsers}</tbody>
					</table>
				</div>
			) : (
				""
				// <div className="text-danger">No uses found!</div>
			)}
		</div>
	);
};

export default UserList;
