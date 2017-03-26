import React from 'react';
import Photo from './Photo';
import Comments from './Comments'

export default class Single extends React.Component {
    constructor() {
        super()
    }

    render() {
        // index of the post
        const index = this.props.posts.findIndex((post) => post.code == this.props.params.postId);
        const post = this.props.posts[index];
        // console.log(post)
        return (
            <div className="single-photo">
                <Photo index={index} post={post} {...this.props} />
                <Comments />
            </div>
        )
    }
}