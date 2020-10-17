<script lang="ts">
  import { afterUpdate } from "svelte";

  afterUpdate(async () => {
    setTimeout(function() {
      window.location.href = '/main';
    }, 5000);
  });
</script>

<div class="flex justify-center h-full w-full main-logo" />

<style lang="scss">
  .main-logo {
    background-image: url("/assets/images/splash.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    opacity: 0.60;
  }
</style>