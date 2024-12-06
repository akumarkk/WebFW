###### Vue
Composition API
- group together and reuse relavant functions, data etc

Options API
- using export default{ methods: {}, components:{}, data(){}, props:{}}

###### Vue ecosystem
Vueuse - collection of composables
UI libraries - headless UI, RadixUI, NuxtUI, PrimeUI
NuxtUI - full-stack vue framework



- displaying data using vue interolcation
- ref(), computed()
- conditional css classes
- binding form inputs to refs

###### Composable vs Option
Composition API
    Setup() - Provides a more flexible and composable way to manage data and logic.
    Uses ref() or reactive() to create reactive variables.
    can be shared across multiple components
    Explicit (ref(), reactive())
Options API
    Defines reactive data properties directly within a function.
    Relies on the this keyword to access these properties.

##### css classes
:class="{issci: isChecked, isnotsci: !isChecked}"

{ active: isActive, error: hasError }: This is an object literal, but it's used as an expression within the v-bind:class directive.
#####

