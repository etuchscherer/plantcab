<script lang="ts" context="module">
import { dataset_dev } from 'svelte/internal';

  /// <reference path="../types/useless-bay.d.ts">
  import type * as UselessBayTypes from 'UselessBayTypes'
  import { equipmentStateManager } from '../store'

  interface equipmentStateOptions {
    name: string,
    data: UselessBayTypes.toggledResponse
  }

  interface equipmentWarningOptions {
    name: string,
    description: string
  }

  export function setEquipmentState({ name, data }: equipmentStateOptions) {
    equipmentStateManager.update(oldState => {
      console.log(oldState);
      const newState = oldState;
      newState.toggled[name] = data.isEnergized;
      return newState;
    })
  }

  export function setEquipmentWarning({ name, description }: equipmentWarningOptions) {
    equipmentStateManager.update(oldState => {
      const newState = oldState;
      const warnings = oldState.warning[name].description;
      warnings.push(description);

      newState.warning[name] = {
        isActive: true,
        description: warnings
      }
      return newState;
    });
  }

  export function clearEquipmentWarning({ name }: { name: string }) {
    console.log('clear all warnings for ', name);
    equipmentStateManager.update(oldState => {
      const newState = oldState;
      newState.warning[name] = {
        isActive: false,
        description: []
      };

      return newState;
    });
  }
</script>