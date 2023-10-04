<script lang="ts">
	import IntegerInput from '$lib/components/IntegerInput.svelte';
	import { tokens } from '$lib/tokens';
	import RulebookOrder from './RulebookOrder.svelte';
	import TokenIcon from './TokenIcon.svelte';
	import TokenTemplateSelect from './TokenTemplateSelect.svelte';
</script>

<div class="space-y-4 md:w-96">
	<p>
		Choose chaos tokens that are included in the scenario. You can select initial chaos tokens from
		preset templates.
	</p>

	<TokenTemplateSelect />
	<RulebookOrder tokens={$tokens} />
	<ul class="flex flex-row flex-wrap">
		{#each $tokens as token}
			<li class="flex even:ml-4 space-x-1 mb-1 items-center">
				<TokenIcon name={token.name} isFilled />
				<IntegerInput bind:value={token.quantity} positiveOnly max={10} sm />
			</li>
		{/each}
	</ul>
</div>
