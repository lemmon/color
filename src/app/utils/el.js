export default (tagName, props, ...children) => {
  // create element
  const el = document.createElement(tagName)
  // props
  if (props) {
    const { $ref, class: $class, style: $style, ...$props } = props
    // ref
    if ($ref) {
      $ref(el)
    }
    // class
    if (Array.isArray($class)) {
      el.classList.add(...$class)
    } else if ($class) {
      el.className = $class
    }
    // style
    if (typeof $style === 'string') {
      el.style = $style
    } else if ($style) {
      Object.assign(el.style, $style)
    }
    // attributes & values
    Object.entries($props).forEach(([key, val]) => {
      if (key.charAt(0) === '$') {
        el[key.substr(1)] = val
      } else if (typeof val === 'boolean') {
        el.toggleAttribute(key, val)
      } else {
        el.setAttribute(key, val)
      }
    })
  }
  // children
  children.forEach((child) => {
    el.appendChild(
      typeof child === 'string' ? document.createTextNode(child) : child
    )
  })
  // return element
  return el
}
