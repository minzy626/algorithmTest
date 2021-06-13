function solution(a, b) {
    let answer = 0;
    
    for(let i=0;i<a.length;i++){
        answer=sum(answer,a[i],b[i]);
    }
    return answer;
}
const sum = (sum,pre, next)=>{
    return sum+(pre*next);
}