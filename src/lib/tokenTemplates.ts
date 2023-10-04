import type { Token, TokenName } from '../routes/types';

export type Template = Record<TokenName, number>;

export const base: Record<TokenName, number> = {
	'+1': 0,
	'0': 0,
	'-1': 0,
	'-2': 0,
	'-3': 0,
	'-4': 0,
	'-5': 0,
	'-6': 0,
	'-7': 0,
	'-8': 0,
	'Elder sign': 1,
	'Auto-fail': 1,
	'Elder thing': 0,
	Cultist: 1,
	Skull: 2,
	Tablet: 1
};
export const easy: Record<TokenName, number> = {
	...base,
	'+1': 2,
	'0': 3,
	'-1': 3,
	'-2': 2
};
export const standard: Record<TokenName, number> = {
	...base,
	'+1': 1,
	'0': 2,
	'-1': 3,
	'-2': 2,
	'-3': 1,
	'-4': 1
};
export const hard: Record<TokenName, number> = {
	...base,
	'0': 3,
	'-1': 2,
	'-2': 2,
	'-3': 2,
	'-4': 1,
	'-5': 1
};
export const expert: Record<TokenName, number> = {
	...base,
	'0': 1,
	'-1': 2,
	'-2': 2,
	'-3': 2,
	'-4': 2,
	'-5': 1,
	'-6': 1,
	'-8': 1
};

export const getTemplate = (templateName: string | undefined) => {
	switch (templateName) {
		case 'Easy':
			return easy;
		case 'Standard':
			return standard;
		case 'Hard':
			return hard;
		case 'Expert':
			return expert;
		default:
			return undefined;
	}
};

export const templateMatches = ($tokens: Token[], template: Record<TokenName, number>) => {
	const allQuantitiesMatch = $tokens.every((t) => {
		const quantity = template[t.name];
		return quantity === t.quantity;
	});
	return allQuantitiesMatch;
};
