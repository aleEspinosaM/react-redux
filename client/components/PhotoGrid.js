import React from 'react';
import Photo from './Photo';

export default class PhotoGrid extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="photo-grid">
                {this.props.posts.map((post, index) => <Photo {...this.props} key={index} index={index} post={post}/>)}
            </div>
        )
    }
}