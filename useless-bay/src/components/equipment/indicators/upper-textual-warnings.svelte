<script type="ts">
    import { hasEquipmentWarning, hasHighTempWarning, hasLowTempWarning } from '../../../store'

    $: hasEquipmentFailure = $hasEquipmentWarning;
</script>

<div class="inline-flex w-full warning-indicators main-color">
  <p class:active="{$hasLowTempWarning}" class="px-3 low-temp">Low Temp!</p>
  <p class:active="{$hasHighTempWarning}" class="px-3 high-temp">Excess Heat!</p>
  <p class:active="{hasEquipmentFailure}" class="px-3 equipment-failure">Equipment Failure!</p>
</div>

<style lang="scss">
  .main-color {
    background-color: #000936;
  }
  .warning-indicators {
      font-size: 18px;
      text-transform: uppercase;
      color: rgba(255,255,255, 0.1);
      min-height: 30px;
  }

  .low-temp.active {
    color: #00AEEF;
  }

  .high-temp.active, .equipment-failure.active {
    color: #ED1C24;
  }
</style>