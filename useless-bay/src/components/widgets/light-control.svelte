<script lang="ts">
    import { equipmentStateManager } from '../../store'
    import { clearEquipmentWarning } from '../../utils/equipment.svelte'
    import { toggleLight } from '../../services/light.svelte'
    import SingleBorder from '../equipment/indicators/borders/single-border.svelte'
    import WarningIndicator from './warning-indicator.svelte'
    import Button from './button.svelte'
    import LockoutIndicator from '../equipment/indicators/lockout.svelte'

    export let pageName: string = 'main';

    let isLockedOut: boolean= false;

    function doToggle() {
        toggleLight();
    }

    function resetWarn() {
      clearEquipmentWarning({ name: 'light' });
    }
</script>

<SingleBorder pageName="{pageName}" classes="ml-1">
    <div slot="main-slot" class="flex flex-row bg-transparent">
        <div class="flex flex-col items-center ml-1">
            <div class="flex label uppercase">
                Light
                <!-- TODO: adding the clear warn fn here is a filthy hack - to circumvent a design deficiency -->
                <div on:click={resetWarn}>
                  <WarningIndicator classes="ml-2" size="md" isActive="{$equipmentStateManager.warning.light.isActive}" />
                </div>
            </div>
            <Button bind:isActive="{$equipmentStateManager.toggled.light}" label="power" classes="my-1" debounceTimer={150} on:toggle={doToggle} />
            <LockoutIndicator isLockedOut={isLockedOut} />
        </div>
        <div class="flex flex-row items-end">
            <div class:active="{$equipmentStateManager.toggled.light}" class="image-light" />
        </div>
    </div>
</SingleBorder>

<style lang="scss">
    .label {
        font-size: 28px;
        color: #00B9F2;
    }

    .image-light {
        width: 148px;
        height: 100%;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url('/assets/images/lower-indicators/light-off.gif');

        &.active {
            background-image: url('/assets/images/lower-indicators/light-on.gif');
        }
    }
</style>