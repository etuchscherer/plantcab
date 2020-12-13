<script type="ts">
  import UpperTextualWarnings from '../components/equipment/indicators/upper-textual-warnings.svelte';
  import MainTemperature from '../components/equipment/indicators/main-temp.svelte';
  import LightControl from '../components/widgets/light-control.svelte';

  import SplitTop from '../components/SplitTop.svelte';
</script>

<SplitTop border="maintenance">
  <div slot="top-slot" class="flex flex-row h-full">
    <MainTemperature pageName="maintenance"/>
    <div class="flex flex-col">
      <UpperTextualWarnings hasEquipmentFailure="{true}" />
      <!-- flex class prevents taking full width -->
      <div class="flex">
        <LightControl pageName="maintenance" />
      </div>
    </div>
  </div>

  <p slot="bottom-slot">This is the bottom slot on the maintenance page</p>
</SplitTop>

<style type="text/scss">
  p {
    color: white;
  }
</style>