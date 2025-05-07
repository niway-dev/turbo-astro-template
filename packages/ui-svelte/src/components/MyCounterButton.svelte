<script>
  let count = $state(0);

  function handleClick() {
    count += 1;
  }
</script>

<button onclick={handleClick}>
  clicker === {count}
</button>
