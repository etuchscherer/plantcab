<script type="ts">
  // import MainTempCopy from '../components/equipment/indicators/main-temp-copy.svelte';
  import MainTemperature from '../components/equipment/indicators/main-temp.svelte';

  import SplitTop from '../components/SplitTop.svelte';
</script>

<SplitTop border="maintenance">
  <!-- flex class prevents taking full width -->
  <div slot="top-slot" class="flex flex-row h-full">
    <MainTemperature pageName="maintenance"/>
    <!-- <MainTempCopy pageName="maintenance" /> -->
  </div>

  <p slot="bottom-slot">This is the bottom slot on the maintenance page</p>
</SplitTop>

<style type="text/scss">
  p {
    color: white;
  }
</style>