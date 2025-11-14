function abc(){
    console.log('creating object')
}

let myfun = () => {
    console.log('creating new object')
}


new abc()
myfun()


let youtube = {
    channel:'UI GEM',
    greet1: function () {
        console.log(this.channel)
    },
    greet2:() => {
        console.log(this.channel)
    }
}

youtube.greet1()
youtube.greet2()

