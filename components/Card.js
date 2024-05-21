export default ({
  title = "props",
  subTitle = "prop drilling",
  url = "/props/",
} = {}) => {
  const $template = /* HTML */ `
    <a :href="url">
      <div
        class="p-2 bg-green-400 bg-opacity-70 hover:bg-opacity-90 t rounded cp select-none w-full"
        @click="handleClick"
      >
        <div class="font-bold">{{ title }}</div>
        <div class="">{{ subTitle }}</div>
      </div>
    </a>
  `
  return { $template, title, subTitle, url }
}
