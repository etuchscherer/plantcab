<script type="ts">
  import UpperTextualWarnings from '../indicators/upper-textual-warnings.svelte';
</script>

<div class="flex flex-grow flex-col">
  <UpperTextualWarnings />
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
</style>