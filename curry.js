function curry(...num) {
    return num.reduce((a, c) => a + c, 0)
}


const curryy = (...num) => num.reduce((a, c) => a + c, 0);

// console.log(
//     curry(5, 10, 15))


 function add(a){
    return function(b){
        if(b!== undefined){
            return add(a+b)
        }else {
            return a
        }
    }
 }  

 const _curry = (a) =>  (b) =>  (b!== undefined) ? _curry(a+b) : a 

 const ad = a => b => (b!== undefined) ? ad(a+b) : a 
 

 console.log(
 _curry(1)(2)())

