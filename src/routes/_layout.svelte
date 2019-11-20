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
    font-family: "DM Sans", sans-serif;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  main {
    width: 100%;
    height: 120vh;
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
</div>
