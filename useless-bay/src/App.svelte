<script lang="ts">
  import { Router, url } from "@sveltech/routify";
  import { routes } from "@sveltech/routify/tmp/routes";
	import Tailwindcss from './Tailwindcss.svelte';
</script>
<style>
	.custom-style {
		@apply italic;
	}
</style>
<Tailwindcss />
<Router {routes} />
