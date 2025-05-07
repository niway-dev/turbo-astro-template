<script lang="ts">
	import '../styles/global.css';

	export let title: string;
</script>

<h1 class="text-red">{title}</h1>

<h2 class="text-red-100 mb-4">title 332</h2>

<button
	class="bg-blue-500 text-white p-2 rounded-md"
	onclick={() => {}}>
	Change name22
</button>

<button
	class="bg-red-500 text-red p-2 rounded-md"
	onclick={() => {}}>
	Change name33
</button>

<div class="bg-red-500">
	hola
</div>


<style>
	@import "tailwindcss";
	h1 {
		text-align: center;
	}
</style>