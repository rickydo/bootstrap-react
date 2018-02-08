import React from 'react';
import {classify} from './utils';

export default class Jumbotron extends React.Component {
    render(){
        return (
            <div {...this.props} className={classify('jumbotron', this.props.className)} >
                {/* no content is actually displayed without the bottom line */}
                {this.props.children}
            </div>
        )
    }
}