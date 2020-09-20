<script type="ts">
  export let isActive;
</script>

<div class="flex justify-center container">
  {#if isActive}
    <img src="/assets/images/Fan_Intake_and_Exhaust.gif" alt="fans">
  {:else}
    <img src="/assets/images/Fan_Animation_Off.png" alt="fans">
  {/if}
</div>

<style type="text/scss">

</style>