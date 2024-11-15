export function hello(who:string = "world"):string {
    // fastify plugin
    return `hello ${who}!`;
}

let v = hello();
console.log(v, process.argv);

 hello();
