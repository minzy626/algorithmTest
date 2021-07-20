function solution(s) {
    let answer = "";
    let sToNum ={
       "zero":"0","one":"1","two":"2","three":"3","four":"4","five":"5"
      ,"six":"6","seven":"7","eight":"8","nine":"9"}
    let numbers =["0","1","2","3","4","5","6","7","8","9"]
    let word ="";
    for(let target of s){
        if(numbers.includes(target)){
            answer+=target
        }else{
            word+=target;
            if(numbers.includes(sToNum[`${word}`])){
                answer+=sToNum[`${word}`];
                word="";
            }
        }
    }
    
    return Number(answer);
}
