<script lang="ts">
    import { equipmentStateManager } from '../../store'
    import { toggleFan } from '../../services/fan.svelte'
    import IndicatorBorder from '../equipment/indicators/borders/single-border.svelte'
    import LockoutIndicator from '../equipment/indicators/lockout.svelte'
    import Button from './button.svelte'
    import WarningIndicator from './warning-indicator.svelte'

    export let pageName: string = '';

    let isLockedOut: boolean= false;

    function doToggle() {
        toggleFan();
    }
</script>

<IndicatorBorder classes="m-1" pageName={pageName}>
    <div class="container uppercase h-full" slot="main-slot">
        <div class="flex flex-row h-full">
            <div class="flex flex-col h-full p-1 pl-0">
                <div class="flex label big uppercase">Fan <WarningIndicator classes="ml-2" size="md" isActive="{false}" /></div>
                <div class:active="{$equipmentStateManager.toggled.fan}" class="image-fan" />
            </div>
            <IndicatorBorder borderWidth="thin" pageName={pageName} classes="my-1 mr-1">
                <div slot="main-slot" class="flex flex-col">
                    <div class="label text-center my-2 uppercase">
                        Master
                        <div class="flex flex-row items-baseline">
                            <div class="flex flex-col">
                                <Button bind:isActive="{$equipmentStateManager.toggled.fan}" label="power" classes="my-1 mx-1" debounceTimer={150} on:toggle={doToggle} />
                                <LockoutIndicator classes="my-1 mx-1" isLockedOut={isLockedOut} />
                            </div>
                            <div class="flex flex-col">
                                <LockoutIndicator classes="my-1 mx-1" isLockedOut={isLockedOut} />
                                <LockoutIndicator classes="my-1 mx-1" isLockedOut={isLockedOut} />
                            </div>
                        </div>
                    </div>
                </div>
            </IndicatorBorder>
        </div>
    </div>
</IndicatorBorder>

<style lang="scss">
    .label {
        color: #00B9F2;

        &.big {
            font-size: 28px;
        }
    }

    .image-fan {
        height: 123px;
        width: 344px;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url('/assets/images/lower-indicators/fan.gif');

        &.active {
            background-image: url('/assets/images/lower-indicators/fan-on.gif');
        }
    }
</style>