function solution(s){
    s=s.toLowerCase().split("");
    let pCnt = s.filter(itm=>itm==="p").length;
    let yCnt = s.filter(itm=>itm==="y").length;
    
    return pCnt===yCnt?true:false;
}
