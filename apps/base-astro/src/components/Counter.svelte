<script lang="ts">
	// import { Account } from '@base-repo/core/src/entities/account.entity';
	// import { Account } from '~base-repo/core';
	import { Account } from '@base-repo/core/src';
	import { MyCounterButton } from '@base-repo/ui-svelte';

	import "../styles/global.css";

	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet
	}

	let { children }: Props = $props();
	let count = $state(0);

	function add() {
		count += 1;
	}

	function subtract() {
		count -= 1;
	}

	const account = new Account({
		id: '1',
		name: 'John Doee',
		email: 'john.doe@example.com',
		password: 'password',
	});
</script>

<div class="counter">
	<button onclick={subtract}>-</button>
	<pre>{count}</pre>
	<button onclick={add}>+</button>
</div>
<div class="message">
	{@render children?.()}

	<button
		class="bg-green-800 text-white p-2 rounded-md"
		onclick={() => {
		account.getValues().name = 'John Doe';
	}}>
		Change name
	</button>
	<br>
	<MyCounterButton />

	<h1>{account.getValues().name}</h1>
</div>

<style>
  .counter {
		display: grid;
		font-size: 2em;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		margin-top: 2em;
		place-items: center;
	}

	.message {
		text-align: center;
	}
</style>
