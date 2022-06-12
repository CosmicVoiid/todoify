import type { NextApiRequest, NextApiResponse } from "next";
import { body, check, validationResult } from "express-validator";
import prisma from "../../lib/prisma";
import bcrypt from "bcryptjs";
import initMiddleware from "../../lib/init-middleware";
import validateMiddleware from "../../lib/validate-middleware";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "GET") {
		return res
			.status(200)
			.json({ message: "Register a user with a post request" });
	} else if (req.method === "POST") {
		await validateBody(req, res);

		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({
				message: "There are errors with your request",
				errors: errors.array(),
			});
		} else {
			handlePost(req, res);
		}
	} else {
		res.status(405).json({
			error: `The HTTP ${req.method} method is not supported at this route.`,
		});
	}
}

const validateBody = initMiddleware(
	validateMiddleware(
		[
			body("first_name", "First name must be between 3 and 12 characters")
				.trim()
				.isLength({ min: 3, max: 12 })
				.escape(),
			body("last_name", "Last name must be between 3 and 12 characters")
				.trim()
				.isLength({ min: 3, max: 12 })
				.escape(),
			body("email", "Email must not be empty")
				.trim()
				.isLength({ min: 1 })
				.escape(),
			body("email", "Must enter a valid email address").isEmail(),
			body("password", "Password must be atleast 6 characters")
				.trim()
				.isLength({ min: 6 })
				.escape(),
			body("password_confirm", "Passwords must match")
				.trim()
				.isLength({ min: 6 })
				.escape(),
			body("password_confirm", "Passwords must match").custom(
				(value, { req }) => value === req.body.password
			),
		],
		validationResult
	)
);

const handlePost = async (req: NextApiRequest, res: NextApiResponse) => {
	const user = await prisma.user.findUnique({
		where: { email: req.body.email },
	});

	if (user !== null) {
		return res
			.status(400)
			.json({ message: "A user with this email already exists" });
	} else {
		bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
			if (err)
				return res.status(400).json({ message: "Error hashing password" });
			else {
				const newUser = await prisma.user.create({
					data: {
						email: req.body.email,
						firstName: req.body.first_name,
						lastName: req.body.last_name,
						password: hashedPassword,
					},
				});

				if (newUser !== null) {
					return res
						.status(200)
						.json({ message: "User successfully stored in database" });
				} else return res.status(400).json({ message: "Error with database" });
			}
		});
	}
};

export const config = {
	api: {
		externalResolver: true,
	},
};
