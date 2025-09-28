<script lang="ts">
  import { browser } from "$app/environment";
  import { tokens } from "$lib/tokens";
  import { ProgressRing } from "@skeletonlabs/skeleton-svelte";
  import { onDestroy } from "svelte";
  import "../app.css";
  import Header from "./Header.svelte";
  import { initialTokens } from "./initialTokens";

  export let data;

  const unsubscribe = tokens.subscribe((value) => {
    if (!browser) return;
    localStorage.setItem("chaos-tokens", JSON.stringify(value));
  });

  $tokens = data.chaosTokens ?? initialTokens;
  $: loading = !data.loadingComplete;

  onDestroy(unsubscribe);
</script>

<!-- <AppBar slotPageContent="p-4 items-center justify-center flex flex-col"> -->
<div class="min-h-screen flex flex-col">
  <Header />
  {#if loading}
    <ProgressRing />
  {:else}
    <div class="p-4 items-center justify-center flex flex-col">
      <slot />
    </div>
  {/if}
</div>
