<script type="ts">
  import CircleIndicator from '../components/CircleIndicator.svelte';

  let isActive:boolean = true;
</script>

<div class="outer-container flex flex-col h-full">
  <p class="flex-none inline-flex items-center description m-2">Water Pump
    <CircleIndicator size={'large'} fill="#ed1c24" isActive={false} />
    <CircleIndicator size={'large'} fill="#72BF44" isActive={true} />
  </p>
  <div class="flex-buster">
    <span class="temperature p-2">
      67°
    </span>
  </div>
  <div class="flex-auto self-center m-5 w-full pump-bg {isActive? 'pump-on' : 'pump-off'}" />
</div>

<style type="text/scss">
  .pump-on {
    background-image: url("/assets/images/Pump_Running.gif");
  }
  .pump-bg {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    min-height: 100px;
  }
  .flex-buster {
    position: relative;
  }
  span.temperature {
    position: absolute;
    top: -14px;
    left: 10px;
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
    width: 398px;
    max-height: 220px;
  }
</style>