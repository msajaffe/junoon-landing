<script>
  import Header from "../components/Header.svelte";
  import Banner from "../components/Banner.svelte";
  import Values from "../components/Values.svelte";

  export let segment;
  export let baseWidth = "70%";
  export let backgroundColor = "#ffeee3";
</script>

<style>
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    font-family: "Proxima Nova", Arial, sans-serif;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  main {
    width: 100%;
    height: 160vh;
  }
  section {
    display: flex;
    justify-content: center;
    padding: 1em;
  }
  @media (max-width: 650px) {
    section {
      padding: 0;
    }
  }
  :global(.noselect) {
    -webkit-touch-callout: none;
    /* iOS Safari */
    -webkit-user-select: none;
    /* Safari */
    -khtml-user-select: none;
    /* Konqueror HTML */
    -moz-user-select: none;
    /* Firefox */
    -ms-user-select: none;
    /* Internet Explorer/Edge */
    user-select: none;
    /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
  }
  .ph-cta {
    position: fixed;
    right: 10px;
    bottom: 10px;
    z-index: 2;
  }
  @media (max-width: 500px) {
    .ph-cta {
      bottom: 105px;
    }
  }
</style>

<div class="container" style="--base-width: {baseWidth}">
  <Header {baseWidth} />

  <main>
    <slot />
    <section>
      <Banner />
    </section>
    <section class="values">
      <Values />
    </section>
  </main>
  <a
    class="ph-cta"
    href="https://www.producthunt.com/posts/junoon-digital-agenda-accountability?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-junoon-digital-agenda-accountability"
    target="_blank">
    <img
      src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=178416&theme=light"
      alt="Junoon - Digital Agenda & Accountability - Personal growth with a
      systems approach | Product Hunt Embed"
      style="width: 250px; height: 54px;"
      width="250px"
      height="54px" />
  </a>
</div>
