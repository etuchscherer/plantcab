<script type="ts">
  import IndicatorBorder from './borders/double-border.svelte'
  import { equipmentStateManager } from '../../../store'
  import { celsiusToF } from '../../../utils'

  export let pageName: string = '';

  $: formattedTemperature = function() {
    const { current, units } = $equipmentStateManager.internalTemperature;
    const isCelsius = units.toLocaleLowerCase() === 'c';
    return `${isCelsius ? current : celsiusToF(current)}°${units}`
  }

  $: hasDegreesCelsius = $equipmentStateManager.internalTemperature.units.toLowerCase() === 'c';
  $: canChangeUnits = pageName === 'maintenance';

  function updateUnitsTo(scale: string) {
    equipmentStateManager.update(oldState => {
      const newState = oldState;
      newState.internalTemperature.units = scale;
      return newState;
    });
  }

  function selectF() {
    if (canChangeUnits) updateUnitsTo('f');
  }

  function selectC() {
    if (canChangeUnits) updateUnitsTo('c');
  }
</script>

<IndicatorBorder pageName="{pageName}">
  <div id="main-temp-section" slot="main-slot" class="flex flex-col items-center">
    <div class="flex flex-col h-full">
      <div class="lead-text mx-auto">Internal Temperature</div>
      <div class="temperature mx-2">{formattedTemperature()}</div>
      <div class="flex flex-row text-xs mx-2 mt-3 justify-around">
        <div class:active={!hasDegreesCelsius} class="unit-indicator m-0 p-1" on:click={selectF}>°F</div>
        <div class:active={hasDegreesCelsius} class="unit-indicator m-0 mx-1 p-1" on:click={selectC}>°C</div>
        <div class="manual-mode-indicator p-1 uppercase active">Manual Mode Engaged</div>
      </div>
    </div>
  </div>
</IndicatorBorder>

<style lang="scss">

  #main-temp-section {
    max-width: 340px;
  }
  .unit-indicator, .manual-mode-indicator {
    color: rgba(255,255,255, 0.2);
    border: 2px solid rgba(255,255,255, 0.2);
    font-size: 18px;

    &.active {
      color: #72BF44;
      border-color: #72BF44;
    }
  }

  .temperature {
    font-size: 154px;
    font-family: "NeutraDemi";
    text-transform: uppercase;
    font-weight: bold;
    color: #72BF44;
    max-height: 120px;
    line-height: 154px;
  }

  .lead-text {
    font-size: 25px;
    text-transform: uppercase;
    font-weight: bold;
    color: #FFE293;
  }
</style>