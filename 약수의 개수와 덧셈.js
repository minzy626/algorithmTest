function solution(left, right) {
    let answer = 0;
    for(let i=left ; i<=right ; i++){
        answer+=findFactorCnt(i)
    }
    return answer;
}

const findFactorCnt =(num) =>{
    let cnt =0;
    for(let i=1;i<=num;i++){
        if(num%i===0)cnt++;
    }
    if(cnt%2!==0) num=num*(-1);
    return num;
}
