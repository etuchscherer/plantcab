<script type="ts">
  import SplitTop from '../components/SplitTop.svelte';
</script>

<SplitTop>
  <p slot="top-slot">This is the top slot on the main page</p>

  <p slot="bottom-slot">This is the bottom slot on the main page</p>
</SplitTop>

<style type="text/scss">
  p {
    color: white;
  }
</style>