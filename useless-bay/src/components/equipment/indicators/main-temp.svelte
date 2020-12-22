<script type="ts">
  import IndicatorBorder from './borders/double-border.svelte';

  export let pageName: string = '';
</script>

<IndicatorBorder pageName="{pageName}">
  <div slot="main-slot" class="flex flex-col items-center">
    <div class="flex flex-col h-full">
      <div class="lead-text mx-auto">Internal Temperature</div>
      <div class="temperature mx-2">87°F</div>
      <div class="flex flex-row text-xs mx-2 mt-3 justify-around">
        <div class="unit-indicator m-0 p-1 active">°F</div>
        <div class="unit-indicator m-0 mx-1 p-1">°C</div>
        <div class="manual-mode-indicator p-1 upcase active">Manual Mode Engaged</div>
      </div>
    </div>
  </div>
</IndicatorBorder>

<style lang="scss">
  .upcase {
    text-transform: uppercase;
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