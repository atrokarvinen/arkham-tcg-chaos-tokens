<script lang="ts">
	import IntegerInput from '$lib/components/IntegerInput.svelte';
	import { tokens } from '$lib/tokens';
	import TokenIcon from '../TokenIcon.svelte';
	import { calculateOdds } from '../test/utils';

	let skillValue = 0;
	let skillCheck = 0;
	$: console.log('skill value:', skillValue);

	$: successCount = calculateOdds(tokenValues, skillValue, skillCheck);
	$: tokenValues = $tokens
		.map((t) => {
			return Array.from(Array(t.quantity).keys()).map((_) => t.value);
		})
		.flat();
	$: odds = successCount / tokenValues.length;

	$: variableTokens = $tokens.filter((t) => t.isVariableValue && t.quantity > 0);
</script>

<div class="mb-4">
	<IntegerInput label="Investigator skill" bind:value={skillValue} />
	<IntegerInput label="Skill check" bind:value={skillCheck} positiveOnly />
</div>

<ul class="space-y-2">
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

<div>
	<span>Success:</span>
	<span>{successCount}</span>
	<span>/</span>
	<span>{tokenValues.length}</span>
	<span>=</span>
	<span>{(odds * 100).toFixed(2)}</span>
	<span>%</span>
</div>
