import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
	beforeEach(() => {
		render(<Home />);
	});

	it("renders a login button", () => {
		const loginButton = screen.getByText(/log in/i);

		expect(loginButton).toBeInTheDocument();
	});

	it("renders a signup button", () => {
		const signupButton = screen.getByText(/sign up/i);

		expect(signupButton).toBeInTheDocument();
	});

	it("renders a get started button", () => {
		const getStartedButton = screen.getByText(/get started/i);

		expect(getStartedButton).toBeInTheDocument();
	});
});
