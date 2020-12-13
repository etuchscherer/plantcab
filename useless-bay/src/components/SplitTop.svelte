<script lang="ts">
  export let shouldShowGrid: boolean = false;
  export let border: string = 'main';
</script>

<div class="flex flex-col h-full p-1 bg-transparent">
  <div class="flex flex-grow top-status {border}-outer-border p-1">
    <div class="{border}-inner-border w-full { shouldShowGrid ? 'bg-grid' : '' } p-1">
      <slot name="top-slot">
        Empty Slot
      </slot>
    </div>
  </div>
  <div class="mt-1 flex flex-grow bottom-status {border}-outer-border p-1">
    <div class="{border}-inner-border w-full">
      <slot name="bottom-slot">
        Empty Slot
      </slot>
    </div>
  </div>
</div>

<style type="text/scss">
  .main-outer-border {
    border: 5px solid #FDB913;
  }

  .maintenance-outer-border {
    border: 5px solid #72bf44;
  }

  .main-inner-border {
    border: 2px solid rgba(253, 185, 19, 0.6);
  }

  .maintenance-inner-border {
    border: 2px solid rgba(114, 191, 68, 0.5);
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