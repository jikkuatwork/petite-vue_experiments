export const Ballot = ({ n }) => {
  return {
    vote: n,
    $template: /* HTML */ `
      <div
        class="p-2 text-white bg-black bg-opacity-10 flex gap-2 justify-center items-center rounded-lg mt-6"
      >
        <div
          @click="d"
          class="px-3 py-1 bg-black rounded select-none cursor-pointer"
        >
          -
        </div>
        <div class="font-mono w-6 text-center">{{ vote }}</div>
        <div
          @click="i"
          class="px-3 py-1 bg-black rounded select-none cursor-pointer"
        >
          +
        </div>
      </div>
    `,
    i() {
      this.vote++
    },
    d() {
      this.vote--
    },
  }
}
