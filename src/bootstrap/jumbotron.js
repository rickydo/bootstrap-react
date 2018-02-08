import React from 'react';
import {classify} from './utils';
import Container from "./container";

export default class Jumbotron extends React.Component {
    render(){
        return (
            <div {...this.props} className={classify('jumbotron', this.props.className)} >
                {/* style here needs two pairs of curly brackets */}
                <Container>
                    {/* no content is actually displayed without the bottom line */}
                    {this.props.children}
                </Container>
            </div>
        )
    }
}