<script type="ts">
  import SplitTop from '../components/SplitTop.svelte';
  import MainTemperature from '../components/equipment/indicators/main-temp.svelte';
  import PumpIndicator from '../components/equipment/indicators/pump.svelte';
  import FanIndicator from '../components/equipment/indicators/fan.svelte';
  import LightIndicator from '../components/equipment/indicators/light.svelte';
  import ClimateControl from '../components/equipment/indicators/climate-control.svelte';
</script>

<SplitTop>
  <p class="flex flex-row h-full" slot="top-slot">
    <MainTemperature />
    <ClimateControl />
  </p>

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