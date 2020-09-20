<script type="ts">
  import SplitTop from '../components/SplitTop.svelte';
  import FanStatus from '../components/FanStatus.svelte';
  import PumpStatus from '../components/PumpStatus.svelte';
  import LightStatus from '../components/LightStatus.svelte';
</script>

<SplitTop>
  <p slot="top-slot">This is the top slot on the main page</p>

  <p class="flex flex-row h-full items-center justify-around" slot="bottom-slot">
    <PumpStatus />
    <FanStatus />
    <LightStatus />
  </p>
</SplitTop>

<style type="text/scss">
  p {
    color: white;
  }
</style>