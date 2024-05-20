/*
 * Petite Vue Reference Component Implementation
 *
 * Specs:
 * 1. Must return an object & should have `export`
 * 2. Will receive arguments as object
 * 3. Returned object *must* have all variables and functions needed in the template
 * 4. Component can have local state but mostly it will be a PURE component
 * 5. Component will not depend on anything other than tailwind (v2.2.19) utility classes
 * 6. `$template`'s value will be prepended by `\/* HTML *\/` for prettier
 * 7. Props must have default values, with functions logging arguments
 * 8. All state will be managed outside the component
 * 9. Classes can be programattically generated but will
 *
 * */

export const Toggle = ({
  isOn = { value: false },
  handleChange = () => console.log("state: ", isOn),
  themeColor = "red-600",
} = {}) => {
  const $template = /* HTML */ `
    <!-- Enabled: "bg-{{ themeColor }}", Not Enabled: "bg-gray-200" -->
    <button
      @click="handleChange"
      type="button"
      :class="{ [\`bg-${themeColor} focus:ring-${themeColor}\`] : isOn.value, 'bg-gray-200': !isOn.value }"
      class=" relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2  focus:ring-offset-2"
      role="switch"
      aria-checked="false"
    >
      <span class="sr-only">Use setting</span>
      <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
      <span
        aria-hidden="true"
        :class="{ 'translate-x-5': isOn.value, 'translate-x-0': !isOn.value }"
        class=" pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
      ></span>
    </button>
  `

  return {
    isOn,
    handleChange,
    themeColor,
    $template,
  }
}
