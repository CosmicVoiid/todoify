import { Icon, HStack, Text } from "@chakra-ui/react";

const LogoIcon = () => {
	return (
		<HStack spacing={1} minH="2rem">
			<Icon
				width="18px"
				height="18px"
				viewBox="0 0 18px 18px"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				stroke="brand.500"
			>
				<g id="logo">
					<rect id="checkbox" x="0.5" y="0.5" width="17" height="17" rx="1.5" />
					<path
						id="checkmark"
						d="M6.46285 13.7399L3.83272 10.8993C3.40268 10.4349 3.50687 9.69279 4.04818 9.36472L4.14634 9.30523C4.54762 9.06204 5.06402 9.13055 5.388 9.46996L6.45995 10.5929C6.84757 10.999 7.49345 11.0065 7.89041 10.6096L13.7425 4.75755C14.1521 4.34787 14.8231 4.37098 15.2036 4.80787L15.385 5.01611C15.731 5.41336 15.7095 6.0109 15.3358 6.38223L7.90148 13.7698C7.49992 14.1688 6.84748 14.1553 6.46285 13.7399Z"
						fill="hsl(37, 100%, 56%)"
					/>
				</g>
			</Icon>
			<Text fontSize="xs" fontWeight="500">
				Todoify
			</Text>
		</HStack>
	);
};

export default LogoIcon;
