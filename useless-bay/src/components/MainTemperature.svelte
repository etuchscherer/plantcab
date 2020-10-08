<div class="outer-wrapper p-1 flex">
  <div class="inner-wrapper h-full">
    <div class="flex flex-col h-full">
      <div class="lead-text mx-auto">Internal Temperature</div>
      <div class="temperature mx-auto">87°F</div>
      <div class="flex flex-row text-xs mx-2 mt-3 items-stretch">
        <div class="unit-indicator m-0 px-1 active">°F</div>
        <div class="unit-indicator m-0 mx-1 px-1">°C</div>
        <div class="filler flex-grow" />
        <div class="inline-flex manual-mode-indicator px-1 upcase active">Manual Mode Engaged</div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">

  .upcase {
    text-transform: uppercase;
  }

  .indicators {
    // font-size: 22px;
    color: red;
  }

  .unit-indicator, .manual-mode-indicator {
    color: rgba(255,255,255, 0.2);
    border: 2px solid rgba(255,255,255, 0.2);

    &.active {
      color: #72BF44;
      border-color: #72BF44;
    }
  }

  .temperature {
    font-size: 154px;
    font-family: "NeutraDemi";
    text-transform: uppercase;
    font-weight: bold;
    color: #72BF44;
    max-height: 120px;
    line-height: 154px;

    &.danger {
      color: #ED1C24;
    }

    &.cold {
      color: #00AeFF;
    }
  }

  .lead-text {
    font-size: 25px;
    text-transform: uppercase;
    font-weight: bold;
    color: #FFE293;
  }

  .outer-wrapper {
    border: 2px solid #00AEEF;
    border-radius: 29px;
    background-color: black;
  }

  .inner-wrapper {
    border: 5px solid rgba(0,174,239, 0.5);
    border-radius: 23px;
  }
</style>