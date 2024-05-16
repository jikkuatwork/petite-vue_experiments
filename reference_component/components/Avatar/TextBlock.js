export function TextBlock({ title, subtitle }) {
  return {
    title,
    subtitle,
    $template: /* HTML */ `
      <div class="text-center">
        <h2 class="text-lg font-bold">{{ title }}</h2>
        <p class="text-sm text-white text-opacity-60">{{ subtitle }}</p>
      </div>
    `,
  }
}
