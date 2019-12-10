<script>
  export let href, className, disabled;
  export let theme = "orange";
  const themes = {
    orange: {
      background: "rgba(247, 158, 48, 0.85)",
      "box-shadow": "rgba(174, 100, 66, 0.35) 1px 2px 5px 0px"
    },
    dark: {
      background: "#333",
      "box-shadow": "rgba(174, 100, 66, 0.35) 1px 2px 5px 0px"
    }
  };
  function jsonToCss(styles) {
    return (
      Object.entries(styles)
        .map(style => style.join(": "))
        .join(";") + ";"
    );
  }
</script>

<style>
  .link {
    margin: 0;
    padding: 0.75em 1em;
    text-decoration: none;
    font-size: 1.05em;
    color: white;
    border-radius: 3px;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    transition: box-shadow 200ms ease 0s, background-color 200ms ease 0s;
  }

  .link.orange {
    background: rgba(247, 158, 48, 0.85);
    box-shadow: rgba(174, 100, 66, 0.35) 1px 2px 5px 0px;
  }
  .link.orange:hover {
    background-color: rgba(247, 158, 48, 0.7);
    box-shadow: rgba(174, 100, 66, 0.2) 4px 4px 9px 1px;
    cursor: pointer;
  }

  .link.dark {
    background: #333;
    box-shadow: rgba(107, 107, 107, 0.35) 1px 2px 5px 0px;
  }

  @media (min-width: 500px) {
    .link.dark:hover {
      background: rgb(107, 107, 107);
      box-shadow: rgba(107, 107, 107, 0.2) 1px 2px 5px 0px;
      cursor: pointer;
    }
  }

  .link.disabled {
    cursor: not-allowed !important;
  }

  .link:not(.disabled):active {
    opacity: 0.75;
    transform: translateY(2px);
  }
</style>

{#if disabled}
  <p class={className + ` link ${theme} noselect disabled`}>
    <slot />
  </p>
{:else}
  <a {href} class={className + ` link ${theme} noselect`} target="_blank">
    <slot />
  </a>
{/if}
