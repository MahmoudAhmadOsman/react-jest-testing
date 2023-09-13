import { render, screen } from "@testing-library/react"
import RoleExample from "./RoleExample";

test("can find elements by role", () => {
	//1. render component
	render(<RoleExample />);

	const roles = [
		"link",
		"button",
		"contentinfo",
		"heading",
		"banner",
		"img",
		"checkbox",
		"radio",
		"textbox",
		"listitem",
		"list",
  ];
  
  //2.

	for (let role of roles) {
    const el = screen.getByRole(role);
    //3.
		expect(el).toBeInTheDocument();
	}
});