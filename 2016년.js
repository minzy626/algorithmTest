function solution(a, b) {
    let answer = '';
    let months =[31,29,31,30,31,30,31,31,30,31,30,31];
    let day={1:"FRI",2:"SAT",3:"SUN",4:"MON",5:"TUE",6:"WED",0:"THU"}
    let days=b;
    for(let i=0;i<a-1;i++){
        days+=months[i]
    }
    answer=day[`${days%7}`]
    return answer;
}
