import { createApp, reactive } from "https://cdn.skypack.dev/petite-vue@0.4.1"
import { getRatio } from "./getRatio.js"

function Row({ tickers, key, editMode, handleRemove }) {
  const state = reactive({
    editMode,
    text: "loading...",
    ratio: null,
    isLoading: false,
  })

  async function updateRatio() {
    if (state.ratio === null && !state.isLoading) {
      state.isLoading = true
      try {
        const newRatio = await getRatio(...tickers)
        state.text = `1 ${tickers[0]} = ${newRatio} ${tickers[1]}`
        state.ratio = newRatio
      } catch (error) {
        state.text = "Error loading ratio"
      } finally {
        state.isLoading = false
      }
    }
  }

  return {
    ...state,
    key,
    remove() {
      handleRemove(key)
    },
    CloseButton,
    updateRatio,
    $template: /* HTML */ `
      <div class="rounded flex items-center w-full">
        <div class="w-full bg-yellow-200 p-2 font-mono">{{ text }}</div>
        <div
          v-scope="CloseButton({ show: editMode, key, handler: remove })"
        ></div>
      </div>
    `,
  }
}

const CloseButton = ({ show, key, handler }) => ({
  show,
  key,
  remove: handler,
  $template: /* HTML */ `
    <div
      v-show="show.value"
      @click="remove"
      class="bg-red-600 p-2 cp hover:bg-red-700"
    >
      x
    </div>
  `,
})

function Button({ label }) {
  return {
    label,
    $template: /* HTML */ `
      <div class="s p-2 rounded bg-green-100 flex cp select-none">
        {{ label }}
      </div>
    `,
  }
}

function Rows({ pair_sets, editMode, handleRemove }) {
  return {
    editMode,
    handleRemove,
    pair_sets,
    $template: /* HTML */ `
      <div
        v-for="pair in pair_sets"
        :key="pair.key"
        v-scope="Row({ tickers: pair.tickers, key: pair.key, editMode, handleRemove })"
        class="flex flex-col gap-2"
        @vue:mounted="updateRatio()"
      ></div>
    `,
  }
}

const randomKey = () => Math.floor(1000 * Math.random())

const sample = array => array[Math.floor(Math.random() * array.length)]

const store = reactive({
  show: { value: false },
  pair_sets: [
    { tickers: ["BTC", "ETH"], key: 0, ratio: null },
    { tickers: ["ETH", "ETC"], key: 1, ratio: null },
    { tickers: ["SOL", "FTM"], key: 89, ratio: null },
  ],
  pop() {
    this.pair_sets.pop()
  },
  add() {
    const cryptos = () => sample(["XRP", "ZEC", "BNB", "TON", "FTM", "SOL"])
    this.pair_sets.push({
      tickers: [cryptos(), cryptos()],
      key: randomKey(),
      ratio: null,
    })
  },
  remove(key) {
    const index = this.pair_sets.findIndex(item => item.key === key)
    if (index !== -1) {
      this.pair_sets.splice(index, 1)
    }
  },
  toggleEdit() {
    this.show.value = !this.show.value
  },
})

createApp({ Button, store, Rows, Row }).mount()
