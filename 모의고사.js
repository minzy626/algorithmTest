function solution(answers) {
    let answer = [];
    let arr1 = [1,2,3,4,5];
    let arr2 = [2,1,2,3,2,4,2,5];
    let arr3 = [3,3,1,1,2,2,4,4,5,5];
    let answercnt =[];
    answercnt.push(answerCheck(answerDiv(answers,5),arr1));
    answercnt.push(answerCheck(answerDiv(answers,8),arr2));
    answercnt.push(answerCheck(answerDiv(answers,10),arr3));
    let max =answercnt.reduce((a,b)=>Math.max(a,b));
    answercnt.forEach((itm,idx) => max===itm?answer.push(idx+1):null )
    return answer;
}
const answerDiv = (answers,cnt) => {
    let temp =[];
    if(answers.length<=cnt) return [answers];
    for(let i=0;i<answers.length;i++){
        let a =answers.slice(i,i+cnt);
        i=i+cnt-1;
        temp.push(a)
    }
    return temp;
}

const answerCheck =(answerList, myAnswer) =>{
    let cnt =0;
    for(let answer of answerList ){
        for(let i=0;i<answer.length;i++)
            if(answer[i]===myAnswer[i]) cnt++
    }
    return cnt;
}

