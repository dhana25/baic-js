let str = "***hello**world***";

let rex = /hello\**world/g

let rep = str.replace(rex,"hello world")

console.log(rep)