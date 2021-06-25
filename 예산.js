function solution(d, budget) {
    let answer = 0;
    let dSum=d.sort((a,b)=> a-b).reduce((pre,cur)=> pre+cur);//d 솔팅해놓고 합구하기
    for(let i=d.length-1;i>=0;i--){
        if(budget<d[0]) return 0;
        if(dSum>budget){
            d=d.splice(0,i)
            dSum =findMax(d)
        }else{
            return d.length;
        }
    }
}

const findMax =(dept)=>{
    return dept.reduce((pre,cur)=> pre+cur);
}
