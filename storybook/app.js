import {
  createApp,
  reactive,
} from "https://cdn.jsdelivr.net/npm/petite-vue@0.4.1/+esm"

let Example = () => {
  const label = "Hello"
  const $template = /* HTML */ `
    <div class="">
      <div class="p-2 bg-yellow-300 rounded">{{ label }}</div>
    </div>
  `
  return { $template, label }
}

let CounterExample = () => {
  const label = "Yo Man!"
  const $template = /* HTML */ `
    <div class="">
      <div class="p-2 bg-red-600 rounded">{{ label }}</div>
    </div>
  `
  return { $template, label }
}

const store = reactive({
  index: { value: 0 },
  components: [
    { type: "local", value: Example },
    { type: "local", value: CounterExample },
    {
      type: "remote",
      value: "https://rough.toolbomber.com/pv/Avatar/index.js",
    },
  ],
  dynamicComponent: null,
  async loadComponent() {
    const _component =
      this.components[this.index.value % this.components.length]
    if (_component.type == "local") {
      this.dynamicComponent = _component.value
    } else {
      const module = await import(_component.value)
      this.dynamicComponent = module.default
    }

    this.refreshComponent()
  },
  refreshComponent() {
    const target = document.querySelector("#dynamic-component")
    target.remove()

    const componentContainer = document.querySelector("#component-container")
    componentContainer.innerHTML = `<div id="dynamic-component" v-scope="store.dynamicComponent()"></div>`
    createApp({ store }).mount("#app")
  },
  cycle() {
    this.index.value++
    this.loadComponent()
  },
})

store.loadComponent()

createApp({ store }).mount("#app")
