<script>
	import Preview from "../components/Preview.svelte";
	import { fetchData } from "$lib/stores";
</script>

{#await fetchData() then}
	<div class="px-6">
		<h1 class="text-3xl mb-6">GitKraken Theme Marketplace</h1>
		<div class="flex gap-6 flex-wrap">
			<Preview theme="book" name="Book" author="Chuck Dries" />
			<Preview theme="christmas" name="Christmas" author="Chuck Dries" />
			<Preview theme="matcha-dark-sea" name="Matcha Dark Sea" author="William Penton" />
			<Preview theme="sakura" name="Sakura" author="Chuck Dries" />
			<Preview theme="obsidian" name="Obsidian" author="Chuck Dries" />
		</div>
	</div>
{/await}
