function solution(numbers, hand) {
    let answer = '';
    let Lnow=[3,0];
    let Rnow=[3,2];
    for(let i=0; i<numbers.length;i++){
        let temp = touchKeyDown(numbers[i],hand,Lnow,Rnow);
        answer +=temp.result;
        Lnow=temp.Lnow;
        Rnow=temp.Rnow;
        
    }
    return answer;
}
    
const touchKeyDown =(target,hand,Lnow,Rnow)=>{
    let result ='';
    if(target===1||target===4||target===7){
        result='L';
        Lnow=[Math.floor(target/3),0];
        return {result,Lnow,Rnow}
    }else if(target===3||target===6||target===9){
        result='R';
        Rnow=[Math.floor(target/3)-1,2];
        return{ result,Lnow,Rnow}
    }else{
        if(target===0)target =10;
        let targetFloor =[Math.floor(target/3),1];
        let diffL =Math.abs(targetFloor[0]-Lnow[0])+Math.abs(targetFloor[1]-Lnow[1]);
        let diffR =Math.abs(targetFloor[0]-Rnow[0])+Math.abs(targetFloor[1]-Rnow[1]);
        
        if(diffL>diffR){
            result='R';
            Rnow=targetFloor;
        }else if(diffL<diffR){
            result='L';
            Lnow=targetFloor;
        }else{
            result=hand.substr(0,1).toUpperCase();
            if(hand.substr(0,1).toUpperCase()==="R"){
                 Rnow=targetFloor;
            }else{
                 Lnow=targetFloor;
            }
            
        }
        return {result,Lnow,Rnow}
    }
}
