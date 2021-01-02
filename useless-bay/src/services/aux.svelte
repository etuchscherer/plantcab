<script lang="ts" context="module">
  import { toggle } from '../utils/restApi.svelte'

  /**
   * Blindly toggles the aux, from whatever state the api currently
   * thinks it's in.
   */
  export function toggleLight() {
    toggle({ name: 'aux' });
  }
</script>
