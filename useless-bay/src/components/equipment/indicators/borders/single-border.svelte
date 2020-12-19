<script type="ts">
  export let pageName: string = 'main';
  export let classes: string = '';
</script>

<div class="{pageName}-wrapper p-1 ml-1 bg-transparent {classes}">
  <slot name="main-slot">
    Empty Slot
  </slot>
</div>

<style lang="scss">
  .main-wrapper {
    border: 5px solid #00AEEF;
    border-radius: 20px;
    z-index: 9999;
  }

  .maintenance-wrapper {
    border: 5px solid #fdb913;
    border-radius: 20px;
    z-index: 9999;
  }
</style>