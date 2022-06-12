import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";

const colors = {
	brand: {
		900: "hsl(23, 100%, 25%)",
		800: "hsl(25, 100%, 30%)",
		700: "hsl(28, 100%, 45%)",
		600: "hsl(30, 100%, 55%)",
		500: "hsl(37, 100%, 56%)",
		400: "hsl(42, 100%, 65%)",
		300: "hsl(46, 100%, 80%)",
		200: "hsl(53, 100%, 90%)",
		100: "hsl(56, 100%, 97%)",
	},
};

const theme = extendTheme({
	colors,
	fonts: {
		heading: "Livvic, system-ui, sans-serif",
		body: "Livvic, system-ui, sans-serif",
	},
	components: {
		Button: {
			baseStyle: {
				borderRadius: "15px",
			},
			variants: {
				brand: {
					bg: "brand.500",
					color: "white",
				},
			},
		},
	},
});

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<SessionProvider session={session} refetchInterval={5 * 60}>
			<ChakraProvider theme={theme}>
				<Head>
					<title>Todoify</title>
					<meta name="Todoify App" content="Create todo lists" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Component {...pageProps} />
			</ChakraProvider>
		</SessionProvider>
	);
}

export default MyApp;
