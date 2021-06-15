function solution(new_id) {
    let newID ="";
    let regEx =/[^a-z0-9-_\.]/g;     //숫자,소문자,-_.제외한 문자열 거르기위한 정규식
    let regEx1 = /\.{2,}/g;          //. 2번이상 거르기 위한 정규식
    newID = new_id.toLowerCase()        //1단계처리 
                  .replace(regEx,"")    //2단계처리
                  .replace(regEx1,"."); //3단계처리
    if(newID.indexOf(".")===0){         //4단계처리
        newID=newID.substr(1)
    }
    if(!newID){                         //5단계처리
        newID+="a"
    }
    if(newID.length>15){                     //6단계처리
        newID=newID.substr(0,15);
    }
    if(newID.lastIndexOf(".")===newID.length-1){ //6단계처리
        newID=newID.substr(0,newID.length-1)
    }
    if(newID.length<3){                     //7단계처리
        for(let i=newID.length;i<3;i++){
            newID+=newID[newID.length-1];
        }
    }
    return newID;
}