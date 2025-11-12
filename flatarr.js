const flatarr = [1, 2, 4, [5, [7, 9], 0, [6]]];

let formatArr = [];

function flat(arrnum) {
    arrnum.forEach((item) => {
        if (Array.isArray(item)) {
            flat(item)
        }else{
            formatArr.push(item)
        }
    })
}

flat(flatarr)

console.log(formatArr)
