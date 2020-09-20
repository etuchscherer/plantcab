<script type="ts">
  export let isActive;
</script>

<div class="flex justify-center container">
  {#if isActive}
    <img src="/assets/images/Pump_Running.gif" alt="water pump">
  {:else}
    <img src="/assets/images/Pump_off.png" alt="water pump">
  {/if}
</div>

<style type="text/scss">

</style>