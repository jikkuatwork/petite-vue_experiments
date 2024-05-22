import {
  createApp,
  reactive,
} from "https://cdn.jsdelivr.net/npm/petite-vue@0.4.1/+esm"

import Input from "https://rough.toolbomber.com/pv/Input.js"

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
  url: { value: "helo" },
  submit() {
    const remoteComponent = { type: "remote", value: this.url.value }
    this.components.push(remoteComponent)

    const last = this.components.length - 1
    this.loadComponent(last)
  },
  components: [
    { type: "local", value: Example },
    {
      type: "remote",
      value: "https://rough.toolbomber.com/pv/Avatar/index.js",
    },
    { type: "local", value: CounterExample },
  ],
  dynamicComponent: null,
  async loadComponent(_index = null) {
    const index =
      _index == null ? this.index.value % this.components.length : _index
    const _component = this.components[index]
    if (_component.type == "local") {
      this.dynamicComponent = _component.value
    } else {
      const module = await import(/* @vite-ignore */ _component.value)
      this.dynamicComponent = module.default
    }

    this.refreshComponent()
  },
  refreshComponent() {
    const target = document.querySelector("#dynamic-component")
    target.remove()

    const componentContainer = document.querySelector("#component-container")
    componentContainer.innerHTML = `<div id="dynamic-component" v-scope="store.dynamicComponent()"></div>`
    createApp({ store, Input }).mount("#app")
  },
  cycle() {
    this.index.value++
    this.loadComponent()
  },
})

store.loadComponent()

createApp({ store, Input }).mount("#app")
