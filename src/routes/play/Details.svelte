<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { calculateResolutionTokens, filterSuccessTokens } from '../../lib/odds-calculation';
	import TokenIcon from '../TokenIcon.svelte';
	import type { ChartDataPoint, Token } from '../types';
	import BarChart from './BarChart.svelte';

	export let allTokens: Token[];
	export let skillValue: number;
	export let skillCheck: number;

	$: data = oddsBySkillValue(allTokens, skillCheck);

	const oddsBySkillValue = (allTokens: Token[], skillCheck: number) => {
		const skillRange = Array.from(Array(11).keys());
		const oddsAsSkillFunc: ChartDataPoint[] = skillRange.map((skill) => {
			const successCount = filterSuccessTokens(allTokens, skill, skillCheck).length;
			const odds = (successCount / allTokens.length) * 100;
			return { skill: skill, successChance: odds };
		});
		return oddsAsSkillFunc;
	};

	$: resolution = calculateResolutionTokens(allTokens, skillValue, skillCheck);
</script>

<Accordion>
	<AccordionItem open>
		<svelte:fragment slot="lead"><i class="fa-solid fa-chart-bar fa-rotate-270" /></svelte:fragment>
		<svelte:fragment slot="summary">Details</svelte:fragment>
		<svelte:fragment slot="content">
			<div class="grid grid-cols-5 w-fit m-auto gap-1">
				{#each resolution as resolutionToken, i (`${resolutionToken.name}-${i}}`)}
					<TokenIcon
						name={resolutionToken.name}
						color={resolutionToken.success ? 'success' : 'error'}
						isFilled
					/>
				{/each}
			</div>
			<BarChart points={data} />
		</svelte:fragment>
	</AccordionItem>
</Accordion>
