import type { TokenName } from '../routes/types';
import { isNumericToken } from './tokens';

export const isCheckSuccessfull = (skill: number, check: number, token: number) => {
	return skill - check + token >= 0;
};

export const filterSuccessTokens = (tokens: CalculationToken[], skill: number, check: number) => {
	const successTokens = tokens
		.filter((t) => isCheckSuccessfull(skill, check, t.value))
		.map<ResolutionToken>((t) => ({ name: t.name, success: true }));
	return successTokens;
};

export const filterFailureTokens = (tokens: CalculationToken[], skill: number, check: number) => {
	const failureTokens = tokens
		.filter((t) => !isCheckSuccessfull(skill, check, t.value))
		.map<ResolutionToken>((t) => ({ name: t.name, success: false }));
	return failureTokens;
};

export const calculateResolutionTokens = (
	tokens: CalculationToken[],
	skill: number,
	check: number
) => {
	const tokenss = tokens.sort(orderByDifficulty);
	const successTokens = filterSuccessTokens(tokenss, skill, check);
	const failureTokens = filterFailureTokens(tokenss, skill, check);
	const resolutionTokens = [...successTokens, ...failureTokens];
	return resolutionTokens;
};

const orderByDifficulty = (a: CalculationToken, b: CalculationToken) => {
	if (a.value === b.value) return isNumericToken(a.name) ? -1 : 1;
	return a.value < b.value ? 1 : -1;
};

export type CalculationToken = {
	name: TokenName;
	value: number;
};

export type ResolutionToken = {
	name: TokenName;
	success: boolean;
};
