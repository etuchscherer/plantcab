<script lang="ts">
    export let label: string = 'Lockout';
    export let isLockedOut: boolean = true;
    export let classes: string = '';
</script>

<div class:locked-out="{!!isLockedOut}" class="container flex items-center justify-center {classes}">
    <span class="label uppercase">
        {label}
    </span>
</div>

<style lang="scss">

    .container {
        height: 65px;
        width: 65px;
        background-color: rgba(237, 28, 36, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .container.locked-out {
        background-color: rgba(237, 28, 36, 1)
    }

    span.label {
        font-size: 12px;
        color: white;
        background-color: transparent;
    }
</style>