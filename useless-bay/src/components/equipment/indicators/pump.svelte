<script type="ts">
  import LowerIndicator from '../lower-indicator.svelte';
</script>

<LowerIndicator title="Water Pump" imageClass="pump" isActive={true}>
  <div class="flex-buster">
    <span class="temperature p-2">
      67°
    </span>
  </div>
</LowerIndicator>

<style lang="scss">
  .flex-buster {
    position: relative;
  }
  span.temperature {
    position: absolute;
    top: -4px;
    left: 14px;
    font-family: NeutraDemi;
    text-transform: uppercase;
    font-weight: bold;
    display: flex;
    color: black;
    font-size: 20px;
    border-radius: 7px;
    height: 36px;
    width: 44px;
    background-color: rgba(0, 174, 239, 0.5);
    justify-content: center;
    align-items: center;
  }
</style>