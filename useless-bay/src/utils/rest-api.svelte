<script lang="ts" context="module">
   /// <reference path="../types/useless-bay.d.ts">
  import { setEquipmentState, setEquipmentWarning } from './equipment.svelte'
  import { apiOptions } from '../store'
  import type * as MyTypes from 'UselessBayTypes';

  interface ToggleOptions {
    name: string
  }

  /**
   * Toggles a piece of equipment, such as a light,
   * and sets application state.
   * @param name name of the equipment, ex: 'fan'
   */
  export async function toggle({ name }: ToggleOptions): Promise<MyTypes.toggledResponse> {
    const { host, port } = apiOptions;
    const method = 'POST';
    const url = `//${host}:${port}/toggle/${name}`;
    let response;
    let body;

    try {
      response = await fetch(url, { method });
    } catch (e) {
      console.error('bad response from server', e);

      if (e = "TypeError: failed to fetch") {
        setEquipmentWarning({ name, description: e });
      }

      return;
    }

    try {
      body = await response.json();
    } catch (e) {
      console.error('error decoding response json', e);
      return;
    }

    setEquipmentState({ name, data: body });
    return body;
  }
</script>