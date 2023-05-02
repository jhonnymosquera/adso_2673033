import { Navbar, Text } from "@nextui-org/react";
import { Login } from "./Login";

export const Menu = () => {
	return (
		<>
			<Navbar
				isCompact
				isBordered
				variant="sticky"
			>
				<Navbar.Brand>
					<Text
						b
						color="inherit"
						hideIn="xs"
					>
						Analisis y Desarrollo de Software - 2673033
					</Text>
				</Navbar.Brand>

				{/* <NavContent /> */}

				<Login />
			</Navbar>
		</>
	);
};
