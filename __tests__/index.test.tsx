import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
	beforeEach(() => {
		render(<Home />);
	});

	it("renders a login button", () => {
		const loginButton = screen.getByText("Log In");

		expect(loginButton).toBeInTheDocument();
	});

	it("renders a signup button", () => {
		const signupButton = screen.getByText("Sign Up");

		expect(signupButton).toBeInTheDocument();
	});

	it("renders a get started button", () => {
		const getStartedButton = screen.getByText("Get Started");

		expect(getStartedButton).toBeInTheDocument();
	});
});
