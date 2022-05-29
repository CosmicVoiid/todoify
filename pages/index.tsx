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
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<main>
			<Box w="100%">
				<Flex pt={23} px={10} align="center" justify="space-between">
					<LogoIcon />
					<HStack>
						<ButtonGroup size="xs">
							<Link href="/login">
								<Button
									variant="ghost"
									fontWeight="500"
									borderRadius={15}
									height={23}
								>
									Log In
								</Button>
							</Link>
							<Link href="/signup">
								<Button
									variant="outline"
									fontWeight="500"
									borderRadius={15}
									height={23}
									boxShadow="0px 0px 5px 2px rgba(0, 0, 0, 0.15)"
								>
									Sign Up
								</Button>
							</Link>
						</ButtonGroup>
					</HStack>
				</Flex>
				<Box>
					<VStack mt="8.25rem" spacing={-1}>
						<Heading fontSize="2rem" fontWeight="600">
							Todoify
						</Heading>
						<Heading fontSize="2rem" fontWeight="600">
							your life
						</Heading>
					</VStack>
					<Flex justify="center">
						<Link href="/signup">
							<Button
								mt="1rem"
								borderRadius="15px"
								variant="brand"
								filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
							>
								Get Started
							</Button>
						</Link>
					</Flex>
					<Flex justify="center" ml="6rem" mt="1rem" pr="1rem">
						<Image src="./hero.png" alt="Hero" />
					</Flex>
				</Box>
			</Box>
		</main>
	);
};

export default Home;
