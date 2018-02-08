import React from 'react';

export default class Container extends React.Component {
    render(){
        const cls =`container${this.props.fluid? '-fluid':''} ${this.props.className || ''}`;
        return (
            // style needs one pair of curly brackets here so that 'this' is valid
            <div className={cls} style={this.props.style}>
                {this.props.children}
            </div>
        )
    }
}
