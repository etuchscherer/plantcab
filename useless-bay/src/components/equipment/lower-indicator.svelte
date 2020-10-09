<script type="ts">
  import CircleIndicator from '../CircleIndicator.svelte';
  import Warning from '../Warning.svelte';

  export let title: string;
  export let imageClass: string;
  export let isActive: boolean = false;
</script>

<div class="outer-border">
  <div class="flex items-end justify-between">
    <p class="title ml-4 mt-4">{title}</p>
    <span class="inline-flex">
      <CircleIndicator size={'large'} fill="#ed1c24" isActive={!isActive} />
      <CircleIndicator size={'large'} fill="#72BF44" isActive={isActive} />
    </span>
    <Warning size="lg" color="rgba(255, 255, 255, 0.4)" />
  </div>

  <slot />
  <div class="flex-auto self-center m-5 h-full w-full bg-image {imageClass} {isActive ? 'active' : ''}" />
</div>

<style lang="scss">

  .bg-image {
    background-repeat: no-repeat;

    &.pump {
      background-image: url("/assets/images/lower-indicators/pump.png");

      &.active {
        background-image: url("/assets/images/lower-indicators/pump-on.gif");
      }
    }

    &.fan {
      background-image: url("/assets/images/lower-indicators/fan.png");

      &.active {
        background-image: url("/assets/images/lower-indicators/fan-on.gif");
      }
    }
  }


  .outer-border {
    border: 5px solid rgba(0,174,239, 0.5);
    border-radius: 14pt;
    min-width: 398px;
  }

  p.title {
    font-size: 26px;
    font-weight: bold;
    color:#00B9F2;
    text-transform: uppercase;
  }
</style>