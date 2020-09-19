<script type="ts">
  import { isActive, url } from "@sveltech/routify";
  import { onMount } from "svelte";
  import Weather from "../components/Weather.svelte";

  $: shouldShowWeather = $isActive('./main') || $isActive('./maintenance');

  onMount(async () => {
    if ($isActive('./index')) {
      setTimeout(function() {
        window.location.href = '/main';
      }, 2000);
    }
  });
</script>

<div class="flex">
  <div class="flex flex-col justify-evenly bg-black h-full m-wrapper">
    <section class="outer-border outer-dimensions flex flex-row justify-center items-center">
      {#if shouldShowWeather}
        <Weather />
      {/if}
      <div class="flex  justify-center items-center inner-border inner-dimensions">
        <slot></slot>
      </div>
    </section>

    <footer class="flex flex-row justify-between">
      <a class="footer-link" class:active={$isActive('./reports')} href={$url('./reports')}>Reports</a>
      <div class="flex flex-col justify-evenly items-center failure-indicators">
        <div class="failure-indicator">
          !excess heat alert!
        </div>
        <div class="failure-indicator">
          !equipment failure!
        </div>
      </div>
      <a class="footer-link" class:active={$isActive('./main')} href={$url('./main')}>Main</a>
      <a class="footer-link" class:active={$isActive('./maintenance')} href={$url('./maintenance')}>Maintenance</a>
    </footer>
  </div>
</div>

<style type="text/scss">
  .h-custom {
    height: 565px;
  }

  .m-wrapper {
    margin: 67.5px auto;
  }

  .inner-border {
    border: 5px solid rgba(0,174,239, 0.3);
  }

  .inner-dimensions {
    width: 1120px;
    height: 540px;
  }

  .outer-border {
    border: 5px solid rgba(0, 174, 239, 0.5);
  }

  .outer-dimensions {
    position: relative;
    width: 1145px;
    height: 565px;
  }

  .failure-indicators {
    background-color: rgba(255, 255, 255, 0.1);
    font-size: 27px;
    font-weight: bold;
  }

  .failure-indicators {
    width: 280px;
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