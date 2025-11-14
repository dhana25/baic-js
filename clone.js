let obj = {x:10,y:20,z:NaN,a:function (){},v:{inn:6}}

//let obj1 = JSON.parse(JSON.stringify(obj));

//let obj1 = Object.assign({},obj,{w:3})

let obj1 = {...obj}
obj1.x = 11
obj1.v.inn = 8

console.log(obj)
console.log(obj1)
