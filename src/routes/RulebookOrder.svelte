<script lang="ts">
	import TokenIcon from './TokenIcon.svelte';
	import type { Token } from './types';

	export let tokens: Token[];

	$: tokensInBag = tokens
		.sort(sortByRulebook)
		.map((token) => {
			const { quantity, value, name } = token;
			const arr = Array.from(Array(quantity).keys());
			return arr.map((_, index) => ({ name, key: `${token.id}-${index}` }));
		})
		.flat();

	const sortByRulebook = (a: Token, b: Token) => {
		return a.order < b.order ? -1 : 1;
	};
</script>

<div class="h-32 overflow-y-auto">
	<ul class="flex flex-wrap items-center">
		{#each tokensInBag as token, i (token.key)}
			<TokenIcon name={token.name} dark />
			{#if i < tokensInBag.length - 1}
				<span class="mr-1 text-lg font-bold">,</span>
			{/if}
		{/each}
	</ul>
</div>
