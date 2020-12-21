<script lang="ts">
    import WarningIndicator from './warning-indicator.svelte'
    import Button from './button.svelte'

    let isActive: boolean = false;
    let isAuxActive: boolean = false;
</script>

<div class="relative">
    <svg
    class="ml-2"
    width="57.247196mm"
    height="53.027515mm"
    viewBox="0 0 57.247196 53.027516"
    version="1.1">
    <g
        transform="translate(-28.159223,-72.685165)">
        <path
        style="fill:none;stroke:#f5b913;stroke-width:1.32292"
        d="m 28.820683,75.746426 v 44.304794 c 0,2.93159 2.068417,5 5,5 h 50 l -50,-50.499998 c -1.410229,-1.785937 -5,-1.736379 -5,1.195204 z"
        />
    </g>
    </svg>
    <div class="absolute reposition">
        <div class="flex flex-col useable-space justify-between">
            <WarningIndicator classes="ml-2" size="md" isActive={false} />
            <Button bind:isActive={isActive} label="disable" size="half" classes="my-1" debounceTimer={150} />
            <div class="flex flex-row items-center">
                <img src="/assets/images/12v-on.png" />
                <p class:active={isAuxActive} class="test-button ml-2 text-white flex justify-center items-center uppercase">
                    aux
                </p>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    .useable-space {
        height: 145px;
        width: 170px;
    }

    .reposition {
        top: 45px;
        left: 20px;
    }

    .test-button {
        height: 31px;
        width: 31px;
        background-color: rgba(255, 255, 255, 0.1);
        font-size: 12px;
        border-radius: 50%;
        border: 1px solid #FFF;

        &.active {
            background-color: #72bf44;
        }

    }
</style>