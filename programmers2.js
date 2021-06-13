function solution(absolutes, signs) {
    let answer = 0;
    for(let i=0;i<absolutes.length;i++){
        answer =sum(answer,absolutes[i],signs[i]);
    }
    return answer;
}

const sum = (pre,next, bool) => {
    if(bool){
        return pre+next;
    }else{
        return pre+(-1)*next;
    }
   
}