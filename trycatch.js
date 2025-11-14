function prom() {
    //return Promise.resolve(10)
    return Promise.reject("Api Error")
}

(async function abc(){

    let rep = await prom().catch(err => console.error(err))
    console.log(rep)
    // try{
    //      let rep = await prom()
    //      console.log(rep)
    // }catch(err){
    //      console.error(err)
    // }
   
    
})()

