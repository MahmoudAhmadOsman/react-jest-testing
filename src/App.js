import { useState } from "react";
import UserForm from "./components/user/UserForm";
import UserList from "./components/user/UserList";
import RoleExample from "./components/list/RoleExample";

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
				<br />
				<br />
				<footer className="mt-5 text-center">
					<hr />
					<p className="text-muted display-6">
						React & Jest testing application
					</p>
					<p className="text-muted" style={{ fontSize: "11px" }}>
						&copy; Copyright {new Date().getFullYear()}. All rights reserved.
						Developed By Mahmoud Osman.
					</p>
				</footer>
			</div>
		</div>
	);
}

export default App;
