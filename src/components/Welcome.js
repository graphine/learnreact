import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        const {name, heroName} = this.props;
        return <h1>Hello again {name} as {heroName}</h1>
    }
}
export default Welcome;