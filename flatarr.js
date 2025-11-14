const flatarr = [1, 2, 4, [5, [7, 9], 0, [6]]];

let formatArr = [];

function flat(arrnum) {
    console.log()
    arrnum.forEach((item) => {
        if (Object.prototype.toString.call(item) === '[object Array]') {
            flat(item)
        }else{
            formatArr.push(item)
        }
    })
}

flat(flatarr)

console.log(formatArr)
