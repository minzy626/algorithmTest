function solution(nums) {
    let answer = 0;
    let staticNum = 0;
    let sums =[]; //3수의 합 모임 배열
    for(let i=0;i<nums.length;i++){
        staticNum=nums.shift();
        threeNumSum(staticNum,nums,sums);
    }
    console.log(sums)
    for(let i=0;i<sums.length;i++){
        if(checkNum(sums[i]))answer+=1;
    }
    return answer;
}

const threeNumSum =(staticNum,nums,sums)=>{
     for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            sums.push(staticNum+nums[i]+nums[j]);
        }
    }
    return sums;
}

const checkNum =(num)=>{
    for(let i=2;i<num;i++){
        if(num%i===0) return false; //i로 나눴을때 나머지 0인게 있으면 소수아님여
    }
    return true;    
}
