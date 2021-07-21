function solution(s) {
    let answer = s.length%2!==0?s[Math.floor(s.length/2)]:s.slice(Math.floor(s.length/2)-1,Math.floor(s.length/2)+1);
    
    return answer;
}
