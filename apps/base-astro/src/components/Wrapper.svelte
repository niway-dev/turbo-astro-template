<script lang="ts" module>
	import "../styles/global.css";
  import { CustomTitle, RenderExample, TestingComponent } from '@base-repo/ui-svelte';
  import Counter from './Counter.svelte';

  import { databaseInstance } from '@base-repo/database/src';
  
  let exampleObjects: Array<{ id: string, name: string }> = [];
  
  async function loadData() {
    exampleObjects = await databaseInstance.query.exampleTable.findMany();
  }
  
  loadData();
</script>

<!-- <button class="bg-red-300 text-white p-2 rounded-md">Click me</button> -->
<CustomTitle title="Hello, Svelte!" />

<Counter></Counter>

<TestingComponent count={0}></TestingComponent>

<RenderExample items={exampleObjects} title="Example Objects" showIds={true} itemClass="example-item"></RenderExample>
