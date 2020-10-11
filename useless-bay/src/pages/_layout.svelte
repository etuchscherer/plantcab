<script type="ts">
  import { isActive, url } from "@sveltech/routify";
  import { onMount } from "svelte";

  import MessageIndicator from '../components/widgets/message-indicator.svelte';
  import Weather from "../components/equipment/indicators/weather.svelte";

  $: shouldShowWeather = $isActive('./main') || $isActive('./maintenance');

  onMount(async () => {
    if ($isActive('./index')) {
      setTimeout(function() {
        window.location.href = '/main';
      }, 2000);
    }
  });
</script>

<div class="grid place-items-center grid-flow-col h-full">
  <div>
    <section class="outer-border p-1 outer-dimensions flex flex-row justify-center items-center">
      {#if shouldShowWeather}
        <Weather />
      {/if}
      <div class="flex w-full items-center inner-border self-stretch">
        <slot></slot>
      </div>
    </section>

    <footer class="flex flex-row justify-between">
      <a class="footer-link" class:active={$isActive('./main')} href={$url('./main')}>Main</a>
      <div class="flex flex-col">
        <MessageIndicator message="!excess heat alert!" isActive={true} messageType="danger" />
        <MessageIndicator message="!equipment failure!" isActive={true} messageType="danger" />
      </div>
      <a class="footer-link" class:active={$isActive('./reports')} href={$url('./reports')}>Reports</a>
      <a class="footer-link" class:active={$isActive('./maintenance')} href={$url('./maintenance')}>Maintenance</a>
    </footer>
  </div>
</div>

<style type="text/scss">

  .self-baseline {
    align-self: baseline;
  }

  .inner-border {
    border: 5px solid rgba(0,174,239, 0.3);
  }

  .outer-border {
    border: 5px solid rgba(0, 174, 239, 0.5);
  }

  .outer-dimensions {
    position: relative;
    width: 1145px;
    height: 565px;
  }

  footer {
    height: 70px;
    margin-top: 30px;
  }

  .footer-link {
    color: rgba(255, 255, 255, 0.2);
    padding: 6px 12px;
    font-size: 50px;
    font-weight: bold;
    line-height: 60px;
    border: 5px solid rgba(255, 255, 255, 0.2);
    text-transform: uppercase;

    &.active {
      border-color: red;
      color: white;
    }
  }
</style>