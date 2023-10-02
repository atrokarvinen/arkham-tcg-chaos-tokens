import { writable } from 'svelte/store';
import { initialTokens } from '../routes/initialTokens';

export const tokens = writable(initialTokens);
