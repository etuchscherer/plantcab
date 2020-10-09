<script type="ts">

</script>

<div class="flex flex-grow flex-col">
  <div class="bg-black inline-flex w-full warning-indicators">
    <p class="px-3 low-temp">Low Temp!</p>
    <p class="px-3 high-temp">Excess Heat!</p>
    <p class="px-3">Equipment Failure!</p>
  </div>

</div>

<style lang="scss">
  .warning-indicators {
    font-size: 18px;
    text-transform: uppercase;
    color: rgba(255,255,255, 0.1);
    min-height: 30px;
  }

  .low-temp {
    color: #00AEEF;
  }

  .high-temp {
    color: #ED1C24;
  }
</style>