<script type="ts">
  export let isActive: boolean = false;
  export let message: string = '';
  export let messageType: string;
</script>

<div class="failure-indicator px-5 w-full flex justify-center { isActive ? 'active' : '' } { messageType }">
  {message}
</div>

<style lang="scss">
  .failure-indicator {
    background-color: rgba(255, 255, 255, 0.1);
    font-size: 23px;
    font-weight: bold;
    border: 1px solid black;
    text-transform: uppercase;
    height: 35px;
  }

  .active {
    &.danger {
      background-color: #ED1C24;
      color: white;
    }
  }
</style>