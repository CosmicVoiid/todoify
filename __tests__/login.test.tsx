import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../pages/login";
import "@testing-library/jest-dom";

describe("Login", () => {
	beforeEach(() => {
		render(<Login />);
	});

	it("renders a email input", () => {
		const emailInput = screen.getByLabelText("email");

		expect(emailInput).toBeInTheDocument();
	});
});
