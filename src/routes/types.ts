export type Token = {
	id: number;
	value: number;
	isVariable: boolean;
	quantity: number;
	name: TokenName;
	order: number;
};

export type TokenName =
	| '+1'
	| '0'
	| '-1'
	| '-2'
	| '-3'
	| '-4'
	| '-5'
	| '-6'
	| '-7'
	| '-8'
	| 'Elder sign'
	| 'Auto-fail'
	| 'Elder thing'
	| 'Cultist'
	| 'Skull'
	| 'Tablet';

export type ChartDataPoint = { skill: number; successChance: number };
