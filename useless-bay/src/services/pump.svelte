<script lang="ts" context="module">
  import { toggle } from '../utils/rest-api.svelte'

  /**
   * Blindly toggles the pump, from whatever state the api currently
   * thinks it's in.
   */
  export function togglePump() {
    toggle({ name: 'pump' });
  }
</script>
