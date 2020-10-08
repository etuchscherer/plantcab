<script type="ts">
  import CircleIndicator from '../components/CircleIndicator.svelte';

  let isActive:boolean = false;
</script>

<div class="outer-container flex flex-col h-full">
  <p class="flex-none inline-flex items-center description m-2">Fan
    <CircleIndicator size={'large'} fill="#ed1c24" isActive={false} />
    <CircleIndicator size={'large'} fill="#72BF44" isActive={true} />
  </p>
  <div class="flex-auto self-center w-full fan-bg {isActive? 'fan-on' : 'fan-off'}" />
</div>

<style type="text/scss">
  .fan-off {
    background-image: url("/assets/images/Fan_Animation_Off.png");
  }
  .fan-on {
    background-image: url("/assets/images/Fan_Intake_and_Exhaust.gif");
  }
  .fan-bg {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    min-height: 100px;
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