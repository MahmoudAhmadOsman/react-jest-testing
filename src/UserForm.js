import React, { useState } from "react";

const UserForm = ({ onUserAdd }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		onUserAdd({ name, email });
		setName("");
		setEmail("");
	};

	return (
		<div className="user_form">
			<div className="container">
				<h1 className="text-success">Add New User</h1> <hr />
				<div className="row mt-3">
					<form onSubmit={handleSubmit}>
						<div className="input-group mb-3">
							<label className="input-group-text" htmlFor="name">
								Name
							</label>
							<input
								type="text"
								className="form-control form-control-lg"
								placeholder="Enter your name"
								name="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>

						<div className="input-group mb-3">
							<label className="input-group-text" htmlFor="email">
								Email
							</label>
							<input
								type="email"
								className="form-control form-control-lg"
								placeholder="Enter your  email"
								name="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<button type="submit" className="btn btn-outline-success btn-lg">
							Add User
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default UserForm;
