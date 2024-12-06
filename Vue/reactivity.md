###### Reactivity

```
let s = computed(()=> {return isChecked.value ? "you typed scientist": 'you typed not a scientist'})
```
- whenever isChecked.value referenced, effect is added to deps list of 'isChecked'(RefImpl.deps = BaseComputedRef.effect)
    - BaseComputedRef.value = BaseComputedRef.effect()
- whenever isChecked is assigned, effect's are executed!
