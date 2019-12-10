<script>
  import { stores } from "@sapper/app";
  import UAParser from "ua-parser-js";

  // session is passed in server.js
  const { preloading, page, session } = stores();
  var parser = new UAParser();
  parser.setUA($session["user-agent"]);

  let mobile = parser.getResult().device["type"] == "mobile";
</script>

{#if mobile}
  <slot name="mobile" />
{:else}
  <slot name="desktop" />
{/if}
