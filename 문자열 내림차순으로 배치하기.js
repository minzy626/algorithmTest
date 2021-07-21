function solution(s) {
    let answer = '';
    s=s.split("").sort();
    let regEx =/[A-Z]/
    let upper =s.filter(itm =>regEx.test(itm));
    let lower =s.filter(itm =>!regEx.test(itm));
    for(let i=lower.length-1;i>=0;i--){
        answer+=lower[i];
    }
    for(let i=upper.length-1;i>=0;i--){
        answer+=upper[i]
    }
    return answer;
}
