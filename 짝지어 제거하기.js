function solution(s)
{   
    s=s.split("");
    
    return removeDupl(s);
}
const checkDupl = (s) => {
    if(s.length===0) return 1;
    let cnt =0;
    for(let i=0;i<s.length-1;i++){
        if(s[i]===s[i+1]){
            return removeDupl(s)
        }
    }
    return cnt;
}
const removeDupl =(s) => {
    for(let i=0;i<s.length-1;i++){
        if(s[i]===s[i+1]){
            s.splice(i,2);
            i=i-2;
        }
    }
    return checkDupl(s);
}
