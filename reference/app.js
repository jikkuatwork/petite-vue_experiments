import {
  createApp,
  reactive,
} from "https://cdn.jsdelivr.net/npm/petite-vue@0.4.1/+esm"

import { Cell } from "./components/Toggle.js"

const store = reactive({
  isOn: { value: true },
  toggle() {
    this.isOn.value = !this.isOn.value
  },
  themeColor: { value: "green-400" },
  toggleTheme() {
    if (this.themeColor.value == "green-400") {
      this.themeColor.value = "pink-300"
    } else {
      this.themeColor.value = "green-400"
    }
  },
})

export const Button = ({
  handleClick = () => console.log("Item Click!"),
} = {}) => {
  const label = "Toggle Theme"

  const $template = /* HTML */ `
    <div class="">
      <div
        class="p-2 bg-yellow-300 rounded cp select-none"
        @click="handleClick"
      >
        {{ label }}
      </div>
    </div>
  `
  return { $template, label, handleClick }
}

createApp({
  Cell,
  Button,
  store,
}).mount()
