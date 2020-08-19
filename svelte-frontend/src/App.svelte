<script lang="ts">

  import { Router, Link, Route } from 'svelte-routing';
  import Main from './routes/Main.svelte';

  export let url: string = "";
</script>

<Router url="{url}">
  <nav>
    <Link to="/reports">Reports</Link>
    <Link to="/main">Main</Link>
    <Link to="/maintenance">Maintenance</Link>
  </nav>
  <Route path="/main" component="{Main}"></Route>
  <!-- <Route path="/"><Main /></Route> -->
</Router>