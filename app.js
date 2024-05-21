import {
  createApp,
  reactive,
} from "https://cdn.jsdelivr.net/npm/petite-vue@0.4.1/+esm"

import Card from "./components/Card.js"
import { experiments } from "./experiments.js"

const store = reactive({
  experiments,
})

createApp({ Card, store }).mount()
