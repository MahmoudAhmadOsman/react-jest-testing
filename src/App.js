import { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";

function App() {
	const [users, setUsers] = useState([]);

	const onUserAdd = (user) => {
		setUsers([...users, user]);
	};

	return (
		<div className="container mt-3">
			<div className="row">
				<div className="col-md-6">
					<UserForm onUserAdd={onUserAdd} />
				</div>
				<div className="col-md-6">
					<UserList users={users} />
				</div>

				<footer className="mt-5 text-center">
					<hr />
					<p className="text-muted display-6">
						React & Jest testing application
					</p>
					<p className="text-muted">
						&copy; Copyright {new Date().getFullYear()}. All rights reserved.
						Developed By Mahmoud Osman.
					</p>
				</footer>
			</div>
		</div>
	);
}

export default App;
