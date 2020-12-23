<script lang="ts">
  import { time, weather, isDaytime } from '../../../store'
  import { kelvinToF } from '../../../utils'
  import moment from 'moment';

  // We default to the dashboard colors
  export let fatInnerTriangleColor: string = '#FDB913';
  export let skinnyInnerTriangleColor: string = 'rgba(253, 185, 19, 0.6)';

  // @see https://home.openweathermap.org/api_keys
  const apiKey: string = '8260f045aec83a027b2e447a7dae49f8';
  const backgroundColor: string = '#000936';
</script>

<div class="triangle-wrapper relative">
  <svg height="265" width="265">
    <polygon points="0,0 265,0 265,265" style="fill:{backgroundColor};" />

    <!-- fat blue line -->
    <polyline points="0,0 3,0 265,262 265,265" style="fill:none;stroke:{backgroundColor};stroke-width:5;stroke-linecap:round" />
    <polyline points="0,0 3,0 265,262 265,265" style="fill:none;stroke:rgba(0,174,239, 0.3);stroke-width:5;stroke-linecap:round" />

    <!-- grey triangles -->
    <polygon points="15,0 265,0 265,250" style="fill:{backgroundColor};stroke:rgba(255,255,255,0.15);stroke-width:2;" />
    <polygon points="32,7 258,7 258,233" style="fill:{backgroundColor};stroke:{backgroundColor};stroke-width:5;" />
    <polygon points="32,7 258,7 258,233" style="fill:{backgroundColor};stroke:rgba(255,255,255,0.15);stroke-width:5;" />

    <!-- inner triangle lines -->
    <polyline points="4,7 259,262" style="stroke:{backgroundColor};stroke-width:5" />
    <polyline points="4,14 251,261" style="stroke:{fatInnerTriangleColor};stroke-width:5;stroke-linecap:round" />
    <polyline points="1,16 245,261" style="stroke:{backgroundColor};stroke-width:3;" />


    <polyline points="0,18 238,257" style="stroke:{backgroundColor};stroke-width:2" />
    <polyline points="0,18 238,257" style="stroke:{skinnyInnerTriangleColor};stroke-width:2" />

    Sorry, your browser does not support inline SVG.
  </svg>

  <div class="external-data mr-4 mt-3">
    <div class="flex flex-row">
      <div class="flex flex-col p-2 pt-5">
        <div class="text-white date text-right">{moment($time).format('L')}</div>
        <div class="time text-right lowercase">{moment($time).format('LT')}</div>
      </div>
      <div class="flex flex-col p-2 right-col right-col items-center">
        <div class:rotating-sun={isDaytime} class:moon={!isDaytime} />
        <div class="text-white external-temp-tag text-center mt-2">External Temp</div>
        {#await $weather}
          <div class="text-yellow-100 external-temp">fetching...</div>  
        {:then weather} 
          <div class="text-yellow-100 external-temp">{kelvinToF(weather.data.main.temp)}°</div>  
        {/await}
        
      </div>
    </div>
  </div>
</div>

<style type="text/scss">

  .right-col {
    width: 65px;
  }

  .external-temp {
    font-family: "NeutraDemi";
    font-size: 24px;
    color: #FDB913;
  }

  .external-temp-tag {
    font-family: "NeutraDemi";
    line-height: 10px;;
    font-size: 10px;
    text-transform: uppercase;
  }

  .date {
    font-size: 12px;
  }

  .time {
    font-size: 16px;
    font-weight: bold;
    color: #FDB913;
  }

  .rotating-sun {
    height: 65px;
    width: 65px;
    background-image: url("/assets/images/sun.png");
    background-size: contain;
    animation: rotation 30s infinite linear;
  }

  .moon {
    height: 65px;
    width: 65px;
    background-image: url("/assets/images/moon.png");
    background-size: contain;
    margin: 2px;
  }

  .triangle-wrapper {
    position: absolute;
    top: 4px;
    right: 4px;
    z-index: 9998;
  }
  .external-data {
    position: absolute;
    top: 4px;
    right: 4px;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
</style>