<script type="ts">
  import { isActive } from "@sveltech/routify";

  import Weather from "../components/equipment/indicators/weather.svelte";
  import Footer from '../components/footer.svelte';

  $: shouldShowWeather = $isActive('./main') || $isActive('./maintenance');
  $: shouldDisableFooterMessages = $isActive('./index');
  $: fatInnerTriangleColor = $isActive('./main') ? '#FDB913' : '#72bf44';
  $: skinnyInnerTriangleColor = $isActive('./main') ? 'rgba(253, 185, 19, 0.6)' : 'rgba(114, 191, 68, 0.5)';
</script>

<div class="grid place-items-center grid-flow-col h-full">
  <div>
    <section class="outer-border p-1 outer-dimensions flex flex-row justify-center items-center">
      {#if shouldShowWeather}
        <Weather fatInnerTriangleColor="{fatInnerTriangleColor}" skinnyInnerTriangleColor={skinnyInnerTriangleColor} />
      {/if}
      <div class="flex w-full items-center inner-border self-stretch">
        <slot></slot>
      </div>
    </section>

    <Footer shouldDisableMessages={shouldDisableFooterMessages} />
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