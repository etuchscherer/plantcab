<script>
  import LightGraphic from "./LightGraphic.svelte";
</script>

<div class="outer-container flex flex-col">
  <p class="flex-none description">Fan</p>
  <LightGraphic isActive={true} />
</div>

<style type="text/scss">

  p.description {
    font-size: 26px;
    font-weight: bold;
    color: #FDB913;
    text-transform: uppercase;
  }
  .outer-container {
    border: 5px solid rgba(0,174,239, 0.5);
    border-radius: 14pt;
    height: 219px;
    width: 228px;
  }
</style>