let w = new WeakSet()
let a= {name : 'Tarak', age: 42}
w.add(a)

console.log(w)
global.gc()
console.log(w)


a = null
global.gc()
console.log(w)
