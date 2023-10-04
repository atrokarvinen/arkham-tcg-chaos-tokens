<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	export let label: string | undefined = undefined;
	export let value: number;
	export let positiveOnly: boolean = false;
	export let sm: boolean = false;

	interface $$Props extends HTMLInputAttributes {
		label?: string;
		value: number;
		positiveOnly?: boolean;
		sm?: boolean;
	}

	const increment = () => value++;
	const decrement = () => value--;

	$: value = cutValue(value);

	const cutValue = (v: number | string) => {
		const value = Number(v);
		const cut = value < $$props.min ? $$props.min : value > $$props.max ? $$props.max : value;
		return cut;
	};

	$: name = label?.toLocaleLowerCase();
	$: width = sm ? 'w-8' : 'w-16';
</script>

{#if label}
	<label for={name}>{`${label}:`} </label>
{/if}
<div class="flex flex-row space-x-2 items-center">
	<input
		{...$$props}
		id={name}
		{name}
		class={`input ${width} h-8 text-center text-lg`}
		type="number"
		bind:value
		min={positiveOnly ? 0 : undefined}
	/>
	<div class="flex flex-row items-center space-x-2">
		<button
			class="btn-icon w-8 variant-ghost-primary"
			on:click={increment}
			disabled={$$props.max && $$props.max === value}><i class="fa-solid fa-plus" /></button
		>
		<button
			class="btn-icon w-8 variant-filled-secondary"
			on:click={decrement}
			disabled={positiveOnly && value <= 0}><i class="fa-solid fa-minus" /></button
		>
	</div>
</div>

<style>
	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>
