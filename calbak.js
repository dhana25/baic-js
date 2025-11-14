function cbexamp(num,cb){
    var i;
    for(i=0;i<num;i++){
        console.log(i)
    }
    cb(i)
}

cbexamp(12,(lat) => {
    console.log("lat number ", lat)
})