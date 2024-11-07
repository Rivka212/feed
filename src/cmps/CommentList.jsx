import { CommentPreview } from './CommentPreview.jsx'

export function CommentList({ comments, onRemoveComment }) {

    return (
        <ul className="comment-list">
            {comments.map(comment => (
                <li className="comment-preview" key={comment.id}>
                    <CommentPreview comment={comment} />
                </li>
            )
            )}
        </ul>
    )
}