const prom = new Promise((res, rej) => {
    setTimeout(() => {
        res(0)
    }, 1000)
});

// prom.then((data) => {
//     console.log(data)
//     return data + 1
// }).catch((err) => {
//     console.log(err)
// })

//convert exec order

(async function() {
    console.log('a')
    let pro = await prom;
    console.log(pro)
    console.log('b')
})();



