const prom = new Promise((res,rej) => {
    res(1)
})

prom.then((data) => {
    console.log(data)
    return data + 1
}).then((data) => {
    console.log(data)
    return data + 1
}).then((data) => {
    throw new Error("Api error")
    console.log(data)
}).catch(err => {
    console.log(err)
})