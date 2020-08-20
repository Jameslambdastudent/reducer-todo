export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        },
      
    ]
}

export function reducer(state, action){
    switch(action.type){
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case "TOGGLE_COMPLETE":
            return {
                ...state,
                todos: state.todos.map(todo=>{
                    if(todo.id === action.payload.id){
                        return {...todo, completed: !todo.completed}
                    }else return todo;
                })
            }
        case "CLEAR_COMPLETED":
                return {
                    ...state,
                    todos: state.todos.filter(todo=>{
                        return todo.completed === false;
                    })
                }
        default: return state;
    }
}