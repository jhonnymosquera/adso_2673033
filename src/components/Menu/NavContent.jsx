import { Navbar } from "@nextui-org/react";

export const NavContent = () => {
	return (
		<Navbar.Content
			hideIn="xs"
			variant="underline"
		>
			<Navbar.Link href="#">Features</Navbar.Link>
			<Navbar.Link
				isActive
				href="#"
			>
				Customers
			</Navbar.Link>
			<Navbar.Link href="#">Pricing</Navbar.Link>
			<Navbar.Link href="#">Company</Navbar.Link>
		</Navbar.Content>
	);
};
