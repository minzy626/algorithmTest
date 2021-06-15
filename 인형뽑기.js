function solution(board, moves) {
    let answer = 0;
    let dolls =[];
    let temp ={};
    //인형뽑기실행
    for(let i=0;i<moves.length;i++){
        let target =moves[i]-1;//인덱스라서
        temp =findDoll(target,board);
        temp.doll!==0?dolls.push(temp.doll):null; 
    }
    //뽑은 인형중에 터트리구 남은 배열 반환
    //뽑아놓은 개수에서 터트리고 남은개수 뱨면 터진인형개수
    answer =dolls.length-boom(dolls).length;

    return answer;
}
//인형뽑기
const findDoll =(target,boards)=>{
    let doll =0;
    for(let board of boards){
        if(board[target]!==0){
            doll= board[target];
            board[target]=0;
            return {doll,boards}
        }
    }
    return {doll,boards};
}

const boom = (dolls) => {
    for(let i=0;i<dolls.length-1;i++){
        if(dolls[i]===dolls[i+1]){
            dolls.splice(i,2);
            boom(dolls);
        }
    }
    return dolls;
}