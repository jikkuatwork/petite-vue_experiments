/*
 * Petite Vue Reference Component Implementation
 *
 * Specs:
 * 01. Must return an object & should have `export`
 * 02. Will receive arguments as object
 * 03. Returned object *must* have all variables and functions needed in template
 * 04. Component can have local state but mostly it will be a PURE component
 * 05. Component will not depend on anything except tailwind (v2.2.19)
 * 06. `$template`'s value will be prepended by `\/* HTML *\/` for prettier
 * 07. Props must have default values & function's default values should log arguments
 * 08. All state will be managed outside the component
 * 09. Classes can be generated: code needs to be provided as functions in *key values* for `:class`
 * 10. All dynamic values in `$template` must be returned by the function
 * 11. If another component is referenced in a template, it should be included in the return object (eg: Toggle is returned in Cell)
 *
 * */

export const Toggle = ({
  isOn = { value: false },
  handleChange = () => console.log("state: ", isOn),
  themeColor = { value: "red-600" },
} = {}) => {
  const $template = /* HTML */ `
    <!-- Enabled: "bg-{{ themeColor }}", Not Enabled: "bg-gray-200" -->
    <button
      @click="handleChange"
      type="button"
      :class="{ [buttonOn()] : isOn.value, 'bg-gray-200': !isOn.value }"
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
    buttonOn() {
      return `bg-${themeColor.value} focus:ring-${themeColor.value}`
    },
  }
}

export const Cell = ({ isOn, handleChange, themeColor } = {}) => {
  const label = "Hello"

  const $template = /* HTML */ `
    <div class="w-full p-4 bg-gray-100">
      <div
        v-scope="Toggle({isOn: isOn, handleChange: handleChange, themeColor: themeColor})"
      ></div>
    </div>
  `
  return {
    $template,
    label,
    Toggle,
    isOn,
    handleChange,
    themeColor,
  }
}
