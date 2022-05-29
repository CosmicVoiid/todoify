import {
	render,
	screen,
	fireEvent,
	waitFor,
	act,
} from "@testing-library/react";
import Login from "../pages/login";
import "@testing-library/jest-dom";

describe("Login", () => {
	beforeEach(() => {
		render(<Login />);
	});

	it("renders a email input", () => {
		const emailInput = screen.getByLabelText(/email/i);

		expect(emailInput).toBeInTheDocument();
	});

	it("renders a password input", () => {
		const passwordInput = screen.getByLabelText(/password/i);

		expect(passwordInput).toBeInTheDocument();
	});

	it("renders a login button", () => {
		const loginButton = screen.getByRole("button", { name: /log in/i });

		expect(loginButton).toBeInTheDocument();
	});

	it("email input is empty", () => {
		const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;

		expect(emailInput.value).toBe("");
	});

	it("password input is empty", () => {
		const passwordInput = screen.getByLabelText(
			/password/i
		) as HTMLInputElement;

		expect(passwordInput.value).toBe("");
	});

	it("login button is disabled at start", () => {
		const loginButton = screen.getByRole("button", { name: /log in/i });

		expect(loginButton).toBeDisabled();
	});

	it("email input should change", async () => {
		const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;

		const testValue = "test";
		await act(() => {
			fireEvent.change(emailInput, { target: { value: testValue } });
		});

		expect(emailInput.value).toBe("test");
	});

	it("password input should change", async () => {
		const passwordInput = screen.getByLabelText(
			/password/i
		) as HTMLInputElement;

		const testValue = "test";
		await act(() => {
			fireEvent.change(passwordInput, { target: { value: testValue } });
		});

		expect(passwordInput.value).toBe("test");
	});

	it("login button is not disabled when inputs are filled", async () => {
		const loginButton = screen.getByRole("button", { name: /log in/i });
		const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
		const passwordInput = screen.getByLabelText(
			/password/i
		) as HTMLInputElement;

		const testValue = "test";
		const testEmail = "test@gmail.com";

		await act(() => {
			fireEvent.change(emailInput, { target: { value: testEmail } });
			fireEvent.change(passwordInput, { target: { value: testValue } });
		});

		expect(loginButton).not.toBeDisabled();
	});
});
