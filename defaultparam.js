function double(val) {
    return  val * 2
}


function defaultt(num, num2 = double(num)){
    console.log(num2)
}

defaultt(2)