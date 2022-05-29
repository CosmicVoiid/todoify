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
	email: string;
	password: string;
};

type Errors = {
	email?: string;
	password?: string;
};

const validate = (values: Values) => {
	const errors: Errors = {};

	if (!values.password) {
		errors.password = "Required";
	}

	if (!values.email) {
		errors.email = "Required";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = "Invalid email address";
	}

	return errors;
};

const Login: NextPage = () => {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
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
						Log In
					</Heading>
				</Center>
				<Center>
					<Box maxW="240px" mt="70px">
						<form onSubmit={formik.handleSubmit}>
							<FormControl
								isInvalid={
									formik.errors.email !== undefined && formik.touched.email
								}
							>
								<VStack spacing={0} align="start" minH="5.5rem">
									<FormLabel htmlFor="email" m={0}>
										Email address
									</FormLabel>
									<Input
										id="email"
										type="email"
										maxW="240px"
										borderRadius="5px"
										value={formik.values.email}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
									<FormErrorMessage fontSize="xs" pt="5px">
										{formik.errors.email}
									</FormErrorMessage>
								</VStack>
							</FormControl>

							<FormControl
								isInvalid={
									formik.errors.password !== undefined &&
									formik.touched.password
								}
							>
								<VStack spacing="3px" align="start" minH="5.5rem">
									<FormLabel htmlFor="password" m={0}>
										Password
									</FormLabel>
									<Input
										id="password"
										type="password"
										borderRadius="5px"
										value={formik.values.password}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
									<FormErrorMessage fontSize="xs">
										{formik.errors.password}
									</FormErrorMessage>
								</VStack>
							</FormControl>

							<Button
								variant="brand"
								w="100%"
								mt="8px"
								type="submit"
								disabled={
									!formik.values.email ||
									!formik.values.password ||
									formik.errors.email !== undefined ||
									formik.errors.password !== undefined
								}
							>
								Log In
							</Button>
						</form>

						<HStack w="100%" justify="space-between" align="center" mt="15px">
							<Divider
								backgroundColor="black"
								orientation="horizontal"
								h="1px"
							/>
							<Text fontSize="xs" noOfLines={1} flexShrink={0}>
								or log in with
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
					</Box>
				</Center>
			</Box>
		</main>
	);
};

export default Login;
