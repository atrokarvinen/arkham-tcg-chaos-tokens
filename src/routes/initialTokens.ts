import type { Token } from './types';

export const initialTokens: Token[] = [
	{ id: 1, rulebookSortOrder: 1, quantity: 1, value: 1 },
	{ id: 2, rulebookSortOrder: 2, quantity: 2, value: 0 },
	{ id: 3, rulebookSortOrder: 3, quantity: 3, value: -1 },
	{ id: 4, rulebookSortOrder: 4, quantity: 2, value: -2 },
	{ id: 5, rulebookSortOrder: 5, quantity: 1, value: -3 },
	{ id: 6, rulebookSortOrder: 6, quantity: 1, value: -4 },
	{ id: 7, rulebookSortOrder: 6, quantity: 0, value: -5 },
	{ id: 8, rulebookSortOrder: 6, quantity: 0, value: -6 },
	{ id: 9, rulebookSortOrder: 6, quantity: 0, value: -7 },
	{ id: 10, rulebookSortOrder: 6, quantity: 0, value: -8 },

	{
		id: 11,
		rulebookSortOrder: 15,
		quantity: 1,
		value: 0,
		name: 'Elder sign',
		isVariableValue: true
	},
	{
		id: 12,
		rulebookSortOrder: 14,
		quantity: 1,
		value: Number.NEGATIVE_INFINITY,
		name: 'Auto-fail'
	},
	{
		id: 13,
		rulebookSortOrder: 13,
		quantity: 1,
		value: 0,
		name: 'Elder thing',
		isVariableValue: true
	},
	{
		id: 14,
		rulebookSortOrder: 12,
		quantity: 1,
		value: 0,
		name: 'Cultist',
		isVariableValue: true
	},
	{ id: 15, rulebookSortOrder: 11, quantity: 2, value: 0, name: 'Skull', isVariableValue: true },
	{ id: 16, rulebookSortOrder: 13, quantity: 1, value: 0, name: 'Tablet', isVariableValue: true }
];
