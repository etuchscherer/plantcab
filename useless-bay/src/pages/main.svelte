<script type="ts">
  import SplitTop from '../components/SplitTop.svelte';
  import LightStatus from '../components/LightStatus.svelte';
  import MainTemperature from '../components/MainTemperature.svelte';
  import PumpIndicator from '../components/equipment/indicators/pump.svelte';
  import FanIndicator from '../components/equipment/indicators/fan.svelte';
</script>

<SplitTop>
  <p class="flex flex-row h-full" slot="top-slot">
    <MainTemperature />
  </p>

  <!-- <p class="flex flex-row h-full items-center justify-around" slot="bottom-slot"> -->
  <p class="flex flex-row h-full p-1" slot="bottom-slot">
    <PumpIndicator />
    <FanIndicator />
    <!-- <LightStatus /> -->
  </p>
</SplitTop>

<style type="text/scss">
  p {
    color: white;
  }
</style>