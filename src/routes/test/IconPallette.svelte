<script lang="ts">
	import TokenIcon from '../TokenIcon.svelte';
	const numbers = [1, 0, -1, -2, -3, -4, -5, -6, -7, -8];
</script>

<div class="grid grid-cols-4">
	{#each numbers as num}
		<TokenIcon isFilled size="16" name="Auto-fail" number={num} />
	{/each}
	<TokenIcon isFilled size="16" name="Auto-fail" />
	<TokenIcon isFilled size="16" name="Cultist" />
	<TokenIcon isFilled size="16" name="Elder sign" />
	<TokenIcon isFilled size="16" name="Elder thing" />
	<TokenIcon isFilled size="16" name="Skull" />
	<TokenIcon isFilled size="16" name="Tablet" />
</div>
