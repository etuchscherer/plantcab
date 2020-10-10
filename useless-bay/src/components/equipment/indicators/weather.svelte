<div class="triangle-wrapper relative">
  <svg height="265" width="265">
    <polygon points="0,0 265,0 265,265" style="fill:black;" />

    <!-- fat blue line -->
    <polyline points="0,0 3,0 265,262 265,265" style="fill:none;stroke:black;stroke-width:5;stroke-linecap:round" />
    <polyline points="0,0 3,0 265,262 265,265" style="fill:none;stroke:rgba(0,174,239, 0.3);stroke-width:5;stroke-linecap:round" />

    <!-- grey triangles -->
    <polygon points="15,0 265,0 265,250" style="fill:black;stroke:rgba(255,255,255,0.15);stroke-width:2;" />
    <polygon points="32,7 258,7 258,233" style="fill:black;stroke:black;stroke-width:5;" />
    <polygon points="32,7 258,7 258,233" style="fill:black;stroke:rgba(255,255,255,0.15);stroke-width:5;" />

    <!-- gold triangle lines -->
    <polyline points="4,7 259,262" style="stroke:black;stroke-width:5" />
    <polyline points="4,14 251,261" style="stroke:#FDB913;stroke-width:5;stroke-linecap:round" />
    <polyline points="1,16 245,261" style="stroke:black;stroke-width:3;" />


    <polyline points="0,18 238,257" style="stroke:black;stroke-width:2" />
    <polyline points="0,18 238,257" style="stroke:rgba(253, 185, 19, 0.6);stroke-width:2" />

    Sorry, your browser does not support inline SVG.
  </svg>

  <div class="external-data mr-4 mt-3">
    <div class="flex flex-row">
      <div class="flex flex-col p-2 pt-5">
        <div class="text-white date text-right">06/23/2020</div>
        <div class="time text-right">8:26 am</div>
      </div>
      <div class="flex flex-col p-2 right-col right-col items-center">
        <div class="sun rotate" />
        <div class="text-white external-temp-tag text-center mt-2">External Temp</div>
        <div class="text-yellow-100 external-temp">86°</div>
      </div>
    </div>
  </div>
</div>

<style type="text/scss">

  .rotate {
    animation: rotation 30s infinite linear;
  }

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

  .sun {
    height: 65px;
    width: 65px;
    background-image: url("/assets/images/sun.png");
    background-size: contain;
  }
  .triangle-wrapper {
    position: absolute;
    top: 4px;
    right: 4px;
    z-index: 9999;
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