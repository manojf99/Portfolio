export const ADD_TODO = 'ADD_TODO';



export const addTodo = (todo ,id) => ({
    type: ADD_TODO,
    payload: todo,id,
  });
  