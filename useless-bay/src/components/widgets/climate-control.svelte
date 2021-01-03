<script lang="ts">
    import IndicatorBorder from '../equipment/indicators/borders/single-border.svelte';
    import { equipmentStateManager } from '../../store';
    import { celsiusToF } from '.././../utils';

    export let pageName: string = '';

    $: maxTemp = function() {
      const { maxAllowed, units } = $equipmentStateManager.internalTemperature;
      return units === 'c' ? maxAllowed : celsiusToF(maxAllowed);
    }

    $: minTemp = function() {
      const { minAllowed, units } = $equipmentStateManager.internalTemperature;
      return units === 'c' ? minAllowed : celsiusToF(minAllowed);
    }
</script>

<IndicatorBorder pageName="{pageName}" classes="ml-2 mr-1">
    <div slot="main-slot" class="container uppercase text-center">
        <p>
            Set desired max&nbsp;temp
        </p>
        <button class="overflow-hidden temp-button mb-1">{maxTemp()}°</button>
        <hr>
        <p class="mt-1">
            Set desired low&nbsp;temp
        </p>
        <button class="overflow-hidden temp-button">{minTemp()}°</button>
    </div>
</IndicatorBorder>

<style lang="scss">
    .container {
        max-width: 148px;
        color: rgba(253, 185, 19, 1);
        font-size: 15px;
        font-family: "NeutraDemi";
    }

    hr {
        height: 1px;
        border: none;
        background-color: rgba(253, 185, 19, 1);
    }

    .temp-button {
        background-color: #f9f9f9;
        width: 122px;
        height: 42px;
        border-radius: 8px;
        color: #58595b;
        font-size: 32px;
    }
</style>