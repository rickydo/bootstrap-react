import React from 'react';
import {classify} from './utils';
import Container from "./container";

export default class Jumbotron extends React.Component {
    render(){
        // assign into this object all the properties that are enumerable 
        // inside of this.props
        const props = Object.assign({}, this.props);
        const containerFluid = props.containerFluid;

        // we can't delete the var containerFluid itself because it's constant
        // but we can delete the props 
        delete props.containerFluid;

        return (
            <div {...props} className={classify('jumbotron', props.className)} >
                {/* style here needs two pairs of curly brackets */}
                <Container fluid={containerFluid}>
                    {/* no content is actually displayed without the bottom line */}
                    {this.props.children}
                </Container>
            </div>
        )
    }
}