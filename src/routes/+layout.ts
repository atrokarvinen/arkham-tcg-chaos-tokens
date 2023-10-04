import { browser } from '$app/environment';
import type { Token } from './types';

export const load = () => {
	const chaosTokensJson = browser ? localStorage.getItem('chaos-tokens') : undefined;
	if (!chaosTokensJson) return { chaosTokens: undefined, loadingComplete: browser };

	try {
		const chaosTokens: Token[] = JSON.parse(chaosTokensJson);
		return { chaosTokens, loadingComplete: true };
	} catch (error) {
		console.log('failed to parse chaos tokens:', error);
		return { chaosTokens: undefined, loadingComplete: true };
	}
};
