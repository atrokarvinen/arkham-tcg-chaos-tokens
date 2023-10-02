<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import '../app.postcss';
	import Header from './Header.svelte';
</script>

<AppShell slotPageContent="p-4 items-center justify-center flex flex-col">
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<slot />
</AppShell>
