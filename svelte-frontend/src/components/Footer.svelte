<script lang="ts">
  import {
    link,
    Router,
    createHistory,
    createMemorySource,
  } from "svelte-navigator";

  const memoryHistory = createHistory(createMemorySource());
  const { navigate } = memoryHistory;
</script>

<style type="text/scss">
  main {
    color: green
  }
  footer {
    background-color: black;
    color: white;

    a:visited, a:link, a:hover {
      color: red;
    }
  }
</style>

<h1 class="main">foo</h1>
<footer>
  <Router history="{memoryHistory}">
    <a class="main-link" href="/" use:link="{navigate}">Reports</a>
    <a class="main-link" href="/" use:link="{navigate}">Main</a>
    <a class="main-link" href="/" use:link="{navigate}">Maintenance</a>
  </Router>
</footer>