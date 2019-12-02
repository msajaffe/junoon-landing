<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  let values = [
    {
      key: "agenda",
      title: "Plan - Digital Agenda",
      short: "Digital Agenda",
      description: "Super simple planning, week by week."
    },
    {
      key: "accountability",
      title: "Measure - Daily Review",
      short: "Daily Review",
      description: "Stay accountable with a daily review."
    },
    {
      key: "analysis",
      title: "Analyze - Metrics",
      short: "Metrics",
      description: "Measure what matters with metrics."
    }
  ];
  let current = "agenda",
    lastCarouselUpdatedAt;
  const CAROUSEL_INTERVAL = 4000;

  onMount(() => {
    setInterval(() => {
      if (
        !lastCarouselUpdatedAt ||
        Date.now() - lastCarouselUpdatedAt >= CAROUSEL_INTERVAL
      ) {
        let curr_idx = values.findIndex(({ key }) => current === key);
        current = values[++curr_idx % values.length].key;
        lastCarouselUpdatedAt = Date.now();
      }
    }, (CAROUSEL_INTERVAL + 10) / 2);
  });
</script>

<style>
  .values {
    z-index: 2;
  }

  .titles {
    display: flex;
    justify-content: center;
  }

  figure {
    margin: 0.5em 0 1em 0;
    padding: 1.25em;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    /* background: transparent; */
  }

  figure:hover {
    cursor: pointer;
    user-select: none;
    transition: background 120ms ease-in 0s;
    background: rgba(55, 53, 47, 0.025);
  }

  img {
    width: 300px;
  }

  .titles img {
    height: 200px;
    margin: 0 0 1em 0;
  }

  @media (max-width: 1200px) {
    .titles img {
      width: 30vw;
      height: 20vh;
    }
  }

  figcaption {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.25em;
    text-align: center;
    text-transform: capitalize;
    padding-bottom: 1px;
    max-width: 33vw;
  }

  figcaption p.title {
    width: fit-content;
  }
  figcaption p:last-child {
    padding-bottom: 2px;
    border-bottom: 1px solid rgba(0, 0, 0, 0);
    transition: border-bottom-color 225ms ease-in-out 0s;
  }

  figcaption p.title.short {
    display: none;
    margin: 5px 0;
  }

  figcaption p:last-child {
    font-size: 0.75em;
    text-transform: none;
    color: #787878;
  }

  figcaption p {
    margin: 10px 0;
    margin-top: 0;
  }

  figure.selected figcaption p:last-child {
    border-bottom-color: rgba(0, 0, 0, 1);
  }

  .preview {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .preview .mock-browser {
    position: relative;
    width: 70vw;
  }
  .preview img {
    width: 70vw;
    box-shadow: rgba(84, 70, 35, 0.15) 0px 2px 8px,
      rgba(84, 70, 35, 0.15) 0px 1px 3px;
    z-index: 1;
  }
  .preview img.value-img {
    position: absolute;
    opacity: 0;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: all 350ms ease-in-out;
  }
  .preview img.value-img.selected {
    opacity: 1;
  }
  @media (max-width: 750px) {
    figure {
      padding: 0.25em;
    }
    figcaption p.title.long {
      display: none;
    }
    figcaption p.title.short {
      display: block;
      font-size: 0.65em;
    }
    figcaption p {
      font-size: 1em;
    }
    figcaption p:last-child {
      font-size: 0.56em;
      width: 112px;
    }
  }
  @media (max-width: 320px) {
    figure {
      padding: 0.35em;
    }
    figcaption p:last-child {
      display: none !important;
    }
  }
  @media (min-width: 1500px) {
    .preview img {
      width: 60vw;
    }
  }
  @media (max-width: 1000px) and (orientation: portrait) {
    .preview .mock-browser {
      width: 95vw;
    }
    .preview img {
      width: 95vw;
    }
  }
</style>

<div class="values">
  <div class="titles">
    {#each values as value}
      <figure
        class={value.key === current ? 'selected' : ''}
        on:click={() => {
          current = value.key;
          lastCarouselUpdatedAt = Date.now();
        }}>
        <img alt={value.key} src="images/values/{value.key}-1.svg" />
        <figcaption>
          <p class="title long">{value.title}</p>
          <p class="title short">{value.short}</p>
          <p>{value.description}</p>
        </figcaption>
      </figure>
    {/each}
  </div>

  <div class="preview">
    <div class="mock-browser">
      <!-- <img
        src="images/values/previews/safari-toolbar.png"
        alt="Safari toolbar" /> -->
      {#each values as value}
        <img
          class="value-img {value.key === current ? 'selected' : ''}"
          alt={value.key}
          src="images/values/previews/{value.key}.png" />
      {/each}
    </div>
  </div>
</div>
