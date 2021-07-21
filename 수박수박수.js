function solution(n) {
    let answer = '';
    let word='수박';
    answer =makeSentence(word,Math.floor(n/2));
    n%2!==0?answer+="수":answer;
    return answer;
}
const makeSentence =(word,cnt)=>{
    let result="";
    for(let i=0;i<cnt;i++){
        result+=word;
    }
    return result;
}
