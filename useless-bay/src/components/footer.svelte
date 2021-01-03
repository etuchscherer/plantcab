<script type="ts">
  import { isActive, url } from '@sveltech/routify'
  import MessageIndicator from '../components/widgets/message-indicator.svelte'
  import { hasEquipmentWarning } from '../store'

  export let shouldDisableMessages = true;
  export let hasHeatAlert = true;

  let shouldShowHeatAlert = !shouldDisableMessages && hasHeatAlert;
  $: shouldShowEquipmentFailure = !shouldDisableMessages && $hasEquipmentWarning;
</script>

<footer class="flex flex-row justify-between">
  <a class="footer-link" class:active={$isActive('./main')} href={$url('./main')}>Main</a>
  <div class="flex flex-col">
    <MessageIndicator message="!excess heat alert!" isActive={shouldShowHeatAlert} messageType="danger" />
    <MessageIndicator message="!equipment failure!" isActive={shouldShowEquipmentFailure} messageType="danger" />
  </div>
  <a class="footer-link" class:active={$isActive('./reports')} href={$url('./reports')}>Reports</a>
  <a class="footer-link" class:active={$isActive('./maintenance')} href={$url('./maintenance')}>Maintenance</a>
</footer>

<style lang="scss">
  footer {
    height: 70px;
    margin-top: 30px;
  }

  .footer-link {
    color: rgba(255, 255, 255, 0.2);
    padding: 6px 12px;
    font-size: 50px;
    font-weight: bold;
    line-height: 60px;
    border: 5px solid rgba(255, 255, 255, 0.2);
    text-transform: uppercase;

    &.active {
      border-color: red;
      color: white;
    }
  }
</style>