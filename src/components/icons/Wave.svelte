<script>
  export let colors;
</script>

<style>
  .wave {
    position: relative;
    height: 100%;
    width: 100%;
  }
  svg:first-child {
    transform: rotate(180deg) scaleX(-1);
  }
  svg:last-child {
    height: 10vh;
    transform: rotate(180deg);
    position: absolute;
    bottom: -60px;
    left: 0;
  }
  @media (orientation: portrait) {
    svg:last-child {
      display: none;
    }
  }
  @media (max-width: 650px) {
    svg:last-child {
      display: none;
    }
  }
</style>

<div class="wave">
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox={`0 0 1500 800.000000`}>
    <defs>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color: {colors[0]}; stop-opacity: 1" />
        <stop offset="100%" style="stop-color: {colors[1]}; stop-opacity: 1" />
      </linearGradient>
    </defs>
    <g
      transform="translate(0.000000,800.000000) scale(0.200000,-0.150000)"
      fill="url(#grad2)"
      stroke="none">
      <path
        d="M2 5228 c2 -1525 5 -2630 8 -2454 l5 318 90 -113 c500 -630 957 -1109
        1370 -1435 893 -707 1737 -874 2502 -497 125 61 267 151 422 267 118 87
        196 130 325 175 302 107 720 161 1241 161 236 0 278 -4 670 -65 582 -91
        823 -115 1145 -115 388 0 643 46 1700 305 300 73 608 147 685 164 440 95
        762 121 1026 85 152 -21 413 -20 554 1 336 50 669 178 967 373 l88 57 0
        2773 0 2772 -6400 0 -6400 0 2 -2772z" />
    </g>
  </svg>
  <svg
    fill={colors[0]}
    xmlns="http://www.w3.org/2000/svg"
    width="120%"
    height="100%"
    viewBox="0 0 100 100"
    preserveAspectRatio="none">
    <path d="M0 100 C40 0 60 0 100 100 Z" />
  </svg>
</div>
