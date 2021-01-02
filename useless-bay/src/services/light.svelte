<script lang="ts" context="module">
  import { toggle } from '../utils/rest-api.svelte'

  /**
   * Blindly toggles the light, from whatever state the api currently
   * thinks it's in.
   */
  export function toggleLight() {
    toggle({ name: 'light' });
  }
</script>
