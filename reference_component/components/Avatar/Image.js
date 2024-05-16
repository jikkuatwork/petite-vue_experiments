export function Image({ url }) {
  return {
    url: url,
    $template: /* HTML */ `
      <div class="flex justify-center my-4">
        <img :src="url" alt="Avatar" class="w-24 h-24 rounded-full shadow-lg" />
      </div>
    `,
  }
}
