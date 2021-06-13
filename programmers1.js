function solution(participant, completion) {
    let answer = '';
    participant=participant.sort();
    completion =completion.sort();
//     answer =participant.filter(itm =>!completion.includes(itm))
//                        .join();
//     if(answer){
//         return answer;
//         //완주자가 참가자보다 적은데 리턴값이 0보다 크면 잘걸러낸거
//     }else{
//         answer=participant.find((itm,index)=>completion.indexOf(itm)!==index)
//         if(answer)return answer
//         else return participant[participant.length-1]
        
//     }//완주자가 참가자보다 적은데 리턴값이 0이면 동명이인이 있으므로 동명이인 찾아야함
    
    for(let i=0;i<completion.length;i++){
        if(completion[i]!==participant[i]) return participant[i];
    }
    return participant[participant.length-1]
}