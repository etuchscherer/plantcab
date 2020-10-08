<script type="ts">
  export let isActive:boolean;
</script>

<div class="flex-grow w-full light-background {isActive ? 'light-on' : 'light-off'}" />

<style type="text/scss">
  .light-on {
    background-image: url("/assets/images/LightRunning.gif");
  }

  .light-off {
    background-image: url("/assets/images/LightBulb_off.png");
  }

  .light-background {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    min-height: 100px;
  }
</style>