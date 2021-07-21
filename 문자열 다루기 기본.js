function solution(s) {
    let regEx =/[^0-9]/g;
    return !regEx.test(s)&&(s.length===4||s.length===6);
}
