<script lang="ts">
	import IntegerInput from '$lib/components/IntegerInput.svelte';
	import { tokens } from '$lib/tokens';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import TokenIcon from '../TokenIcon.svelte';
	import { calculateSuccessCount } from '../test/utils';
	import type { ChartDataPoint } from '../types';
	import BarChart from './BarChart.svelte';

	let skillValue = 0;
	let skillCheck = 0;
	$: console.log('skill value:', skillValue);

	$: successCount = calculateSuccessCount(tokenValues, skillValue, skillCheck);
	$: tokenValues = $tokens
		.map((t) => {
			return Array.from(Array(t.quantity).keys()).map((_) => t.value);
		})
		.flat();
	$: odds = successCount / tokenValues.length;

	$: variableTokens = $tokens.filter((t) => t.isVariableValue && t.quantity > 0);

	$: data = oddsBySkillValue(tokenValues, skillCheck);

	const oddsBySkillValue = (tokenValues: number[], skillCheck: number) => {
		const skillRange = Array.from(Array(11).keys());
		const oddsAsSkillFunc: ChartDataPoint[] = skillRange.map((skill) => {
			const successCount = calculateSuccessCount(tokenValues, skill, skillCheck);
			const odds = (successCount / tokenValues.length) * 100;
			return { skill: skill, successChance: odds };
		});
		return oddsAsSkillFunc;
	};
</script>

<div class="space-y-4 items-center flex flex-col">
	<div class="space-y-4 items-end flex flex-col">
		<div>
			<IntegerInput label="Investigator skill" bind:value={skillValue} sm={false}/>
			<IntegerInput label="Skill check" bind:value={skillCheck} positiveOnly />
		</div>

		<ul class="space-y-1">
			<span>Variable difficulties:</span>
			{#each variableTokens as token}
				<li class="flex space-x-2 items-center">
					<TokenIcon
						name={token.name}
						number={token.name ? undefined : token.value}
						isFilled
						size="8"
					/>
					<IntegerInput bind:value={token.value} />
				</li>
			{/each}
		</ul>
	</div>

	<div>
		<span>Success:</span>
		<span>{successCount}</span>
		<span>/</span>
		<span>{tokenValues.length}</span>
		<span>=</span>
		<strong>{(odds * 100).toFixed(2)}</strong>
		<span>%</span>
	</div>

	<div class="md:w-96">
		<Accordion>
			<AccordionItem>
				<svelte:fragment slot="lead"><i class="fas fa-chart-bar fa-rotate-270" /></svelte:fragment>
				<svelte:fragment slot="summary">Details</svelte:fragment>
				<svelte:fragment slot="content">
					<BarChart points={data} />
				</svelte:fragment>
			</AccordionItem>
		</Accordion>
	</div>
</div>
