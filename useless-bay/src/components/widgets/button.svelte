<script lang="ts">
    import { debounce } from 'lodash';
    export let debounceTimer: number = 0;
    export let label: string = 'button';
    export let isActive: boolean = true;
    export let classes: string = '';

    const doToggle = debounce(e => {
        isActive = !isActive;
    }, debounceTimer);
</script>

<div class:active="{!!isActive}" class="container flex items-center justify-center {classes}" on:click={doToggle}>
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

    .container.active {
        background-color: rgba(114, 191, 68, 1)
    }

    span.label {
        font-size: 12px;
        color: white;
        background-color: transparent;
    }
</style>