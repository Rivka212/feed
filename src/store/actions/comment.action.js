import { commentService } from '../../services/comment/comment.service.local.js'
import { ADD_COMMENT, REMOVE_COMMENT, SET_COMMENT, SET_COMMENTS } from '../reducers/comment.reducer.js'
import { store } from '../store.js'

export async function loadComments(filterBy = {}) {
    try {
        const comments = await commentService.query(filterBy)
        store.dispatch(getCmdSetComments(comments))
        // return comments
    } catch (err) {
        console.log('Cannot load comments', err)
        throw err
    }
}

export async function loadComment() {
    try {
        const comment = await commentService.getById(commentId)
        store.dispatch(getCmdSetComment(comment))
    } catch (err) {
        console.log('Cannot load comment', err)
        throw err
    }
}

export async function removeComment(commentId) {
    try {
        const comment = await commentService.remove(commentId)
        store.dispatch(getCmdRemoveComment(comment))
    } catch (err) {
        console.log('Cannot remove comment', err)
        throw err
    }
}

export async function addComment(comment) {    
    try {
        const savedComment = await commentService.save(comment)
        store.dispatch(getCmdAddComment(savedComment))
        return savedComment
    } catch (err) {
        console.log('Cannot add comment', err)
        throw err
    }
}

// Command Creators:
function getCmdSetComments(comments) {
    return {
        type: SET_COMMENTS,
        comments
    }
}
function getCmdSetComment(comment) {
    return {
        type: SET_COMMENT,
        comment
    }
}
function getCmdRemoveComment(commentId) {
    return {
        type: REMOVE_COMMENT,
        commentId
    }
}
function getCmdAddComment(comment) {
    return {
        type: ADD_COMMENT,
        comment
    }
}