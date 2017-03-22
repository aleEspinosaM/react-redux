import React from 'react';
import {Link} from 'react-router';

export default class Main extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <h1>
                    <Link to="/"> ReduxPunk </Link>
                    {/*what is going to do es take al the props and pass to its children*/}
                </h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
}