<script type="ts">
  import UpperTextualWarnings from '../components/equipment/indicators/upper-textual-warnings.svelte'
  import ClimateControl from '../components/widgets/climate-control.svelte'
  import PumpControl from '../components/widgets/pump-control.svelte'
  import FanControl from '../components/widgets/fan-control.svelte'
  import MainTemperature from '../components/equipment/indicators/main-temp.svelte'
  import LightControl from '../components/widgets/light-control.svelte'
  import SplitTop from '../components/SplitTop.svelte'
  import AuxPanel from '../components/widgets/twelve-volt-supply.svelte'
</script>

<SplitTop border="maintenance">
  <div slot="top-slot" class="flex flex-row h-full">
    <MainTemperature pageName="maintenance"/>
    <div class="flex flex-col">
      <UpperTextualWarnings hasEquipmentFailure="{true}" />
      <!-- flex class prevents taking full width -->
      <div class="flex justify-around">
        <ClimateControl pageName="maintenance" />
        <LightControl pageName="maintenance" />
        <AuxPanel />
      </div>
    </div>
  </div>

  <p slot="bottom-slot" class="flex flex-row h-full justify-between">
    <PumpControl pageName="maintenance" />
    <FanControl pageName="maintenance" />
  </p>
</SplitTop>

<style type="text/scss">
  p {
    color: white;
  }
</style>