import React from 'react';

export default class Button extends React.Component {
    render() {
        return (
            // <a className={this.props.className} href={this.props.href} target={this.props.target}>My Website</a>
            // can refactor to use below
            <a {...this.props}> My Website </a>
        )
    }
}