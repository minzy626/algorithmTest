function solution(str1, str2) {
    let answer = 0;
    let arr1 =[];
    let arr2 =[];
    let regExp =/^[a-z]*$/
    str1 =str1.toLowerCase();
    str2 =str2.toLowerCase();
    if(str1===str2) return 65536;
    
    arr1=makeTwoLength(str1).filter(itm=>regExp.test(itm));
    arr2=makeTwoLength(str2).filter(itm=>regExp.test(itm));
    
    let dupl =arr1.filter(itm=>arr2.indexOf(itm)>-1);
    let cnt =0;
    let duplCopy = dupl.filter((itm,idx) => dupl.indexOf(itm)===idx);
    for(let i=0;i<duplCopy.length;i++){
        cnt+=duplCntCheck(duplCopy[i],arr1,arr2);
    }
    answer = Math.floor((cnt / (arr1.length+arr2.length-cnt))*65536);
    
    return answer;
}

const makeTwoLength = (str) =>{
    let result =[];
    for(let i=0;i<str.length-1;i++){
        result.push(str.slice(i,i+2));
    }
    
   return result;
}

const duplCntCheck =(target,arr1,arr2) =>{
     let a = arr1.filter(itm =>itm===target).length;
     let b = arr2.filter(itm =>itm===target).length;
     return a>b?b:a;
}
