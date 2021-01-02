<script lang="ts" context="module">
  /// <reference path="../types/useless-bay.d.ts">
  import type * as UselessBayTypes from 'UselessBayTypes'
  import { equipmentStateManager } from '../store'

  interface equipmentStateOptions {
    name: string,
    data: UselessBayTypes.toggledResponse
  }

  export function setEquipmentState({ name, data }: equipmentStateOptions) {
    equipmentStateManager.update(oldState => {
      console.log(oldState);
      const newState = oldState;
      newState.toggled[name] = data.isEnergized;
      return newState;
    })
  }
</script>