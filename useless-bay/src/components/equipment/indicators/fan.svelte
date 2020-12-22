<script type="ts">
  import { isFanOn } from '../../../store'
  import LowerIndicator from '../lower-indicator.svelte';
</script>

<LowerIndicator title="Fan" imageClass="fan" isActive={$isFanOn} />