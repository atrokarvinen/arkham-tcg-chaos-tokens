import { writable } from 'svelte/store';
import { initialTokens } from '../routes/initialTokens';
import type { Token } from '../routes/types';

export const tokens = writable(initialTokens);

export const flattenTokens = ($tokens: Token[]) => {
	return $tokens
		.map((t) => {
			return Array.from(Array(t.quantity).keys()).map((_) => t);
		})
		.flat();
};

export const isNumericToken = (tokenName: string) => {
	return Number.isInteger(Number(tokenName));
};
