<script type="ts">
  import CircleIndicator from '../widgets/circle-indicator.svelte';
  import Warning from '../widgets/warning-indicator.svelte';

  export let title: string;
  export let imageClass: string;
  export let isActive: boolean = false;
  export let size: string = 'normal';
</script>

<div class="flex flex-col outer-border {size}">
  <div class="inline-flex items-center mt-3 ml-3">
    <p class="title { size === 'half-pint' ? 'flex-grow' : '' }">{title}</p>
    {#if size === 'normal'}
      <span class="inline-flex">
        <CircleIndicator size='medium' activeColor="#ed1c24" isActive={!isActive} />
        <CircleIndicator size='medium' activeColor="#72BF44" isActive={isActive} />
      </span>
    {/if}
    <div class="mr-4 flex-grow">
      <Warning size="lg" color="rgba(255, 255, 255, 0.4)" />
    </div>
  </div>

  <slot />
  <div class="flex-grow w-full bg-image {imageClass} {isActive ? 'active' : ''}" />
  {#if size === 'half-pint'}
    <div class="inline-flex justify-evenly p-1">
      <CircleIndicator size='large' activeColor="#ed1c24" isActive={!isActive} />
      <CircleIndicator size='large' activeColor="#72BF44" isActive={isActive} />
    </div>
  {/if}
</div>

<style lang="scss">

  .bg-image {
    background-repeat: no-repeat;
    background-position: center;

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

    &.light {
      background-image: url("/assets/images/lower-indicators/light.png");
      background-size: 50%;

      &.active {
        background-image: url("/assets/images/lower-indicators/light-on.gif");
      }
    }
  }

  .outer-border {
    border: 5px solid rgba(0,174,239, 0.5);
    border-radius: 14pt;
    min-width: 408px;

    &.half-pint {
      min-width: 238px;
    }
  }

  p.title {
    font-size: 26px;
    font-weight: bold;
    color:#00B9F2;
    text-transform: uppercase;
  }
</style>