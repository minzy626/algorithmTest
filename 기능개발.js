function solution(progresses, speeds) {
    let answer = [];
    let speedsPerDay =transSpeed(progresses,speeds);
    let cnt=1;
    for(let i=0;i<speedsPerDay.length-1;i++){
        if(speedsPerDay[i]<speedsPerDay[i+1]){
            answer.push(cnt);
            cnt=1;
        }else{
            cnt++;
        }
    }
    answer.push(cnt);
    return answer;
}

const transSpeed =(progresses,speeds) =>{
    let temp=[];
    for(let i=0;i<progresses.length;i++){
        let rest =100-progresses[i];
        temp.push(Math.ceil(rest/speeds[i]))
    }
    return temp;
}
