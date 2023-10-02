<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	export let label: string | undefined = undefined;
	export let value: number;
	export let positiveOnly: boolean = false;

	interface $$Props extends HTMLInputAttributes {
		label?: string;
		value: number;
		positiveOnly?: boolean;
	}

	const increment = () => value++;
	const decrement = () => value--;

	$: console.log('[input] value:', value);
</script>

<div class="flex space-x-2">
	{#if label}
		<label>
			<span>{`${label}:`}</span>
			<input
				class="input"
				type="number"
				{...$$props}
				bind:value
				min={positiveOnly ? 0 : undefined}
			/>
		</label>
	{:else}
		<input class="input" type="number" {...$$props} bind:value min={positiveOnly ? 0 : undefined} />
	{/if}
	<div class="flex flex-row items-center space-x-2">
		<button class="btn-icon variant-ghost-primary" on:click={increment}
			><i class="fa-solid fa-plus" /></button
		>
		<button
			class="btn-icon variant-ghost-secondary"
			on:click={decrement}
			disabled={positiveOnly && value <= 0}><i class="fa-solid fa-minus" /></button
		>
	</div>
</div>
