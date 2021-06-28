function solution(n) {
    return transTarnary(n,'');
}

let transTarnary =(n,transNum)=>{
    let target =n;
    if(target===1) {
       return reverse(n+transNum);
    }
    else{
        target=Math.floor(n/3);
        transNum=(n%3)+transNum;
         return transTarnary(target,transNum);   
    }    
}

const reverse = (str) =>{
    let reverseStr =str.split('').reverse();
    
    return makeDnumber(reverseStr);
}

const makeDnumber =(arr) =>{
    let result=0;
    for(let i=arr.length-1;i>=0;i--){
        result+=Number(arr[arr.length-1-i])*Math.pow(3,i);
    }
    return result;
}


