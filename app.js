import {
  createApp,
  reactive,
} from "https://cdn.jsdelivr.net/npm/petite-vue@0.4.1/+esm"

import Card from "./components/Card.js"

const store = reactive({
  experiments: [
    { key: 0, title: "props", subTitle: "prop drilling", url: "/props/" },
    {
      key: 1,
      title: "reference",
      subTitle: "context for ChatGPT",
      url: "/reference/",
    },
    {
      key: 2,
      title: "storybook",
      subTitle: "dynamic loading of remote components",
      url: "/storybook/",
    },
  ],
})

createApp({ Card, store }).mount()
