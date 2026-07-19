/* cosnt 로 본인 이름을 , let 으로 나이를 답고 console.log로 
 각각 출력하세요  */

const name = "강병찬";
let age = 27;
console.log(`나의 이름은 ${name}이고 나이는 ${age}입니다.`);


/*  2. 과제 1의 나이 변수에 1을 더해서 다시 출력 */
age += 1;
console.log(`한살 더 먹은 제 나이는 ${age} 입니다.`);

/* if 를 써서 나이가 20 이상이면 "성인" 아니면 " 미성년자 " 를 출력하세요 */
if(age >= 20){
    console.log("성인");
}else{
    console.log("미성년자");
}

/*for 반복문으로 1,2,3..10까지 출력하세요 */
for(let i = 1; i <= 10; i ++){
    console.log(i);
}

/* 1부터 10까지 중 짝수만 출력하세요  */
for(let i =1; i <= 10; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}
