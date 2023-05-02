import { getAllData } from "@/api";
import { CollapseContainer } from "@/components/collapse";
import { Container, Grid } from "@nextui-org/react";
import Head from "next/head";

export default function Home({ props }) {
	return (
		<>
			<Head>
				<title>ADSO</title>
			</Head>

			<Container lg>
				<Grid.Container gap={1} css={{ justifyContent: "center" }}>
					<Grid>
						<h1 style={{ textAlign: "center" }}>Informacion</h1>

						<CollapseContainer props={props} />
					</Grid>
				</Grid.Container>
			</Container>
		</>
	);
}

export const getStaticProps = async (ctx) => {
	return {
		props: {
			props: await getAllData(),
		},
	};
};
