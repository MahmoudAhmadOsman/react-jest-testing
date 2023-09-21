import React, { useState } from "react";

const UserForm = ({ onUserAdd }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [error, setError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!name || !email) {
			setError(true);
			return;
		} else {
			onUserAdd({ name, email });

			setEmail("");
			setName("");
			setError(false);
		}
	};

	return (
		<div className="user_form">
			<div className="container">
				<h1 className="text-success">Add New User</h1> <hr />
				<div className="row mt-3">
					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<label htmlFor="name">
								&nbsp;Enter Name <span className="text-danger fw-bold">*</span>
							</label>

							<input
								type="text"
								id="name"
								className={`mb-0 ${
									error && name.length <= 0
										? "form-control form-control-lg name-danger"
										: "form-control form-control-lg"
								}`}
								placeholder={`${
									error && name.length <= 0
										? "Please provide your full name!"
										: "Enter your name"
								}`}
								name="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>

							{error && name.length <= 0 ? (
								<span className="text-danger">Name is required!</span>
							) : (
								""
							)}
						</div>

						<div className="mb-3">
							<label htmlFor="email">
								&nbsp;Enter Email <span className="text-danger fw-bold">*</span>
							</label>

							<input
								type="email"
								id="email"
								className={`mb-0 ${
									error && email.length <= 0
										? "form-control form-control-lg email-danger"
										: "form-control form-control-lg"
								}`}
								placeholder={`${
									error && email.length <= 0
										? "Please provide valid email address!"
										: "Enter your email"
								}`}
								name="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>

							{error && email.length <= 0 ? (
								<span className="text-danger">Email is required!</span>
							) : (
								""
							)}
						</div>

						{error && name.length <= 0 && error && email.length <= 0 ? (
							<button className="btn btn-outline-success btn-lg disabled">
								{" "}
								Add User
							</button>
						) : (
							<button className="btn btn-outline-success btn-lg">
								{" "}
								Add User
							</button>
						)}
					</form>
				</div>
			</div>
		</div>
	);
};

export default UserForm;
