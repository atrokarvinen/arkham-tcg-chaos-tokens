<script lang="ts">
  import { page } from "$app/state";
  import { Navigation } from "@skeletonlabs/skeleton-svelte";
</script>

<Navigation.Bar>
  <Navigation.Tile selected={page.url.pathname === "/"} href="/"
    >Setup</Navigation.Tile
  >
  <Navigation.Tile selected={page.url.pathname === "/play"} href="/play">
    Play
  </Navigation.Tile>
  <Navigation.Tile selected={page.url.pathname === "/about"} href="/about">
    About
  </Navigation.Tile>
</Navigation.Bar>
