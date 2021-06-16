function solution(n, lost, reserve) {
    let answer = n-lost.length;
    //잃어버린사람이 여벌체육복 가져왔으면 본인이 입어야하므로 필터링
    //그리고 오름차순 학생정렬
    let newReserve=reserve.filter(itm=>!lost.includes(itm))
                          .sort((a,b)=>a-b);
    let newLost =lost.filter(itm=>!reserve.includes(itm))
                      .sort((a,b)=>a-b);  
    //수업참가인원 +
    answer +=(reserve.length-newReserve.length);
    //잃어버린애 빌려줄사람 찾기
    for(let i=0;i<newLost.length;i++){
        if(findBorrowPeople(newLost[i],newReserve).result){
            answer++;
        }
    }

    
    return answer;
}
//잃어버린애 빌려줄사람 찾기
const findBorrowPeople =(me,others) =>{
    let result =false;
    if(others.indexOf(me-1)>-1){
        result=true;
        others.splice(others.indexOf(me-1),1);
        return {result,others};
    }
    if(others.indexOf(me+1)>-1){
        result=true;
        others.splice(others.indexOf(me+1),1);
        return {result,others};
    }
    
    return false;
    
}
