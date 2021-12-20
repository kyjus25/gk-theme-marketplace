<script lang="ts">
	import { onMount } from "svelte";
	import Header from "../components/Header.svelte";

	let ready: boolean = false;
	onMount(() => (ready = true));
</script>

<div class="dragbar" />

{#if ready}
	<Header />
	<slot />
{/if}

<style>
	@import "../style.css";
</style>
