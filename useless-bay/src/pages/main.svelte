<script type="ts">
  import SplitTop from '../components/SplitTop.svelte';
  import MainTemperature from '../components/MainTemperature.svelte';
  import PumpIndicator from '../components/equipment/indicators/pump.svelte';
  import FanIndicator from '../components/equipment/indicators/fan.svelte';
  import LightIndicator from '../components/equipment/indicators/light.svelte';
</script>

<SplitTop>
  <p class="flex flex-row h-full" slot="top-slot">
    <MainTemperature />
  </p>

  <!-- <p class="flex flex-row h-full items-center justify-around" slot="bottom-slot"> -->
  <p class="flex justify-around flex-row h-full p-1" slot="bottom-slot">
    <PumpIndicator />
    <FanIndicator />
    <LightIndicator />
  </p>
</SplitTop>

<style type="text/scss">
  p {
    color: white;
  }
</style>