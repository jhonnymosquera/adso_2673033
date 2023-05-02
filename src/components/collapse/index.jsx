import { Collapse, Text, Avatar } from "@nextui-org/react";
import { Job } from "./Job";

export const CollapseContainer = ({ props }) => {
	const { days, instructors } = props;

	return (
		<Collapse.Group shadow>
			{days.map(({ day, date, instructorId, _id, state }) => {
				const instructor = instructors.find(({ _id }) => _id == instructorId);

				return (
					<Collapse
						key={_id}
						title={<Text h3>{`${instructor.name}`}</Text>}
						subtitle={`${day}: ${date}`}
						contentLeft={
							<Avatar size="lg" src={`/avatar/${instructor.avatar}`} color={state ? "success" : "error"} bordered squared />
						}
					>
						<h4>{instructor.class} </h4>
						<Text>{instructor.transversal}</Text>
						<Job jobs={instructor.jobs} />
					</Collapse>
				);
			})}
		</Collapse.Group>
	);
};
