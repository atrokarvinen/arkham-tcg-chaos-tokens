<script lang="ts">
	import { getTemplate, templateMatches } from '$lib/tokenTemplates';
	import { tokens } from '$lib/tokens';
	import type { TokenName } from './types';

	const options = ['Easy', 'Standard', 'Hard', 'Expert'];
	const initialValue: string | undefined = options.find((o) => {
		const template = getTemplate(o);
		return template && templateMatches($tokens, template);
	});

	let selectedValue: string | undefined;
	const onChange = (e: Event) => {
		const select = e.target as HTMLSelectElement;
		selectedValue = select.value;
	};

	$: selectedTemplate = getTemplate(selectedValue);
	$: handleTemplateChange(selectedTemplate);

	const handleTemplateChange = (template: Record<TokenName, number> | undefined) => {
		if (!template) return;
		$tokens = $tokens.map((t) => {
			const quantity = template[t.name];
			return { ...t, quantity: quantity };
		});
	};
</script>

<div>
	<label for="template">Select template:</label>
	<select class="select w-fit" id="template" value={initialValue} on:change={onChange}>
		{#each options as option}
			<option value={option}>{option}</option>
		{/each}
	</select>
</div>
