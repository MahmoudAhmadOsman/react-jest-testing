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
			</div>
		</div>
	);
}

export default App;
