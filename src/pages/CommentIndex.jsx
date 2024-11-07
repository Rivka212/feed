import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

// import { CommentDetails } from './CommentDetails.jsx'
import { CommentList } from '../cmps/CommentList.jsx'
import { CommentFilter } from '../cmps/CommentFilter.jsx'
import { CommentAdd } from '../cmps/CommentAdd.jsx'
import { loadComments, removeComment, addComment } from '../store/actions/comment.action.js'
import { commentService } from '../services/comment/comment.service.js'


export function CommentIndex() {
    const [filterBy, setFilterBy] = useState({ message: '', email: '' });

    const comments = useSelector(storeState => storeState.commentModule.comments)
    const currentComment = comments.length > 0 ? comments[comments.length - 1] : null;

    useEffect(() => {
        loadComments(filterBy)
    }, [filterBy])


    async function onRemoveComment(commentId) {
        try {
            await removeComment(commentId)
        } catch (err) {
            console.log('Cannot remove comment')
        }
    }

    async function onAddComment(comment) {
        try {
            const savedComment = await addComment(comment)
            console.log(`Comment added (id: ${savedComment._id})`)
        } catch (err) {
            console.log('Cannot add Comment')
        }
    }


    function onSetFilterBy(newFilter) {
        console.log(newFilter);

        setFilterBy({ ...newFilter })
    }

    return (
        <section className="main-container">
            {/* {currentComment && <CommentDetails comment={currentComment} />} */}
            <CommentAdd onAddComment={onAddComment} />
            <div>
                <CommentFilter filterBy={filterBy} onFilterBy={onSetFilterBy} />
                <CommentList comments={comments} onRemoveComment={onRemoveComment} />
            </div>
        </section>
    )



}