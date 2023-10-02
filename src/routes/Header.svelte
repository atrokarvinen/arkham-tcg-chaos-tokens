<script lang="ts">
	import { page } from '$app/stores';
	import { AppBar, TabAnchor, TabGroup } from '@skeletonlabs/skeleton';
</script>

<!-- gridColumns="grid-cols-3"
slotDefault="place-self-center"
slotTrail="place-content-end"
regionRowMain="place-self-center max-w-screen-xl" -->
<AppBar regionRowMain="place-self-center">
	<svelte:fragment slot="lead" />
	<svelte:fragment>
		<TabGroup>
			<TabAnchor href="/" selected={$page.url.pathname === '/'}>Bag</TabAnchor>
			<TabAnchor href="/play" selected={$page.url.pathname.includes('/play')}>Play</TabAnchor>
			<TabAnchor href="/test" selected={$page.url.pathname.includes('/test')}>Test</TabAnchor>
		</TabGroup>
	</svelte:fragment>
	<svelte:fragment slot="trail" />
</AppBar>
