import type { NextPage } from "next";
import Link from "next/link";
import {
	Flex,
	Box,
	HStack,
	VStack,
	Button,
	ButtonGroup,
	Text,
	Heading,
	Center,
	Container,
	Image,
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	Divider,
} from "@chakra-ui/react";
import { useState } from "react";
import { useFormik, Formik, Field, Form, FormikHelpers } from "formik";
import LogoIcon from "../components/LogoIcon";

type Values = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	passwordConfirm: string;
};

type Errors = {
	firstName?: string;
	lastName?: string;
	name?: string;
	email?: string;
	password?: string;
	passwordConfirm?: string;
	passwordVal?: string;
};

const validate = (values: Values) => {
	const errors: Errors = {};

	if (!values.firstName) {
		errors.firstName = "Required";
	} else if (values.firstName.length < 3 || values.firstName.length > 12) {
		errors.firstName = "Must be 3 to 10 characters";
	}

	if (!values.lastName) {
		errors.lastName = "Required";
	} else if (values.lastName.length < 3 || values.lastName.length > 12) {
		errors.lastName = "Must be 3 to 10 characters";
	}

	if (!values.firstName && !values.lastName) {
		errors.name = "First and last names are required";
	} else if (!values.lastName) {
		errors.name = "Last name is required";
	} else if (!values.firstName) {
		errors.name = "First name is required";
	} else if (
		values.firstName.length < 3 ||
		values.firstName.length > 12 ||
		values.lastName.length < 3 ||
		values.lastName.length > 12
	) {
		errors.name = "Names must be 3 to 10 characters";
	}

	if (!values.email) {
		errors.email = "Required";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = "Invalid email address";
	}

	if (!values.password) {
		errors.password = "Required";
	} else if (values.password.length < 6) {
		errors.password = "Password must be atleast 6 characters";
	}

	if (!values.passwordConfirm) {
		errors.passwordConfirm = "Required";
	} else if (values.password !== values.passwordConfirm) {
		errors.passwordConfirm = "Passwords must match";
	}

	if (!values.password) {
		errors.passwordVal = "Password required";
	} else if (values.password.length < 6) {
		errors.passwordVal = "Password must be atleast 6 characters";
	} else if (!values.passwordConfirm) {
		errors.passwordVal = "Please confirm your password";
	} else if (values.password !== values.passwordConfirm) {
		errors.passwordVal = "Passwords must match";
	}

	return errors;
};

const Signup: NextPage = () => {
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			name: "",
			email: "",
			password: "",
			passwordConfirm: "",
			passwordVal: "",
		},
		validate,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<main>
			<Box w="100%">
				<Flex pl={10} pt={23} align="center">
					<LogoIcon />
				</Flex>
				<Center>
					<Heading fontSize="2rem" fontWeight="500" mt="60px">
						Sign Up
					</Heading>
				</Center>
				<Center>
					<Box maxW="250px" mt="70px">
						<form onSubmit={formik.handleSubmit}>
							<VStack spacing={1}>
								<FormControl
									isInvalid={
										formik.errors.name !== undefined &&
										(formik.touched.firstName || formik.touched.lastName)
									}
								>
									<HStack spacing={4}>
										<FormControl
											isInvalid={
												formik.errors.firstName !== undefined &&
												formik.touched.firstName
											}
										>
											<FormLabel htmlFor="firstName" fontSize="xs" m={1}>
												First Name
											</FormLabel>
											<Input
												id="firstName"
												type="text"
												size="sm"
												borderRadius="5px"
												value={formik.values.firstName}
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
											/>
										</FormControl>
										<FormControl
											isInvalid={
												formik.errors.lastName !== undefined &&
												formik.touched.lastName
											}
										>
											<FormLabel htmlFor="lastName" fontSize="xs" m={1}>
												Last Name
											</FormLabel>
											<Input
												id="lastName"
												type="text"
												size="sm"
												borderRadius="5px"
												value={formik.values.lastName}
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
											/>
										</FormControl>
									</HStack>
									<FormErrorMessage fontSize="xs" mt={1}>
										{formik.errors.name}
									</FormErrorMessage>
								</FormControl>

								<FormControl
									isInvalid={
										formik.errors.email !== undefined && formik.touched.email
									}
								>
									<FormLabel htmlFor="email" fontSize="xs" m={1}>
										Email
									</FormLabel>
									<Input
										id="email"
										type="email"
										size="sm"
										borderRadius="5px"
										value={formik.values.email}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
									<FormErrorMessage fontSize="xs" mt={1}>
										{formik.errors.email}
									</FormErrorMessage>
								</FormControl>

								<FormControl
									isInvalid={
										formik.errors.password !== undefined ||
										(formik.errors.passwordConfirm !== undefined &&
											formik.touched.password &&
											formik.touched.passwordConfirm)
									}
								>
									<HStack spacing={4}>
										<FormControl
											isInvalid={
												formik.errors.password !== undefined &&
												formik.touched.password
											}
										>
											<FormLabel htmlFor="password" fontSize="xs" m={1}>
												Password
											</FormLabel>
											<Input
												id="password"
												type="password"
												size="sm"
												borderRadius="5px"
												value={formik.values.password}
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
											/>
										</FormControl>
										<FormControl
											isInvalid={
												formik.errors.passwordConfirm !== undefined &&
												formik.touched.passwordConfirm
											}
										>
											<FormLabel htmlFor="passwordConfirm" fontSize="xs" m={1}>
												Confirm Password
											</FormLabel>
											<Input
												id="passwordConfirm"
												type="password"
												size="sm"
												borderRadius="5px"
												value={formik.values.passwordConfirm}
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
											/>
										</FormControl>
									</HStack>
									<FormErrorMessage fontSize="xs" mt={1}>
										{formik.errors.passwordVal}
									</FormErrorMessage>
								</FormControl>
							</VStack>
							<Button
								mt="20px"
								type="submit"
								variant="brand"
								w="100%"
								disabled={
									!formik.values.firstName ||
									!formik.values.lastName ||
									!formik.values.email ||
									!formik.values.password ||
									!formik.values.passwordConfirm ||
									formik.errors.firstName !== undefined ||
									formik.errors.lastName !== undefined ||
									formik.errors.email !== undefined ||
									formik.errors.password !== undefined ||
									formik.errors.passwordConfirm !== undefined
								}
							>
								Sign Up
							</Button>
							<HStack w="100%" justify="space-between" align="center" mt="15px">
								<Divider
									backgroundColor="black"
									orientation="horizontal"
									h="1px"
								/>
								<Text fontSize="xs" noOfLines={1} flexShrink={0}>
									or sign up with
								</Text>
								<Divider
									backgroundColor="black"
									orientation="horizontal"
									h="1px"
								/>
							</HStack>
							<Button
								w="100%"
								backgroundColor="transparent"
								border="3px solid"
								borderColor="brand.500"
								color="brand.500"
								mt="15px"
							>
								Google
							</Button>
						</form>
					</Box>
				</Center>
			</Box>
		</main>
	);
};

export default Signup;
