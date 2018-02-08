import React from 'react';

export default class Button extends React.Component {
    render() {
        // uppercase Tag for dynamic, has to be uppercase
        const Tag = this.props.href? 'a':'button';
        const className = 'btn ' + this.props.className;
        
        return (
            // <a className={this.props.className} href={this.props.href} target={this.props.target}>My Website</a>
            // can refactor to use below
            // {...this.props} = Spread parameter

            <Tag {...this.props} className={className}> My Website </Tag>
        )
    }
}