<script>
import range from '$lib/range'

const _colors = [
  3, // red
  180, // teal
  197, // aqua
  208, // blue
  292, // purple
  330, // maroon
]
const colors = [
  355, // red
  25, // orange
  55, // yellow
  115, // green
  175, // teal
  205, // blue
  265, // indigo
  280, // purple
  325, // pink
  340, // ruby
]
const sats = [
  80, // red
  90, // orange
  90, // yellow
  70, // green
  80, // teal
  80, // blue
  80, // indigo
  80, // purple
  80, // pink
  80, // ruby
]
const shift = 0
const min = 3
const max = 7
const width = 5
const height = 5

function hex(h, s, l) {
  l /= 100
  const a = (s * Math.min(l, 1 - l)) / 100
  const f = (n) => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0') // convert to Hex and prefix "0" if needed
  }
  return `${f(0)}${f(8)}${f(4)}`
}

function copyColor(h, s, l) {
  navigator.clipboard.writeText(hex(h, s, l))
}
</script>

<section class="ma">
  <div class="p1">
    <div class="row gap025">
      <div class="col gap025">
        <div style="width: 3rem; height: 3rem;" />
        {#each range(min, max) as i}
          <div class="f2 ac" style="width: 3rem; line-height: {height}rem;">{i * 10}%</div>
        {/each}
      </div>
      {#each colors as color, i}
        {@const hue = color + shift}
        {@const sat = sats[i]}
        <div class="col gap025">
          <div class="f2 ac" style="width: {width}rem; line-height: 3rem;">{hue}&deg;</div>
          {#each range(min, max) as i}
            {@const lum = i * 10}
            <div
              class="border-radius2 f2 white ac"
              style="width: {width}rem; line-height: {height}rem; background-color: hsl({hue} {sat}% {lum}%);"
              on:click={() => copyColor(hue, sat, lum)}>#{hex(hue, sat, lum)}</div
            >
          {/each}
        </div>
      {/each}
    </div>
  </div>
</section>
