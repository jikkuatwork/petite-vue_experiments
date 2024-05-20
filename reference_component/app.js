import {
  createApp,
  reactive,
} from "https://cdn.jsdelivr.net/npm/petite-vue@0.4.1/+esm"

import { Toggle } from "./components/Toggle.js"

const store = reactive({
  isOn: { value: true },
  toggle() {
    this.isOn.value = !this.isOn.value
  },
})

createApp({
  Toggle,
  store,
}).mount()
