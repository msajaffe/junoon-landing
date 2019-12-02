<script>
  import Wave from "./icons/Wave.svelte";
</script>

<style>
  .banner-left {
    /* max-width: 550px; */
    padding: 0.1em;
    z-index: 2;
  }

  h1 {
    text-align: center;
    margin: 0 auto;
    font-family: "Proxima Nova", Arial, sans-serif;
    font-size: 50px;
    font-weight: 500;
    letter-spacing: 1.85px;
    line-height: 65px;
    font-kerning: none;
    -webkit-font-smoothing: antialiased;
  }

  h1 span {
    font-size: 65px;
  }

  h2 {
    font-size: 24px;
    line-height: 38px;
    color: #555;
    text-align: center;
  }

  .bg-wave {
    position: absolute;
    top: 32vh;
    left: -23vw;
    z-index: 1;
    width: 125vw;
    height: 120vh;
  }
  @media (max-width: 1135px) {
    .bg-wave {
      top: 20vh;
    }
  }
  @media (max-width: 650px) {
    h1 {
      width: 500px;
      font-size: 36px;
      line-height: 55px;
    }
    h1 span {
      font-size: 50px;
    }
    .bg-wave {
      height: 90vh;
    }
  }
  @media (max-width: 375px) and (orientation: portrait) {
    h1 {
      font-size: 26px;
      width: 300px;
    }
  }
</style>

<div class="banner-left">
  <h1>
    <!-- <span>Simple, easy and effective app</span> -->
    <span>Systematize</span>
    <br />
    your personal growth
  </h1>
  <!-- <h1>
    <span>Navigate the</span>
    <br />
    complexities of life
  </h1> -->
  <!-- <h2>Simple, easy and effective app to systematize your personal growth</h2> -->
  <!-- <h1>Navigate the complexities of life</h1> -->
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
