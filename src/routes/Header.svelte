<script lang="ts">
	import { page } from '$app/stores';
	import { AppBar, TabAnchor, TabGroup } from '@skeletonlabs/skeleton';
</script>

<AppBar regionRowMain="place-self-center">
	<svelte:fragment slot="lead" />
	<svelte:fragment>
		<TabGroup>
			<TabAnchor href="/" selected={$page.url.pathname === '/'}>Setup</TabAnchor>
			<TabAnchor href="/play" selected={$page.url.pathname.includes('/play')}>Play</TabAnchor>
			<TabAnchor href="/about" selected={$page.url.pathname.includes('/about')}>About</TabAnchor>
		</TabGroup>
	</svelte:fragment>
	<svelte:fragment slot="trail" />
</AppBar>

<style>
	.app {
		max-width: 500px;
	}
</style>
