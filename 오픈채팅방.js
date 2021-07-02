function solution(records) {
    let answer = [];
    let textTrans = {Enter:"들어왔습니다.",Leave:"나갔습니다."}
    let ids = [];
    let nicknames =[];
    let actions =[];
    
    for(let record of records ){
        let what = record.split(" ")[0];
        let id   = record.split(" ")[1];
        let nickname = record.split(" ")[2];
            if(what==="Leave")  {
                actions.push(what);
                ids.push(id);
                nicknames.push(nicknames[ids.indexOf(id)]);
            }
             if(what==="Enter")   {
                actions.push(what);
                ids.push(id);
                if(ids.indexOf(id)>-1){
                     nicknameChng(nickname,nicknames,ids,id);
                }
                else{
                      nicknames.push(nickname);
                }
            }
           if(what==="Change") nicknameChng(nickname,nicknames,ids,id);
        
    }
    for(let i=0;i<actions.length;i++){
        answer.push(`${nicknames[i]}님이 ${textTrans[actions[i]]}`);
    }
    return answer;
}
const nicknameChng =(nickname,nicknames,ids,id) =>{
    for(let i=0;i<ids.length;i++){
        if(ids[i]===id)nicknames[i]=nickname;
    }
    return nicknames;
}
