<div class="flex flex-col flex-grow outer-container h-full">
  <div class="m-2 mb-0 flex flex-grow top-status outer-border">
    <div class="m-1 inner-border w-full">
      <slot name="top-slot">
        Empty Slot
      </slot>
    </div>
  </div>
  <div class="m-2 mt-2 flex flex-grow bottom-status outer-border">
    <div class="m-1 inner-border w-full">
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

  .top-status {
    width: 1095px;
    height: 260px;
  }

  .bottom-status {
    width: 1095px;
    height: 240px;
  }
</style>