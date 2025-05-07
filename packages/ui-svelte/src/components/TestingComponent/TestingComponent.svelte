<script lang="ts">
	// import '../../app.css';
	import '../../styles/global.css';
  // import '@/styles/global.css';

  interface Props {
    count: number;
  }

  let { count = 0 }: Props = $props();


  function handleClick() {
    count++;
  }
</script>

<div>
  <h1 class="text-green-500 mb-4">Example</h1>

  <button class="bg-red-200 text-white p-2 rounded-md" onclick={handleClick}>
    Click me
  </button>

  <p>Count: {count}</p>
</div>