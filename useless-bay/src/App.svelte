<script lang="ts">
  import { Router } from "@sveltech/routify";
  import { routes } from "@sveltech/routify/tmp/routes";
  import Tailwindcss from './Tailwindcss.svelte';
</script>

<Tailwindcss />
<Router {routes} />

<style type="text/scss">
  @font-face {
    font-family: NeutraText;
    src: url('/assets/fonts/NeutraText-Bold.otf');
  }

  @font-face {
    font-family: NeutraDemi;
    src: url('/assets/fonts/NeutraTextTFDemiAlt.otf')
  }

  :global(html, body) {
    height: 100%;
    font-family: NeutraText;
  }
</style>