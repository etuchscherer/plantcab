<script type="ts">
  import { isActive } from "@sveltech/routify";

  import Weather from "../components/equipment/indicators/weather.svelte";
  import Footer from '../components/footer.svelte';

  $: shouldShowWeather = $isActive('./main') || $isActive('./maintenance');
  $: shouldDisableFooterMessages = $isActive('./loading');
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

    <Footer shouldDisableMessages={shouldDisableFooterMessages} hasHeatAlert={true} hasEquipmentFailure={true} />
  </div>
</div>

<style type="text/scss">

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
</style>