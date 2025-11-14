// let x = 5
// console.log(x)

// function abc(val){
//     val = 6
//     console.log(val)
// }
// abc(x)
// console.log(x)

// let x = {name:"program"}
// console.log(x)

// function abc(v){
//   v.name = "code"
//   console.log(v)
// }
// abc(x)
// console.log(x)


let one = {"name" : 'ui gem', "git":"vvcc"}

function create10(obj){
    let rep = [];
    for(i=1;i<11;i++){
        let newObj = {...obj}
        newObj.id = i
        rep.push(newObj)
    }
     console.log(rep)
}

create10(one)