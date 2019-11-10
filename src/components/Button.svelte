<script>
  export let href;
</script>

<style>
  a {
    padding: 0.75em 1em;
    text-decoration: none;
    font-size: 1.05em;
    color: white;
    background-color: rgba(247, 158, 48, 0.85);
    box-shadow: rgba(174, 100, 66, 0.35) 1px 2px 5px 0px;
    border-radius: 3px;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    transition: box-shadow 200ms ease 0s, background-color 200ms ease 0s;
  }

  a:hover {
    background-color: rgba(247, 158, 48, 0.7);
    box-shadow: rgba(174, 100, 66, 0.2) 4px 4px 9px 1px;
  }
</style>

<a {href} target="_blank">
  <slot />
</a>
