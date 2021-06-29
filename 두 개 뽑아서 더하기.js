function solution(numbers) {
    let answer = [];
    
    for(let i=0;i<numbers.length-1;i++){
        for(let j=i+1;j<numbers.length;j++){
            answer.push(numbers[i]+numbers[j]);        
        }
    }
    let temp= answer.reduce((unique,item)=>unique.includes(item) ? unique : [...unique, item], [])
                    .sort((a,b)=>a-b)
    return temp;
}
