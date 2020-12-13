<script lang="ts">
    import CircleIndicators from './circle-indicator.svelte';
    export let label: string = 'indicator';

    export let hasPowerAvailable: boolean = false;
</script>

<div class="container flex items-center justify-center flex-col">
    <span class="label uppercase text-center">
        {label}
    </span>
    <div class="flex">
        <CircleIndicators size="tiny" isActive="{!hasPowerAvailable}" activeColor="red" />
        <CircleIndicators size="tiny" isActive="{hasPowerAvailable}" activeColor="green" />
    </div>
</div>

<style lang="scss">
    .container {
        height: 65px;
        width: 65px;
        background-color: rgba(71, 72, 72, 1)
    }

    span.label {
        max-width: 53px;
        background-color: transparent;
        color: white;
        font-size: 9px;
    }
</style>