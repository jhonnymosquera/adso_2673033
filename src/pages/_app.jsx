import { NextUIProvider } from "@nextui-org/react";
import { darkTheme } from "../components/themes";
import { Menu } from "@/components/Menu";

function MyApp({ Component, pageProps }) {
	return (
		<NextUIProvider theme={darkTheme}>
			<Menu />
			<Component {...pageProps} />
		</NextUIProvider>
	);
}

export default MyApp;
