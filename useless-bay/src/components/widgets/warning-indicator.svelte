<script type="ts">
  export let size: string = 'sm';
  // export let color: string = 'currentColor'
  export let message: string = '';
  export let isActive: boolean = false;
  export let classes: string = '';

  const sizeMap = {
    sm: '1rem',
    md: '2rem',
    lg: '2.5rem',
    xl: '3rem',
    xxl: '4rem',
  }

  $: height = sizeMap[size];
  $: shouldShowMessage = message.length > 0;
  $: color = isActive ? 'rgba(237, 28, 36, 1)': 'rgba(255, 255, 255, 0.1)';
</script>

<div class="warning inline-flex {classes}">
  {#if shouldShowMessage}
    <div class="message flex self-center mr-2">{ message }</div>
  {/if}
  <svg height="{height}" viewBox="0 0 17 16" class="bi bi-exclamation-triangle" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M7.938 2.016a.146.146 0 0 0-.054.057L1.027 13.74a.176.176 0 0 0-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 0 0 .066-.017.163.163 0 0 0 .055-.06.176.176 0 0 0-.003-.183L8.12 2.073a.146.146 0 0 0-.054-.057A.13.13 0 0 0 8.002 2a.13.13 0 0 0-.064.016zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"></path>
    <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"></path>
  </svg>
</div>

<style lang="scss">
  .message {
    width: 50px;
    font-size: 12px;
    line-height: 11px;
    text-transform: uppercase;
    font-weight: bold;
    color: rgba(255,255,255, 0.2);
  }
  .warning {
    line-height: 2rem;
  }
</style>