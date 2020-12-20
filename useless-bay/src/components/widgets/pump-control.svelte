<script lang="ts">
    import IndicatorBorder from '../equipment/indicators/borders/single-border.svelte'
    import LockoutIndicator from '../equipment/indicators/lockout.svelte'
    import Button from './button.svelte'
    import WarningIndicator from './warning-indicator.svelte'

    export let pageName: string = '';

    let isActive: boolean = false;
    let isLockedOut: boolean= true;
</script>

<IndicatorBorder classes="m-1" pageName={pageName}>
    <div class="container uppercase h-full" slot="main-slot">
        <div class="flex flex-row h-full">
            <div class="flex flex-col h-full p-2">
                <div class="flex label big uppercase">Water pump <WarningIndicator classes="ml-2" size="md" isActive="{false}" /></div>
                <span class="temperature p-2">
                    67°
                </span>
                <div class:active="{isActive}" class="image-pump" />
            </div>
            <IndicatorBorder classes="my-2" pageName={pageName} borderWidth="thin">
                <div slot="main-slot" class="flex flex-col">
                    <div class="label text-center my-2 uppercase">
                        Master
                        <div class="flex flex-row items-baseline">
                            <div class="flex flex-col">
                                <Button bind:isActive="{isActive}" label="power" classes="my-1 mx-1" debounceTimer={150} />
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

    span.temperature {
        font-family: NeutraDemi;
        text-transform: uppercase;
        font-weight: bold;
        display: flex;
        color: black;
        font-size: 20px;
        border-radius: 7px;
        height: 36px;
        width: 44px;
        background-color: rgba(0, 174, 239, 0.5);
        justify-content: center;
        align-items: center;
    }

    .image-pump {
        height: 123px;
        width: 344px;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url('/assets/images/lower-indicators/pump-off.gif');

        &.active {
            background-image: url('/assets/images/lower-indicators/pump-on.gif');
        }
    }
</style>