
import { writable } from 'svelte/store';

export const loading = writable(true);
export const themes = writable([]);

export async function fetchData() {
    loading.set(true);
    const themes$ = await fetch('/api/themes', {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(i => i.json());
    themes.set(themes$);
    loading.set(false);
}