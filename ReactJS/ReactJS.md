###### Pizza project

- webpack module bundler
- entry point into proj - index.js
- strict mode - checks for outdated api's

- Debugging
    - components(Dev tools)
- JSX
    - html + JS + css
    - babel - converts JSX to JS
    - js mode {} - returns values
    - states not allowed - if/else, for, switch
    - allowed - arr of objs, ternary operator, map()
    - JSX results in JS expression, which can be assigned/passed as params
    ```
    const el = <h1> welcome to pizza store </h1>

    const el = React.createElement("h1", null, "welcome to pizza store")
    ```
- comp - building blocks of react; piece of ui, like lego pieces
    - file per comp
    - pass data b/w comps props
    - assets in public folder - webpack module bundler
    - comp = Data, Logic, Appearance



- Imperative vs Declarative
    Imperative - manual DOM element selection and traversing
            - step-by-step dom manipulation until we reach the desired Ui
    Declarative - describe what ui should like using JSX
        - data, props/states

- js in html enclosed {} expr.\
- seperation of concerns
    - css
    - JS
    - html
    -> logic and ui 'are tightly coupled so JSX

    - one comp per file


- JSX styling
    - style obj in style prop
    - css prop camel case
    - module bundler injects imported css files

- Props
    - props order not imp
    - props camelCased
    - pass data down comp tree - one-way data flow; angular two-way data flow;
    - props args to JS function
    - props read-only/immutable
    - passed from enclosing comp
    - mutating props would affect parent, creating side effects(not pure)
    - comp have to be pure fn in terms of props and states; this allows rjs to optimize appsm makes app predictable
States
    - internal comp data, updated by comp.
    - state mutates
    - 

