function solution(dartResult) {
    let answer = 0;
    let regExp =/([0-9]+[SDT])?([\*\#])*/g;
    let scores =dartResult.split(regExp).filter(itm=> {if(itm)return itm});
    let regSpc =/[\*\#]/;
    let sum=0;
    let num =0;
    let str =0;
    let pre=0;
    for(let i=0;i <scores.length;i++){
        if(!regSpc.test(scores[i])){
            if(scores[i].length>2){
                num=10;
                str=stringToNum(scores[i][2]);
            }else{
                num =Number(scores[i][0]);
                str =stringToNum(scores[i][1]);
            }
            sum=Math.pow(num,str);
            scores[i]=sum;
        }
    }
    let idx=0;
    for(let i=0;i<scores.length;i++){
        if(regSpc.test(scores[i])){
            answer=specialString(scores[i],answer,pre)
            if(idx>2&&scores[i]==="*")answer=answer-scores.find(itm=>itm>-1);
        }else{
            idx++;
            answer+=scores[i]
            pre=scores[i];
        }
    }
    
    return answer;
}
const specialString =( str, answer,score) =>{
    console.log(str, answer,score)
    if(str==='*'){
        return answer*2;
    }else{
        return answer -score + score * (-1) ;
    }
}

const stringToNum =(str)=>{
    if(str==='S') return 1;
    if(str==='D') return 2;
    if(str==='T') return 3;
}
