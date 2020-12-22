<script type="ts">
  export let pageName: string = 'main';
</script>

<div class="{pageName}-outer-wrapper p-1 ml-1">
  <div class="{pageName}-inner-wrapper h-full">
    <slot name="main-slot">
      Empty Slot
    </slot>
  </div>
</div>

<style lang="scss">
  .main-outer-wrapper {
    border: 2px solid #00AEEF;
    border-radius: 29px;
    background-color: #000936;
    z-index: 9998;
  }

  .maintenance-outer-wrapper {
    border: 2px solid #fdb913;
    border-radius: 29px;
    background-color: #000936;
    z-index: 9998;
  }

  .main-inner-wrapper {
    border: 5px solid rgba(0,174,239, 0.5);
    border-radius: 23px;
  }

  .maintenance-inner-wrapper {
    border: 5px solid rgba(253, 185, 19, 0.5);
    border-radius: 23px;
  }
</style>