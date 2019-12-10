<script>
  import Wave from "./icons/Wave.svelte";
  import Button from "./Button.svelte";
  import Responsive from "./Responsive.svelte";
  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  let email = "";
  $: isEmailValid = !!emailRegex.exec(email);
</script>

<style>
  .banner {
    padding: 0.1em;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
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

  h3 {
    margin-top: 20px;
    font-size: 20px;
    line-height: 38px;
    color: #555;
    text-align: center;
    max-width: 95vw;
  }

  .bg-wave {
    position: absolute;
    top: 43vh;
    left: -23vw;
    z-index: 1;
    width: 125vw;
    height: 120vh;
  }
  .mobile.bg-wave {
    transform: rotate(180deg);
    top: 0;
    left: 0;
    height: 40vh;
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
    .signup-cta {
      width: 90% !important;
    }
  }
  @media (max-width: 375px) and (orientation: portrait) {
    h1 {
      font-size: 26px;
      width: 300px;
    }
  }

  .signup-cta {
    width: 100%;
    display: flex;
    margin-top: 50px;
    max-width: 95vw;
  }
  .signup-cta input {
    font-size: 20px;
    height: 50px;
    width: 70%;
    padding: 0 10px;
    border: 1px solid #929292;
    border-right: none;
    border-radius: 3px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .signup-cta :global(.signup-cta-btn) {
    padding: 0.5em 0;
    border-radius: 3px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    width: 30%;
    text-align: center;
    font-size: 20px;
  }
</style>

<div class="banner">
  <h1>
    <span>Systematize</span>
    <br />
    your personal growth
  </h1>

  <h3>
    <span>Research-based suite of tools enabling</span>
    planning, analysis and accountability
  </h3>

  <div class="signup-cta">
    <input
      required
      type="email"
      bind:value={email}
      placeholder="Enter your email" />
    <Button
      theme="dark"
      className="signup-cta-btn"
      disabled={!isEmailValid}
      href={`https://app.junoon.io?login=true&email=${email}`}>
      Sign up
    </Button>
  </div>
</div>

<Responsive>
  <div slot="desktop" class="bg-wave">
    <Wave colors={['#f5f6f9', '#f5f6f9']} />
  </div>
  <div slot="mobile" class="bg-wave mobile">
    <Wave colors={['#f5f6f9', '#f5f6f9']} />
  </div>
</Responsive>
