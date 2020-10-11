<script lang="ts">
  export let shouldShowGrid: boolean = false;
</script>

<div class="flex flex-col h-full p-1">
  <div class="flex flex-grow top-status outer-border p-1">
    <div class="inner-border w-full { shouldShowGrid ? 'bg-grid' : '' } p-1">
      <slot name="top-slot">
        Empty Slot
      </slot>
    </div>
  </div>
  <div class="mt-1 flex flex-grow bottom-status outer-border p-1">
    <div class="inner-border w-full">
      <slot name="bottom-slot">
        Empty Slot
      </slot>
    </div>
  </div>
</div>

<style type="text/scss">
  .outer-border {
    border: 5px solid #FDB913;
  }

  .inner-border {
    border: 2px solid rgba(253, 185, 19, 0.6);
  }

  .bg-grid {
    background-image: url("/assets/images/Grid50.png");
    background-size: contain;
  }

  .top-status {
    width: 1110px;
    height: 231px;
  }

  .bottom-status {
    width: 1110px;
    height: 240px;
  }
</style>