<script lang="ts">
	import type { TokenName } from './types';

	export let number: number | undefined = undefined;
	export let name: TokenName | undefined;
	export let isFilled: boolean = false;
	export let color: 'primary' | 'success' | 'error' = 'primary';
	export let size: '8' | '16';

	$: widthClass = size === '8' ? 'w-8' : 'w-16';
	$: heightClass = size === '8' ? 'h-8' : 'h-16';
	$: fillColor =
		color === 'primary'
			? 'bg-primary-500'
			: color === 'success'
			? 'bg-success-500'
			: color === 'error'
			? 'bg-error-500'
			: '';
	$: fillClass = isFilled ? fillColor : '';

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
	class={`${widthClass} ${heightClass} shrink-0 rounded-full ${fillClass} flex items-center justify-center`}
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
