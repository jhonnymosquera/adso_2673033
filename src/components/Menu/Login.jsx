import { Navbar, Button, Link } from "@nextui-org/react";

export const Login = () => {
	return (
		<Navbar.Content>
			<Navbar.Link
				color="inherit"
				href="#"
			>
				Iniciar Sesion
			</Navbar.Link>

			<Navbar.Item>
				<Button
					auto
					flat
					as={Link}
					href="#"
				>
					Registrarse
				</Button>
			</Navbar.Item>
		</Navbar.Content>
	);
};
