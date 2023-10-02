<script lang="ts">
	import type { TokenName } from './types';

	export let number: number | undefined = undefined;
	export let name: TokenName | undefined;
	export let isFilled: boolean = false;
	export let size: '8' | '16';

	const getImageSrc = (name: TokenName) => {
		switch (name) {
			case 'Auto-fail':
				return 'auto-fail.svg';
			case 'Cultist':
				return 'cultist.svg';
			case 'Elder sign':
				return 'elder-sign.png';
			case 'Elder thing':
				return 'elder-thing.svg';
			case 'Skull':
				return 'skull.png';
			case 'Tablet':
				return 'tablet.svg';
			default:
				break;
		}
	};

	const hasExtraPadding = name === 'Elder sign' || name === 'Skull';
	const extraPadding = size === '16' ? 'p-2' : 'p-1';
	const numberStr = number && number > 0 ? '+' + number.toString() : number?.toString();
</script>

<div
	class={`w${size} h-${size} shrink-0 rounded-full ${
		isFilled ? 'bg-primary-500' : ''
	} flex items-center justify-center`}
>
	{#if number !== undefined}
		<span class="font-bold text-lg text-black">{numberStr}</span>
	{:else if name}
		<img
			src={getImageSrc(name)}
			alt={name}
			class={`w-full h-full object-contain ${hasExtraPadding ? extraPadding : ''}`}
		/>
	{/if}
</div>

<style>
	.w8 {
		width: 2rem;
	}

	.w16 {
		width: 4rem;
	}
</style>
