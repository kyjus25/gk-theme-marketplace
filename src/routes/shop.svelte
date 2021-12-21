<script>
	import Preview from "../components/Preview.svelte";
	import { fetchThemes } from "$lib/stores";

</script>



{#await fetchThemes() then}
	<div class="form-control" />

	<label class="input-group flex p-6">
		<input
			type="text"
			placeholder="Search Shop"
			class="input input-primary flex-1"
		/>
		<span class="bg-primary text-white">
			<img width="20" src="/search.png" alt="search button" />
		</span>
	</label>
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
