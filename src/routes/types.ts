export type Token = {
	id: number;
	value: number;
	isVariableValue?: boolean;
	quantity: number;
	name?: TokenName;
	rulebookSortOrder: number;
};

export type TokenName = 'Elder sign' | 'Auto-fail' | 'Elder thing' | 'Cultist' | 'Skull' | 'Tablet';

export type ChartDataPoint = { skill: number; successChance: number };
