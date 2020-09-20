<script type="ts">
  import CircleIndicator from '../components/CircleIndicator.svelte';
  import PumpGraphic from './PumpGraphic.svelte';
</script>

<div class="outer-container h-full">
  <div class="flex">
    <p class="description m-3">Water Pump</p>
    <span class="flex">
      <CircleIndicator size={'large'} fill="#ed1c24" isActive={true} />
      <CircleIndicator size={'large'} fill="#72BF44" isActive={false} />
    </span>
  </div>
  <div class="flex">
    <!-- <span class="temperature p-2">
      67°
    </span> -->
    <PumpGraphic isActive={false} />
  </div>
</div>

<style type="text/scss">
  span.temperature {
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

  p.description {
    font-size: 26px;
    font-weight: bold;
    color:#00B9F2;
    text-transform: uppercase;
  }

  .outer-container {
    border: 5px solid rgba(0,174,239, 0.5);
    border-radius: 14pt;
    height: 219px;
    width: 398px;
  }
</style>