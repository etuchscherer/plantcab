<script lang="ts" context="module">
  import { toggle } from '../utils/restApi.svelte'

  /**
   * Blindly toggles the fan, from whatever state the api currently
   * thinks it's in.
   */
  export function toggleFan() {
    toggle({ name: 'fan' });
  }
</script>
