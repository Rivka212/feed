import { httpService } from '../http.service.js'

const BASE_URL = 'comment/'

export const commentService = {
    query,
    getById,
    save,
    remove,
    getEmptyComment,

}

function query(filterBy = {}) {
    return httpService.get(BASE_URL, filterBy)
}

function getById(commentId) {
    return httpService.get(BASE_URL + commentId)
}

function remove(commentId) {
    return httpService.delete(BASE_URL + commentId)
}

function save(comment) {
    if (comment._id) {
        return httpService.put(BASE_URL, comment)
    } else {
        return httpService.post(BASE_URL, comment)
    }
}

function getEmptyComment() {
    return {
        email: '',
        message: '',
    }
}


