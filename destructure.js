// var arr = [1,2,3,[5,6]];

// const [one,two] = arr

// console.log(one)

var obj = {o:1,t:2,th:{f:4}}

const {o,t} = obj

console.log(o)

function objh({g,d}) {
 console.log(g+d)
}
let abc = {g:20,d:56}
objh(abc)