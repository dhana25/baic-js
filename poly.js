const arr = [1,2,3,4];

// console.log(arr.map(item => item * 2))

// console.log(arr.filter(item => item !== 2))

//polyfil
// if(!Array.prototype.myMap){
//     Array.prototype.myMap = function(fn) {
//         const rep = []
//         for(i=0;i<this.length;i++){
//             const val = fn(this[i])
//             rep.push(val)
//         }
//         return rep
//     }
// }
// console.log(
// arr.myMap(item => item * 2))


if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(fn) {
        const rep = []
        for(i=0;i<this.length;i++){
            const val = fn(this[i])
            if(val){
                 rep.push(this[i])
            }
        }
        return rep
    }
}
console.log(
arr.myFilter(item => item !== 2))
