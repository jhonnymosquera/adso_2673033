import { Collapse, Grid, Text } from '@nextui-org/react';
import React from 'react';
import { Task } from './Task';

export const Job = ({ jobs }) => {
	return (
		<Grid.Container
			gap={2}
			css={{
				backgroundColor: '$gray100',
				marginTop: '$10',
				borderRadius: '$l',
				justifyContent: 'center',
			}}
		>
			<Grid>
				<Collapse.Group shadow>
					{jobs.map(({ title, tasks, date, _id }) => (
						<Collapse title={date} subtitle={title} key={_id}>
							{tasks.map(({ text, _id }) => (
								<Task text={text} key={_id}></Task>
							))}
						</Collapse>
					))}
				</Collapse.Group>
			</Grid>
		</Grid.Container>
	);
};
