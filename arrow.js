function out(){
    this.a = 10
    setTimeout(function()  {
        console.log("in",this.a)
    }.bind(this))
    setTimeout(() =>  {
        console.log("in",this.a)
    })
    console.log("val",this.a)
}

out()
