<script>
  import Button from "./Button.svelte";
  export let segment;
</script>

<style>
  nav {
    font-weight: 300;
    padding-top: 1em;
    width: var(--base-width);
    z-index: 2;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }

  ul.outer-nav {
    justify-content: space-between;
  }

  ul.inner-nav {
    align-items: center;
    padding-bottom: 1.55em;
    color: #666;
  }

  ul.inner-nav a {
    margin: 0 5px;
    font-size: 15px;
  }

  @media (max-width: 820px) {
    nav {
      width: calc(var(--base-width) + 120px);
    }
  }
  @media (max-width: 520px) {
    ul.outer-nav {
      justify-content: center;
    }
    ul.inner-nav {
      display: none;
    }
  }

  li {
    display: block;
    float: left;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }

  a.logo > * {
    font-family: "Kepler Black";
    font-size: 2.65em;
  }

  svg {
    margin-left: 11px;
    margin-right: 4px;
    transform: translateX(0px);
    transition: transform 200ms linear;
  }
  .cta:hover svg {
    transform: translateX(6px);
  }
  .cta {
    font-weight: bold;
    margin-left: 20px;
  }
</style>

<nav>
  <ul class="outer-nav">
    <li>
      <a class="logo" href=".">
        <h3>Junoon</h3>
      </a>
    </li>
    <ul class="inner-nav">
      <li>
        <a href="https://medium.com/@sjafferi" target="_blank">Blog</a>
      </li>
      <li>
        <a href="https://app.junoon.io/agenda?login=true">Login</a>
      </li>
      <li class="cta">
        <Button href="https://app.junoon.io?sample=true">
          View example
          <svg
            width="12"
            height="12"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.00004 0.333328L5.82226 1.51111L10.4778
              6.16666H0.333374V7.83333H10.4778L5.82226 12.4889L7.00004
              13.6667L13.6667 6.99999L7.00004 0.333328Z"
              fill="white" />
          </svg>
        </Button>
      </li>
    </ul>
  </ul>
</nav>
