function solution(arr)
{
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    //console.log('Hello Javascript')
    // for(let i=0;i<arr.length-1;i++){
    //     if(arr[i]===arr[i+1]) {
    //         arr.splice(i+1,1);
    //         i-=1; 
    //    }
    // }
    //=>시간초과ㅡㅡ
    let result =[];
    
    for(let i=0;i<arr.length;i++){
        check(arr[i],result);
    }
    
    return result;
}
const check = (target,result)=>{
    if(!result)result.push(target) 
    let istNum =result[result.length-1];
    if(istNum!==target)result.push(target);
    
    return result;
}
