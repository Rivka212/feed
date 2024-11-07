import { useState, useEffect } from 'react'
import { commentService } from '../services/comment/comment.service'

export function CommentAdd({ onAddComment }) {
    const [commentToAdd, setCommentToAdd] = useState(commentService.getEmptyComment())

    function handleChange(ev) {
        const type = ev.target.type
        const field = ev.target.name
        let value

        switch (type) {
            case 'text':
            case 'email':
                value = ev.target.value || ''
                break
        }
        setCommentToAdd((prevComment) => ({ ...prevComment, [field]: value }));
    }

    function handleSubmit(ev) {
        ev.preventDefault()
        onAddComment(commentToAdd)
        setCommentToAdd(commentService.getEmptyComment())
    }

    return <section className="comment-add">
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                name="email"
                value={commentToAdd.email}
                placeholder="Email"
                onChange={handleChange}
                required
            />

            <input
                type="text"
                name="message"
                value={commentToAdd.message}
                placeholder="Massage"
                onChange={handleChange}
                required
            />

            <button type="submit" className="btn-add">SUBMIT</button>
        </form>
    </section>
}