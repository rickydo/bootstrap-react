import React from 'react';

export default class Button extends React.Component {
    // add btn to classes
    classify(key, value){
        if(value[0]==='-') value = key+value;

        // use string literals
        value = value.split(' -').join(` ${key}-`)
        return `${key} ${value}`;
    }

    render() {
        // uppercase Tag for dynamic, has to be uppercase
        const Tag = this.props.href? 'a':'button';
        const className = this.classify('btn', this.props.className);
        
        return (
            // <a className={this.props.className} href={this.props.href} target={this.props.target}>My Website</a>
            // can refactor to use below
            // {...this.props} = Spread parameter

            <Tag {...this.props} className={className}> My Website </Tag>
        )
    }
}