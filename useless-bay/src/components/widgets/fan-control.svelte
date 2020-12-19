<script lang="ts">
    import IndicatorBorder from '../equipment/indicators/borders/single-border.svelte'
    import LockoutIndicator from '../equipment/indicators/lockout.svelte'
    import Button from './button.svelte'

    export let pageName: string = '';

    let isActive: boolean = false;
    let isLockedOut: boolean= false;
</script>

<IndicatorBorder classes="m-1 mr-2" pageName={pageName}>
    <div class="container uppercase h-full" slot="main-slot">
        <div class="flex flex-row h-full">
            <div class="flex flex-col h-full">
                <div class="label big uppercase">Fan</div>
                <div class:active="{isActive}" class="image-fan" />
            </div>
            <IndicatorBorder pageName={pageName}>
                <div slot="main-slot" class="flex flex-col">
                    <div class="label uppercase">
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