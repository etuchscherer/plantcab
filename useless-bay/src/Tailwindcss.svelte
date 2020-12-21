<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @font-face {
    font-family: NeutraText;
    src: url('/assets/fonts/NeutraText-Bold.otf');
  }

  @font-face {
    font-family: NeutraDemi;
    src: url('/assets/fonts/NeutraTextTFDemiAlt.otf')
  }

  *, html, body {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
    font-family: NeutraText;
  }

  .items-baseline {
    align-items: baseline;
  }

</style>