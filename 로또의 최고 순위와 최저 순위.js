function solution(lottos, win_nums) {
    
    let newLottos =lottos.filter(itm =>!win_nums.includes(itm));//당첨된 번호 걸르기
    let win ={0:6,1:6,2:5,3:4,4:3,5:2,6:1};  //0,1개맞추면 6등 ~6개맞추면 1등 개수에서 등수 대치할 객체
    let min =lottos.length-newLottos.length?lottos.length-newLottos.length:0; //원래개수에서 맞춘번호 뺀거만 맞추는게 최소등수
    
    let max = min; //max초기화
    let zeroCnt =lottos.filter(itm =>itm===0).length; //내번호에서 0개수 카운딩
     
    max+=zeroCnt;//min에서 0개수만큼 더맞추면 등수올라감
    
    return [win[`${max}`],win[`${min}`]];
}
