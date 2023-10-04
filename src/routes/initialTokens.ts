import type { Token } from './types';

export const initialTokens: Token[] = [
	{ id: 1, order: 1, quantity: 1, value: 1, isVariable: false, name: '+1' },
	{ id: 2, order: 2, quantity: 2, value: 0, isVariable: false, name: '0' },
	{ id: 3, order: 3, quantity: 3, value: -1, isVariable: false, name: '-1' },
	{ id: 4, order: 4, quantity: 2, value: -2, isVariable: false, name: '-2' },
	{ id: 5, order: 5, quantity: 1, value: -3, isVariable: false, name: '-3' },
	{ id: 6, order: 6, quantity: 1, value: -4, isVariable: false, name: '-4' },
	{ id: 7, order: 6, quantity: 0, value: -5, isVariable: false, name: '-5' },
	{ id: 8, order: 6, quantity: 0, value: -6, isVariable: false, name: '-6' },
	{ id: 9, order: 6, quantity: 0, value: -7, isVariable: false, name: '-7' },
	{ id: 10, order: 6, quantity: 0, value: -8, isVariable: false, name: '-8' },

	{ id: 11, order: 11, quantity: 2, value: 0, name: 'Skull', isVariable: true },
	{ id: 12, order: 12, quantity: 1, value: 0, name: 'Cultist', isVariable: true },
	{ id: 13, order: 13, quantity: 1, value: 0, name: 'Tablet', isVariable: true },
	{ id: 14, order: 14, quantity: 0, value: 0, name: 'Elder thing', isVariable: true },
	{ id: 16, order: 16, quantity: 1, value: 0, name: 'Elder sign', isVariable: true },
	{
		id: 15,
		order: 15,
		quantity: 1,
		value: Number.NEGATIVE_INFINITY,
		name: 'Auto-fail',
		isVariable: false
	}
];
