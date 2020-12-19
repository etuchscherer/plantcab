<script lang="ts">
    import IndicatorBorder from '../equipment/indicators/borders/single-border.svelte';

    export let pageName: string = '';
</script>

<IndicatorBorder pageName="{pageName}" >
    <div slot="main-slot" class="container uppercase">
        <p>
            Set desired max temp
        </p>
        <hr>
        <p>
            Set desired low temp
        </p>
    </div>
</IndicatorBorder>

<style lang="scss">
    .container {
        max-width: 148px;
        color: rgba(253, 185, 19, 1);
        font-size: 16px;
    }

    hr {
        height: 1px;
        border: none;
        background-color: rgba(253, 185, 19, 1);
    }
</style>