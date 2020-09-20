<script type="ts">
  import CircleIndicator from '../components/CircleIndicator.svelte';
  import FanGraphic from './FanGraphic.svelte';
</script>

<div class="outer-container h-full">
  <div class="flex">
    <p class="description m-3">Fan</p>
    <span class="flex">
      <CircleIndicator size={'large'} fill="#ed1c24" isActive={false} />
      <CircleIndicator size={'large'} fill="#72BF44" isActive={true} />
    </span>
  </div>
  <div class="flex">
    <FanGraphic isActive={false} />
  </div>
</div>

<style type="text/scss">
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