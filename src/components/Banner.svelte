<script>
  import Wave from "./icons/Wave.svelte";
</script>

<style>
  .banner-left {
    max-width: 550px;
    padding: 0.1em;
    z-index: 2;
  }

  h1 {
    text-align: center;
    margin: 0 auto;
    font-family: "DM Sans", sans-serif;
    font-size: 3.5em;
    font-weight: 700;
    letter-spacing: 1.5px;
    line-height: 57px;
  }

  .bg-wave {
    position: absolute;
    top: 31vh;
    left: -23vw;
    z-index: 1;
    width: 125vw;
    height: 120vh;
  }
  @media (max-width: 1500px) {
    .bg-wave {
      top: 20vh;
    }
  }
  @media (max-width: 1135px) {
    .bg-wave {
      top: 15vh;
    }
  }
  @media (max-width: 650px) {
    h1 {
      width: 375px;
      font-size: 3.5em;
    }
    .bg-wave {
      height: 90vh;
    }
  }
  @media (max-width: 600px) and (orientation: portrait) {
    h1 {
      font-size: 3em;
      width: 300px;
    }
  }
</style>

<div class="banner-left">
  <h1>Navigate the complexities of life</h1>
  <!-- <h3>Plan, measure, analyze.</h3> -->
</div>

<div class="bg-wave">
  <Wave colors={['#f5f6f9', '#f5f6f9']} />
</div>

<!-- <div class="banner-right">
  <h4>
    Try editing this file (src/routes/index.svelte) to test live reloading.
  </h4>
  <form class="banner-form">
    <input type="text" />
    <button type="submit">Get Started</button>
  </form>
  <p>
    <strong>
      Try editing this file (src/routes/index.svelte) to test live reloading.
    </strong>
  </p>
</div> -->
