function solution(nums) {
    let answer = (nums.length)/2;
    let duflcheck =nums.filter((item, index,array) => array.indexOf(item) === index)
                        .length;

    
    return answer<=duflcheck?answer:duflcheck;
}
