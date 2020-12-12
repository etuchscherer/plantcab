<script type="ts">
  import SplitTop from '../components/SplitTop.svelte';
</script>

<SplitTop border="maintenance">
  <p slot="top-slot">This is the top slot on the maintenance page</p>

  <p slot="bottom-slot">This is the bottom slot on the maintenance page</p>
</SplitTop>

<style type="text/scss">
  p {
    color: white;
  }
</style>