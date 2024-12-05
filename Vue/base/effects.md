###### Effects and depdendency


components or functions are called effects/dependency of a reactive obj(ref, reactive, computed).
Dependency Tracking:
When a reactive value (like a ref or a computed property) is accessed within a reactive context (e.g., a template or another computed property), the current active effect (the function or component that's currently being evaluated) is recorded as a dependency.
This active effect is essentially added to the dependency list of the reactive value.

Triggering Updates:
Whenever the reactive value changes, the system iterates through its dependency list and triggers the re-evaluation of all dependent effects.
This ensures that components or parts of the application that rely on the changed value are updated accordingly.