import { storageService } from '../async-storage.service.js'
import { makeId, saveToStorage, loadFromStorage } from '../util.service.js'

const STORAGE_KEY = 'commentDB'
let comments = _createComments()

export const commentService = {
    query,
    getById,
    remove,
    save,
    getEmptyComment,
}

window.cs = commentService

async function query(filterBy = {}) {
    var comments = await storageService.query(STORAGE_KEY)

    if (filterBy.message) {
        const regExp = new RegExp(filterBy.message, 'i')
        comments = comments.filter(comment => regExp.test(comment.message))
    }
    if (filterBy.email) {
        comments = comments.filter(comment => comment.message === filterBy.email)
    }
    return comments
}


function getById(commentId) {
    return storageService.get(STORAGE_KEY, commentId)
}

async function remove(commentId) {
    await storageService.remove(STORAGE_KEY, commentId)
}


async function save(comment) {
    comment = await storageService.post(STORAGE_KEY, comment)
    return comment
}

function getEmptyComment() {
    return {
        email: '',
        message: '',
    }
}

function _createComments() {
    var comments = loadFromStorage(STORAGE_KEY)
    if (!comments || comments.length === 0) {
        comments = [
            {
                id: 1,
                user: 'dudi',
                message: "Hey, what's up?",
                email: "dudi@example.com",
                img: "https://en.gravatar.com/avatar/1"
            },
            {
                id: 2,
                user: 'sara',
                message: "All good!",
                email: "sara@example.com",
                img: "https://en.gravatar.com/avatar/2"
            },
            {
                id: 3,
                user: 'john',
                message: "What's going on?",
                email: "john@example.com",
                img: "https://en.gravatar.com/avatar/3"
            },
            {
                id: 4,
                user: 'mike',
                message: "Happy week!",
                email: "mike@example.com",
                img: "https://en.gravatar.com/avatar/4"
            },
            {
                id: 5,
                user: 'lisa',
                message: "Everything okay?",
                email: "lisa@example.com",
                img: "https://en.gravatar.com/avatar/5"
            }
        ]
        saveToStorage(STORAGE_KEY, comments)
    }
    return comments
}
