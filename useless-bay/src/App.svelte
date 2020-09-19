<script lang="ts">
  import { Router } from "@sveltech/routify";
  import { routes } from "@sveltech/routify/tmp/routes";
	import Tailwindcss from './Tailwindcss.svelte';
</script>

<Tailwindcss />
<Router {routes} />

<style type="text/scss">
  :global(html, body) {
    height: 100%;
  }
</style>