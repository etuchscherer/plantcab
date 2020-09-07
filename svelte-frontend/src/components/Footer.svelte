<script>
  import { Router, Link } from 'svelte-routing';

  export let url: string = "";
</script>

<style>
  footer {
    background-color: black;
    color: white;
  }
</style>

<footer>
  <Router url="{url}">
    <nav>
      <Link to="/reports">Reports</Link>
      <Link to="/main">Main</Link>
      <Link to="/maintenance">Maintenance</Link>
    </nav>
    <!-- <Route path="/"><Main /></Route> -->
  </Router>
</footer>