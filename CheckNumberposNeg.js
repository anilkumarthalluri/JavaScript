function check(a,b){
    if((a>0 &&  b<0))
        return true;
    else if(a<0 && b>0)
    return true;
    else
    return false
}

console.log(check(5,-8))
console.log(check(2,6))
console.log(check(-2,6))
console.log(check(-2,-6))