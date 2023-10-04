<script lang="ts">
	import { browser } from '$app/environment';
	import { tokens } from '$lib/tokens';
	import { AppShell, ProgressRadial } from '@skeletonlabs/skeleton';
	import { onDestroy } from 'svelte';
	import '../app.postcss';
	import Header from './Header.svelte';
	import { initialTokens } from './initialTokens';

	export let data;

	const unsubscribe = tokens.subscribe((value) => {
		if (!browser) return;
		localStorage.setItem('chaos-tokens', JSON.stringify(value));
	});

	$tokens = data.chaosTokens ?? initialTokens;
	$: loading = !data.loadingComplete;

	onDestroy(unsubscribe);
</script>

<AppShell slotPageContent="p-4 items-center justify-center flex flex-col">
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	{#if loading}
		<ProgressRadial />
	{:else}
		<slot />
	{/if}
</AppShell>
