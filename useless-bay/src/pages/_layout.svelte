<script>
  import { url } from "@sveltech/routify";
</script>

<div class="flex h-full">
  <div class="flex flex-col justify-evenly bg-black h-full mx-auto">
    <section class="outer-border outer-dimensions flex flex-row justify-center items-center">
      <div class="flex  justify-center items-center inner-border inner-dimensions">
        <slot></slot>
      </div>
    </section>

    <footer class="flex flex-row justify-between">
      <a class="footer-link" href={$url('./reports')}>Reports</a>
      <div class="flex flex-col justify-evenly items-center failure-indicators">
        <div class="failure-indicator">
          !excess heat alert!
        </div>
        <div class="failure-indicator">
          !equipment failure!
        </div>
      </div>
      <a class="footer-link" href={$url('./main')}>Main</a>
      <a class="footer-link" href={$url('./maintenance')}>Maintenance</a>
    </footer>
  </div>
</div>

<style type="text/scss">

  :global(html, body) {
    height: 100%;
  }

  .h-custom {
    height: 565px;
  }

  .inner-border {
    border: 5px solid rgba(0,174,239, 0.3);
  }

  .inner-dimensions {
    width: 1120px;
    height: 540px;
  }

  .outer-border {
    border: 5px solid rgba(0, 174, 239, 0.5);
  }

  .outer-dimensions {
    width: 1145px;
    height: 565px;
  }

  .failure-indicators {
    background-color: rgba(255, 255, 255, 0.1);
    font-size: 27px;
    font-weight: bold;
  }

  .failure-indicators {
    width: 280px;
  }

  footer {
    height: 80px;
  }

  .footer-link {
    color: rgba(255, 255, 255, 0.2);
    padding: 0px 22px;
    font-size: 50px;
    line-height: 70px;
    border: 5px solid rgba(255, 255, 255, 0.2);
  }
</style>