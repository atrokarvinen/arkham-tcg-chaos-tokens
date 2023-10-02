<script lang="ts">
	import IntegerInput from '$lib/components/IntegerInput.svelte';
	import { tokens } from '$lib/tokens';
	import RulebookOrder from './RulebookOrder.svelte';
	import TokenIcon from './TokenIcon.svelte';
</script>

<p class="mb-4">
	Choose chaos tokens that are included in the scenario. Some tokens have variable difficulty which
	is configured on the next tab.
</p>
<!-- <img src="bag_order.JPG" alt="bag" /> -->

<div class="space-y-4">
	<RulebookOrder tokens={$tokens} />
	<ul class="space-y-2">
		{#each $tokens as token}
			<li class="flex space-x-2 items-center">
				<TokenIcon
					name={token.name}
					number={token.name ? undefined : token.value}
					isFilled
					size="8"
				/>
				<IntegerInput bind:value={token.quantity} positiveOnly max={10} />
			</li>
		{/each}
	</ul>
</div>
