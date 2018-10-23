import { ADD_TODO, TOGGLE_TODO } from '../actions';

const initialState = 
{
    todos: 
    [
        {
            id: 0,
            value: 'Walk the dog.',
            completed: false
        }
    ]
}

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state,
                    todos: [...state.todos, {id: state.id + 1, value: action.payload, completed: false}]
                   }
        case TOGGLE_TODO:
            return state.map(todo => 
                (todo.completed === true)
                    ? [...todo, { completed: !todo.completed} ]
                    : todo
                )
        default:
            return state;
    }
}

export default todos;