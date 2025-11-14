let arr = [1,2,3,2,4,2,3];

// function remove(val){
//     let obj= {}
//     let newArr = [];
//     for(i=0;i<val.length;i++){
//         obj[val[i]] =  obj[val[i]]
//         if(newArr.indexOf(val[i]) == -1){
//             newArr.push(val[i])
//         }
//     }

//     console.log(Object.keys(obj))
//    // console.log(newArr)
// }

//remove(arr)

//without - built in 

function reDup(val){

    let obj = {};
    let narr = [];

   for(i=0;i<val.length;i++){
      if(!obj[val[i]]){
          obj[val[i]] = true
          narr.push(val[i])  
      }
   }
     console.log(narr)

}

reDup(arr)