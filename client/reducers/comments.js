function postComments(state = [], action) {
    switch(action.type) {
        case "ADD_COMMENT":
            // return the state with the new comment
            return [
                ...state,
                {
                    user: action.author,
                    text: action.comment
                }
            ];
        case "DELETE_COMMENT":
            return [
                ...state.slice(0,action.index),
                ...state.slice(action.index + 1)
            ]
        default :
            return state;
    }
    return state;
}
function comments(state = [], action) {
    if(typeof action.type !== 'undefined') {
        return {
            // take the current state
            ...state,
            // overwrite this post qith a new one
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}


 export default comments;