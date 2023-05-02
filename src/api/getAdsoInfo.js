export const getAdsoInfo = async (api) => {
	try {
		const { data } = await api.get("/adso");

		const { instructors, days } = data;

		return { instructors, days };
	} catch (error) {
		return null;
	}
};
