export const calculateOdds = (values: number[], skill: number, check: number) => {
	const successCount = values.reduce((count, tokenValue) => {
		const isSuccess = skill - check + tokenValue >= 0;
		return isSuccess ? count + 1 : count;
	}, 0);
	return successCount;
};
