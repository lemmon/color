<script>
import range from '$lib/range'

const colors = [
  { name: 'red', hue: 355, sat: 80, before: '#FF4136', done: true },
  { name: 'orange', hue: 25, sat: 90, before: '#FF851B', done: true },
  { name: 'yellow', hue: 55, sat: 90, before: '#FFDC00', done: true },
  { name: 'green', hue: 130, sat: 65, before: '#2ECC40', done: true },
  { name: 'teal', hue: 175, sat: 70, before: '#39CCCC', done: true },
  { name: 'cyan', hue: 190, sat: 80, done: true },
  { name: 'blue', hue: 220, sat: 80, before: '#0074D9', done: true },
  { name: 'indigo', hue: 265, sat: 80, done: true },
  { name: 'purple', hue: 280, sat: 80, before: '#B10DC9', done: true },
  { name: 'pink', hue: 325, sat: 80, before: '#F012BE', done: true },
  { name: 'ruby', hue: 340, sat: 80, done: true },
]
const min = 2
const max = 8
const width = 5
const height = 4

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
        <div style="width: 3rem; height: 2rem;" />
        <div style="width: 3rem; height: 2rem;" />
        <div style="width: 3rem; height: 2rem;" />
        {#each range(min, max) as i}
          <div class="f2 ac" style="width: 3rem; line-height: {height}rem;">{i * 10}%</div>
        {/each}
      </div>
      {#each colors as color}
        <div class="col gap025">
          <div class="f2 ac mt05" style="width: {width}rem; line-height: 1.5rem; height: 1.5rem;"
            >{#if color.done}✔{/if}</div
          >
          <div class="f2 ac mt05" style="width: {width}rem; line-height: 1.5rem;">{color.name}</div>
          <div class="f2 ac mb05" style="width: {width}rem; line-height: 1.5rem;">{color.hue}&deg; / {color.sat}%</div>
          {#each range(min, max) as i}
            {@const lum = i * 10}
            <div
              class="border-radius2 f2 white ac"
              style="width: {width}rem; line-height: {height}rem; background-color: hsl({color.hue} {color.sat}% {lum}%);"
              on:click={() => copyColor(color.hue, color.sat, lum)}>#{hex(color.hue, color.sat, lum)}</div
            >
          {/each}
        </div>
      {/each}
    </div>
    <hr class="div gray lum90 my2" />
    <div class="row gap025">
      <div class="col gap025">
        <div class="f2 ac" style="width: 3rem; line-height: {height}rem;" />
      </div>
      {#each colors as color}
        <div class="border-radius2 f2 overflow-clip">
          <div style="width: {width}rem; height: {height}rem; background-color: hsl({color.hue} {color.sat}% 50%);" />
          <div style="width: {width}rem; height: {height}rem; background-color: {color.before};" />
        </div>
      {/each}
    </div>
  </div>
</section>
