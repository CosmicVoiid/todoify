import { render, screen, fireEvent, act } from "@testing-library/react";
import Signup from "../pages/signup";
import "@testing-library/jest-dom";

describe("Signup", () => {
	beforeEach(() => {
		render(<Signup />);
	});

	it("renders first name input", () => {
		const firstNameInput = screen.getByLabelText(/first name/i);

		expect(firstNameInput).toBeInTheDocument();
	});

	it("renders last name input", () => {
		const lastNameInput = screen.getByLabelText(/last name/i);

		expect(lastNameInput).toBeInTheDocument();
	});

	it("renders email input", () => {
		const emailInput = screen.getByLabelText(/email/i);

		expect(emailInput).toBeInTheDocument();
	});

	it("renders password input", () => {
		const passwordInput = screen.getByLabelText(/^password$/i);

		expect(passwordInput).toBeInTheDocument();
	});

	it("renders password confirm input", () => {
		const passwordConfirmInput = screen.getByLabelText(/confirm password/i);

		expect(passwordConfirmInput).toBeInTheDocument();
	});

	it("renders sign up button", () => {
		const signupButton = screen.getByRole("button", { name: /sign up/i });

		expect(signupButton).toBeInTheDocument();
	});

	it("diasbles sign up button when inputs are empty", () => {
		const signupButton = screen.getByRole("button", { name: /sign up/i });

		expect(signupButton).toBeDisabled();
	});

	it("first name input should change", async () => {
		const firstNameInput = screen.getByLabelText(
			/first name/i
		) as HTMLInputElement;

		const testValue = "test";
		await act(() => {
			fireEvent.change(firstNameInput, { target: { value: testValue } });
		});

		expect(firstNameInput.value).toBe("test");
	});

	it("button should not be disabled when inputs are filled w/o errors", async () => {
		const firstNameInput = screen.getByLabelText(
			/first name/i
		) as HTMLInputElement;
		const lastNameInput = screen.getByLabelText(
			/last name/i
		) as HTMLInputElement;
		const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
		const passwordInput = screen.getByLabelText(
			/^password$/i
		) as HTMLInputElement;
		const passwordConfirmInput = screen.getByLabelText(
			/confirm password/i
		) as HTMLInputElement;

		const testValue = "test";
		const testEmail = "test@email.com";
		await act(async () => {
			fireEvent.change(firstNameInput, { target: { value: testValue } });
			fireEvent.change(lastNameInput, { target: { value: testValue } });
			fireEvent.change(emailInput, { target: { value: testEmail } });
			fireEvent.change(passwordInput, { target: { value: testValue } });
			fireEvent.change(passwordConfirmInput, { target: { value: testValue } });
		});

		const signupButton = screen.getByRole("button", { name: /sign up/i });

		expect(signupButton).not.toBeDisabled();
	});
});
