let abc = "madam";

function palin(rep){
    let left = 0;
    let rt = rep.length - 1

    while(left < rt){
        if(rep[left] !== rep[rt] ){
            return false
        }

        left++;
        rt--;
    }

    return true
}

console.log(
palin(abc));