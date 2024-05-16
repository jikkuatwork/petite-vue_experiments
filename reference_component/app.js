import { createApp } from "https://unpkg.com/petite-vue@0.2.2/dist/petite-vue.es.js"

import { store } from "./store.js"
import { Avatar } from "./components/Avatar/index.js"

createApp({
  Avatar,
  store,
}).mount()
