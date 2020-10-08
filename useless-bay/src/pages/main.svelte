<script type="ts">
  import SplitTop from '../components/SplitTop.svelte';
  import FanStatus from '../components/FanStatus.svelte';
  import PumpStatus from '../components/PumpStatus.svelte';
  import LightStatus from '../components/LightStatus.svelte';
  import MainTemperature from '../components/MainTemperature.svelte';
</script>

<SplitTop>
  <p class="flex flex-row h-full" slot="top-slot">
    <MainTemperature />
  </p>

  <!-- <p class="flex flex-row h-full items-center justify-around" slot="bottom-slot">
    <PumpStatus />
    <FanStatus />
    <LightStatus />
  </p> -->
</SplitTop>

<style type="text/scss">
  p {
    color: white;
  }
</style>