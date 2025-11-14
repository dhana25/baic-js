var arr = [2,43,5,7,-3,5,9]

let negative = false;

for(i=0;i<arr.length;i++){
   // console.log(arr[i])
    if(arr[i] < 0){
        negative = true
        break;
    }
}

//console.log(negative)

const _min = arr.some((item) => {
    return item < 0
})

console.log(_min)

const _max = arr.every((item) => {
    return item < 0
})

console.log(_max)