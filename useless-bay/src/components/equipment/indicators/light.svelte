<script type="ts">
  import { isLightOn } from '../../../store'
  import LowerIndicator from '../lower-indicator.svelte'
</script>

<LowerIndicator title="Light" imageClass="light" size="half-pint" isActive={$isLightOn} />