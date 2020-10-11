<script type="ts">

</script>

<div class="flex flex-grow flex-col">
  <div class="bg-black inline-flex w-full warning-indicators">
    <p class="px-3 low-temp">Low Temp!</p>
    <p class="px-3 high-temp">Excess Heat!</p>
    <p class="px-3">Equipment Failure!</p>
  </div>
  <div class="overflow-hidden">
    <img class="high-temp-sine flip-x" src="/assets/images/wave-high-temp.png" alt="" />
    <img class="low-temp-sine flip-x" src="/assets/images/wave-low-temp.png" alt="" />
  </div>

</div>

<style lang="scss">
  .high-temp-sine {
    position: relative;
    z-index: -3;
    top: -90px;
    right: 25px;
  }
  .low-temp-sine {
    position: relative;
    top: -420px;
  }
  .flip-x {
    // transform: scaleY(-1);
    z-index: 3;
  }
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