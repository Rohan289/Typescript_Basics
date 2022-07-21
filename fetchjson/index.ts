import axios from 'axios';

interface Todo {
  id: String;
  title: String;
  completed: boolean;
}

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((res) => {
  const todo = res.data as Todo;
  const { id, title, completed } = todo;
  logTodo(id,title,completed);
});

const logTodo = (id :String,title : String,completed:boolean) => {
  console.log(`
  the todo with id : ${id} has a title of ${title}. Is it finished? ${completed}
  `);
}