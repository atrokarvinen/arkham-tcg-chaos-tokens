<script lang="ts">
	import IntegerInput from '$lib/components/IntegerInput.svelte';
	import { tokens } from '$lib/tokens';
	import RulebookOrder from './RulebookOrder.svelte';
	import TokenIcon from './TokenIcon.svelte';
</script>

<div class="space-y-4 md:w-96">
	<p>
		Choose chaos tokens that are included in the scenario. Some tokens have variable difficulty
		which is configured on the next tab.
	</p>

	<RulebookOrder tokens={$tokens} />
	<ul class="flex flex-row flex-wrap">
		{#each $tokens as token}
			<li class="flex even:ml-4 space-x-1 mb-1 items-center">
				<TokenIcon
					name={token.name}
					number={token.name ? undefined : token.value}
					isFilled
					size="8"
				/>
				<IntegerInput bind:value={token.quantity} positiveOnly max={10} sm />
			</li>
		{/each}
	</ul>
</div>
