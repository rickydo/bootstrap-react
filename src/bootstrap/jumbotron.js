import React from 'react';
import {classify} from './utils';
import Container from "./container";
// import './jumbotron.scss'

export default class Jumbotron extends React.Component {
    render(){
        const CSS_NAME = 'jumbotron';
        // assign into this object all the properties that are enumerable 
        // inside of this.props
        const props = Object.assign({}, this.props);
                props.className = classify(CSS_NAME, props.className);
        const containerFluid = props.containerFluid;

        // we can't delete the var containerFluid itself because it's constant
        // but we can delete the props 
        delete props.containerFluid;
        
        const body = props.className.includes(CSS_NAME + '-fluid') ? 
        <Container fluid={containerFluid}>
            {/* no content is actually displayed without the bottom line */}
            {this.props.children}
        </Container> : this.props.children; 

        return (
            <div {...props}>
                {/* style here needs two pairs of curly brackets */}
                {body}
            </div>
        )
    }
}