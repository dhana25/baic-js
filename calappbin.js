function abc() {
    console.log(this)
}

let x = {
    a:10
}

bv = abc.bind(x)
bv()

const an = (x,y) => console.log( x) 

let cv = an.bind(null,10)
cv(4)