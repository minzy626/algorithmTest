function solution(arr, divisor) {
    let answer = [];
    arr=arr.sort((a,b)=>a-b)
    for(let i=0;i<arr.length;i++){
        arr[i]%divisor===0?answer.push(arr[i]):null
    }
    answer.length>0?answer:answer.push(-1)
    return answer;
}
