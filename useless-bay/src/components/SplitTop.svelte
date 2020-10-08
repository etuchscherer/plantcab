<div class="flex flex-col h-full p-1">
  <div class="flex flex-grow top-status outer-border p-1">
    <div class="inner-border w-full bg-crop p-1">
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

  .bg-crop {
    background-image: url("/assets/images/Grid.png");
    background-repeat: repeat-y;
    background-size: contain;
    // background-position: center;
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