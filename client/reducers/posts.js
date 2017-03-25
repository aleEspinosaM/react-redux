// a reducers takes 2 things
// 1 the action
// 2 the copy of the current state

 
function posts(state = [], action) {
    // do no mutate state use a pure function
    switch(action.type) {
        case 'INCREMENT_LIKES' :  
        // return updated state
        return [
            ...state.slice(0,action.index), //before the one we are updating
            {...state[action.index], likes: state[action.index].likes + 1},
            ...state.slice(action.index + 1)
        ]

        // the reason we return a default value is because all reducers run for everysingle one
        default :
            return state;
    }
}


 export default posts;