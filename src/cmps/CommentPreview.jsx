
import  profile from '../assets/img/profile.jpg'

export function CommentPreview({ comment }) {

var image =  comment.img ? comment.img : profile
    return (
        <article>
            <img src={image} alt="" />
            {/* <img src="https://www.gravatar.com/avatar/1c4b42e25d8b07d82a1299e9d8e3e194" alt="User Avatar"/> */}
            <div>
                <h4>{comment.email}</h4>
                <h4>{comment.message}</h4>
            </div>
        </article>
    )
}
