function greet(name){
    return `안녕하세요 ${name} 님 반갑습니다`;
}

function addTodo(list , title){
    const newTodo = {id : list.length + 1 , title: title, done:false}
    list.push(newTodo);

}

function countDone(list){
    let count = 0;
    for(const todo of list) {
        if(todo.done === true){
            count++;
        }
    }
    return `${list.length}개 중 ${count} 개 완료 `;
}

const todos = [{id : 1, title: "공부하기", done:true},
    {id : 2, title: "운동하기", done:false},
    {id : 3, title: "산책하기", done:true}
    ];

addTodo(todos, "오버쿡 하기");

for(const todo of todos){
    const mark = todo.done ? "수행했습니다" : "수행하지 않았습니다"
    console.log(`회원 아이디는 : ${todo.id} , 해야할 일은 ${todo.title}, ${mark}`);
}

for(const todo of todos){
    const mark = todo.done ? "✅" : "⬜";
    console.log(`[${mark}]${todo.title}`);
}
console.log(countDone(todos));
console.log(greet("강병찬"));