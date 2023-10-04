<script lang="ts">
	import IntegerInput from '$lib/components/IntegerInput.svelte';
	import { flattenTokens, tokens } from '$lib/tokens';
	import TokenIcon from '../TokenIcon.svelte';
	import { filterSuccessTokens } from '../test/utils';
	import Details from './Details.svelte';

	let skillValue = 0;
	let skillCheck = 0;
	$: console.log('skill value:', skillValue);

	$: allTokens = flattenTokens($tokens);
	$: successTokens = filterSuccessTokens(allTokens, skillValue, skillCheck);
	$: successCount = successTokens.length;
	$: odds = successCount / allTokens.length;

	$: variableTokens = $tokens.filter((t) => t.isVariableValue && t.quantity > 0);
</script>

<div class="space-y-4 items-center flex flex-col md:w-96">
	<div class="space-y-4 items-end flex flex-col">
		<div>
			<IntegerInput label="Investigator skill" bind:value={skillValue} />
			<IntegerInput label="Skill check" bind:value={skillCheck} positiveOnly />
		</div>

		<ul class="space-y-1">
			<span>Variable difficulties:</span>
			{#each variableTokens as token}
				<li class="flex flex-row space-x-2 items-center">
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
		<span>{allTokens.length}</span>
		<span>=</span>
		<strong>{(odds * 100).toFixed(2)}</strong>
		<span>%</span>
	</div>

	<Details {allTokens} {skillValue} {skillCheck} />
</div>
