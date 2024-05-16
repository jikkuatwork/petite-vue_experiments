import { Ballot } from "./Ballot.js"
import { TextBlock } from "./TextBlock.js"
import { Image } from "./Image.js"

export function Avatar({ title, subtitle, url, initialVote }) {
  return {
    textBlock: TextBlock({ title: title, subtitle: subtitle }),
    ballot: Ballot({ n: initialVote }),
    image: Image({ url: url }),
    $template: /* HTML */ `
      <div
        class="p-4 bg-gray-100 t bg-opacity-10 text-white shadow rounded-lg mb-2 border border-yellow-300 border-opacity-10 hover:border-opacity-60"
        style="min-width: 180px;"
      >
        <div v-scope="image"></div>
        <div v-scope="textBlock"></div>
        <div v-scope="ballot"></div>
      </div>
    `,
  }
}
