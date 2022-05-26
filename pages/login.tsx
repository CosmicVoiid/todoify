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
} from "@chakra-ui/react";
import LogoIcon from "../components/LogoIcon";

const Login: NextPage = () => {
	return (
		<main>
			<Box w="100%">
				<Flex pl={10} pt={23} align="center">
					<LogoIcon />
				</Flex>
			</Box>
		</main>
	);
};

export default Login;
