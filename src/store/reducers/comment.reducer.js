export const SET_COMMENTS = 'SET_COMMENTS'
export const SET_COMMENT = 'SET_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'

const initialState = {
    comments: [],
    comment: null,
}

export function commentReducer(state = initialState, action) {
    var newState = state
    var comments

    switch (action.type) {
        case SET_COMMENTS:
            newState = { ...state, comments: action.comments }
            break
        case SET_COMMENT:
            newState = { ...state, comment: action.comment }
            break
        case REMOVE_COMMENT:
            const lastRemovedBook = state.comments.find(comment => comment._id === action.commentId)
            comments = state.comments.filter(comment => comment._id !== action.commentId)
            newState = { ...state, comments, lastRemovedBook }
            break
        case ADD_COMMENT:
            newState = { ...state, comments: [...state.comments, action.comment] }
            break
        default:
    }
    return newState
}