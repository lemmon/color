const ref = {}

document.body.appendChild(
  <div class="minvh row">
    <div class="span1 p3 col br bc-black-10">
      <div
        class="ma"
        style={{ width: '12rem', height: '12rem' }}
        $ref={(el) => (ref.$preview = el)}
      />
    </div>
    <div style="width: 20rem;" class="width1 bg-black-05">
      <div class="p3">
        <input type="text" $ref={(el) => (ref.$input = el)} />
      </div>
    </div>
  </div>
)
window.placeholder.remove()

ref.$input.oninput = ({ target }) => {
  ref.$preview.style.backgroundColor = target.value.trim()
}

ref.$input.onblur = ({ target }) => {
  target.value = target.value.trim()
}
