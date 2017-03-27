import React from 'react';
import Photo from './Photo';
import Comments from './Comments'

export default class Single extends React.Component {
    constructor() {
        super()
    }

    render() {
        const {postId} = this.props.params
        // index of the post
        const index = this.props.posts.findIndex((post) => post.code == postId);
        const post = this.props.posts[index];
        const postComments = this.props.comments[postId] || []
        // console.log(post)
        return (
            <div className="single-photo">
                <Photo index={index} post={post} {...this.props} />
                <Comments postComments={postComments} {...this.props}/>
            </div>
        )
    }
}