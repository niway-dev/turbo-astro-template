<script lang="ts">
  // Accept items as a prop
  export let items: Array<{ id: string, name: string }> = [];

  // Additional parameters
  export let title = "Items List";
  export let showIds = true;
  export let itemClass = "";
</script>

<div class="items-container">
  <h2>{title}</h2>
  
  {#if items.length > 0}
    <ul>
      {#each items as item (item.id)}
        <li class={itemClass}>
          {#if showIds}<div class="item-id"><strong>ID:</strong> {item.id}</div>{/if}
          <div class="item-name"><strong>Name:</strong> {item.name}</div>
        </li>
      {/each}
    </ul>
  {:else}
    <p>No items to display</p>
  {/if}
</div>

<style>
  .items-container {
    padding: 1rem;
    max-width: 500px;
    margin: 0 auto;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    padding: 0.5rem;
    border-bottom: 1px solid #eee;
  }
  
  li:last-child {
    border-bottom: none;
  }
  
  .item-id, .item-name {
    padding: 2px 0;
  }
</style>